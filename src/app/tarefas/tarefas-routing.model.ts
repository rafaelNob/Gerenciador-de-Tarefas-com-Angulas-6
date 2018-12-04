import {Routes} from '@angular/router'
import{ListarTarefaComponent} from './listar'
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar-tarefas';

export const TarefaRoutes:Routes =[

    /**
     * se digitar tarefas ele redireciona para tarefas  listar
     */
    {
        path:'tarefas', 
        redirectTo:'tarefas/listar'
    },
    {
        path:'tarefas/listar',
        component:ListarTarefaComponent
    },
    {
        path:'tarefas/cadastrar',
        component:CadastrarTarefasComponent
    },
    {
        path:'tarefas/editar/:id',
        component:EditarTarefasComponent
    }
]