import {
    ADD,
    MINUS
} from '../type'


const state = {
    num: 0 
}

const mutations = {
    [ADD](state){
        state.num++
    },
    [MINUS](state){
        state.num--
    }
}

export default {
    state,
    mutations 
}