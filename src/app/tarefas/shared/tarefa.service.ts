import { Injectable } from '@angular/core';
import { Tarefa} from './tarefa.model';
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
  	const tarefas = localStorage['tarefas']; //localStorage disponivel pelo navegador onde passo chave tarefas
  	return tarefas ? JSON.parse(tarefas) : []; //se existe tarefa e retona tarefa caso contrario array vazia
  }

  cadastrar(tarefa: Tarefa): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.stringify(tarefas); // pegando o local storage e convertendo para string
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id); //find tarefa
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { //obj:que é a tarefa em si , index : a posição da tarefa, objs: a lista do objeto
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
