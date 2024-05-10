package com.br.suits.services;

import com.br.suits.dtos.CharacterDto;
import com.br.suits.dtos.CharacterUpdateDto;
import com.br.suits.models.Character;
import com.br.suits.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepository;

    public ResponseEntity getAllCharacters(){
        List<Character> characterList = characterRepository.findAll();
        return ResponseEntity.ok().body(characterList);
    }

    public ResponseEntity getOneCharacter(Long id){
        Optional<Character> characterOptional = characterRepository.findById(id);
        if(characterOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Character character = characterOptional.get();
        return ResponseEntity.ok().body(character);
    }

    public ResponseEntity updateCharacter(Long id, CharacterUpdateDto dto) {
        Optional<Character> characterOptional = characterRepository.findById(id);
        if(characterOptional.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        Character character = characterOptional.get();
        character.setName(dto.name());
        character.setAge(dto.age());
        character.setRealName(dto.realName());
        return ResponseEntity.ok().body(characterRepository.save(character));
    }
}