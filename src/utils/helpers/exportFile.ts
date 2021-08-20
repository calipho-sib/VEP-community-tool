import Papa from "papaparse";

type FileProps = {
  columns: any;
  data: any;
  fileType: string;
};

export function getExportFileBlob(props: FileProps) {
  const { columns, data, fileType } = props;

  if (fileType === "csv") {
    const headerNames = columns.map((col: any) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  }
}
