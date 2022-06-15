import React from "react";

const CSVInstructions = () => {
  return (
    <div className="instructions-container instructions-list">
      <h3>CSV Format</h3>
      <p>
        Try this example with{" "}
        <a
          href={
            "https://www.nextprot.org/entry/NX_P13569/gh/calipho-sib/VEP-community-tool"
          }
          target={"_blank"}
          rel={"noreferrer"}
        >
          CFTR
        </a>
        <br />
      </p>
      <p>
        <strong>nextprotPosition,originalAminoAcid,variantAminoAcid</strong>
      </p>
      <br />
      <p>44,D,G</p>
      <br />
      <p>110,D,H</p>
      <br />
      <p>170,R,H</p>
      <br />
      <br />
      <p>
        <b>Note: Maximum number of variants is 200</b>
      </p>
    </div>
  );
};

export default CSVInstructions;
