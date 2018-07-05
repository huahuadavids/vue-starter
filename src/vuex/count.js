import {
    ADD,MINUS
} from './type'

export default {
    state: {
        num: 0 
    },
    mutations: {
        [ADD](state) {
            state.num++;
        },
        [MINUS](state) {
            state.num--;
        }
    },
    actions: {
        [ADD]({commit}) {
            commit(ADD)
        },
        [MINUS]({commit}) {
            commit(MINUS)
        }
    }
}