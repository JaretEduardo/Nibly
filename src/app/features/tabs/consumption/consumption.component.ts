import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonHeader, IonIcon, IonItem, IonLabel, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonListHeader, IonRefresher, IonRefresherContent, RefresherCustomEvent, IonInfiniteScroll, IonInfiniteScrollContent, InfiniteScrollCustomEvent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplaneOutline, analyticsOutline, peopleOutline, qrCodeOutline } from 'ionicons/icons';
import { take, timeout, TimeoutError } from 'rxjs';
import { Consumption } from 'src/app/core/services/consumption';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss'],
  imports: [
    CommonModule, IonInfiniteScroll, IonInfiniteScrollContent, IonHeader, IonToolbar, IonItem, IonLabel, IonIcon, IonAvatar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonLabel, IonListHeader, IonRefresher, IonRefresherContent
  ],
  standalone: true
})
export class ConsumptionComponent  implements OnInit {
  data: any[] = [];

  constructor(private consumptionService: Consumption) {
    addIcons({ qrCodeOutline, airplaneOutline, peopleOutline, analyticsOutline });
  }

  ngOnInit() {
    this.getData();
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.getData();
      event.target.complete();
    }, 2000);
  }

  getData() {
    this.consumptionService.getData().pipe(timeout(15000), take(1)).subscribe({
      next: (response) => {
        if (response.result) {
          this.data = response.data;
          console.log('DATOS: ', this.data);
        } else {
          this.data = [];
        }
      },
      error: (error: TimeoutError) => {
        if (error instanceof TimeoutError) {
          this.getData();
          return;
        }
        
        console.log(error);
      }
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.getData();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
