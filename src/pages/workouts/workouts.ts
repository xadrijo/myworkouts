import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

import { Workout } from '../../providers/workout';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [Workout]
})
export class WorkoutsPage {
  public workouts: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutProvider: Workout
  ) {
    
  }

  ionViewWillEnter() {
    console.log('Runs when the page is about to enter and become the active page.');
    this.workoutProvider.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
      console.log(this.workouts);
    });
  }


  ngOnInit(){
    this.workoutProvider.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }

}
