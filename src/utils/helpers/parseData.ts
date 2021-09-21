import { VariantData } from "../types";

export const parseData = (variantData: VariantData[]) => {
  const parsedData: VariantData[] = [];
  const errors: VariantData[] = [];

  variantData.map((data) => {
    if (data.sift === -1 && data.polyphen == -1) {
      errors.push(data);
    } else parsedData.push(data);
  });

  return { parsedData, errors };
};
