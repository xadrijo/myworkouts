import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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
    public workoutProvider: Workout,
    private loadingCtrl: LoadingController) {}

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

    let loading = this.loadingCtrl.create();
    loading.present();

    this.workoutProvider.addWorkout(workout).subscribe(data => {
      result = data;
      loading.dismiss()
      
      this.navCtrl.setRoot(WorkoutsPage);
    }, 
    err => console.log(err), 
    () => console.log('Workout Added'));

  }



}
