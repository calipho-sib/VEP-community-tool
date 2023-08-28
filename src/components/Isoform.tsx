import React, { useState, useEffect, ReactElement } from "react";
import Select from "react-select";

import * as Icon from "../assets/icons/index";
import { IsoformMapping } from "../utils/types";

type IsoformProps = {
  isoName?: string;
  isoform: IsoformMapping[];
  handleIsoformChange: (value: string) => void;
};

type Option = {
  value: string;
  label: string | ReactElement;
  disabled: boolean;
};

type Label = {
  offset: number;
  isoform: string;
};

const LabelComponent = (props: Label) => {
  const { offset, isoform } = props;
  return (
    <>
      {offset < 0 ? (
        <div className="isoform-info">
          {isoform}
          <img
            title="Isoform mapping not available"
            src={Icon.Info}
            className="icon"
            alt="Info Icon"
          />
        </div>
      ) : (
        isoform
      )}
    </>
  );
};

const Isoform = ({ isoform, handleIsoformChange }: IsoformProps) => {
  const [options, setOptions] = useState<Option[]>();
  const [selectedOption, setSelectedOption] = useState<Option>();

  useEffect(() => {
    let optionMap: Option[] = [];
    isoform.map((iso: IsoformMapping) => {
      let option: Option = {
        value: iso.isoform,
        label: <LabelComponent isoform={iso.isoform} offset={iso.offset} />,
        disabled: iso.offset < 0 ? true : false,
      };
      if (
        !optionMap.some((currentOption) => currentOption.value === option.value)
      ) {
        optionMap.push(option);
      }
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
        isOptionDisabled={(option: Option) => option.disabled}
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
