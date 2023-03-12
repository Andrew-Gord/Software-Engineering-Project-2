export interface RecurringEvent {
    title: string;
    rrule?:{
      freq:any;
      bymonth?:number;
      bymonthday?:number;
      byweekday?: any;
    }
}