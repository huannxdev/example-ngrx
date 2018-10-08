import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OAuthService } from 'angular-oauth2-oidc';
import { authLoginConfig } from './auth-login-config';
import { filter } from 'rxjs/operators';
import { OverviewPage } from '../pages/overview/overview';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private oauthService: OAuthService) {
    this.oauthService.configure(authLoginConfig);
    this.oauthService.loadDiscoveryDocument();
    this.refreshToken();
    this.checkAuth();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  refreshToken() {
    this.oauthService.events
      .pipe(filter(e => e.type === 'token_expires'))
      .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.debug('received token_expires event', e);
        this.oauthService.silentRefresh().then(data => {
          console.log('refresh token');
        }
        );
      });
  }

  checkAuth() {
    if (this.oauthService.getAccessToken()) {
      this.rootPage = OverviewPage;
    }
  }
}

