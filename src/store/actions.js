export default {
    saveUserName (context,username){
        context.commit('saveUserName',username)
    },
    saveCartSum (context,cartSum){
        context.commit('saveCartSum',cartSum)
    }
}