import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../RootNavigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => { dispatch({type: 'clear_error_message'})};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('Home', { screen: 'Account' });
  } else {
    navigate('Auth');
  }
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signup', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type:'signup', payload: response.data.token})

    navigate('Home', {screen: 'Tracks'});
  } catch(err) {
    dispatch({type: 'add_error', payload: 'Something went wrong'});
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await trackerApi.post('/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type:'signin', payload: response.data.token})

    navigate('Home', {screen: 'Account'});
  } catch(err) {
    dispatch({type: 'add_error', payload: 'Something went wrong'});
  }
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin},
  { token: null, errorMessage: ''}
)
