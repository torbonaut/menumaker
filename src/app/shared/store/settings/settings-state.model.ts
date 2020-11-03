export interface SettingsStateModel {
  selectedPageTypeId: number;
}

export const settingsStateDefaults = (): SettingsStateModel => ({
  selectedPageTypeId: 1
});
