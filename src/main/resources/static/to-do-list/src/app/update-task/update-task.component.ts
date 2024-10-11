import { Component, inject, Input  } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './DialogContentExampleDialog';
import { Tarea } from '../model/Tarea.model';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {

  @Input() task2:Tarea[] = []
  @Input() getId:number = 0;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog, {
      data: {
        task2: this.task2,
        getId: this.getId
      }
    });
  }


}

