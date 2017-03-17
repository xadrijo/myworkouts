import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WorkoutsPage } from '../workouts/workouts';
import { Workout } from '../../providers/workout';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [Workout]
})
export class AddWorkoutPage {
  public title: string;
  public note: string;
  public type: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutProvider: Workout) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }
    console.log(workout);
    var result: any;

    this.workoutProvider.addWorkout(workout).subscribe(data => {
      result = data;
    }, 
    err => console.log(err), 
    () => console.log('Workout Added'));

    this.navCtrl.setRoot(WorkoutsPage);
  }

}
