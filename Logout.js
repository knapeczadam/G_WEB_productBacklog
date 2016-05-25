function deleteCookie() {
    document.cookie = 'logged=false';
    window.location.href = "Login.html";
}

(function () {
        document.getElementById("loggedName").innerHTML = localStorage.getItem("loggedIn");
})();
