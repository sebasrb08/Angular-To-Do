import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tarea } from '../model/Tarea.model';
import { TaskServiceService } from '../service/task/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

   tareaModel:Tarea | undefined
    tarea:Tarea[]= [];

   constructor(private _taskService:TaskServiceService){}


  formularioContacto = new FormGroup({
    tarea: new FormControl("",Validators.required)
  })

  submit(){
    this.tareaModel={title: this.formularioContacto.get("tarea")?.value || ''}
    this._taskService.save(this.tareaModel)
    this.formularioContacto.reset(); // Limpiamos el formulario

  }



}
