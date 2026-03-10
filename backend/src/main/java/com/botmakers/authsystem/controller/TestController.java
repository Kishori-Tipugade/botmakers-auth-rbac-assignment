package com.botmakers.authsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/public")
    public String publicApi() {
        return "Public API - anyone can access";
    }

    @GetMapping("/api/user")
    public String userApi() {
        return "User API - USER or ADMIN can access";
    }

    @GetMapping("/api/admin")
    public String adminApi() {
        return "Admin API - only ADMIN can access";
    }
}