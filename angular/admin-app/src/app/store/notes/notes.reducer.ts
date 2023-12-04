import { Action, createReducer, on } from "@ngrx/store";
import { Note, addNotes, deleteNoteById, getNotes, getNotesById } from "./notes.actions";

const initialState: Note = {
    id: "",
    title: "",
    content: "",
    timestamp: ""
} 

const notesList: Note[] = []

const reducer = createReducer(
    notesList,
    on(addNotes, (state, data) => {return [...state, 
        {
            title: data.note.title,
            content: data.note.content,
            timestamp: data.note.timestamp,
            id: data.note.id
        }
    ]}),
    on(getNotes, (state) => state),
    on(getNotesById, (state, id) => {
        return state.filter(note => note.id === id)
    }),
    on(deleteNoteById, (state, id) => state.splice(state.findIndex(note => note.id === id), 1))
)

export function NotesReducer(state = notesList, action: Action) {
    return reducer(state, action);
}