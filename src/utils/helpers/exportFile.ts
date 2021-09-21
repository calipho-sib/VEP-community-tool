import Papa from "papaparse";

type FileProps = {
  columns: any;
  data: Array<Array<[any, number, string, string, number, number]>>;
  fileType: string;
};

export function getExportFileBlob(props: FileProps) {
  let { columns, data, fileType } = props;

  if (fileType === "csv") {
    const headerNames = columns.map((col: any) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  }
}
