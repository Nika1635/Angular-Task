import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <ng-content></ng-content>
      <button (click)="close()">დახურვა</button>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = ''
  @Output() closed = new EventEmitter<void>()

  close() {
    this.closed.emit()
  }
}
