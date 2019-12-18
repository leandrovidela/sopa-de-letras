import React from "react";
import { WrapperLoader, Img } from "./styles";

export const Loader = () => (
  <WrapperLoader className="loader">
    <Img
      src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
      alt="loader"
    />
  </WrapperLoader>
);
