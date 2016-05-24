function deleteCookie() {
    expireAt = new Date;
    expireAt.setMonth(expireAt.getMonth() - 1);
    if (document.cookie != "")
    {
        crumbs = document.cookie.split(";");
        for(i=0; i < crumbs.length; i++)
        {
            crumbName = crumbs[i].split("=")[0];
            document.cookie = crumbName + "=;expires=" + expireAt.toGMTString();
        }
    }
    document.cookie = 'logged=false';
    window.open('Login.html');
}