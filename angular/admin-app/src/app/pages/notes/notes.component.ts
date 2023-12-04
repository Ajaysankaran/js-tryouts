import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import { Note, addNotes } from 'src/app/store/notes/notes.actions';
import { selectNotes } from 'src/app/store/notes/notes.selector';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {

  notes$: Observable<Note[]>;
  showCreateNote = false
  constructor(private readonly store: Store<Note>) {
    this.notes$ = of([])
  }
  ngOnInit(): void {
    this.notes$ = this.store.pipe(select(selectNotes));
  }

  onAddNoteClicked() {
    this.showCreateNote = !this.showCreateNote
  }

  addNotes(note: Note) {
    this.store.dispatch(addNotes({ note: note }))
    this.showCreateNote = false
  }
}
