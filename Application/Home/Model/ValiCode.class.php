<?php
namespace Think;

header("content-type:image/png;charset=utf-8");
ob_clean();
$img=imagecreatetruecolor(100,40);
$bgcolor=imagecolorallocate($img,rand(200,255),rand(200,255),rand(200,255));
$pxcolor=imagecolorallocate($img,rand(150,199),rand(150,199),rand(150,199));
$ftcolor=imagecolorallocate($img,rand(100,149),rand(100,149),rand(100,149));
$licolor=imagecolorallocate($img,rand(100,200),rand(100,200),rand(100,200));
imagefill($img,0,0,$bgcolor);
for ($i=0;$i<150;$i++)
{
	imagesetpixel($img,rand(0,100),rand(0,40),$pxcolor);
}
$step=10;
$num=range(0,9);
$word=range('a','z');
$WORD=range('A','Z');
$char=array_merge($num,$WORD,$word);
$ValiCode='';
for ($i=0;$i<4;$i++)
{
	$round=$char[round(rand(0,61))];
	imagettftext($img,20,rand(-30,30),$step,30,$ftcolor,'cloud.ttf',$round);
	$ValiCode.=$round;
	$step+=20;
};
for ($i=0;$i<3;$i++)
{
	imageline($img,rand(0,90),rand(0,40),rand(0,90),rand(0,40),$licolor);
};
imagepng($img);
imagedestroy($img);
session_start();
$ValiCode=strtolower($ValiCode);
$_SESSION['valicode']=$ValiCode;
?>