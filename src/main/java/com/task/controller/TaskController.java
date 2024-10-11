package com.task.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.task.entity.TaskEntity;
import com.task.service.Imp.TaskServiceImp;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/task")
public class TaskController {
    
    @Autowired
    TaskServiceImp taskService;

    @GetMapping()
    public ResponseEntity<List<TaskEntity>> getAllTask(){
        return new ResponseEntity<List<TaskEntity>>(taskService.getAllTask(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<TaskEntity>> getAllTask(@PathVariable int id){
        return new ResponseEntity<Optional<TaskEntity>>(taskService.getByIdTask(id),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<TaskEntity> newTask(@RequestBody TaskEntity taskEntity){
        return new ResponseEntity<TaskEntity>(taskService.newTask(taskEntity),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskEntity> updateTask(@PathVariable int id, @RequestBody TaskEntity entity) {
        
        return new ResponseEntity<TaskEntity>(taskService.updateTask(entity, id),HttpStatus.OK) ;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable int id) {
        
        return new ResponseEntity<String>(taskService.delete(id),HttpStatus.OK) ;
    }
}
