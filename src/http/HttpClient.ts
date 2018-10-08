import { Http } from "./http.inteface";

export class HttpClient implements Http {
    constructor(private http: HttpClient){
    }
    get(url: string, params?: any, options?: any) {
        options.params = params;
        options.withCredentials = true;
        return this.http.get(url, options);
    }    

    post(url: string, data: any, options?: any) {
        return (this.http.post(url, data, options));
    }


}