import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Workout } from '../../providers/workout';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [Workout]
})
export class WorkoutsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutProvider: Workout
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

  ngOnInit(){
    this.workoutProvider.getWorkouts().subscribe(workouts => {
      console.log(workouts);
    })
  }

}
