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

//Création des cartes
  cardsToGuess: Card[] = [];
  guessingCard: Card | undefined;
  cardsAlreadyGuessed: Card[] = [];


  ngOnInit(): void {
    //Affichage des cartes en fonction de l'id de la route
    const routeParams = this.route.snapshot.paramMap;
    const timeLineIdFromRoute = Number(routeParams.get('id'));

    this.cardService.getCardsByTimeLine(timeLineIdFromRoute).subscribe(cardList => {
      // stocker les cartes a deviner
      this.cardsToGuess = cardList;
      // c'est la dernière carte du tableau qui est proposée
      this.guessingCard = this.cardsToGuess.pop();
    });
  }

  // Récupération de la date saisie dans le formulaire
  guessForm = this.formBuilder.group({
    formDate: ''
  });

  // une fonction "deviner"
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
    // et je remplis mon tableau de cartes déjà devinées guessedCards

    // Sinon je dis au joueur que ce n'est pas gagné


  }
}
