import { Action, State, createReducer, on } from "@ngrx/store";
import { User, setUser } from "./user.actions";

export const initialState: User = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const reducer = createReducer(
    initialState,
    on(setUser, state => ({...state, username: state.username, password: state.password}))
)

export function UserReducer(state = initialState, action: Action) {
    return reducer(state, action);
}