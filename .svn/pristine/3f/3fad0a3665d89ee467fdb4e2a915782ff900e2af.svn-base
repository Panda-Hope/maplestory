<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
.pic_framework                      {float:left;margin:0px 10px;}
.pic_p                              {text-align:center;}
.pic_p a                            {text-decoration:none;color:#666;display:block;width:80px;height:30px;background:#CCC;border-radius:10px;margin:0 auto;text-align:center;line-height:30px;}
.pic_p a:hover                      {background-color:#89E0F7;}
.page_msg                           {color:#666;text-decoration:none;font-size:20px;}
.page_msg:hover                     {color:#0FF;}
#search_frame                       {width:40px;border-radius:10px;color:#0FF;}
.img_div                            {margin:0 auto;display:block;}
.page_p                             {width:790px;text-align:center;color:#666;font-size:20px;float:none;overflow:hidden;}
.title_p a                          {text-decoration:none;color:#666;display:inline-block;width:265px;height:30px;text-align:center;line-height:30px;border-bottom:1px dotted #999999;font-size:25px;}
.title_p a:hover                     {color:#0FF;}
</style>
</head>

<body>
<p class="title_p"><a href="/admin.php/Home/Index/CommodityControll">酷炫装备</a><a href="/admin.php/Home/Index/cwzx">宠物中心</a><a href="/admin.php/Home/Index/syxh">实用消耗</a></p>
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><div class="pic_framework">
<input type="hidden" name="sp" value="<?php echo ($vo["name"]); ?>">
<img src="/Public/IMAGES/<?php echo ($vo["path"]); ?>" width="75" height="75" class="img_div" />
<p class="pic_p">ID：<?php echo ($vo["id"]); ?>&nbsp;商品价格：<?php echo ($vo["price"]); ?></p>
<p class="pic_p">添加时间：<?php echo ($vo["addtime"]); ?></p>
<p class="pic_p"><a href="/admin.php/Home/Index/Deletesyxh?id=<?php echo ($vo["id"]); ?>&sp=<?php echo ($vo["name"]); ?>">删除商品</a></p>
</div><?php endforeach; endif; ?>
<p class="page_p"><?php echo ($msg); ?>&nbsp;&nbsp;<a href="/admin.php/Home/Index/AddCommodity" class="page_msg">添加商品</a></p>
</body>
</html>