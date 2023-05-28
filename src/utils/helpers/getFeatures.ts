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

    let frequencyFeature: any = {};
    let frequencyMinValues: any = {};
    if (rawData[i].annot.length > 0) {
      if (rawData[i].annot[0].apicategory === "VARIANT") {
        // Get target isoform details
        rawData[i].annot.map(function (variant: any) {
          let variantAnnotation = variant;
          // Add isoforms available
          Object.keys(variant.targetingIsoformsMap).forEach((isoform) => {
            if (!(isoform in frequencyFeature)) {
              frequencyFeature[isoform] = [];
            }

            let frequencyEvidence = variant.evidences.filter(
              (evidence: any) => {
                return evidence.assignedBy === "gnomAD";
              },
            );

            if (frequencyEvidence.length > 0) {
              frequencyEvidence = frequencyEvidence[0];
              let frequency = Number(
                frequencyEvidence.properties["allele frequency"],
              );

              // Check if the variant has isoform specific position
              let variantFrequencyDetails: any = {};
              variantFrequencyDetails["x"] =
                variant.targetingIsoformsMap[isoform]["firstPosition"];
              variantFrequencyDetails["y"] = frequency;
              variantFrequencyDetails[
                "id"
              ] = `FREQUENCY_Variant_${variantFrequencyDetails["x"]}_${variantFrequencyDetails["x"]}_${variantAnnotation.uniqueName}`;
              variantFrequencyDetails["category"] = "Frequency";
              let variantDescription = `${variantAnnotation.variant.original} → ${variantAnnotation.variant.variant}`;

              variantFrequencyDetails[
                "description"
              ] = `<span>${variant.targetingIsoformsMap[isoform]["firstPosition"]}<br/>${variantDescription}<br/>${frequency}</span>`;
              frequencyFeature[isoform].push(variantFrequencyDetails);

              if (isoform in frequencyMinValues) {
                if (frequencyMinValues[isoform] > frequency) {
                  frequencyMinValues[isoform] = frequency;
                }
              } else {
                frequencyMinValues[isoform] = frequency;
              }
            }
          });
        });
      }

      Object.keys(frequencyFeature).forEach(function (isoform) {
        frequencyFeature[isoform].forEach(function (variant: any) {
          variant["y"] =
            -Math.log10(frequencyMinValues[isoform]) +
            0.2 +
            Math.log10(variant["y"]);
        });
      });

      if (Object.keys(frequencyFeature).length !== 0) {
        let frequencyFeatureForViewer: any = {};
        Object.keys(frequencyFeature).forEach(function (key) {
          let x = {
            className: "freq",
            color: "#B3B3C2",
            name: "Frequency (Log)",
            type: "bar",
            filter: "Frequency",
            data: frequencyFeature[key],
          };
          frequencyFeatureForViewer[key] = x;
        });
        featuresForViewer.push(frequencyFeatureForViewer);
      }
    }
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
