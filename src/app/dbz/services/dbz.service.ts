import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: ICharacter[] = [
    { id: uuid(), name: 'Krill', power: 1000},
    { id: uuid(), name: 'Goku', power: 950},
    { id: uuid(), name: 'Vegeta', power: 1034},
    { id: uuid(), name: 'Crack', power: 930},
  ];

  addCharacter(character: ICharacter): void{
    const newCharacter: ICharacter = { id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string){
    console.log('DBZ-SERVICE: deleteCharacterById', id);
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
