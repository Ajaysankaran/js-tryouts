import { createAction, props } from "@ngrx/store";

export interface Note {
    id?: String
    title: String
    content: String
    timestamp: String
}

export const addNotes = createAction(
    "[notes] add notes",
    props<{note: Note}>()
)

export const getNotes = createAction(
    "[notes] get notes"
)

export const getNotesById = createAction(
    "[notes] get note by id",
    props<String>()
)

export const deleteNoteById = createAction(
    "[notes] delete note by id",
    props<String>()
)

export const editNote = createAction(
    "[notes] edit note by id",
    props<Partial<Note>>()
)
