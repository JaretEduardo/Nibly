import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonHeader, IonIcon, IonItem, IonLabel, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplaneOutline, analyticsOutline, peopleOutline, qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
  imports: [
    IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonAvatar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonListHeader
  ],
  standalone: true
})
export class ConsumptionComponent  implements OnInit {

  constructor() {
    addIcons({ qrCodeOutline, airplaneOutline, peopleOutline, analyticsOutline });
  }

  ngOnInit() {}

}
