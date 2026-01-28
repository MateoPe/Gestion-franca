package com.gestion_franca.users_service.repository;

import com.gestion_franca.users_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {


}
