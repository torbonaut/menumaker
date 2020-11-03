import {Action, Selector, State, StateContext} from '@ngxs/store';
import {settingsStateDefaults, SettingsStateModel} from './settings-state.model';
import {Injectable} from '@angular/core';
import {Settings} from './settings.actions';
import {Observable} from 'rxjs';

@State<SettingsStateModel>({
  name: 'settings',
  defaults: settingsStateDefaults()
})
@Injectable()
export class SettingsState {

  @Selector()
  static selectedPageTypeId(state: SettingsStateModel): number {
    return state.selectedPageTypeId;
  }

  @Action(Settings.SetPageType)
  setPageType(ctx: StateContext<SettingsStateModel>, action: Settings.SetPageType): void {
    ctx.patchState({ selectedPageTypeId: action.pageTypeId });
  }
}
