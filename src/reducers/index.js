import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './item-editing';

const rootReducer = combineReducers({
    products, itemEditing
});

export default rootReducer;