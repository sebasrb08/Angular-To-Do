import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Tarea } from 'src/app/model/Tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private baseUrl='http://localhost:8080/task';
  private taskSubject = new BehaviorSubject<Tarea[]>([]);
  task$ = this.taskSubject.asObservable();




  constructor(private http:HttpClient) { }

  public findAll() {
    this.http.get<Tarea[]>(this.baseUrl).subscribe(
      (data) => {
        return this.taskSubject.next(data); // Actualiza el BehaviorSubject con las nuevas tareas
      })
  }

  public save(tarea:Tarea){
    this.http.post<Tarea>(this.baseUrl,tarea).subscribe((data)=>{
      const currentTasks= this.taskSubject.value
      currentTasks.push(data)
      return this.taskSubject.next(currentTasks)
    });
  }

  public update(id:number, tarea:Tarea){
    return this.http.put(`${this.baseUrl}/${id}`,tarea).subscribe({
      next: () => {
        const currentTasks = this.taskSubject.value;
        console.log("hola")
        // Encuentra la tarea con el mismo ID y actualiza sus datos
        const index = currentTasks.findIndex(task => task.id === id);
        if (index !== -1) {
          currentTasks[index] = tarea; // Actualiza la tarea en la lista
          this.taskSubject.next(currentTasks); // Emite la lista actualizadaEmite la lista actualizada
        }
      },
      error: (err) => {
        console.error('Error al actualizar la tarea:', err);
      }
    })
  }

  public delete(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text' }).subscribe(()=>{
      const currentTasks = this.taskSubject.value
      const update= currentTasks.filter(element => element.id !== id)
      this.taskSubject.next(update)
    })
  }


}
