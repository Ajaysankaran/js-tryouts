import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Note } from "./notes.actions";

export const selectNotesState = createFeatureSelector<Note[]>("notes")
export const selectNotes = createSelector(selectNotesState, (state: Note[]) => state)