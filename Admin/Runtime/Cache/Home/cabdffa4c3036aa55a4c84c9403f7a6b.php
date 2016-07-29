<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
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
<tr><th>ID</th><th>用户名</th><th>密码</th><th>头像</th><th>添加时间</th><th>详细信息</th></tr>
<?php if(is_array($result)): foreach($result as $key=>$vo): ?><tr>
<td>&nbsp;<?php echo ($vo["id"]); ?>&nbsp;</td>
<td>&nbsp;<?php echo ($vo["name"]); ?>&nbsp;</td>
<td>&nbsp;<?php echo ($vo["password"]); ?>&nbsp;</td>
<td>&nbsp;<img src="/Public/IMAGES/<?php echo ($vo["photo"]); ?>" width="50" height="50" />&nbsp;</td>
<td>&nbsp;<?php echo ($vo["addtime"]); ?>&nbsp;</td>
<td>&nbsp;<a href="/admin.php/Home/Index/moremsg?id=<?php echo ($vo["id"]); ?>" class="more_msg">详细信息</a>&nbsp;</td>
</tr><?php endforeach; endif; ?>
<tr><td colspan="6" id="last_line"><?php echo ($msg); ?></td></tr>
</table>
</body>
</html>