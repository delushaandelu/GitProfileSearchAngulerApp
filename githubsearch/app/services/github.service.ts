import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username = 'delushaandelu';
  private client_id = '4bd0d3565f973f387d67';
  private client_secret = '2742df951a94e2936b0404ccbb0397d10a2a95a6';

    constructor(private _http:Http){
        console.log('Github Service Init...');
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}
