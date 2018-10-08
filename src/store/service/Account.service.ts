import { Injectable } from "@angular/core";
import { Accounts } from "../../share/Account";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { OAuthService } from "angular-oauth2-oidc";

@Injectable()
export class AccountService {
    constructor(private oauthService: OAuthService) {
    }
    public login(account: Accounts): Observable<string> {
        return Observable.create((observer: Subject<string>) => {
            this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(account.email, account.password).then(() => {
                return observer.next(account.email);
            });
        });
    }
}