import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as reducer from '../../store/reducers';
import * as userAction from '../../store/actions/user.action';
import { User } from '../../share/User';
import * as scoreBoardAction from '../../store/actions/scoreboard.action';
import { Scoreboard } from '../../share/Scoreboard';

@Component({
  selector: 'page-create-user-form',
  templateUrl: 'create-user-form.html',
})
export class CreateUserFormPage {
  public group: FormGroup;
  currentDate = new Date().toISOString().substring(0, 10);
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<reducer.State>) {
    this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserFormPage');
  }

  initForm(){
    this.group = new FormGroup({
      Id: new FormControl(''),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      DateOfBirth: new FormControl(this.currentDate),
    })
  }

  updateForm(){
    this.user = new User(<User>{
      id: this.group.value.Id,
      firstname: this.group.value.FirstName,
      lastname: this.group.value.LastName,
      dateofbirth: this.group.value.DateOfBirth,
      totalPoint: 0
    });
  }

  createScoreBoard(){
    let scoreboard = new Scoreboard(<Scoreboard>{
      idStudent: this.user.id,
      fullname: this.user.firstname + this.user.lastname,
      math: 0,
      physical: 0,
      chemistry: 0
    });
    this.store.dispatch(new scoreBoardAction.AddScoreBoardAction(scoreboard));
  }

  save(){
    this.updateForm();
    this.store.dispatch(new userAction.AddUserAction(this.user));
    this.createScoreBoard();
    this.navCtrl.pop();
  }
}
