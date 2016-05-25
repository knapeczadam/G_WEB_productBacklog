function deleteCookie() {
    document.cookie = 'logged=false';
    window.open('Login.html');
}

(function () {
        document.getElementById("loggedName").innerHTML = localStorage.getItem("loggedIn");
})();
