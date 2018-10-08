import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AccountEffects } from '../store/effects/account.effects';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AccountService } from '../store/service/Account.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OverviewPage } from '../pages/overview/overview';
import { CreateUserFormPage } from '../pages/create-user-form/create-user-form';
import { EditUserFormPage } from '../pages/edit-user-form/edit-user-form';
import { EditScoreBoardFormPage } from '../pages/edit-score-board-form/edit-score-board-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverviewPage,
    CreateUserFormPage,
    EditUserFormPage,
    EditScoreBoardFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AccountEffects]),
    StoreDevtoolsModule.instrument({maxAge: 99}),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://www.angular.at/api'],
        sendAccessToken: true
      }
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverviewPage,
    CreateUserFormPage,
    EditUserFormPage,
    EditScoreBoardFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountService
  ]
})
export class AppModule {}
