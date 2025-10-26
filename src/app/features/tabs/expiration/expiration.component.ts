import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonHeader, IonIcon, IonItem, IonLabel, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonListHeader, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline, cameraOutline, settingsOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-expiration',
  templateUrl: './expiration.component.html',
  styleUrls: ['./expiration.component.scss'],
  imports: [IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonAvatar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonListHeader, IonGrid, IonRow, IonCol],
  standalone: true,
})
export class ExpirationComponent  implements OnInit {

  constructor() { 
    addIcons({ settingsOutline, cameraOutline, warningOutline, alertCircleOutline });
  }

  ngOnInit() {}

}
