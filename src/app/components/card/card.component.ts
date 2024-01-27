import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
// import ionicons

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonIcon, IonButton],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  title = 'Mascota Perdida';
  date = new Date().toLocaleDateString();
}
