import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TimeLine} from "../timeLine";

@Injectable({
  providedIn: 'root'
})

export class TimeLineServices {

  baseAPIUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getTimeLine() {
    return this.http.get<TimeLine[]>(this.baseAPIUrl + "/api/timeline")
  }

  onDeleteTimeLine(timeLineId: number) {
    this.http.delete(this.baseAPIUrl + "/api/timeline/" + timeLineId).subscribe();


  }
}
