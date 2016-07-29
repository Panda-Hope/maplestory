<?php
namespace Org;
class Page
{
	private $total;                                //全部数据的数量
	private $page_num;                             //每一页的数目
	public  $limit;                                //limit 数量
	private $page;
	private $url;
	public  function __construct($total,$page_num=10)
	{
		$this->total=$total;
		$this->page_num=$page_num;
		$this->page=empty($_GET['page']) ? 1:$_GET['page'];
		$this->limit=$this->get_limit();
		$this->url=$this->get_url();
	}
		
    public  function msg()                        //下一页 搜索 等操作输出
	{
		$space='&nbsp;&nbsp;';
		return $space.$this->first().$space.$this->prev().$space.$this->next().$space.$this->end().$space.$this->search().$space.$this->html();
	}
	private  function get_url()                 
	{
		$url=$_SERVER['REQUEST_URI'].(strpos($_SERVER['REQUEST_URI'],'?') ? '':'?');
		$array=parse_url($url);
		if (isset($array['query']))
		{
			parse_str($array['query'],$query);
			unset($query['page']);
			$query=http_build_query($query);
			if (empty($query))
			{$url=$array['path'].'?';}
			else
			{$url=$array['path'].'?'.$query.'&';}
		}
		return $url;
	}
	
	private function  get_limit()
	{
		$limit=($this->page-1)*$this->page_num;
		return "$limit,{$this->page_num}";
	}

	public function search()
	{
		  $url=$this->url;
		  $html="<input type='search' id='search_frame' />&nbsp;&nbsp;<a id='search_a' href='javascript:' class='page_msg'>GO</a>";
		  $max=ceil($this->total/$this->page_num);
		  $js="<script type='text/javascript'>
		          var a=document.getElementById('search_a');
	              a.onclick=function () 
				    {
					  var search=document.getElementById('search_frame').value;
					   if (search<$max)
					   {a.href='{$this->url}page='+search;}
					   else
					   {a.href='{$this->url}page={$max}';}
					};	  
		       </script>";
		  $echo=$html.$js;
		  return $echo;
		  
	}
	
	public function first()
	{
		$url=$this->url."page=1";
		return "<a href=$url class='page_msg'>首页</a>";}
	
	public function end()
	{
		$page=ceil($this->total/$this->page_num);
		$url=$this->url."page=$page";
		return "<a href=$url class='page_msg'>末页</a>";
	}
	
	public function prev()
	{
		$page=$this->page-1;
		if ($page>=1)
		{
			$url=$this->url."page=$page";
			return "<a href=$url class='page_msg'>上一页</a>";
		}
		else
		{
			$url=$this->url.'page=1';
			return "<a href=$url class='page_msg'>上一页</a>";
		}
	}
	
	public function next()
	{
		$page=$this->page+1;
		$num=ceil($this->total/$this->page_num);
		if ($page>$num)
		{
			$url=$this->url."page=$num";
			return "<a href=$url class='page_msg'>下一页</a>";
		}
		else
		{
			$url=$this->url."page=$page";
			return "<a href=$url class='page_msg'>下一页</a>";
		}
	}
	
	public function html()
	{
		$num=ceil($this->total/$this->page_num);
		$html='当前第'.$this->page.'页'.'&nbsp;&nbsp;'.'一共'.$num.'页';
		return $html;
	}
}
?>