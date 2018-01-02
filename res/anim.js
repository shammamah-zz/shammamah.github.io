function viewMore(){
    document.getElementById("intro").style.filter="blur(5px)"; 
    setTimeout( (function () {
        document.getElementById("intro").style.opacity="0"; 
        document.getElementById("intro").style.zIndex="-1"; 
        document.getElementById("intro").style.zIndex="1";

    }), 200); 
    setTimeout( (function () { 
            document.getElementById("intro").style.display="none"; 
            document.getElementById("bg").style.display="inline"; 
            document.getElementById("info").style.display="inline";
            document.getElementById("info").style.padding="50px"; 
            document.getElementById("info").style.zIndex="1";

    }), 500);
    setTimeout( (function () {
        document.getElementById("bg").style.opacity="0.5"; 
        document.getElementById("info").style.opacity="1"; 
    }), 550);
}

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

