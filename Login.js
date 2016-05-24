(function () {

    if (typeof(Storage) !== "undefined") {
        localStorage.clear();
        localStorage.setItem("user1name", "qwe");
        localStorage.setItem("user1pass", "admin");
        localStorage.setItem("user2name", "bela");
        localStorage.setItem("user2pass", "engedjbe");

    } else {
        alert('Sorry no Web Storage support, noob');
    }
})();

function check(form) {

    var user1name = localStorage.getItem("user1name");
    var user1pass = localStorage.getItem("user1pass");
    var user2name = localStorage.getItem("user2name");
    var user2pass = localStorage.getItem("user2pass");
    if (!getCookie(user1name)){
        if (form.userName.value == user1name && form.password.value == user1pass) {
            window.open('TestIndex.html');
            if (form.rememberme.checked) {
                setCookie(user1name,user1pass)
            }
        } else if (form.userName.value == user2name && form.password.value == user2pass) {
            window.open('TestIndex.html');
        }
        else {
            alert("Error password or Username");
        }
    } else {
        window.open('TestIndex.html');
    }
}

function setCookie(uName, uPass ) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = uName + "=" + uPass + "; " + expires;
}

function getCookie(uName) {
    var name = uName;
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(uName.length, c.length);
        }
    }
    return "";
}


