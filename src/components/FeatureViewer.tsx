import React, { useEffect, useState } from "react";
import { Nextprot, createFeature } from "feature-viewer";

import { featureList } from "../utils/featureList";
import {
  getFeaturesByView,
  getFeaturesByIsoform,
  addFeatures,
  getMetadataByView,
} from "../utils/helpers/getFeatures";
import Table from "./Table";
import Isoform from "./Isoform";
import {
  FeatsForViewer,
  FeatureData,
  IsoformType,
  MetaData,
  VariantData,
} from "../utils/types";
import { ERROR } from "../utils/constants";

const FeatureViewerComponent = () => {
  const [data, setData] = useState<VariantData[] | []>([]);
  const [isoform, setIsoform] = useState<IsoformType[]>();
  const [isoName, setIsoName] = useState<string>();
  const [features, setFeatures] = useState<FeatsForViewer[]>();
  const [error, setError] = useState<string | null>(null);

  const CONTAINER_ID = "fv1";
  const nx = new Nextprot.Client("Calipho Group", "VEP community tool");
  let fv: any;

  function buildFeatures(
    fv: any,
    sequences: IsoformType[],
    isoName: string,
    features: FeatureData[],
  ) {
    sequences.forEach(function (seq: IsoformType) {
      if (seq.uniqueName === isoName) {
        fv = new createFeature(seq.sequence, "#fv1", {
          showAxis: true,
          showSequence: true,
          brushActive: true,
          toolbar: true,
          bubbleHelp: true,
          zoomMax: 10,
          variant: true,
        });

        features.map((feat: FeatureData) => {
          fv.addFeature(feat);
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
      }
    });
  }

  function handleIsoformChange(value: string) {
    setIsoName(value);
    document.getElementById(CONTAINER_ID)!.innerHTML = "";
    const featureList: FeatureData[] = addFeatures(features!, value);
    buildFeatures(fv, isoform!, value, featureList);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramEntry: string | null = params.get("entry");

    let sequences: IsoformType[];
    let features: FeatureData[];

    Promise.all(getFeaturesByView(featureList, nx, paramEntry!))
      .then((rawData) => {
        if (rawData) {
          sequences = rawData[0];
          const metadata: MetaData[] = getMetadataByView();
          const featsForViewer: FeatsForViewer[] = getFeaturesByIsoform(
            rawData,
            metadata,
          );
          features = addFeatures(featsForViewer, sequences[0].isoformAccession);
          buildFeatures(fv, sequences, sequences[0].isoformAccession, features);

          setIsoform(sequences);
          setFeatures(featsForViewer);
          setIsoName(sequences[0].isoformAccession);
        } else {
          setError(ERROR.NOT_FOUND);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="viewer-container">
      {isoform && !error && (
        <Isoform
          isoName={isoName}
          isoform={isoform}
          handleIsoformChange={handleIsoformChange}
        />
      )}
      <div id="fv1" />
      <Table data={data} />
    </div>
  );
};

export default FeatureViewerComponent;
