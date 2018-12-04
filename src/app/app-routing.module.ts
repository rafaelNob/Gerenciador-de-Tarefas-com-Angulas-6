import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas'

export const routes: Routes = [

    {
        path:' ',
        redirectTo:'tarefas/listar'
    },
        ...TarefaRoutes //concatenando..adicionando
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }