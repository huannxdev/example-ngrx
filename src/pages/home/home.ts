import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Accounts } from '../../share/Account';
import 'rxjs/add/operator/filter';
import { Store } from '@ngrx/store';
import * as reducer from '../../store/reducers';
import * as accountAction from '../../store/actions/account.action';
import { OAuthService } from 'angular-oauth2-oidc';
import { OverviewPage } from '../overview/overview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public group: FormGroup;
  public account: Accounts;
  public currentUser: string;
  constructor(public navCtrl: NavController, public platform: Platform, private store: Store<reducer.State>, private oauthService: OAuthService) {
    this.initForm();
    this.updateForm();
    this.store.select('account').select('currentUser').subscribe(data => {
      if(data){
        this.currentUser = data;
        console.log(data);
      }
    });
  }

  initForm(){
    this.group = new FormGroup({
      Email: new FormControl('',[Validators.required]),
      Password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  updateForm(){
    this.group.valueChanges.filter(data => this.group.valid)
    .subscribe((data) => {
      this.account = new Accounts(<Accounts>{
        email: data.Email,
        password: data.Password
      });
    })
  }

  login(){
    this.store.select('account').select('currentUser').subscribe(data => {
      if(data){
        this.navCtrl.push(OverviewPage);
      }
    });
      this.store.dispatch(new accountAction.LoginAction(this.account));
  }

  get access_token() {
    return this.oauthService.getAccessToken();
  }

  get access_token_expiration() {
    return this.oauthService.getAccessTokenExpiration();

  }

  get givenName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get familyName() {
    var claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['family_name'];
  }

}
