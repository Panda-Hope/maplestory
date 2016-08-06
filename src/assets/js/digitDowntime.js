import digit from './digit';

let CanvasBalls = function(canvasApi) {
    this.canvasApi = canvasApi;
    this.nums = 9;
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
};

CanvasBalls.prototype.start = function() {
    if (!this.canvasApi) {
        throw new Error('CanvasBall Animation Need A Canvas Template Target !!!');
    }
    
    let canvas = document.querySelector(this.canvasApi);
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.radius = this.width/100;
    
    canvas.width = this.width;
    canvas.height = this.height;
    
    this.ctx = canvas.getContext('2d');        
   
    setTimeout.call(this, this.renderDigit,1000);
//    setInterval(this.sport, 50);
};

CanvasBalls.prototype.renderDigit = function() {
    console.log(this);
//    for (var i=0;i<digit[this.nums].length;i++) {
//        for (var j=0;j<digit[this.nums][i].length;j++) {
//            if (digit[this.nums][i][j]==1) {
//                let balls = {
//                x:offleft+j*2*(radius+1)+(radius+1),
//                y:offtop+i*2*(radius+1)+(radius+1),
//                vx: this.vx,
//                vy: this.vy,
//                g: this.gravity,
//                r: this.radius,
//                color: this.colors[Math.floor(Math.random()*colors.length)]}
//            };
//            
//             this.allBalls.push(balls);
//        }
//    }
//    
    this.nums--;
    
};

CanvasBalls.prototype.sport =  function() { 
    let allBalls = this.allBalls;
    
    for (var k=0;k<allBalls.length;k++) {
        allBalls[k].x+=allBalls[k].this.vx;
        allBalls[k].y+=allBalls[k].this.vy;
        allBalls[k].vy+=allBalls[k].this.gravity;
        
        if (allBalls[k].y>=cxt.canvas.height-allBalls[k].r) {
            allBalls[k].y=cxt.canvas.height-allBalls[k].r;
            
            allBalls[k].vy=-allBalls[k].vy*Math.random();        //小球摩擦系数
        }
        
       this.renderSport(allBalls);    
    }
};

CanvasBalls.prototype.renderSport = function(allBalls) {
    ctx = this.ctx;
    
    cxt.clearRect(0,0,this.width,this.height); 
    
    for (var k=0;k<allBalls.length;k++) {
        cxt.beginPath();
        cxt.fillStyle=allBalls[k].color;
        cxt.arc(allBalls[k].x,allBalls[k].y,allBalls[k].r,0,2*Math.PI);
        cxt.fill();
        cxt.closePath();
    }
}

/* ===============
 * start up the animation
 * ===============*/

window.onload = function() {
    let ele = '#canvas';
    
    let animationBall = new CanvasBalls(ele);
    
    animationBall.start();
};