package com.example.projectboard.repository;
import com.example.projectboard.domain.*;
import org.springframework.data.repository.CrudRepository;

public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long>{
	
	ProjectTask getById(Long id); 
}
