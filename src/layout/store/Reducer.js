import {FULL_SCREEN, SWITCH_SIDERBAR} from "./Type";

const initialState = {
  fullScreen: localStorage.getItem(FULL_SCREEN) === 'true',
  siderbarFold: localStorage.getItem(SWITCH_SIDERBAR) === 'true'
};

export function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case FULL_SCREEN:
      localStorage.setItem(FULL_SCREEN, (!state.fullScreen).toString());
      if (!state.fullScreen) {
        document.documentElement.requestFullscreen().then();
      } else {
        document.exitFullscreen().then();
      }
      return {
        ...state, fullScreen: !state.fullScreen
      };
    case SWITCH_SIDERBAR:
      localStorage.setItem(SWITCH_SIDERBAR, (action.siderbarFold).toString());
      return {
        ...state, siderbarFold: action.siderbarFold
      };
    default:
      return state
  }
}