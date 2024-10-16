import { state } from './components/state';

import './components/form';
import './components/list';

state.subscribe(function(){
    localStorage.setItem('state-cache', JSON.stringify(state.getState()))
})