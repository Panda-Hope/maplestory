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
#search_frame                            {width:40px;border-radius:10px;color:#0FF;}
</style>
</head>

<body>
<table id="table">
<tr>
<td>Id</td>
<td>&nbsp;发表的文章</td>
<td>&nbsp;&nbsp;&nbsp;&nbsp;添加的时间</td>
<td>作者</td>
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查看内容及评论</td>
</tr>
<?php if(is_array($data)): foreach($data as $key=>$value): ?><tr>
<td><?php echo ($value["id"]); ?></td>
<td>&nbsp;&nbsp;<?php echo ($value["content"]); ?></td>
<td>&nbsp;<?php echo ($value["sj"]); ?></td>
<td><?php echo ($value["name"]); ?></td>
<td>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/admin.php/Home/Index/xiaofaindex/id/<?php echo ($value["id"]); ?>/content/<?php echo ($value["content"]); ?>" class="page_msg">详情查看</a>||<a href="/admin.php/Home/Index/accd/id/<?php echo ($value["id"]); ?>/content/<?php echo ($value["content"]); ?>" class="page_msg">文章删除</a></td>
</tr><?php endforeach; endif; ?>
<tr><td colspan="5"  id="last_line"><?php echo ($msg); ?></td></tr>


</table>
</body>
</html>