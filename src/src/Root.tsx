
import React from "react";
import { Composition } from "remotion";
import { App } from "./Video";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HelloShorts"
      component={App}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
