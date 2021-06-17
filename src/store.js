import {createStore} from "redux";
import Calcul from "./reducers/calcul"
const store=createStore(Calcul)
export default store;