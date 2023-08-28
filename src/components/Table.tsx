import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  Cell,
} from "react-table";
import { useExportData } from "react-table-plugins";
import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { getExportFileBlob } from "../utils/helpers/exportFile";
import { VariantData } from "../utils/types";
import { ERROR, TABLE_PAGE_SIZE } from "../utils/constants";
import CSVUpload from "./CSVUpload";
import * as Icon from "../assets/icons/index";
import { getPredictions } from "../utils/service";
import Loader from "./Loader";
import { parseData } from "../utils/helpers/parseData";
import CSVInstructions from "./CSVInstructions";

const RESULT_COLUMN_DATA = [
  {
    Header: "Position",
    accessor: "nextprotPosition",
  },
  {
    Header: "Original",
    accessor: "originalAminoAcid",
  },
  {
    Header: "Variant",
    accessor: "variantAminoAcid",
  },
  {
    Header: "Sift",
    accessor: "sift",
  },
  {
    Header: "Sift Prediction",
    accessor: "siftPrediction",
  },
  {
    Header: "Polyphen",
    accessor: "polyphen",
  },
  {
    Header: "Polyphen Prediction",
    accessor: "polyphenPrediction",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

type TableProps = {
  predictionLoading: boolean;
  setPredictionLoading: (predictionLoading: boolean) => void;
  data: VariantData[];
  setData: (data: VariantData[]) => void;
  error: string | undefined;
  setError: (error: string) => void;
  isoName: string | undefined;
  fv: any;
};

const Table = (props: TableProps) => {
  const {
    predictionLoading,
    setPredictionLoading,
    data,
    setData,
    error,
    setError,
    isoName,
    fv,
  } = props;

  const MAX_VARIANTS = 200;

  let dataLimitExceeded = false;

  const getTagClassname = (errorRow: boolean, rowHeader: any) => {
    if (rowHeader === "Status") {
      return errorRow ? "error-tag tag" : "ok-tag tag";
    }
    return "";
  };

  const getBackgroundColor = (
    index: string,
    cellId: string,
    errorRow: boolean,
    getColumnColor: boolean,
  ) => {
    if (errorRow) return "#fff6e8";

    if (getColumnColor) {
      const POLYPHEN_PREDICTION = {
        BENIGN: "benign",
        POSSIBLY_DAMAGING: "possibly_damaging",
        PROBABLY_DAMAGING: "probably_damaging",
      };

      const SIFT_PREDICTION = {
        DELETERIOUS: "deleterious",
        TOLERATED: "tolerated",
      };

      const idx = Number(index);
      const value =
        cellId === "polyphenPrediction"
          ? data[idx].polyphenPrediction!
          : data[idx].siftPrediction!;

      if (!value) return "#ffffff";
      if (value === POLYPHEN_PREDICTION.POSSIBLY_DAMAGING) return "#ffba5f";
      else if (
        value === POLYPHEN_PREDICTION.PROBABLY_DAMAGING ||
        value === SIFT_PREDICTION.DELETERIOUS
      )
        return "#e56565";
      else if (
        value === POLYPHEN_PREDICTION.BENIGN ||
        SIFT_PREDICTION.TOLERATED
      )
        return "#85cc64";
    }

    return "#ffffff";
  };

  const getCellContent = (cell: Cell<VariantData, any>) => {
    return cell.render("Cell");
  };

  const callGetPredictions = async (csvData: VariantData[]) => {
    const data = {
      version: vepVersion,
      isoform: isoName,
      variants: csvData,
    };

    // Check if the limit of 200 variants (maximum supported by VEP API) is exceeded
    if (csvData.length > MAX_VARIANTS) {
      data.variants = data.variants.slice(0, 199);
      dataLimitExceeded = true;
    }

    setPredictionLoading(true);
    await getPredictions(data).then((res) => {
      if (Array.isArray(res) && res.length) {
        const { parsedData } = parseData(res);
        if (parsedData.length < data.variants.length) {
          setError(ERROR.PARTIAL_RESULTS);
        } else if (dataLimitExceeded) {
          setError(ERROR.LIMIT_EXCEEDED);
        } else {
          setError("");
        }

        setData(parsedData);
        setPredictionLoading(false);
        return;
      }
      setError(ERROR.NO_RESULTS);
      setPredictionLoading(false);
    });
  };

  const columns = useMemo(() => RESULT_COLUMN_DATA, []);

  const getExportFileName = () => {
    return isoName;
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    exportData,
  } = useTable(
    {
      //@ts-ignore
      columns,
      data,
      getExportFileBlob,
      getExportFileName,
      initialState: { pageIndex: 0, pageSize: TABLE_PAGE_SIZE },
    },
    useGlobalFilter,
    useSortBy,
    useExportData,
    usePagination,
  );

  const [vepVersion, setVepVersion] = useState("107");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVepVersion(event.target.value);
  };

  return (
    <div className="variant-table-container">
      {error && (
        <div className="error-message">
          <img src={Icon.Error} alt="Error" />
          <p>{error}</p>
        </div>
      )}
      <div className="table-header">
        <CSVUpload callGetPredictions={callGetPredictions} />
        <div style={{ marginLeft: "auto" }}>
          <div
            style={{
              display: "inline",
              paddingRight: "15px",
              verticalAlign: "middle",
            }}
          >
            <span style={{ paddingRight: "10px" }}>Ensembl VEP Version</span>
            <select value={vepVersion} onChange={handleSelectChange}>
              <option value="107">107</option>
              <option value="109">109</option>
            </select>
          </div>
          <button
            className="btn get-predictions-btn"
            onClick={() => {
              let data = fv.getPredictions();
              callGetPredictions(data);
            }}
          >
            Get Predictions
          </button>
          <button
            className="btn"
            onClick={() => {
              exportData("csv", true);
            }}
          >
            Export All as CSV
          </button>
        </div>
      </div>
      <CSVInstructions />
      <table {...getTableProps()} className="variant-data-table">
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={uuidv4()}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <img
                              src={Icon.DownArrow}
                              className="icon"
                              alt="Down arrow icon"
                            />
                          ) : (
                            <img
                              src={Icon.UpArrow}
                              className="icon"
                              alt="Down arrow icon"
                            />
                          )
                        ) : (
                          <img
                            src={Icon.Sort}
                            className="icon"
                            alt="Down arrow icon"
                          />
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const errorRow = row.values.status === "ERROR";
            return (
              <tr {...row.getRowProps()} key={uuidv4()}>
                {row.cells.map((cell) => {
                  const getColumnColor =
                    cell.column.id === "polyphenPrediction" ||
                    cell.column.id === "siftPrediction";
                  return (
                    <td
                      style={{
                        backgroundColor: getBackgroundColor(
                          cell.row.id,
                          cell.column.id,
                          errorRow,
                          getColumnColor,
                        ),
                      }}
                      {...cell.getCellProps()}
                      key={uuidv4()}
                    >
                      <p
                        className={getTagClassname(
                          errorRow,
                          cell.column.Header,
                        )}
                      >
                        {getCellContent(cell)}
                      </p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {predictionLoading && (
        <>
          <p className="table-text">
            <i>Fetching predictions...</i>
          </p>
          <Loader />
        </>
      )}
      {data.length === 0 && !predictionLoading ? (
        <p className="table-text">
          <i>
            No records added. Add variants and click on get predictions to get
            results
          </i>
          .
        </p>
      ) : (
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1 || 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Table;
