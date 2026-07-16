package com.example.account.controller;

import org.springframework.web.bind.annotation.*;
import com.example.account.model.Account;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Account getAccount(@PathVariable String number) {

        return new Account(
                number,
                "savings",
                234343
        );
    }
}