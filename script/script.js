window.onload = () => {
    if (document.cookie !== 'policy=accepted') {
        $('#exampleModalLong').modal();
    }
}

function cookieAccepted() {
    document.cookie = 'policy=accepted';
    // alert( document.cookie );
}