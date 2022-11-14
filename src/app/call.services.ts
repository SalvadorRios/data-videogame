import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })
export class CallService {

    constructor(private http: HttpClient) { }

    get(){
    return this.http.get('http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=19F433438786C051485827AB4F7E2DB1&format=json', {
    });
    }

}
