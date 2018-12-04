import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from 'src/app/tarefas/shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {
  /**
   * ViewChied permite ter uma referencia do formulario dentro do component
   */
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  /**
   * @param tarefaService  injeta as dependencias da service
   * @param router  injeta o serviço de navegação
   */
  constructor(
    private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {
  	this.tarefa = new Tarefa(); // iniciando a tarefa pque que não esteja nulo
  }

  cadastrar(): void {
    /**
     * retorna true ou false caso o formulario possua algum erro
     * caso tiver erro ele não cadastra
     */
    if (this.formTarefa.form.valid) {   
  	  this.tarefaService.cadastrar(this.tarefa);
  	  this.router.navigate(["/tarefas"]);
    }
  }

}
