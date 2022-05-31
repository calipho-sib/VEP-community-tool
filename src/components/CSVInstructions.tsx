import React from "react";

const CSVInstructions = () => {
  return (
    <div className="instructions-container instructions-list">
      <h3>CVS Format</h3>
      <p>
        Try this example with{" "}
        <a
          href={"https://www.nextprot.org/entry/NX_P13569/"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          CFTR
        </a>
        <br />
        <strong>nextprotPosition,originalAminoAcid,variantAminoAcid</strong>
        <br />
        44,D,G
        <br />
        110,D,H
        <br />
        170,R,H
        <br />
      </p>
    </div>
  );
};

export default CSVInstructions;
