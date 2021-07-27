import {
  useTable,
  useAsyncDebounce,
  usePagination,
  useGlobalFilter,
  ColumnInstance,
} from "react-table";
import { useExportData } from "react-table-plugins";
import { useState, useMemo } from "react";

import { getExportFileBlob } from "../utils/exportFile";
import { VariantData } from "../utils/types";
import { TABLE_PAGE_SIZE } from "../utils/constants";

const RESULT_COLUMN_DATA = [
  {
    Header: "S. No.",
    accessor: "id",
    Cell: (row: any) => {
      return <div>{Number(row.row.id) + 1}</div>;
    },
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "Original",
    accessor: "original",
  },
  {
    Header: "Variant",
    accessor: "variant",
  },
  {
    Header: "sift",
    accessor: "sift",
  },
  {
    Header: "polyphen",
    accessor: "polyphen",
  },
];

type TableProps = {
  data: VariantData[];
};

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count =
    preGlobalFilteredRows.length > 0 ? preGlobalFilteredRows.length : 0;

  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <input
      className="search-input"
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const Table = (props: TableProps) => {
  const { data } = props;

  const columns = useMemo(() => RESULT_COLUMN_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    preGlobalFilteredRows,
    setGlobalFilter,
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
      //@ts-ignore
      initialState: { pageIndex: 0, pageSize: TABLE_PAGE_SIZE },
    },
    useGlobalFilter,
    usePagination,
    useExportData
  );

  return (
    <div className="variant-table-container">
      <div className="table-header">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <button
          className="export-btn"
          onClick={() => {
            exportData("csv", true);
          }}
        >
          Export All as CSV
        </button>
      </div>
      <table {...getTableProps()} className="variant-data-table">
        <thead>
          {headerGroups.map((headerGroup: any) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: ColumnInstance) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {data.length === 0 ? (
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
