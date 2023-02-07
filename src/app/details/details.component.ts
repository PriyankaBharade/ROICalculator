import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  formatLabel(value: number): string {
    // if (value >= 1000) {
    //   return Math.round(value / 1000) + 'k';
    // }

    return `${value}`;
  }
}
