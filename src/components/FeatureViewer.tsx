import { useEffect, useState } from "react";
import { createFeature } from "feature-viewer";

import { DEFAULT_SEQUENCE, FEATURE_DATA, DEFAULT_OPTIONS } from "../utils/data";
import Table from "./Table";

export type VariantData = {
  position: string;
  original: string;
  variant: string;
  sift: string;
  polyphen: string;
};

const FeatureViewerComponent = () => {
  const [data, setData] = useState<VariantData[]>([]);

  const CONTAINER_ID = "fv1";

  useEffect(() => {
    document.getElementById(CONTAINER_ID)!.innerHTML = "";

    let fv = new createFeature(
      DEFAULT_SEQUENCE,
      `#${CONTAINER_ID}`,
      DEFAULT_OPTIONS
    );

    FEATURE_DATA.map((feature) => {
      fv.addFeature(feature);
    });

    fv.onVariantAdded((d: CustomEvent) => {
      setData([...d.detail]);
    });

    fv.onGetPredictions((d: CustomEvent) => {
      const variantValues = d.detail;

      variantValues.map((v: VariantData) => {
        v.sift = Math.random().toFixed(2);
        v.polyphen = Math.random().toFixed(2);
      });

      setData(variantValues);
    });
  }, []);

  return (
    <div className="viewer-container">
      <div id="fv1" />
      <Table data={data} />
    </div>
  );
};

export default FeatureViewerComponent;
