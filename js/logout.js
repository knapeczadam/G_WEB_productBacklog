function deleteCookie() {
    document.cookie = 'logged=false';
    window.location.href = "../login.html";
}

(function () {
        document.getElementById("loggedName").innerHTML = localStorage.getItem("loggedIn");
})();
