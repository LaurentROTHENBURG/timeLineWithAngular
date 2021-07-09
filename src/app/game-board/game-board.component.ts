import { Component, OnInit } from '@angular/core';
import {TimeLineServices} from "../services/timeLine.services";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})

export class GameBoardComponent implements OnInit {
  timeLines = this.timeLineService.getTimeLine();

  constructor(private timeLineService: TimeLineServices) {
  }

  ngOnInit(): void {
  }

  onDeleteTimeLine(id: number | any) {
    this.timeLineService.onDeleteTimeLine(id);
  }
}
