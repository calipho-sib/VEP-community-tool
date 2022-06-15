export const ERROR = {
  NOT_FOUND: "Couldn't find entry data.",
  PARTIAL_RESULTS:
    "Please note that variants returning an error have been omitted.",
  LIMIT_EXCEEDED:
    "You have exceeded the limit of 200 variants, only partial results are shown",
  NO_RESULTS: "Impossible to return results! Please check your variant data.",
};

export const TABLE_PAGE_SIZE = 10;

export const INSTRUCTIONS = {
  1: `Select a missense variant by clicking on its position in the sequence, entering the desired amino acid variation and clicking on the 'Add' button.`,
  2: `Select multiple missense variants by clicking on the 'Add Variants' button and entering the desired variants with their positions.`,
  3: `The selected variant(s) will be displayed in the variant effect output table.`,
  4: `Click on the 'Get Predictions' button to view the SIFT and Polyphen-2 scores for the variant(s).`,
};
