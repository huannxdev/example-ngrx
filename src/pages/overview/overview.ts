import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { Store } from '@ngrx/store';
import * as reducer from '../../store/reducers';
import * as userAction from '../../store/actions/user.action';
import { User } from '../../share/User';
import { CreateUserFormPage } from '../create-user-form/create-user-form';
import { EditUserFormPage } from '../edit-user-form/edit-user-form';
import { Scoreboard } from '../../share/Scoreboard';
import { EditScoreBoardFormPage } from '../edit-score-board-form/edit-score-board-form';
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  public listUser: User[] = [];
  public listScoreBoard: Scoreboard[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private oauthService: OAuthService, private store: Store<reducer.State>) {
    this.store.select('user').select('listUser').subscribe(data => {
      this.listUser = data;
    });
    this.store.select('scoreBoard').select('listScoreBoard').subscribe(data => {
      this.listScoreBoard = data;
    })
  }

  addNewUser(){
    this.navCtrl.push(CreateUserFormPage);
  }

  editUser(user: User){
    this.navCtrl.push(EditUserFormPage,{
      user: user
    });
  }
  deleteUser(user: User){
    this.store.dispatch(new userAction.DeleteUserAction(user));
  }
  logout(){
    this.oauthService.logOut();
  }

  editScore(scoreBoard: Scoreboard){
    this.navCtrl.push(EditScoreBoardFormPage,{
      scoreBoard: scoreBoard
    });
  }
}
