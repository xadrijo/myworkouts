import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { WorkoutsPage } from '../workouts/workouts';
import { Workout } from '../../providers/workout';

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
  providers: [Workout]
})
export class WorkoutDetailsPage {
  public workout: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutProvider: Workout,
    private loadingCtrl: LoadingController) {
    this.workout = this.navParams.get('workout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
  }

  deleteWorkout(workoutId){
    let loading = this.loadingCtrl.create();
    loading.present();

    var result: any;
    this.workoutProvider.deleteWorkout(workoutId).subscribe(data => {
      result = data;
      loading.dismiss()
      this.navCtrl.setRoot(WorkoutsPage);
    }, 
    err => console.log(err), 
    () => console.log('Workout Deleted'));
   
  }

}
