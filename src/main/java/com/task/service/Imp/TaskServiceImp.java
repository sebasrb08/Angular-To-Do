package com.task.service.Imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.entity.TaskEntity;
import com.task.repository.TaskRepository;
import com.task.service.TaskService;

@Service
public class TaskServiceImp implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public List<TaskEntity> getAllTask() {
        return taskRepository.findAll();
    }

    public Optional<TaskEntity> getByIdTask (int id){
        return taskRepository.findById(id);
    }

    @Override
    public TaskEntity newTask(TaskEntity task) {
        return taskRepository.save(task);
    }

    @Override
    public TaskEntity updateTask(TaskEntity task, int id) {
        Optional<TaskEntity> taskId= taskRepository.findById(id);
        taskId.get().setTitle(task.getTitle()); 
        
        return taskRepository.save(taskId.get());
    }

    @Override
    public String delete(int id) {
       if(taskRepository.existsById(id)){
        taskRepository.deleteById(id);
        return "Task deleted";
       }
       return "The id was not found";
    }
    
}
