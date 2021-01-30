import { Component, OnInit } from '@angular/core';
import { BitmaskValue } from 'src/app/shared/bitmask-value';

const NPCS: BitmaskValue[] = [
  { name: `Aggro`, value: 0 },
  { name: `Merchant`, value: 1 },
  { name: `Banker`, value: 2 },
  { name: `Guard`, value: 3 },
  { name: `Show quest icon`, value: 5 },
  { name: `Friendly`, value: 6 },
  { name: `Enemy`, value: 7 },
  { name: `Switch Aggro`, value: 8 },
  { name: `Retreat When Low`, value: 9 },
  { name: `Mercenary manager`, value: 10 },
  { name: `Guild manager`, value: 11 },
  { name: `Blacksmith`, value: 12 },
  { name: `Hide dead nametag`, value: 13 },
  { name: `Arena dude`, value: 14 },
  { name: `Stat redistributor`, value: 15 },
  { name: `Unknown1`, value: 16 },
  { name: `Unknown2`, value: 17 },
  { name: `Unknown3`, value: 19 },
  { name: `Unknown4`, value: 21 },
  { name: `Unknown5`, value: 22 },
]

@Component({
  selector: 'app-npcs',
  templateUrl: './npcs.component.html',
  styleUrls: ['./npcs.component.scss']
})
export class NpcsComponent implements OnInit {

  constructor() { }

  npcs = NPCS;

  ngOnInit(): void {
  }

}
