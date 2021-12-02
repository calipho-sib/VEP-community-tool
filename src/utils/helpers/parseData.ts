import { VariantData } from "../types";

export const parseData = (variantData: VariantData[]) => {
  const parsedData: VariantData[] = [];
  const errors: VariantData[] = [];

  variantData.map((data) => {
    if (data.status === "ERROR") {
      errors.push(data);
      data.sift = -1;
      data.polyphen = -1;
    }
    // To show all the data (irrespective of errorneous variants)
    parsedData.push(data);
  });

  return { parsedData, errors };
};
