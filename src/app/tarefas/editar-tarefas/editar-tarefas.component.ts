import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
  	private route: ActivatedRoute,/*  o route é que obtem o parametro passado pela url */
  	private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; /* obtendo o id por parametros passando o mesmo id do html
    obs: o + no this.route converte a string em valor numérico */
	  this.tarefa = this.tarefaService.buscarPorId(id);
  }

   atualizar(): void {
    if (this.formTarefa.form.valid) {
	    this.tarefaService.atualizar(this.tarefa);
	    this.router.navigate(['/tarefas']);
    }
  } 

}
