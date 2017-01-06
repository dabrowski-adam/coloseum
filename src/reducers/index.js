import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import runtime from './runtime';
import intl from './intl';
import content from './content';

export default combineReducers({
  user,
  runtime,
  intl,
  content,
  form: formReducer,
});
