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
  IsoformMapping,
  IsoformType,
  MetaData,
  VariantData,
} from "../utils/types";
import Loader from "./Loader";
import { ERROR } from "../utils/constants";
import { getIsoformList, getPredictions } from "../utils/service";
import log from "../utils/helpers/logger";
import { parseData } from "../utils/helpers/parseData";

const FeatureViewerComponent = () => {
  const [data, setData] = useState<VariantData[] | []>([]);
  const [isoform, setIsoform] = useState<IsoformMapping[]>();
  const [sequence, setSequence] = useState<IsoformType[]>();
  const [isoName, setIsoName] = useState<string>();
  const [features, setFeatures] = useState<FeatsForViewer[]>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [predictionLoading, setPredictionLoading] = useState(false);
  const [fv, setFv] = useState<any>();

  const CONTAINER_ID = "fv1";
  const nx = new Nextprot.Client("Calipho Group", "VEP community tool");

  function buildFeatures(
    fv: any,
    sequences: IsoformType[],
    isoName: string,
    features: FeatureData[],
  ) {
    sequences.forEach(function (seq: IsoformType) {
      if (seq.uniqueName === isoName) {
        let featureViewer = new createFeature(seq.sequence, "#fv1", {
          showAxis: true,
          showSequence: true,
          brushActive: true,
          toolbar: true,
          bubbleHelp: false,
          zoomMax: 10,
          variant: true,
        });

        setFv(featureViewer);

        features.map((feat: FeatureData) => {
          featureViewer.addFeature(feat);
        });

        featureViewer.onVariantChanged((d: CustomEvent) => {
          setData([...d.detail]);
        });

        featureViewer.onGetPredictions((d: CustomEvent) => {
          setPredictionLoading(true);
          let data = {
            isoform: isoName,
            variants: d.detail,
          };

          getPredictions(data).then((res) => {
            if (res) {
              if (res.length < data.variants.length)
                setError(ERROR.PARTIAL_RESULTS);
              else setError("");

              const { parsedData } = parseData(res);
              setData(parsedData);
              setPredictionLoading(false);
              return;
            }
            setError(ERROR.NO_RESULTS);
            setPredictionLoading(false);
          });
        });
      }
    });
  }

  function handleIsoformChange(value: string) {
    setIsoName(value);
    document.getElementById(CONTAINER_ID)!.innerHTML = "";
    const featureList: FeatureData[] = addFeatures(features!, value);
    buildFeatures(fv, sequence!, value, featureList);
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramEntry: string | null = params.get("nxentry");

    getIsoformList(paramEntry!).then((res) => {
      setIsoform(res);
    });

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

          setSequence(sequences);
          setFeatures(featsForViewer);
          setIsoName(sequences[0].isoformAccession);
          setLoading(false);
        } else {
          setError(ERROR.NOT_FOUND);
        }
      })
      .catch((err) => {
        log(err);
      });
  }, []);

  return (
    <>
      {loading && <Loader id="feature-loader" />}
      <div className="viewer-container">
        {isoform && !error && (
          <Isoform
            isoName={isoName}
            isoform={isoform}
            handleIsoformChange={handleIsoformChange}
          />
        )}
        <div id="fv1" />
        <Table
          predictionLoading={predictionLoading}
          setPredictionLoading={setPredictionLoading}
          data={data}
          setData={setData}
          error={error}
          setError={setError}
          isoName={isoName}
          fv={fv}
        />
      </div>
    </>
  );
};

export default FeatureViewerComponent;
