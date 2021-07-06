import Papa from "papaparse";

export function getExportFileBlob({ columns, data, fileType, fileName }: any) {
  if (fileType === "csv") {
    const headerNames = columns.map((col: any) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  }
}
