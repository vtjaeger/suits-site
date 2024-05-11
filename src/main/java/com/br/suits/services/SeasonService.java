package com.br.suits.services;

import com.br.suits.repositories.SeasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SeasonService {
    @Autowired
    private SeasonRepository seasonRepository;

    public ResponseEntity getAllSeason(){
        return ResponseEntity.ok().body(seasonRepository.findAll());
    }
}
