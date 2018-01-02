function turnBackMeow() { 
    document.body.style.opacity="0"; 
    setTimeout( ( function () { 
        window.location.replace("../index.html"); 
        document.getElementById("project-info").style.opacity="1"; 
    } ), 500);
}

function projInfo(s) { 
    document.getElementById("project-info").style.display="inline"; 
    document.getElementById("project-view").zIndex="1"; 
    document.getElementById("project-info").style.zIndex="1"; 
    document.getElementById("project-wrap").style.filter="blur(10px)"; 
    document.getElementById("bg").style.filter="blur(10px)"; 
    if(s === "pal"){
        //document.getElementById("project-view").innerHTML="<canvas data-processing-sources = './projects-code/pointsAndLines.pde' style = width:300px; height:300px; opacity:1; z-index:1000'>Still under construction, sorry!</canvas>";
        document.getElementById("project-view").innerHTML="<img src = './pages-media/pal2.gif' height='300px' width='300px'>";
        document.getElementById("project-name").innerHTML="<a href = 'https://github.com/shammamah/processing/tree/master/pointsAndLines'>pointsandlines</a>"; 
        document.getElementById("project-desc").innerHTML="Generated with Processing 3. With every click, a new point is generated, and lines are made from each existing point to the new point. The points all oscillate about the x and y axes with random speeds, and the lines randomly change colours. (An applet is coming soon!)"
    }
    else if(s === "mon"){
        document.getElementById("project-view").innerHTML="<img src = './pages-media/monostats.png' width = 300px style = 'margin-top: 50px'>";
        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/shammamah/misc/blob/master/monopoly.py'>monopoly.py</a>"; 
        document.getElementById("project-desc").innerHTML="A simulation of a Monopoly game, created with Python. Using simulated dice rolls and community chest/chance cards that affect position, this script determines the frequency with which each square on the board is landed on and provides statistics of the most landed-on property colours.";
    }
    else if(s === "twe"){
        document.getElementById("project-view").innerHTML="<img src = './pages-media/commandsbysham.png' width = 300px style = 'margin-top: 50px'>";
        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/shammamah/misc/blob/master/autotweetcmd.sh' style='font-size:18pt'>@commandsbysham</a>"; 
        document.getElementById("project-desc").innerHTML="A silly Twitter bot that goes through the past 100 Bash commands I've used, picks one at random, and tweets it every time I start a new session. Check it out at <a href='http://twitter.com/commandsbysham'>@commandsbysham</a> on Twitter!"; 
    }
    else if(s === "noi"){
        document.getElementById("project-view").innerHTML="<img src = './pages-media/noise300.gif' width = 300px'>";
        document.getElementById("project-name").innerHTML="<a href= 'https://github.com/shammamah/processing/tree/master/Noise'>noise</a>"; 
        document.getElementById("project-desc").innerHTML="A festive visualization of prime numbers. Each pixel on the grid corresponds to an integer, counting left-to-right, top-to-bottom. The pixel is only coloured if it represents a prime number, and the colour is randomly assigned to be red, green, or blue. It's interesting to note the density of the coloured pixels as one looks from top-left to bottom-right."; 
    }
    
    setTimeout( ( function () { 
        document.getElementById("project-info").style.opacity="1"; 
    } ), 100);
}

function hideProjInfo() {     
    document.getElementById("project-info").style.opacity="0";
    document.getElementById("project-wrap").style.filter="none"; 
    document.getElementById("bg").style.filter="none"; 
    
    setTimeout( ( function () {       
        document.getElementById("project-info").style.display="none"; 
        document.getElementById("project-view").zIndex="-1"; 
        document.getElementById("project-info").style.zIndex="-1"; 
        document.getElementById("project-view").innerHTML="";
    } ), 1000);
    
}
function test(){
    alert("it worked"); 
}