import { Component, OnInit } from '@angular/core';
import { BitmaskValue } from 'src/app/shared/bitmask-value';

const CLASSES: BitmaskValue[] = [
  { value: 0, name: `Warrior` },
  { value: 1, name: `Knight` },
  { value: 2, name: `Archer` },
  { value: 3, name: `Thief` },
  { value: 4, name: `Paladin` },
  { value: 5, name: `Wizard` },
  { value: 6, name: `Enchanter` },
  { value: 7, name: `Cleric` },
  { value: 8, name: `Necromancer` },
  { value: 9, name: `Summoner` },
]

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  classes = CLASSES;

  ngOnInit(): void {
  }

}
