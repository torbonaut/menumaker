import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';
import {AboutDialogComponent} from '../about-dialog/about-dialog.component';
import {ScrollStrategyOptions} from "@angular/cdk/overlay";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openSettingsDialog(): void {
    const dialogRef: MatDialogRef<SettingsDialogComponent> = this.matDialog.open(SettingsDialogComponent, {
      width: '400px',
      maxHeight: '80vh'
    });
  }

  openAboutDialog(): void {
    const dialogRef: MatDialogRef<AboutDialogComponent> = this.matDialog.open(AboutDialogComponent, {
      width: '400px',
      maxHeight: '80vh'
    });
  }

}
