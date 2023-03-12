import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { LeaderboardItem } from '../models/Leaderboard.interface';


@Injectable({providedIn: 'root'})
export class LeaderboardService{

  constructor(private http: HttpClient) {}
  public LeaderData!: LeaderboardItem[]

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getLeader(): Observable<LeaderboardItem[]> {
    return this.http.get<LeaderboardItem[]>(
      'http://localhost:3000/leaderboard'
    );
  }

  createLeader(
    formData: Partial<LeaderboardItem>,
  ): Observable<LeaderboardItem> {
    return this.http.post<LeaderboardItem>(
      'http://localhost:3000/leaderboard',
      {
        /*start: formData.start,
        end: formData.end,
        title: formData.title,
        day: formData.day,*/
      },
      
    );
  }
}