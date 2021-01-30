import { Component, Input, OnInit } from '@angular/core';
import { BitmaskValue } from 'src/app/shared/bitmask-value';

@Component({
  selector: 'app-bitmask',
  templateUrl: './bitmask.component.html',
  styleUrls: ['./bitmask.component.scss']
})
export class BitmaskComponent implements OnInit {

  constructor() { }

  @Input()
  values: BitmaskValue[];
  bitmask: number = 0;
  padSize: number;

  updateChecks() {
    this.values.forEach(v => v.checked = !!(+this.bitmask & (1 << v.value)));
  }

  check(val: BitmaskValue) {
    this.bitmask ^= (1 << val.value);
  }

  ngOnInit(): void {
    this.padSize = this.values.length > 16 ? 32 : (this.values.length > 8 ? 16 : 8)
  }

}
