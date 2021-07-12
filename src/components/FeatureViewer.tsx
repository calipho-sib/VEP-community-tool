import { useEffect, useState } from "react";
import {
  createFeature,
  NXUtils,
  Nextprot,
  NXViewerUtils,
} from "feature-viewer";

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
  const [data, setData] = useState<VariantData[] | []>([]);
  const [currentIsoform, setCurrentIsoform] = useState<any>();

  const CONTAINER_ID = "fv1";
  
  useEffect(() => {
    document.getElementById(CONTAINER_ID)!.innerHTML = "";
    let nx = new Nextprot.Client("Calipho Group", "VEP commumity tool");

    var nxEntry = "NX_P07711";

    console.log(nxEntry, nx);

    let rawData: any;
    let sequences: any;

    nx.getIsoformMapping(nxEntry).then((data: any) => {
      console.log(data);
    });

    nx.getProteinSequence(nxEntry).then(function (s: any) {
      console.log(s);
      rawData = s;
      sequences = rawData[0];

      for (let i = 0; i < rawData.length - 1; i++) {
        console.log(rawData[i].metadata);
        var feat = NXUtils.convertMappingsToIsoformMap(
          rawData[i],
          {},
          "propeptide",
          ""
        );

        console.log(feat);
      }
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
