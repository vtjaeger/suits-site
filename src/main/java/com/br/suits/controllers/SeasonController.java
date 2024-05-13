package com.br.suits.controllers;

import com.br.suits.services.SeasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("season")
@CrossOrigin(origins = "*")
public class SeasonController {
    @Autowired
    private SeasonService seasonService;

    @GetMapping
    public ResponseEntity getAllSeason(){
        return seasonService.getAllSeason();
    }

    @GetMapping("/{id}")
    public ResponseEntity getOneSeason(@PathVariable Long id) {
        return seasonService.getOneSeason(id);
    }
}
