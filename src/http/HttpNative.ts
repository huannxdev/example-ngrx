import { Http } from "./http.inteface";
import { HTTP } from '@ionic-native/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export class HttpNative implements Http {
    constructor(private http: HTTP){

    }
    get(url: string, params?: any, options?: any) {
        let responseData = this.http.get(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }    
    post(url: string, data: any, options?: any) {
        let responseData= this.http.post(url,data,options)
        .then(resp => options.responseType =='text'? resp.data: JSON.parse(resp.data));
        return Observable.fromPromise(responseData);
    }
}