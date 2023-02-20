let form = document.getElementById('form')
let logout = document.getElementById('logout')
function toggle(){
    let logout = document.getElementById('logout');
    if(logout.style.display == "none"){
        logout.style.display ="block"
    }else{
        logout.style.display = "none"
    }
}

function tweetOpan(){
    if(form.style.display == "none"){
       form.style.display = "block"
    }else{
        form.style.display = "none"
    }
}

function more(){
    if(drop.style.display == 'none'){
       drop.style.display = 'block'
    }
else{
    drop.style.display = 'none'
}
}