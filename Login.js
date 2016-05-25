(function () {

    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        localStorage.setItem("user1name", "qwe");
        localStorage.setItem("user1pass", "admin");
        localStorage.setItem("user2name", "admin");
        localStorage.setItem("user2pass", "admin");
    } else {
        alert('Sorry no Web Storage support, noob');
    }
})();

(function loggedIn() {
    var x = document.cookie;

    console.log(x);
    if (x == 'logged=true') {
        window.location.href = "backlog.html";
    }

})();

function check(form) {

    var user1name = localStorage.getItem("user1name");
    var user1pass = localStorage.getItem("user1pass");
    var user2name = localStorage.getItem("user2name");
    var user2pass = localStorage.getItem("user2pass");
        if (form.userName.value == user1name && form.password.value == user1pass) {
            window.location.href = "backlog.html";
            localStorage.setItem("loggedIn",user1name);
            if (form.rememberme.checked) {
                document.cookie = 'logged=true';
            }
        } else if (form.userName.value == user2name && form.password.value == user2pass) {
            window.location.href = "backlog.html";
            localStorage.setItem("loggedIn",user2name);
            if (form.rememberme.checked) {
                document.cookie = 'logged=true';
            }
        }
        else {
            alert("Error password or Username");
        }
    console.log(document.cookie);
}

