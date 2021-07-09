import { Component, OnInit } from '@angular/core';
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.css']
})
export class EditTimelineComponent implements OnInit {

  cards = this.cardService.getAllCards();

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

}
