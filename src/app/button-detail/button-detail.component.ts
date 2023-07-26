import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent {

  @Input() descriptif: any
  @Input() prep: any
  @Input() cuisson: any
  @Input() difficulte: any
  @Input() cout: any
  @Input() affiche: any
  @Input() ingredients: any
  @Input() etapes: any

  surClick() {
    this.affiche = !this.affiche
  }

}