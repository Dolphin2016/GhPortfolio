import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {environment} from '../environments/environment';
import {Repository} from './repository';
import {Organization} from './organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }
  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + '/repos');
  }

  getOrganization(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userUrl + '/orgs');
  }
}
