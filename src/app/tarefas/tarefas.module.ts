import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar-tarefas';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [ListarTarefaComponent, CadastrarTarefasComponent, EditarTarefasComponent],
  providers: [TarefaService]
})
export class TarefasModule { }
