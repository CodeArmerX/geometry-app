import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-circle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class Circle {
  radius: Number | null = null
  perimeter: Number | null = null
  calcPerimeter() {
    if (this.radius !== null) {
      this.perimeter = 2 * Number(Math.PI) * Number(this.radius)
      this.perimeter = Number(this.perimeter.toFixed(2))
    }
    return null;
  }
  handleInput(event: any) {
    this.radius = event.target.value
  }
}
