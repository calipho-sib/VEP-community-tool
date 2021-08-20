import axios from "axios";
import log from "./helpers/logger";
import { IsoformMapping, PredictionData, VariantData } from "./types";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export async function getPredictions(data: PredictionData) {
  let res: VariantData[];
  res = await axios
    .post(`${baseURL}/vep-results`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      log(err);
    });

  return res;
}

export async function getIsoformList(entry: string) {
  let res: IsoformMapping[] | undefined;
  res = await axios
    .get(`${baseURL}/mapping-isoforms/${entry}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      log(err);
    });

  return res;
}
