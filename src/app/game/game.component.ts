import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CardService} from "../services/card.service";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../card";


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private cardService: CardService,
              private route: ActivatedRoute) {
  }
//Tableau des cartes à deviner
  cardsToGuess: Card[] = [];
// carte à deviner
  guessingCard: Card | undefined;
//Tableau des cartes déjà devinées
  cardsAlreadyGuessed: Card[] = [].sort();

  //fonction pour identifier un id aléatoirement
  getIdRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }


  ngOnInit(): void {

     //Affichage des cartes en fonction de l'id de la route
    const routeParams = this.route.snapshot.paramMap;
    const timeLineIdFromRoute = Number(routeParams.get('id'));

    this.cardService.getCardsByTimeLine(timeLineIdFromRoute).subscribe(cardList => {

      let cardId = this.getIdRandom(0,22);
      console.log(cardId);
      // Cartes a deviner
      this.cardsToGuess = cardList;
      //La dernière carte du tableau  est proposée
     // this.guessingCard = this.cardsToGuess.pop();
      this.guessingCard = this.cardsToGuess[cardId];
    });
  }

  // Récupération de la date saisie dans le formulaire
  guessForm = this.formBuilder.group({
    formDate: ''
  });

  guessCard() {
    //affichage de la date saisie
    //console.log(this.guessForm.get("formDate")?.value);
    console.log(typeof this.guessingCard?.date);

    // Si la date est bonne alors je change la guessingCard (la carte à deviner)
    if (this.guessForm.get("formDate")?.value === this.guessingCard?.date.toString().substr(0, 4)) {
      this.cardsAlreadyGuessed.push(this.guessingCard as Card);
      this.guessingCard = this.cardsToGuess.pop();
      this.guessForm.reset();
    }
    else{
      window.alert('Tu peux recommencer');
      this.guessForm.reset();
    }

  }
}
