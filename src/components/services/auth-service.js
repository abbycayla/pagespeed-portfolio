module.exports = {
    isLoggedIn: function(){
        return localStorage.userId !== undefined;
    }
}