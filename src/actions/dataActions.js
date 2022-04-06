import axios from 'axios';
import { FETCH_DATA, DELETE_USER, UPDATE_USER, CREATE_USER } from './types';

export const fetchData = () => async (dispatch) => {
    const data = await axios.get('https://api.github.com/users/defunkt/repos');
    dispatch({ type: FETCH_DATA, payload: data.data });
}

export const deleteUser = (id) => (dispatch) => {
    dispatch({ type: DELETE_USER, payload: id });
}

export const updateUser = (user) => (dispatch) => {
    dispatch({ type: UPDATE_USER, payload: user });
}

export const createUser = (user) => (dispatch) => {
    dispatch({ type: CREATE_USER, payload: user });
}