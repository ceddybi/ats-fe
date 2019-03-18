import { Reducer } from "redux";
import {
  SWITCH_LANGUAGE,
  TOGGLE_COLLAPSED_NAV,
  WINDOW_WIDTH,
} from "../../constants/ActionTypes";
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_FIXED,
  THEME_COLOR_SELECTION,
  THEME_COLOR_SELECTION_PRESET,
  THEME_TYPE,
  THEME_TYPE_LITE,
} from "../../constants/ThemeSetting";

export const settingsInitialState = {
  navCollapsed: false,
  navStyle: NAV_STYLE_FIXED,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_LITE,
  colorSelection: THEME_COLOR_SELECTION_PRESET,

  pathname: "",
  width: typeof window !== "undefined" ? window.innerWidth : 1000,
  isDirectionRTL: false,
  locale: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "us",
  },
};

export interface SettingsState {
  navCollapsed?: boolean;
  navStyle?: string;
  layoutType?: string;
  themeType?: string;
  colorSelection?: string;

  pathname?: string;
  width?: number;
  isDirectionRTL?: boolean;
  locale?: {
    languageId: string;
    locale: string;
    name: string;
    icon: string;
  };
}

export const settingsReducer: Reducer<SettingsState> = (
  state = settingsInitialState,
  action,
) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return {
        ...state,
        pathname: action.payload.pathname,
        navCollapsed: false,
      };
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.navCollapsed,
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case THEME_TYPE:
      return {
        ...state,
        themeType: action.themeType,
      };
    case THEME_COLOR_SELECTION:
      return {
        ...state,
        colorSelection: action.colorSelection,
      };

    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.navStyle,
      };
    case LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.layoutType,
      };

    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
