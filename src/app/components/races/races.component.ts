import { Component, OnInit } from '@angular/core';
import { BitmaskValue } from 'src/app/shared/bitmask-value';

const RACES: BitmaskValue[] = [
  { value: 0, name: `Human` },
  { value: 1, name: `Barbarian` },
  { value: 2, name: `High Elf` },
  { value: 3, name: `Wood Elf` },
  { value: 4, name: `Gnome` },
  { value: 5, name: `Dwarf` },
]

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  constructor() { }

  races = RACES;

  ngOnInit(): void {
  }

}
