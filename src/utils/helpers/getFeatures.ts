import { NXUtils, NXViewerUtils } from "feature-viewer";

import {
  FeatsForViewer,
  FeatureData,
  FeatureListType,
  MetaData,
} from "../types";
import { featureList } from "../featureList";

export function getFeaturesByView(
  featureList: FeatureListType[],
  nx: any,
  nxEntry: string
) {
  let featuresForViewer = [];

  for (let feat in featureList) {
    switch (featureList[feat].APIRef) {
      case "sequence":
        featuresForViewer.push(nx.getProteinSequence(nxEntry));
        break;
      case "antibody":
        featuresForViewer.push(nx.getAntibody(nxEntry));
        break;
      case "isoform-mapping":
        featuresForViewer.push(nx.getIsoformMapping(nxEntry));
        break;
      case "variant-medical":
        featuresForViewer.push(
          nx.getAnnotationsWithProperty(
            nxEntry,
            "variant",
            "disease-related",
            true
          )
        );
        break;
      case "miscellaneous-region-interactions":
        featuresForViewer.push(
          nx.getAnnotationsWithProperty(
            nxEntry,
            "miscellaneous-region",
            "interaction-related",
            true
          )
        );
        break;
      default:
        featuresForViewer.push(
          nx.getAnnotationsByCategory(nxEntry, featureList[feat].APIRef)
        );
        break;
    }
  }
  return featuresForViewer;
}

export function getFeaturesByIsoform(rawData: any, metaData: MetaData[]) {
  let featuresForViewer = [];
  let featForViewer;
  let isoLengths = {};

  rawData.forEach((i: any) => {
    //@ts-ignore
    isoLengths[i.uniqueName] = i.sequenceLength;
  });

  for (let i = 1; i < rawData.length - 1; i++) {
    let feat = NXUtils.convertMappingsToIsoformMap(
      rawData[i],
      metaData[i].name.replace(".", ""),
      metaData[i].filter,
      ""
    );

    featForViewer = NXViewerUtils.convertNXAnnotations(
      feat,
      metaData[i],
      isoLengths
    );
    featuresForViewer.push(featForViewer);
  }
  return featuresForViewer;
}

export function addFeatures(
  featuresForViewer: FeatsForViewer[],
  isoName: string
) {
  let featureList: FeatureData[] = [];
  for (let i = 0; i < featuresForViewer.length; i++) {
    if (
      Object.keys(featuresForViewer[i]).length !== 0 &&
      featuresForViewer[i].hasOwnProperty(isoName)
    ) {
      featureList.push({ ...featuresForViewer[i][isoName] });
    }
  }
  return featureList;
}

export function getMetadataByView() {
  let metaData: MetaData[] = [];

  for (let i = 0; i < featureList.length - 1; i++)
    metaData.push(featureList[i].metadata);

  return metaData;
}
