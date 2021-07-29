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
  nxEntry: string,
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
            true,
          ),
        );
        break;
      case "miscellaneous-region-interactions":
        featuresForViewer.push(
          nx.getAnnotationsWithProperty(
            nxEntry,
            "miscellaneous-region",
            "interaction-related",
            true,
          ),
        );
        break;
      default:
        featuresForViewer.push(
          nx.getAnnotationsByCategory(nxEntry, featureList[feat].APIRef),
        );
        break;
    }
  }
  return featuresForViewer;
}

export function getFeaturesByIsoform(rawData: any, metaData: MetaData[]) {
  let featuresForViewer = [];
  let featForViewer;

  for (let i = 1; i < rawData.length - 1; i++) {
    let feat = NXUtils.convertMappingsToIsoformMap(
      rawData[i],
      metaData[i].name.replace(".", ""),
      metaData[i].filter,
      "",
    );

    featForViewer = NXViewerUtils.convertNXAnnotations(feat, metaData[i], {});
    featuresForViewer.push(featForViewer);
  }
  return featuresForViewer;
}

export function addFeatures(
  featuresForViewer: FeatsForViewer[],
  isoName: string,
) {
  let featureList: FeatureData[] = [];

  featuresForViewer.map((currentFeature) => {
    if (
      Object.keys(currentFeature).length !== 0 &&
      Object.prototype.hasOwnProperty.call(currentFeature, isoName)
    ) {
      featureList.push({ ...currentFeature[isoName] });
    }
  });
  return featureList;
}

export function getMetadataByView() {
  let metaData: MetaData[] = [];

  featureList.map((_, i) => {
    metaData.push(featureList[i].metadata);
  });
  return metaData;
}
