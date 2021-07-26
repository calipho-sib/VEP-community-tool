export const DEFAULT_SEQUENCE =
  "MTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEE";

export const DEFAULT_ENTRY = "NX_P01308";

export const DEFAULT_OPTIONS = {
  showAxis: true,
  showSequence: true,
  brushActive: true,
  toolbar: true,
  bubbleHelp: true,
  zoomMax: 20,
  variant: true,
};

export const ENTRY_OPTIONS = [
  { value: "absorption-max", label: "Max Absorption" },
  { value: "absorption-note", label: "Absorption Rate" },
  { value: "accession", label: "Accession" },
  { value: "active-site", label: "Active Site" },
  { value: "allergen", label: "Allergen" },
];

export const FEATURE_DATA = [
  {
    name: "Test Feature 1",
    data: [
      { x: 120, y: 154, description: "aaaaa", id: "a1" },
      { x: 22, y: 163, description: "bbbbb", id: "b1" },
      { x: 90, y: 108, description: "ccccc", id: "c1" },
      { x: 10, y: 25, description: "ddddd", id: "d1" },
      { x: 193, y: 210, description: "eeeee", id: "e1" },
      { x: 78, y: 85, description: "fffff", id: "f1" },
      { x: 96, y: 143, description: "ggggg", id: "g1" },
      { x: 14, y: 65, description: "hhhhh", id: "h1" },
      { x: 56, y: 167, description: "jjjjj", id: "j1" },
    ],
    className: "test1",
    color: "#54FEB7",
    type: "multipleRect",
    filter: "type2",
  },
  {
    data: [
      { x: 52, y: 52 },
      { x: 92, y: 92 },
    ],
    name: "test feature 2",
    className: "test2",
    color: "#007800",
    type: "unique",
    filter: "type2",
  },
  {
    data: [
      { x: 130, y: 184 },
      { x: 40, y: 142 },
      { x: 80, y: 110 },
    ],
    name: "test feature 3",
    className: "test3",
    color: "#CFB915",
    type: "path",
    filter: "type2",
  },
  {
    data: [
      { x: 120, y: 154 },
      { x: 22, y: 163 },
      { x: 90, y: 108 },
      { x: 10, y: 25 },
      { x: 193, y: 210 },
      { x: 78, y: 85 },
      { x: 96, y: 143 },
      { x: 14, y: 65 },
      { x: 56, y: 167 },
    ],
    name: "test feature 4",
    className: "test4",
    color: "#79E376",
    type: "multipleRect",
    filter: "type1",
  },
  {
    data: [
      { x: 120, y: 154 },
      { x: 21, y: 163 },
      { x: 90, y: 108 },
      { x: 10, y: 25 },
      { x: 193, y: 210 },
      { x: 78, y: 85 },
      { x: 96, y: 143 },
      { x: 14, y: 65 },
      { x: 56, y: 167 },
    ],
    name: "test feature 5",
    className: "test5",
    color: "orange",
    type: "rect",
    height: 8,
    filter: "type1",
  },
  {
    data: [
      { x: 120, y: 154 },
      { x: 22, y: 163 },
      { x: 90, y: 90 },
      { x: 10, y: 25 },
      { x: 193, y: 210 },
      { x: 78, y: 85 },
      { x: 96, y: 143 },
      { x: 14, y: 14 },
      { x: 56, y: 57 },
    ],
    name: "test feature 6",
    className: "test6",
    color: "green",
    type: "rect",
    filter: "type2",
  },
];
