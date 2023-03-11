import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Profile } from '../types/Profile.interface';


@Injectable({providedIn: 'root'})
export class ProfileServices{

  constructor(private http: HttpClient) {}
  public LeaderData!: Profile[]

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      'http://localhost:3306/profile'
    );
  }

  createProfile(
    formData: Partial<Profile>,
  ): Observable<Profile> {
    return this.http.post<Profile>(
      'http://localhost:3306/profile',
      {
        /*start: formData.start,
        end: formData.end,
        title: formData.title,
        day: formData.day,*/
      },
      
    );
  }
}