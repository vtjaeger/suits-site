package com.br.suits.controllers;

import com.br.suits.services.SeasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("season")
public class SeasonController {
    @Autowired
    private SeasonService seasonService;

    @GetMapping
    public ResponseEntity getAllSeason(){
        return seasonService.getAllSeason();
    }
}
