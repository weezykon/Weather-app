import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-trailing-whitespace

  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  today: string;

  day1Name: string;
  day1State: string;
  day1Temp: string;

  day2Name: string;
  day2State: string;
  day2Temp: string;

  day3Name: string;
  day3State: string;
  day3Temp: string;

  day4Name: string;
  day4State: string;
  day4Temp: string;

  day5Name: string;
  day5State: string;
  day5Temp: string;

  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  sub4: Subscription;
  sub5: Subscription;

  constructor(public activeRouter: ActivatedRoute, public weather: WeatherService) { }

  ngOnInit() {

    const todayNumberInWeek = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed',  'Thu', 'Fri', 'Sat'];
    this.today = days[todayNumberInWeek];

    this.activeRouter.paramMap.subscribe((route: any) => {
      this.city = route.params.city;
      this.sub1 = this.weather.getWeatherState(this.city).subscribe((state) => this.state = state);
    });
  }

}
