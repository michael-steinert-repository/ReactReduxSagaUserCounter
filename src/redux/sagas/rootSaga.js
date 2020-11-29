import {takeEvery} from "redux-saga/effects";
import {handleGetUser} from "./handlers/user";
import {GET_USER} from "../ducks/user";

export function* watcherSaga() {
    yield takeEvery(GET_USER, handleGetUser)
}