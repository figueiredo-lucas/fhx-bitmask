import { Component, OnInit } from '@angular/core';
import { BitmaskValue } from 'src/app/shared/bitmask-value';

const ITEMS: BitmaskValue[] = [
  { name: `Sword`, value: 0 },
	{ name: `Bow`, value: 1 },
	{ name: `Mace`, value: 2 },
	{ name: `Axe`, value: 3 },
	{ name: `Pole`, value: 4 },
	{ name: `Dagger`, value: 5 },
	{ name: `Dart`, value: 6 },
	{ name: `Wand`, value: 7 },
	{ name: `Staff`, value: 8 },
	{ name: `Robe`, value: 11 },
	{ name: `Shield`, value: 12 },
	{ name: `Helmet`, value: 13 },
	{ name: `Jacket`, value: 14 },
	{ name: `Pants`, value: 15 },
	{ name: `Gloves`, value: 16 },
	{ name: `Shoes`, value: 17 },
	{ name: `Cape`, value: 18 },
	{ name: `Necklace`, value: 19 },
	{ name: `Ring`, value: 20 },
	{ name: `Circlet`, value: 21 }
]

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  items = ITEMS;

  ngOnInit(): void {
  }

}
