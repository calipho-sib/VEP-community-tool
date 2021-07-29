import React, { useState, useEffect } from "react";
import Select from "react-select";

import { IsoformType } from "../utils/types";

type IsoformProps = {
  isoName?: string;
  isoform: IsoformType[];
  handleIsoformChange: (value: string) => void;
};

type Option = {
  value: string;
  label: string;
};

const Isoform = ({ isoform, handleIsoformChange }: IsoformProps) => {
  const [options, setOptions] = useState<Option[]>();
  const [selectedOption, setSelectedOption] = useState<Option>();

  useEffect(() => {
    let optionMap: Option[] = [];
    isoform.map((iso: IsoformType) => {
      const option = {
        value: iso.isoformAccession,
        label: iso.isoformAccession,
      };
      optionMap.push(option);
    });
    setOptions(optionMap);
    setSelectedOption(optionMap[0]);
  }, [isoform]);

  if (!options) {
    return <></>;
  }

  return (
    <div className="isoform-select-wrapper">
      <p>Change Isoform</p>
      <Select
        className="isoform-select"
        options={options}
        value={selectedOption}
        defaultValue={selectedOption}
        onChange={(option) => {
          handleIsoformChange(option!.value);
          setSelectedOption(option!);
        }}
      />
    </div>
  );
};

export default Isoform;
