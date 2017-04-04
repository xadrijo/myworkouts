import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  addWorkout(workout) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers: headers})
      .map(res => res.json());
  }

  deleteWorkout(workoutId) {
    return this.http.delete(this.workoutsUrl + '/' + workoutId +'?apiKey=' + this.apiKey)
      .map(res => res.json());
  }

}
