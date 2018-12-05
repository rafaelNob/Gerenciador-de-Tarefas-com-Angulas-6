import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  
 /*  entrada de dados 
  fornecendo informação tendo o mesmo nome da diretiva */
  @Input() tarefaConcluida : boolean


  constructor(private el:ElementRef) { }
    /**
       * pega o elemento do html e muda o style
       */
  ngOnInit() {
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
      this.el.nativeElement.style.textDecoration ="line-through";
    }
     
  }
   

}
