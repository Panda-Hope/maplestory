import digit from './digit';

// JavaScript Document
window.onload=function demo()                                   //获取绘图环境对象
{
	var canvas=document.getElementById('canvas');

	canvas.width = 300;
	canvas.height = 80;
	
	var cxt=canvas.getContext('2d');
	config(cxt);                                                //传递环境对象
	setTimeout(demo,1000);                                      //设置函数调用间隔
}

function config(cxt)                                            //配置所画圆的信息  可在此修改所画图的信息 
{
	var time=new Date(); 
	var hour=time.getHours();                                   //小时
	var minute=time.getMinutes();                               //分钟
	var second=time.getSeconds();                               //秒 
	var radius=2;                                               //圆半径 
	var offtop=10;                                              //数字距离窗口顶部距离
	var offleft=0;                                              //数字距离窗口左边距离 
	RenderDigit(offleft,offtop,radius,Math.floor(hour/10),cxt);      
    RenderDigit(offleft+11*2*radius,offtop,radius,Math.floor(hour%10),cxt);
	RenderDigit(offleft+21*2*radius,offtop,radius,10,cxt);
	RenderDigit(offleft+25*2*radius,offtop,radius,Math.floor(minute/10),cxt); 
	RenderDigit(offleft+36*2*radius,offtop,radius,Math.floor(minute%10),cxt); 
	RenderDigit(offleft+45*2*radius,offtop,radius,10,cxt);
	RenderDigit(offleft+50*2*radius,offtop,radius,Math.floor(second/10),cxt);
	RenderDigit(offleft+61*2*radius,offtop,radius,Math.floor(second%10),cxt); 
	           
}

function RenderDigit(x,y,r,num,cxt)                             //画数字
{
	for (var i=0;i<digit[num].length;i++)
	{
		for (var j=0;j<digit[num][i].length;j++)
		{
			if (digit[num][i][j]==1)
			{
				cxt.beginPath();
				cxt.fillStyle='#A349A4';                           //数字颜色
				cxt.arc(x+j*2*(r+1)+(r+1),y+i*2*(r+1)+(r+1),r,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}