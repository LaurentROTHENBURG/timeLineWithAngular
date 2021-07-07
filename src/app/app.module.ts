import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {GameBoardComponent} from './game-board/game-board.component';
import {AddTimelineComponent} from './add-timeline/add-timeline.component';
import {GameComponent} from './game/game.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { EditTimelineComponent } from './edit-timeline/edit-timeline.component';
import {CardService} from "./services/card.service";

const appRoutes: Routes = [
  {path: '', component: GameBoardComponent},
  {path: 'timeline', component: GameBoardComponent},
  {path: 'timeline-play', component: GameComponent},
  {path: 'timeline-edit', component: EditTimelineComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    AddTimelineComponent,
    GameComponent,
    EditTimelineComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})



export class AppModule {
}
