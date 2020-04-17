import jQuery from 'jquery';
let route = [];
let credentials = false;

window.onload = route.splice(0, route.length);

export function routes() {

    console.log(credentials)
    // console.log(location.hash)
    let open = $(this).attr("href");
    if (open === "#auth") {
        let creds = checkcreds();
        console.log(creds)
    }
    if (open === "#auth" && credentials === true || open != "#auth") {
        history.pushState(open, "", open);
        route.push(open)
        $('.page').hide();
        $('.child').hide();
        $(open).show();

        setTimeout(budge, 1000);

        function budge() {
            console.log("So What?")
        }
    } else {
        alert("need to log in")
    }
    // console.log(route)
}

export function childRoute() {
    let open = $(this).attr("href");
    $('.child').hide();
    $(open).show();
}

export function back() {
    let length = route.length - 1;
    let newroute = route.splice(-1);
    let open = newroute.toString();
    route = route.slice(0, length);

    if (open === "#auth") {
        let creds = checkcreds();
        console.log(creds)
    }
    if (open === "#auth" && credentials === true || open != "#auth") {
        goback()

        function goback() {
            location.hash = open;
            $('.page').hide();
            $('.child').hide();
            $(open).show();

        }
    } else {
        alert("your not logged in so you cannot go back to auth page")
    }
}

function checkcreds() {
    console.log("creds = " + credentials);
    return credentials === true ? true : false;
}


export function loggedin() {
    return document.getElementById("in").checked = true,
        document.getElementById("out").checked = false,
        credentials = true;
}
export function loggedout() {
    return document.getElementById("in").checked = false,
        document.getElementById("out").checked = true,
        credentials = false;
}

