import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskServiceService } from '../service/task/task-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html' // Cambiar a archivo HTML externo
})
export class DialogContentExampleDialog implements OnInit{
  value: string='';
  index:number=0

  formularioContacto = new FormGroup({
    tarea: new FormControl('',Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { task2: any[], getId: number },
    private taskService:TaskServiceService
  ) {}
  ngOnInit(): void {
    this.index = this.data.task2.findIndex((element: { id: number; }) => element.id === this.data.getId)
    this.value = this.data.task2[this.index].title
    this.formularioContacto.get('tarea')?.setValue(this.value); // Establece el valor en el control del formulario

  }

  onNoClick(): void {
    console.log(this.data)
    this.dialogRef.close();
  }

  sendUpdate(){
    this.data.task2[this.index].title=this.formularioContacto.get('tarea')?.value || ''
    this.taskService.update(this.data.task2[this.index].id,this.data.task2[this.index])
    this.dialogRef.close();
  }

}
