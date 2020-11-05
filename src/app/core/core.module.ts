import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutDialogComponent } from './components/about-dialog/about-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [SidebarComponent, ToolbarComponent, SettingsDialogComponent, AboutDialogComponent],
    exports: [
        SidebarComponent,
      ToolbarComponent
    ],
    imports: [
        CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      MatRadioModule,
      MatCardModule,
      MatTabsModule,
      MatListModule,
      DragDropModule
    ]
})
export class CoreModule { }
