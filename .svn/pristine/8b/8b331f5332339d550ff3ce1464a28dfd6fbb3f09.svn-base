<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
#note                                    {color:#999;font-size:60px;display:block;margin:90px auto;text-align:center;}
table                                    {margin:40px auto;}
td                                       {height:40px;color:#666;font-size:20px;border-bottom:1px dotted #999999;}
.msg                                     {display:block;width:120px;height:40px;line-height:40px;text-align:left;}
.page_msg                                {text-decoration:none;color:#666;}
.page_msg:hover                          {color:#3DEBED;}
.last-line a                             {text-decoration:none;display:block;text-align:center;width:60px;height:30px;background:#CCC;margin:0 auto;color:#333;line-height:30px;border-radius:10px;}
.last-line a:hover                       {background:#BBEDFA;}
</style>
</head>

<body>
<table id="table">
<tr>
<td colspan="5">&nbsp;发表的文章&nbsp;</td>
</tr>
<tr>
<td><?php echo ($data["content"]); ?></td>
<td colspan="2">&nbsp;<?php echo ($data["iner"]); ?></td>
<td><?php echo ($data["sj"]); ?></td>
<td><?php echo ($data["name"]); ?></td>
</tr>
<tr>
<tr>
<td colspan="5">&nbsp;以下是评论内容&nbsp;</td>
</tr>
<td>ID</td>
<td colspan="2">&nbsp;&nbsp;评论内容</td>
<td>&nbsp;&nbsp;评论时间</td>
<td>&nbsp;评论用户</td>
</tr>
<?php if(is_array($arrdata)): foreach($arrdata as $key=>$value): ?><tr>
<td><?php echo ($value["id"]); ?></td>
<td colspan="2">&nbsp;<?php echo ($value["iners"]); ?></td>
<td>&nbsp;<?php echo ($value["sj"]); ?></td>
<td>&nbsp;&nbsp;<?php echo ($value["uuser"]); ?></td>

</tr><?php endforeach; endif; ?>



</table>
</body>
</html>