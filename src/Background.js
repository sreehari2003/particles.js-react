import Particles from "react-particles-js";
import json from "./particles-config";
import React from "react";

function Background() {
  return <Particles params={json} />;
}

export default Background;
