// JavaScript Document
var num=9;                                                      //全局变量 
var AllBall=[]; 
var cxt;

var color=['#EBFDB2','#FFC094','#F87EF9','#FFFFFF','#FB9397','#FEFF99','#56AE70','#8D6DFA','#FEFF99','#F97E91']; //设置颜色

var canvas=document.getElementById('canvas');

canvas.width=$(window).width();
canvas.height=$(window).height();
canvas.style.background='aqua';
cxt=canvas.getContext('2d');  

var radius;
var offtop;
var offleft;

window.onload=function()                                    //配置所画圆的信息  可在此修改所画数字的信息 
{
	radius=$(window).width()/100;                                              
	offtop=$(window).height()*0.25;                         //数字距离窗口顶部距离
	offleft=($(window).width()-radius*15*2)/2;              <!--数字距离窗口左边距离-->
	setInterval(RenderDigit,1000);
	setInterval(function() 
	{
		sport();
		RenderSport();
	},50);
}

                                                             //欢迎标语绘制
function RenderFont()
{
	var canvas=document.getElementById('canvas_2');
	var cxt=canvas.getContext('2d');
	canvas.width=$(window).width();
                   canvas.height=$(window).height();
	var grd=cxt.createLinearGradient(0,0,1200,200);
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
RenderFont();	

function sport()                                               //设置小球的运动
{
	for (var k=0;k<AllBall.length;k++)                         
	{
		AllBall[k].x+=AllBall[k].vx;
		AllBall[k].y+=AllBall[k].vy;
		AllBall[k].vy+=AllBall[k].g;
		if (AllBall[k].y>=cxt.canvas.height-AllBall[k].r)
		  {
			AllBall[k].y=cxt.canvas.height-AllBall[k].r;
			AllBall[k].vy=-AllBall[k].vy*Math.random();        //小球摩擦系数
		  }
	}
}

function RenderSport()                                         //渲染运动小球
{
	cxt.clearRect(0,0,canvas.width,canvas.height); 
	for (var k=0;k<AllBall.length;k++)                         
	{
		cxt.beginPath();
		cxt.fillStyle=AllBall[k].color;
		cxt.arc(AllBall[k].x,AllBall[k].y,AllBall[k].r,0,2*Math.PI);
		cxt.fill();
		cxt.closePath();
	}
}

function RenderDigit()                             
{                                                              //渲染固定位置数字
	for (var i=0;i<digit[num].length;i++)
	{
		for (var j=0;j<digit[num][i].length;j++)
		{
			if (digit[num][i][j]==1)
			{
				var balls={
					x:offleft+j*2*(radius+1)+(radius+1),       //设置小球运动参数，可在此修改参数以改变小球运动方式
				    y:offtop+i*2*(radius+1)+(radius+1),
					vx:5,
					vy:-10,
					g:1,
					r:radius,
					color:color[Math.floor(Math.random()*color.length)]};
				AllBall.push(balls);
			}
		}
    }
	num--;
	if (num<0)
	{
		$('#canvas').fadeOut(1000);
		$('#canvas_2').animate({'opacity':0.85},1000,
		function() 
		{
			$('#canvas_2').fadeOut(800);
		});
	}
}

