<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
table           {margin:20px auto;}
td              {border-bottom:1px dotted #666666;text-align:left;color:#666;height:60px;}
th              {border-bottom:1px dotted #666666;color:#666;font-size:20px;}
.page_msg       {color:#666;text-decoration:none;font-size:20px;}
.page_msg:hover {color:#0FF;}
#search_frame   {width:40px;border-radius:10px;color:#0FF;}
#last_line      {text-align:center;}
.more_msg       {color:#666;}
.more_msg:hover {color:#0FF;}
</style> 
</head>

<body>
<table>
<tr><th>订单编号&nbsp;</th><th>用户名&nbsp;</th><th>商品名&nbsp;称</th><th>商品价格&nbsp;</th><th>商品类型&nbsp;</th><th>下单时间&nbsp;</th></tr>
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><tr>
<td>&nbsp;<?php echo ($vo["orderid"]); ?>&nbsp;</td>
<td>&nbsp;<?php echo ($vo["name"]); ?>&nbsp;</td>
<td>&nbsp;<?php echo ($vo["commodityname"]); ?>&nbsp;</td>
<td>&nbsp;<?php echo ($vo["price"]); ?>&nbsp;</td>
<td>&nbsp;
<?php switch($vo["bigtype"]): case "kxzb": ?>酷炫装备<?php break;?>
<?php case "cwzx": ?>宠物中心<?php break;?>
<?php case "syxh": ?>实用消耗<?php break; endswitch;?>
&nbsp;</td>
<td>&nbsp;<?php echo ($vo["addtime"]); ?>&nbsp;</td>
</tr><?php endforeach; endif; ?>
<tr><td colspan="6" id="last_line"><?php echo ($msg); ?></td></tr>
</table></body>
</html>