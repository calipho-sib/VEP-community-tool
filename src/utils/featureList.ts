import { FeatureListType } from "./types";

export const featureList: FeatureListType[] = [
  {
    APIRef: "sequence",
    metadata: { name: "Sequence" },
  },
  {
    APIRef: "beta-strand",
    metadata: {
      name: "Beta strand",
      className: "betastrand",
      color: "#B3F0C2",
      type: "rect",
      filter: "Secondary structure",
    },
  },
  {
    APIRef: "helix",
    metadata: {
      name: "Helix",
      className: "helix",
      color: "#B3F0D1",
      type: "rect",
      filter: "Secondary structure",
    },
  },
  {
    APIRef: "turn",
    metadata: {
      name: "Turn",
      className: "turn",
      color: "#B3F0E1",
      type: "rect",
      filter: "Secondary structure",
    },
  },
  {
    APIRef: "signal-peptide",
    metadata: {
      name: "Signal peptide",
      className: "sign",
      color: "#B3B3E1",
      type: "rect",
      filter: "Processing",
    },
  },
  {
    APIRef: "propeptide",
    metadata: {
      name: "Propeptide",
      className: "pro",
      color: "#B3B3B3",
      type: "rect",
      filter: "Processing",
    },
  },
  {
    APIRef: "mature-protein",
    metadata: {
      name: "Mature protein",
      className: "mat",
      color: "#B3B3C2",
      type: "rect",
      filter: "Processing",
    },
  },
  {
    APIRef: "initiator-methionine",
    metadata: {
      name: "Initiator Met",
      className: "initMeth",
      color: "#B3B3D1",
      type: "unique",
      filter: "Processing",
    },
  },
  {
    APIRef: "peroxisome-transit-peptide",
    metadata: {
      name: "Transit peptide",
      className: "pero",
      color: "#B3B3F0",
      type: "rect",
      filter: "Processing",
    },
  },
  {
    APIRef: "mitochondrial-transit-peptide",
    metadata: {
      name: "Transit peptide",
      className: "mito",
      color: "#B3B3F0",
      type: "rect",
      filter: "Processing",
    },
  },
  {
    APIRef: "domain",
    metadata: {
      name: "Domain",
      className: "domain",
      color: "#B3C2C2",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "miscellaneous-region",
    metadata: {
      name: "Region",
      className: "miscregion",
      color: "#B3C2B3",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "repeat",
    metadata: {
      name: "Repeat",
      className: "repeat",
      color: "#98B7D5",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "calcium-binding-region",
    metadata: {
      name: "Calcium binding",
      className: "calcium",
      color: "#B3C2E1",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "zinc-finger-region",
    metadata: {
      name: "Zinc finger",
      className: "calcium",
      color: "#B3C2E1",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "dna-binding-region",
    metadata: {
      name: "DNA binding",
      className: "dnabind",
      color: "#B3C2FF",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "nucleotide-phosphate-binding-region",
    metadata: {
      name: "Nucleotide binding",
      className: "nucleobind",
      color: "#B3D1B3",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "coiled-coil-region",
    metadata: {
      name: "Coiled-coil",
      className: "coiledcoil",
      color: "#B3D1C2",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "short-sequence-motif",
    metadata: {
      name: "Sequence motif",
      className: "motif",
      color: "#B3D1D1",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "compositionally-biased-region",
    metadata: {
      name: "Composition bias",
      className: "biased",
      color: "#B3D1E1",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "interacting-region",
    metadata: {
      name: "Interacting region",
      className: "intReg",
      color: "#B3D1F0",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "interaction-mapping",
    metadata: {
      name: "Exp. interaction",
      className: "intregion",
      color: "#B3E1D1",
      type: "rect",
      filter: "Region",
    },
  },
  {
    APIRef: "topological-domain",
    metadata: {
      name: "Topological domain",
      className: "topodomain",
      color: "#A5DBA5",
      type: "rect",
      filter: "Topology",
    },
  },
  {
    APIRef: "transmembrane-region",
    metadata: {
      name: "Membrane",
      className: "membrane",
      color: "#A5DBB7",
      type: "rect",
      filter: "Topology",
    },
  },
  {
    APIRef: "intramembrane-region",
    metadata: {
      name: "Membrane",
      className: "intramembrane",
      color: "#A5DBB7",
      type: "rect",
      filter: "Topology",
    },
  },
  {
    APIRef: "disulfide-bond",
    metadata: {
      name: "Disulfide bond",
      className: "dsB",
      color: "#B3B3E1",
      type: "path",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "modified-residue",
    metadata: {
      name: "Modified residue",
      className: "modifRes",
      color: "#B3C2B3",
      type: "unique",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "cross-link",
    metadata: {
      name: "Cross-link",
      className: "crossLink",
      color: "#B3C2C2",
      type: "unique",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "glycosylation-site",
    metadata: {
      name: "Glycosylation",
      className: "glycoSite",
      color: "#74E374",
      type: "unique",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "lipidation-site",
    metadata: {
      name: "Lipidation",
      className: "lipidation",
      color: "#A3B5DB",
      type: "unique",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "selenocysteine",
    metadata: {
      name: "Non-standard AA",
      className: "seleno",
      color: "#859DE7",
      type: "unique",
      filter: "Modified Residue",
    },
  },
  {
    APIRef: "miscellaneous-site",
    metadata: {
      name: "Site",
      className: "site",
      color: "#B3F0E1",
      type: "unique",
      filter: "Site",
    },
  },
  {
    APIRef: "active-site",
    metadata: {
      name: "Active site",
      className: "actSite",
      color: "#B3F0F0",
      type: "unique",
      filter: "Site",
    },
  },
  {
    APIRef: "binding-site",
    metadata: {
      name: "Binding site",
      className: "bindsite",
      color: "#82E6FF",
      type: "unique",
      filter: "Site",
    },
  },
  {
    APIRef: "cleavage-site",
    metadata: {
      name: "Cleavage site",
      className: "cleavsite",
      color: "#B3FFB3",
      type: "unique",
      filter: "Site",
    },
  },
  {
    APIRef: "metal-binding-site",
    metadata: {
      name: "Metal binding",
      className: "metal",
      color: "#B3FFC2",
      type: "unique",
      filter: "Site",
    },
  },
  {
    APIRef: "variant",
    metadata: {
      name: "Variant",
      className: "variant",
      color: "rgba(0,255,154,0.3)",
      type: "unique",
      filter: "Variant",
    },
  },
  {
    APIRef: "mutagenesis",
    metadata: {
      name: "Mutagenesis",
      className: "mutagenesis",
      color: "#73FFE3",
      type: "unique",
      filter: "Variant",
    },
  },
  {
    APIRef: "sequence-conflict",
    metadata: {
      name: "Conflict",
      className: "seqconflict",
      color: "#6FFFFF",
      type: "unique",
      filter: "Conflict",
    },
  },
  // {
  //   APIRef: "peptide-mapping",
  //   metadata: {
  //     name: "Peptide",
  //     className: "pep",
  //     color: "#B3E1D1",
  //     type: "rect",
  //     filter: "Peptide",
  //     height: 8,
  //   },
  // },
  {
    APIRef: "isoform-mapping",
    metadata: {
      name: "Isoform",
    },
  },
];
