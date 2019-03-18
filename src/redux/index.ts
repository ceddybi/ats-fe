import { authInitialState } from "./auth/auth.reducer";
import { settingsInitialState } from "./settings/reducer";
import * as redux from "redux";
import { settingsReducer as settings, SettingsState } from "./settings";
import { authReducer as auth, AuthState } from "./auth";

export const reducer: any = redux.combineReducers<RootState>({
  auth,
  settings,
});

export interface RootState {
  settings: SettingsState;
  auth: AuthState;
}

export const rootInitState: RootState = {
  settings: settingsInitialState,
  auth: authInitialState,
};
