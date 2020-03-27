export default {
    addPet: ({ commit }, get)=>{
        commit('appendPet', get)
    }
}