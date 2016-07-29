<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
.pic_framework                      {float:left;margin:10px 40px;}
.pic_p a                            {text-decoration:none;color:#666;display:block;width:80px;height:30px;background:#CCC;border-radius:10px;margin:0 auto;text-align:center;line-height:30px;}
.pic_p a:hover                      {background-color:#89E0F7;}
.page_msg                           {color:#666;text-decoration:none;font-size:20px;}
.page_msg:hover                     {color:#0FF;}
#search_frame                       {width:40px;border-radius:10px;color:#0FF;}
.page_p                             {width:790px;text-align:center;color:#666;font-size:20px;float:left;overflow:hidden;}         
</style>
</head>

<body>
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><div class="pic_framework">
<img src="/Public/IMAGES/<?php echo ($vo["pathname"]); ?>" width="300" height="300" />
<p class="pic_p">ID：<?php echo ($vo["id"]); ?>&nbsp;添加时间：<?php echo ($vo["addtime"]); ?></p>
<p class="pic_p"><a href="/admin.php/Home/Index/DeleteAd?id=<?php echo ($vo["id"]); ?>&gg=<?php echo ($vo["pathname"]); ?>">删除广告</a></p>
</div><?php endforeach; endif; ?>
<p class="page_p"><?php echo ($msg); ?>&nbsp;&nbsp;<a href="/admin.php/Home/Index/AddAd" class="page_msg">添加广告</a></p>
</body>
</html>