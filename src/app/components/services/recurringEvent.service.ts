import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { RecurringEvent } from '../types/Recurring.interface';


@Injectable({providedIn: 'root'})
export class RecurringEventService{

  constructor(private http: HttpClient) {}
  public RecurringData!: RecurringEvent[]

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getEvent(): Observable<RecurringEvent[]> {
    return this.http.get<RecurringEvent[]>(
      'http://localhost:3306/calendar'
    );
  }

  createEvent(
    formData: Partial<RecurringEvent>,
  ): Observable<RecurringEvent> {
    return this.http.post<RecurringEvent>(
      'http://localhost:3306/calendar',
      {
        /*start: formData.start,
        end: formData.end,
        title: formData.title,
        day: formData.day,*/
      },
      
    );
  }
}