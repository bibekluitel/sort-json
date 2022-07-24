import React from "react";
import reactDom from "react-dom";
import { App } from "./src/App";
import { getBaseUrl } from './src/utils/url';

const baseUrl = getBaseUrl();
reactDom.render(<App baseUrl={baseUrl} />, document.getElementById("root"));