package com.br.suits.services;

import com.br.suits.models.Season;
import com.br.suits.repositories.SeasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SeasonService {
    @Autowired
    private SeasonRepository seasonRepository;

    public ResponseEntity getAllSeason(){
        return ResponseEntity.ok().body(seasonRepository.findAll());
    }

    public ResponseEntity getOneSeason(Long id) {
        return ResponseEntity.ok().body(seasonRepository.findById(id));
    }
}
