//Gestion des imports bibliothèques
import { createStore } from 'redux'
import reducers from './reducers.js'

const store = createStore(reducers);

export default store;