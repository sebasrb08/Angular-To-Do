package com.task.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.task.entity.TaskEntity;

@Service
public interface TaskService {

    public List<TaskEntity> getAllTask();

    public Optional<TaskEntity> getByIdTask(int id);

    public TaskEntity newTask(TaskEntity task);

    public TaskEntity updateTask(TaskEntity task,int id);

    public String delete(int id);
}
