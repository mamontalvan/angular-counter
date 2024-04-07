
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public eventEmitIndexCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: ICharacter[] =
  //Valores por defecto, en caso de no ser enviados
  [ { name: 'Character - Trunk', power: 10},
    { name: 'Character - Other', power: 34},
  ];

  onEmitIndex(idCharacter?:string): void {
    console.log('ListComponent: click onEmitIndex', idCharacter);
    if(!idCharacter) return
    this.eventEmitIndexCharacter.emit(idCharacter);
  }
}
