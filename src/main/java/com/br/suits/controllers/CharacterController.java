package com.br.suits.controllers;

import com.br.suits.dtos.CharacterDto;
import com.br.suits.dtos.CharacterUpdateDto;
import com.br.suits.services.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/character")
@CrossOrigin(origins = "*")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    @GetMapping
    public ResponseEntity getAllCharacters(){
        return characterService.getAllCharacters();
    }

    @GetMapping("/{id}")
    public ResponseEntity getOneCharacter(@PathVariable Long id){
        return characterService.getOneCharacter(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateCharacter(@PathVariable Long id, @RequestBody CharacterUpdateDto dto) {
        return characterService.updateCharacter(id, dto);
    }
}