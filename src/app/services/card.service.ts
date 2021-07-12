import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card} from "../card";

@Injectable({
  providedIn: 'root'
})

export class CardService {
  baseAPIUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  getAllCards() {
    return this.http.get<Card[]>(this.baseAPIUrl + "/api/timeline/1/card")
  }

  getCardsByTimeLine(timeLineId: number) {
    return this.http.get<Card[]>(this.baseAPIUrl + "/api/timeline/" + timeLineId + "/card");
  }

  onDeleteCardById(cardId: number) {
    this.http.delete(this.baseAPIUrl + "/api/timeline/" + 1 + "/card/" + cardId).subscribe();

  }

  // createCard(cardId: number) {
  //   this.http.post(this.baseAPIUrl)}

}
