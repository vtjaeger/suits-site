package com.br.suits.services;

import com.br.suits.repositories.EpisodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EpisodeService {
    @Autowired
    private EpisodeRepository episodeRepository;

    public ResponseEntity getAllEpisode(){
        return ResponseEntity.ok().body(episodeRepository.findAll());
    }
}
