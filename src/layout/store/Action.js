import {FULL_SCREEN, SWITCH_SIDERBAR} from "./Type";

export const switchFullScreen = () => (
  {
    type: FULL_SCREEN
  }
);

export const switchSiderBar = (siderbarFold) => (
  {
    type: SWITCH_SIDERBAR,
    siderbarFold: siderbarFold
  }
);