package com.br.suits.services;

import com.br.suits.models.Episode;
import com.br.suits.repositories.EpisodeRepository;
import com.br.suits.repositories.SeasonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EpisodeService {
    @Autowired
    private EpisodeRepository episodeRepository;
    @Autowired
    private SeasonRepository seasonRepository;

    public ResponseEntity getAllEpisode(){
        return ResponseEntity.ok().body(episodeRepository.findAll());
    }

    public ResponseEntity getAllEpisodesFromSeason(Long id){
        if (!seasonRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Season not found");
        }

        // Encontrar episódios da temporada
        List<Episode> episodes = episodeRepository.findBySeasonId(id);

        // Verificar se existem episódios
        if (episodes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No episodes found for season with id " + id);
        }

        return ResponseEntity.ok().body(episodes);
    }
}
