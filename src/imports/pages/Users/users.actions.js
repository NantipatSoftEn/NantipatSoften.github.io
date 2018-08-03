import axios from 'axios'

import { REQUEST_REPO_FETCH , RECEIVED_REPO_FETCH ,ERROR_REPO_FETCH   } from './users.type';


const initialState = {
  data: [],
  error: {},
  isFetching: false
}


export function getRepos() {
  return async dispatch => {
    dispatch(getReposRequest())
    dispatch(await fetch())
  }
}

function getReposRequest() {
  return {
    type: REQUEST_REPO_FETCH
  }
}

function fetch(){
  const url = 'http://localhost:3001/user'
  return axios.get(url)
    .then(data => {
      return {
        type: RECEIVED_REPO_FETCH,
        payload: data
      }
    })
    .catch(err => {
      return {

        type: ERROR_REPO_FETCH,
        error: err
      }
    })
}