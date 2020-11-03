import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Page, PAGE_TYPES} from '../..';
import {MatRadioChange} from '@angular/material/radio';
import {SettingsState} from '../../../shared/store/settings/settings.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Settings} from '../../../shared/store/settings/settings.actions';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsDialogComponent implements OnInit {

  pageTypes: Page[] = PAGE_TYPES;

  @Select(SettingsState.selectedPageTypeId) selectedPageTypeId$: Observable<number>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  selectPageType($event: MatRadioChange): void {
    this.store.dispatch(new Settings.SetPageType(parseInt($event.value, 10)));
  }
}
