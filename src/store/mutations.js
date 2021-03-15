export default {
    saveUserName (state,username){
        username = localStorage.getItem('username')
        state.username = username
        
    },
    saveCartSum (state,cartSum){
        state.cartSum = cartSum
    }
}