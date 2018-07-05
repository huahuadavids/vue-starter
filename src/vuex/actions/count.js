
import {
    ADD,
    MINUS
} from '../type'

export function add({dispatch}) {
    dispatch(ADD);
  }

  export function minus({dispatch}) {
    dispatch(MINUS);
  }