import React from "react";

const CSVInstructions = () => {
  return (
    <div className="instructions-container csv-instructions">
      <h3>CVS Format</h3>
      <p>
        Note: This example is for{" "}
        <a
          href={"https://www.nextprot.org/entry/NX_P13569/"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          CFTR
        </a>
      </p>
      <table>
        <thead>
          <tr>
            <th>nextprotPosition</th>
            <th>originalAminoAcid</th>
            <th>variantAminoAcid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>44</td>
            <td>D</td>
            <td>G</td>
          </tr>
          <tr>
            <td>110</td>
            <td>D</td>
            <td>H</td>
          </tr>
          <tr>
            <td>170</td>
            <td>R</td>
            <td>H</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CSVInstructions;
