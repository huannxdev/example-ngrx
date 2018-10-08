import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../share/User';
import { Store } from '@ngrx/store';
import * as reducer from '../../store/reducers';
import * as userAction from '../../store/actions/user.action';

@Component({
  selector: 'page-edit-user-form',
  templateUrl: 'edit-user-form.html',
})
export class EditUserFormPage {
  public group: FormGroup;
  private currentUser: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,private store: Store<reducer.State>) {
    this.currentUser = navParams.get('user');
    this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserFormPage');
  }
  initForm(){
    this.group = new FormGroup({
      FirstName: new FormControl(this.currentUser.firstname),
      LastName: new FormControl(this.currentUser.lastname),
      DateOfBirth: new FormControl(this.currentUser.dateofbirth),
    });
  }

  updateForm(){
    this.currentUser.firstname = this.group.value.FirstName;
    this.currentUser.lastname = this.group.value.LastName;
    this.currentUser.dateofbirth = this.group.value.DateOfBirth;
  }

  save(){
    this.updateForm();
    this.store.dispatch(new userAction.UpdateUserAction(this.currentUser));
    this.navCtrl.pop();
  }
}
