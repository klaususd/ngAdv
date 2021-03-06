import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppReducer, AppState } from './reducers/app.reducer';
import { RouterStateUrl } from './reducers/router.reducer';
import { AuthReducer, AuthState } from '../auth/store/reducers/auth.reducer';

//State
export interface State {
  app: AppState;
  routerReducer: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer,
  routerReducer: routerReducer,
  auth: AuthReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
