package com.botmakers.authsystem.controller;

import com.botmakers.authsystem.dto.LoginRequest;
import com.botmakers.authsystem.entity.User;
import com.botmakers.authsystem.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        return authService.register(user);

    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        return authService.login(request);

    }

}