import { createAction, props } from "@ngrx/store";

export const setUser = createAction(
    '[User] setUser',
    props<User>()
)

export const resetUser = createAction('[User] resetUser')

export interface User {
    username: string
    firstname: string
    lastname: string
    email: string
    password: string
}