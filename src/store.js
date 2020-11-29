import { createStore } from "redux";
import {Reducer} from "./reducers/reducer";

let store=createStore(Reducer);
export default store