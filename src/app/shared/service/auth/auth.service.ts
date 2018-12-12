import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

export const TOKEN_NAME = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
    };

  constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(
            `${environment.apiUrl}/login`,
            JSON.stringify({ email: email, password: password }),
            this.httpOptions
            )
            .pipe(map(resp => {
                console.log(resp);
                // login successful if there's a jwt token in the response
                if (resp && resp.data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(resp.data));
                }

                return resp.data;
            }));
    }

    // login(user): Promise<string> {
    //     return this.http
    //         .post(`${this.url}/login`, JSON.stringify(user), { headers: this.headers })
    //         .toPromise()
    //         .then(res => res.toString());
    // }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
    }

    getToken() {
        return sessionStorage.getItem('token');
    }

    setToken(token: string): void {
        sessionStorage.setItem(TOKEN_NAME, token);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);

        if (decoded.exp === undefined) { return null; }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) {
            token = this.getToken();
        }
        if (!token) {
            return true;
        }

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf());
    }

}
