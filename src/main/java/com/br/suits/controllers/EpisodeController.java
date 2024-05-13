package com.br.suits.controllers;

import com.br.suits.services.EpisodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("episode")
@CrossOrigin(origins = "*")
public class EpisodeController {
    @Autowired
    private EpisodeService episodeService;

    @GetMapping
    public ResponseEntity getAllEpisode(){
        return episodeService.getAllEpisode();
    }

    @GetMapping("/{id}")
    public ResponseEntity getAllEpisodesFromSeason(@PathVariable Long id){
        return episodeService.getAllEpisodesFromSeason(id);
    }
}
