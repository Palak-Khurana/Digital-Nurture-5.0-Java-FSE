package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.AuthenticationResponse;
import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String encodedCredentials = authHeader.substring(6);

        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);

        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        String[] values = credentials.split(":");

        String username = values[0];
        String password = values[1];

        // Validate credentials
        if ("user".equals(username) && "pwd".equals(password)) {

            String token = JwtUtil.generateToken(username);

            return new AuthenticationResponse(token);
        }

        throw new RuntimeException("Invalid Credentials");
    }
}