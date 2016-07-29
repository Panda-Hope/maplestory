<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
<style type="text/css">
<!--
body {
	margin-left: 3px;
	margin-top: 0px;
	margin-right: 3px;
	margin-bottom: 0px;
}
.STYLE1 {
	color: #e1e2e3;
	font-size: 12px;
}
.STYLE6 {color: #000000; font-size: 12; }
.STYLE10 {color: #000000; font-size: 12px; }
.STYLE19 {
	color: #344b50;
	font-size: 12px;
}
.STYLE21 {
	font-size: 12px;
	color: #3b6375;
}
.STYLE22 {
	font-size: 12px;
	color: #295568;
}

 
 
 body{background-image:url('../../../../maoxiaodao/Application/Admin/View/Hotel//Public/home/img/bg3.jpg');background-size:100%;}
.small{text-align:center;line-height:30px;font-size:23px;height:30px;width:450px;border:0px solid #ccc;margin:0px auto;}
.big{display:;height:auto;border-bottom:1px solid #ccc;}
.big{width:100%,}
#big_box{width:auto;height:auto;margin:0px auto;border:1px solid #ccc;}
.ww{width:100px;height:25px;float:left;border:0px doted #ccc;margin-left:35px;letter-spacing:6px;font-style:inherit;border-radius:3px;}
-->
.page_msg       {color:#666;text-decoration:none;font-size:20px;}
.page_msg:hover {color:#0FF;}
#search_frame   {width:40px;border-radius:10px;color:#0FF;}
</style>
<script>
var  highlightcolor='#d5f4fe';
//此处clickcolor只能用win系统颜色代码才能成功,如果用#xxxxxx的代码就不行,还没搞清楚为什么:(
var  clickcolor='#51b2f6';
function  changeto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;
//alert(cs.length);
if  (cs[1].style.backgroundColor!=highlightcolor&&source.id!="nc"&&cs[1].style.backgroundColor!=clickcolor)
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=highlightcolor;
}
}

function  changeback(){
if  (event.fromElement.contains(event.toElement)||source.contains(event.toElement)||source.id=="nc")
return
if  (event.toElement!=source&&cs[1].style.backgroundColor!=clickcolor)
//source.style.backgroundColor=originalcolor
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}

function  clickto(){
source=event.srcElement;
if  (source.tagName=="TR"||source.tagName=="TABLE")
return;
while(source.tagName!="TD")
source=source.parentElement;
source=source.parentElement;
cs  =  source.children;
//alert(cs.length);
if  (cs[1].style.backgroundColor!=clickcolor&&source.id!="nc")
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor=clickcolor;
}
else
for(i=0;i<cs.length;i++){
	cs[i].style.backgroundColor="";
}
}
</script>


</head>

<body>
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="30"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td height="24" bgcolor="#D3EAEF "><table width="100%" border="0" cellspacing="0" cellpadding="0">
         
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
  <td>
  <!--第一栏-->
  <div id="big_box">
  <div id="box">
  <div class="small">日志信息列表</div>
  <div class="big" >
  <table width="100%" border="0" cellpadding="0" cellspacing="" bgcolor="#000" onmouseover="changeto()"  onmouseout="changeback()">
      <tr>
        <td width="4%" height="20" bgcolor="d3eaef" class="STYLE10"><input type="hidden" name="shi" value="<?php echo ($biao); ?>"><div align="center">
         ID
        </div></td>
        <td width="10%" height="20" bgcolor="d3eaef" class="STYLE6"><div align="center"><span class="STYLE10">管理员</span></div></td>
        <td width="15%" height="20" bgcolor="d3eaef" class="STYLE6"><div align="center"><span class="STYLE10">IP</span></div></td>
        <td width="25%" height="20" bgcolor="d3eaef" class="STYLE6"><div align="center"><span class="STYLE10" colspan="3">操作</span></div></td>
       
        <td width="14%" height="20" bgcolor="d3eaef" class="STYLE6"><div align="center"><span class="STYLE10">时间</span></div></td>
        <td width="10%" height="20" bgcolor="d3eaef" class="STYLE6"><div align="center"><span class="STYLE10">基本操作</span></div></td>
      </tr>
	  
	  
<?php if(is_array($data)): foreach($data as $key=>$value): ?><div style="width:auto; height:auto;" >
      <tr >
        <td height="20" bgcolor="#F7F8FB"  ><div align="center">
         <?php echo ($value["id"]); ?> 
        </div></td>
        <td height="20" bgcolor="#F7F8FB" class="STYLE6"><div align="center"><span class="STYLE19"> <?php echo ($value["name"]); ?></span></div></td>
        <td height="20" bgcolor="#F7F8FB" class="STYLE19" ><div align="center"> <?php echo ($value["ip"]); ?></div></td>
        <td height="25" bgcolor="#F7F8FB" class="STYLE19"><div align="center" colspan="3"> <?php echo ($value["caozuo"]); ?></div></td>
      
         <td height="20" bgcolor="#F7F8FB"><div align="center" class="STYLE21"><?php echo ($value["tjtime"]); ?></div></td>
        <td height="10" bgcolor="#F7F8FB"><div align="center" class="STYLE21"><a href='/admin.php/Home/Index/deleterj?id=<?php echo ($value["id"]); ?>'>删除</a></div></td>
      </tr>
  </div><?php endforeach; endif; ?>
     
  </table ></td>
  </tr>
  <tr style="color:#666;font-size:20px;text-align:center;">
    <td height="30"><table width="100%" border="0" cellspacing="0" cellpadding="0" >
      <tr >
        <?php echo ($pageinfoa); ?>
      </tr>
    </table>
 </div>	
 </div>
  <!--第二-->  
  <!--第四--> 
    </td>
  </tr>
</table>
 <script type="text/javascript" src="../../../../maoxiaodao/Application/Admin/View/Hotel//Public/home/js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
		
		$("small").toggle(function(){
			var h=$(this).index(".small");
			
			$(".big").each(function(){
			var b=$(this).index(".big");
				if(h==b){
					$(".big").eq(b).slideDown(1000);
					}else{
				$(".big").eq(b).slideUp(1000);	
						}
				})
			
			},
			function(){
				 var h=$(this).index(".small");
			
			     $(".big").each(function(){
			     var b=$(this).index(".big");
				if(h==b){
				$(".big").eq(b).slideUp(1000);
				}
				})
				
				});
				
				
	//
	    
	$(function(){
		       
				 var b=$("input[name=shi]").val();
				if(b=="kxzb"){
			    $(".ww").eq(0).css("background","#DB7E4F").siblings().css("background","#A1796E");
					}
				
				
	  })
	  
	  funbian		
			
	</script>
</body>
</html>