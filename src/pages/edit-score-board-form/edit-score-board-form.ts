import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Scoreboard } from '../../share/Scoreboard';
import { Store } from '@ngrx/store';
import * as reducer from '../../store/reducers';
import * as scoreBoardAction from '../../store/actions/scoreboard.action';
import * as userAction from '../../store/actions/user.action';

@Component({
  selector: 'page-edit-score-board-form',
  templateUrl: 'edit-score-board-form.html',
})
export class EditScoreBoardFormPage {
  public group: FormGroup;
  private currentScoreBoard: Scoreboard;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<reducer.State>) {
    this.currentScoreBoard = navParams.get('scoreBoard');
    this.initForm();
  }

  initForm() {
    this.group = new FormGroup({
      Math: new FormControl(this.currentScoreBoard.math),
      Physical: new FormControl(this.currentScoreBoard.physical),
      Chemistry: new FormControl(this.currentScoreBoard.chemistry),
    });
  }
  updateForm(){
    this.currentScoreBoard.math = Number(this.group.value.Math);
    this.currentScoreBoard.physical = Number(this.group.value.Physical);
    this.currentScoreBoard.chemistry = Number(this.group.value.Chemistry);
  }
  save(){
    this.updateForm();
    this.store.dispatch(new scoreBoardAction.UpdateScoreBoardAction(this.currentScoreBoard));
    this.store.dispatch(new userAction.UpdateToltalPointUserAction({id: this.currentScoreBoard.idStudent,math:this.currentScoreBoard.math
    ,physical:this.currentScoreBoard.physical,chemistry: this.currentScoreBoard.chemistry}));
    this.navCtrl.pop();
  }
}
