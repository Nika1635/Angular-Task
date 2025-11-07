import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() dataEmitter = new EventEmitter<string>()
  public inputText: string = ''

  sendInputData(){
    this.dataEmitter.emit(this.inputText)
  }
}
