import {Component, OnInit} from '@angular/core';
import {CardService} from "../services/card.service";
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.css']
})
export class EditTimelineComponent implements OnInit {

  cards = this.cardService.getAllCards();

  constructor(private cardService: CardService,
              private formBuilder: FormBuilder) {
  }

  onDeleteCardById(id: number | any) {
    this.cardService.onDeleteCardById(id);
  }

  addCard() {
    console.log("Ajout")
  };

  addCardForm = this.formBuilder.group({
    formName: '',
    formDateCreation:'',
    formUrl:'',
    formDescription:''
  });

  ngOnInit(): void {

  }

}
