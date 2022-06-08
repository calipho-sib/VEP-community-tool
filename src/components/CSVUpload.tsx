import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import { VariantData } from "../utils/types";

type Props = {
  callGetPredictions: (data: VariantData[]) => void;
};

type FileInfo = {
  name: string;
  size: number;
  type: string;
};

const header = "nextprotPosition,originalAminoAcid,variantAminoAcid\r\n";

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header: string) => {
    return header.replace(/\W/g, "-");
  },
  beforeFirstChunk(chunk: string): string | void {
    if (!chunk.startsWith("nextprotPosition")) {
      chunk = header.concat(chunk);
      return chunk;
    }
  },
};

const CSVUpload = ({ callGetPredictions }: Props) => {
  const [fileName, setFileName] = useState("");

  const handleForce = (data: VariantData[], fileInfo: FileInfo) => {
    callGetPredictions(data);
    setFileName(fileInfo.name);
  };

  return (
    <div className="csv-button-container">
      <div className="csv-button">
        <button className="btn">Upload CSV and Get Predictions</button>
        {fileName && <p>{fileName}</p>}
      </div>
      <CSVReader
        cssClass="csv-reader-input"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
        cssInputClass="csv-input"
      />
    </div>
  );
};

export default CSVUpload;
