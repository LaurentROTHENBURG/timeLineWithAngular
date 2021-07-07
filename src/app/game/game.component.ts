import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  dateForm = this.formBuilder.group({
    date: ''
  });

  card = this.cardService.getCard();

  constructor(private formBuilder: FormBuilder, private cardService: CardService) {
  }

  ngOnInit(): void {
  }

}
