function dispEmail() {
  setInterval(function bgc(){
    var s = Math.floor(new Date()/100%150);
    if(s<50){
        color="rgb("+(205+(s))+",205,"+(255-(s))+")";
    }
    else if(s<100 && s>=50){
        color="rgb("+(255-(s-50))+","+(205+(s-50))+",205)";
    }
    else if(s<150 && s>=100){
        color="rgb(205,"+(255-(s-100))+","+(205+(s-100))+")";
    }
    document.getElementById("cover").style.backgroundColor=color;
  },0.015);
    
    blurPage(); 
    document.getElementById("email").style.zIndex = "1";
    document.getElementById("email").style.opacity = "1";
   
}
    document.onkeydown = function(evt){
        if(evt.keyCode == 27){
            hideEmail(); 
        }
    }
function hideEmail() { 
    document.getElementById("email").style.opacity="0"; 
    document.getElementById("email").style.zIndex = "-1";
    document.getElementById("subj").value="";
    document.getElementById("msg").value=""; 
    unBlurPage(); 

}

function genEmail(){
    var mailto = "mailto:shammamah.hossain@gmail.com?";
    var subj = "subject="+document.getElementById("subj").value;
    var msg = "&body="+document.getElementById("msg").value; 

    var toSend = mailto.concat(subj).concat(msg);

    window.location.href = toSend;

    hideEmail(); 
}

function blurPage(){
    document.getElementById("cover").style.opacity="0.1"; 
    document.getElementById("cover").style.zIndex="1"; 
    document.getElementById("main").style.filter="blur(7px)";
}
function unBlurPage(){
    document.getElementById("cover").style.zIndex="-1"; 
    document.getElementById("cover").style.opacity="0";
    document.getElementById("main").style.filter="none";
}


$( document ).ready(function(){
    $(".sidebar-item").mouseover(function(){
        blurPage(); 
    });
    $(".sidebar-item").mouseout(function(){
        if($("#email").css("zIndex")>0){
            return;
        }
        unBlurPage(); 
    });
    $("#cover").click(function(){
        if($("#email").css("opacity")>0){
            hideEmail(); 
        }
    })
});

$( document ).ready(function(){
    $(".sidebar-item[name = 'h']").click(function(e){
        $('#main').animate({
            scrollLeft:0
        }, 1000); 
        e.preventDefault(); 
    });
    $(".sidebar-item[name = 'r']").click(function(e){
        $('#main').animate({
            scrollLeft:400
        }, 1000); 
        e.preventDefault(); 
    });
    $(".sidebar-item[name = 'i']").click(function(e){
        $('#main').animate({
            scrollLeft:760
        }, 1000); 
        e.preventDefault(); 
    });
    $(".sidebar-item[name = 'e']").click(function(e){
        $('#main').animate({
            scrollLeft:1120
        }, 1000); 
        e.preventDefault(); 
    });
    $(".sidebar-item[name = 'code']").click(function(e){
       $('#main').animate({
            scrollLeft:1480
        }, 1000); 
        e.preventDefault(); 
    });
    $(".sidebar-item[name = 'etc']").click(function(e){
       $('#main').animate({
            scrollLeft:1840
        }, 1000); 
        e.preventDefault(); 
    });
});
