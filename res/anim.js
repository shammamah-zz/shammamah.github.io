function loadMain(){
    document.getElementById("info").style.opacity="0"; 
    setTimeout( (function () {
        document.getElementById("bg").style.opacity="0";     
    }), 200); 
    setTimeout( (function () {
        document.getElementById("info").style.display="none"; 
        document.getElementById("info").style.zIndex="-1"; 
        document.getElementById("intro").style.display="inline"; 
        docment.getElementById("intro").style.zIndex="1"; 
    }), 700);
    
    setTimeout( (function () {
        document.getElementById("intro").style.filter="none";
        document.getElementById("intro").style.opacity="1"; 
    } ), 750); 
}

function leaveMain(){
    document.getElementById("intro").style.filter="blur(5px)"; 
    setTimeout( (function () {
        document.getElementById("intro").style.opacity="0"; 
        document.getElementById("intro").style.zIndex="-1"; 
        document.getElementById("intro").style.zIndex="1";
    }), 200); 
    setTimeout( (function () { 
            document.getElementById("intro").style.display="none"; 
    }), 200); 
}


function viewMore(){
    leaveMain(); 
    setTimeout( (function () {
            window.location.replace("./pages/more.html"); 
    }), 200); 
}

function viewProj(){
    leaveMain(); 
    setTimeout( (function () {
            window.location.replace("./pages/projects.html"); 
    }), 500); 
}

function loadMore(){
    setTimeout( (function () { 
        document.getElementById("infohead").style.opacity="1";
        document.getElementById("nav").style.opacity="1"; 
    }), 200);
    setTimeout( (function () {
        document.getElementById("info").style.opacity="1"; 
    }), 200);
}

function loadProj(){
    setTimeout( (function () { 
        document.getElementById("projhead").style.opacity="1"; 
        document.getElementById("nav").style.opacity="1"; 
    }), 200);
    setTimeout( (function () {
        document.getElementById("project-wrap").style.opacity="1"; 
    }), 200);
}

function backToMain(s) { 
    window.location.replace("../index.html"); 
}
