package com.gestion_franca.users_service.controller;

import com.gestion_franca.users_service.model.User;
import com.gestion_franca.users_service.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/created")
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/get")
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
