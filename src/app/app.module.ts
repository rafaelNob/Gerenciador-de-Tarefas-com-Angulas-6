import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TarefasModule } from './tarefas';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { TarefaConcluidaDirective } from './tarefas/shared/tarefa-concluida.directive';


@NgModule({
  declarations: [
    AppComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
