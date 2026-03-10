package com.botmakers.authsystem.dto;

import com.botmakers.authsystem.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;

}