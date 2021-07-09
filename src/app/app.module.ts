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
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  {path: '', component: GameBoardComponent},
  {path: 'timeline', component: GameBoardComponent},
  {path: 'timeline-play/:id', component: GameComponent},
  {path: 'timeline-edit/:id', component: EditTimelineComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    AddTimelineComponent,
    GameComponent,
    EditTimelineComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
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
