import Vue from 'vue'
import Vuex from 'vuex'

import count from './count'
import { ISDEV }  from '../config'
const modules = {
    count 
}

// import createLogger from 'vuex/logger'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        modules,
        strict: ISDEV
       // middlewares: IS_DEV ? [ createLogger() ] : []
    }
)