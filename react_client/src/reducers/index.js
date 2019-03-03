import {combineReducers} from 'redux';
import contacts from './contacts';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
contacts,
errors,
messages,
auth
});
