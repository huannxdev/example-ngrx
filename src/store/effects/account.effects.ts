import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { AccountService } from "../service/Account.service";
import { Observable } from "rxjs/Observable";
import { Action } from '@ngrx/store';
import * as action from '../actions/account.action';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountEffects {
    constructor(private action$: Actions, private accountService: AccountService) {

    }
    @Effect()
    login: Observable<Action> = this.action$
        .ofType(action.ActionTypes.LOGIN)
        .map((action: action.LoginAction) => action.payload)
        .mergeMap(item =>
            this.accountService.login(item)
                .map((email: string) => new action.LoginSuccessfullyAction(email))
                .catch((error: any) => Observable.throw(error.errorMessgae))
        );
}