interface IDateTime {
  date: string;  // date in the format "YYYYMMDD"
  time?: string; // time in the format "hhmmss"
  timezone?: string; // timezone in the format "Z" for UTC or "+hhmm" / "-hhmm"
}

export interface IEvent {
  dtStamp: IDateTime;  // The date/time at which the iCalendar object was created
  uid: string;         // A globally unique identifier associated with the iCalendar object
  dtStart: IDateTime;  // The date/time at which the event starts
  summary?: string;    // Optional: event description
  dtEnd?: IDateTime;   // Optional: The date/time at which the event ends
  location?: string;   // Optional: event location
  customFields?: Array<{ key: string, value: string | number }>; // Optional: custom fields
}
