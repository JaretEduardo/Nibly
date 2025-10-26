import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonHeader, IonIcon, IonItem, IonLabel, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonListHeader, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline, cameraOutline, settingsOutline, warningOutline } from 'ionicons/icons';
import { timeout, TimeoutError } from 'rxjs';
import { ExpirationService } from 'src/app/core/services/expiration-service';

@Component({
  selector: 'app-expiration',
  templateUrl: './expiration.component.html',
  styleUrls: ['./expiration.component.scss'],
  imports: [IonHeader, CommonModule, IonToolbar, IonItem, IonLabel, IonIcon, IonAvatar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonListHeader, IonGrid, IonRow, IonCol],
  standalone: true,
})
export class ExpirationComponent  implements OnInit {
  products: any
  count: any
fechaActual: string = new Date().toISOString().split('T')[0];

constructor(private expirationService: ExpirationService) {
  }

  ngOnInit() {
    this.getProducts()
    this.getCount()
  }

  getCount(){
    
    this.expirationService.getCount().pipe(timeout(15000)).subscribe({
      next: (response) => {
        this.count = response.data
        console.log(response)

      },
      error: (error) => {

        if (error instanceof TimeoutError) {
          this.getCount();
          return;
        }
        console.log('Ha ocurrido un error inesperado');
        console.log(error)
      }
    });
  }

  getProducts(){
    
    this.expirationService.getAll().pipe(timeout(15000)).subscribe({
      next: (response) => {
        this.products = response.data
        console.log(response)

      },
      error: (error) => {

        if (error instanceof TimeoutError) {
          this.getProducts();
          return;
        }
        console.log('Ha ocurrido un error inesperado');
        console.log(error)
      }
    });
  }
}
