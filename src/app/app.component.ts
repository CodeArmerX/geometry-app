import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {IonicModule} from '@ionic/angular'
import { Circle } from './components/circle/circle.component';
import { Triangle } from './components/triangle/triangle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IonicModule, Circle, Triangle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'geometry-app';
  selected = 'triangle'
  handleChange(event: any) {
    this.selected = event.target.value;
  }
}