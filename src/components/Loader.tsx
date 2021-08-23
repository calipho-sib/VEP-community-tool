import React from "react";

import { ReactComponent as LoadingIcon } from "../utils/icons/loader.svg";

type LoaderProps = {
  id?: string;
};

const Loader = ({ id }: LoaderProps) => {
  return (
    <div id={id} className="loader">
      <LoadingIcon />
    </div>
  );
};

export default Loader;
