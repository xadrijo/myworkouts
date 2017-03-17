import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Workout {
  public apiKey: string ;
  public workoutsUrl: string; 

  constructor(public http: Http) {
    this.apiKey = 'eX-ePqnM5GouvcrnzknXEJITVGFsLgX0';
    this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutapp/collections/workouts';
  }

  getWorkouts() {
    return this.http.get(this.workoutsUrl + '?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

}
