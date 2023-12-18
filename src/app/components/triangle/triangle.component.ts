import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css'],
})
export class Triangle {
  constructor() { }
  
  shapes: {} = {}

  perimeter: number | null | unknown[] | unknown = null

  handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(Object.values(this.shapes))
    this.perimeter =
    Object.values(this.shapes)
    .reduce((acc,key) => {
      return Number(acc) + Number(key)
    })
    console.log(this.perimeter)
  }
  handleInput(event: any) {
    const { value, name } = event.target;
    const allInputs = {
      [name]: value
    };
    this.shapes = {
      ...this.shapes,
      ...allInputs
    };
  }
  
}
