import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./user.actions";

export const selectUserState = createFeatureSelector('user')
export const selectUser = createSelector(createFeatureSelector, (state) => state.user)