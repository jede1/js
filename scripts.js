function setCookies(name, value, days, path, domain, secure) {

    if(!navigator.cookieEnabled) return;

    var en = encodeURIComponent;

    var cookie = en(name) + "=" + en(value);

    if(typeof days === "number") {
        var date = new Date();

        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += "; expires=" + date.toGMTString();
    }

    if(path) {
        cookie += "; path=" + path;
    }

    if(domain) {
        cookie += "; domain=" + domain;
    }

    if(secure) {
        cookie += "; secure;";
    }

    document.cookie = cookie;

}