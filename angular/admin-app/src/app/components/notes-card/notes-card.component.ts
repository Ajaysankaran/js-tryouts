import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/store/notes/notes.actions';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesCardComponent implements OnInit {
  @Input("title") title: string = ""

  @Input("content") content: string = ""

  @Input("date") date: string = ""

  @Input("mode") mode: string = "view"

  @Output("note") noteEmitter = new EventEmitter<Note>()
  constructor() {}

  ngOnInit(): void {
    
  }

  onSave() {
    if (this.title && this.content) {
      let n: Note = {
        title: this.title,
        content: this.content,
        id: crypto.randomUUID().toString(),
        timestamp: new Date().toDateString()
      }
      this.noteEmitter.emit(n)
    }
  }
}
