import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public eventEmiterNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  public character: ICharacter = { name: 'Test Maria', power: 1 }

  addCharacter():void {
    console.log('ADD-CHARACTER Component',this.character);
    if(this.character.name.length === 0) return;
    this.eventEmiterNewCharacter.emit(this.character);

  }
}
