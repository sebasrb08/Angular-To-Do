import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../model/Tarea.model';
import { TaskServiceService } from '../service/task/task-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit   {
  @Input() task:any ;

  constructor(private _taskService:TaskServiceService){}

  ngOnInit(): void {
    this._taskService.task$.subscribe(
      (data: Tarea[]) => {
        this.task = data;  // Actualiza el input con las tareas recibidas
      })
      this._taskService.findAll();
  }
  deleteTask(id:number){
    this._taskService.delete(id)
    const index = this.task.findIndex((element: { id: number; }) => element.id === id) // Elimina el elemento del array
    this.task.splice(index,1);
  }
}
