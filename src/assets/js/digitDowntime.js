import digit from './digit';

/* ==========================================
 *  SETINTERVAL "THIS" KEYWORD  SCOPE PROBLEM SOLUTION
    ========================================== */

let __nativeST__ = window.setTimeout,
     __nativeSI__ = window.setInterval;
     
window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  let oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

let CanvasBalls = function(canvasApi, welecomeApi) {
    this.canvasApi = canvasApi;
    this.welecomeApi = welecomeApi;
    this.num = 9;
    this.allBalls = [];          //balls container
    this.colors = ['#EBFDB2','#FFC094','#F87EF9','#FFFFFF','#FB9397','#FEFF99','#56AE70','#8D6DFA','#FEFF99','#F97E91']; //set the colors of the balls
    this.offsetTop = '';     //initial top offset of the window 
    this.offsetLeft = '';     //initial left offset of the window
    this.ctx;                      //Canvas.getContext('2d')
    this.vx = 5;                 //the horizontal speed of the balls
    this.vy = -10;              //the vertical speed of the balls
    this.gravity = 1;         //the acceleration of gravity of the balls
    this.radius;                 //initial radius
    this.width;
    this.height;
    this.digitId;
    this.sportId;
    this.renderSportId;
};

CanvasBalls.prototype.start = function() {
    if (!this.canvasApi) {
        throw new Error('CanvasBall Animation Need A Canvas Template Target !!!');
    }
    
    let canvas = document.querySelector(this.canvasApi);
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.radius = this.width/100;
    this.offsetTop = this.height*0.25;
    this.offsetLeft = (this.width-this.radius*15*2)/2; 
    
    canvas.width = this.width;
    canvas.height = this.height;
    
    this.ctx = canvas.getContext('2d');        
   
    this.digitId = setInterval.call(this, this.renderDigit, 1000);
    this.sportId = setInterval.call(this, this.sport, 50);
    this.renderSportId = setInterval.call(this, this.renderSport, 50, this.allBalls);
    this.rederFont();
};

CanvasBalls.prototype.renderDigit = function() {
    let balls = {};
    let num = this.num,
         offsetLeft = this.offsetLeft,
         offsetTop = this.offsetTop,
         radius = this.radius,
         vx = this.vx,
         vy = this.vy,
         g = this.gravity,
         r = this.radius,
         colors = this.colors;
    
    try {
        digit[num].length;
    }catch (error) {
        return false;
    } 
    
    for (var i=0;i<digit[num].length;i++) {
        for (var j=0;j<digit[num][i].length;j++) {
            if (digit[num][i][j]==1) {
                balls = {
                x: offsetLeft+j*2*(radius+1)+(radius+1),
                y: offsetTop+i*2*(radius+1)+(radius+1),
                vx: vx,
                vy: vy,
                g: g,
                r: r,
                color: colors[Math.floor(Math.random()*colors.length)]}
            };
            
            this.allBalls.push(balls);
        }
    }
    
    this.num--;
    
    if (this.num == -1) {
        setTimeout.call(this, this.cancelAnimation, 3000);
    }
};

CanvasBalls.prototype.sport =  function() { 
    let allBalls = this.allBalls,
         vx = this.vx,
         vy = this.vy,
         g = this.gravity,
         height = this.height;
    
    for (var k=0;k<allBalls.length;k++) {
        allBalls[k].x+=allBalls[k].vx;
        allBalls[k].y+=allBalls[k].vy;
        allBalls[k].vy+=allBalls[k].g;
        
        if (allBalls[k].y>=height-allBalls[k].r) {
            allBalls[k].y=height-allBalls[k].r;
            
            allBalls[k].vy=-allBalls[k].vy*Math.random();        //小球摩擦系数
        }
        
        this.allBalls = allBalls;
    }
};

CanvasBalls.prototype.renderSport = function(allBalls) {
    let ctx = this.ctx;
    
    ctx.clearRect(0,0,this.width,this.height); 
    
    for (var k=0;k<allBalls.length;k++) {
        ctx.beginPath();
        ctx.fillStyle=allBalls[k].color;
        ctx.arc(allBalls[k].x,allBalls[k].y,allBalls[k].r,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

CanvasBalls.prototype.rederFont = function() {
    let canvas = document.querySelector(this.welecomeApi);
    let cxt = canvas.getContext('2d');
    
    canvas.width = this.width;
    canvas.height = this.height;
    
    let grd=cxt.createLinearGradient(0,0,1200,200);
    
    grd.addColorStop(0,'#36F1D4');
    grd.addColorStop(0.3,'#F5D659');
    grd.addColorStop(0.7,'#FDC4D7');
    grd.addColorStop(0.7,'#DCFD77');
    grd.addColorStop(1,'#88B6D4');
    cxt.fillStyle=grd;
    cxt.font="110px 正楷";
    cxt.fillText('Welecome To MapleStory',($(window).width()-1200)/2,$(window).height()*0.4);
    cxt.fill();
};

CanvasBalls.prototype.cancelAnimation = function() {
    let $ele = $(this.canvasApi);
    
    $ele.fadeOut(1000), function() {
        clearInterval(this.digitId);
        clearInterval(this.sportId);
        clearInterval(this.renderSportId);
    };
    
    this.welecome(); 
};

CanvasBalls.prototype.welecome = function() {
    let $ele = $(this.welecomeApi);
    
    $ele.animate({'opacity':0.85}, 1000,
    function() {
        $ele.fadeOut(800);
    });
}


/* ===============
 * start up the animation
 * ===============*/

window.onload = function() {
    let ele = '#canvas',
          welecome = '#canvas_2';
    
    let animationBall = new CanvasBalls(ele, welecome);
    
    animationBall.start();
};

