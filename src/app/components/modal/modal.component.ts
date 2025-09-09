import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() open = false;               // show/hide modal
  @Input() title: string = '';         // modal title
  @Input() style: string = '';
  @Input() modalStyle: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
