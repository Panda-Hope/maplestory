<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class Logincontroller extends Controller
{
	public function Index()                                       //首页跳转
	{
		$this->redirect('Index/index');
	}
	public function check()                                       //登陆检测 session cookie 生成
	{	
	    $m=M('user');
		$check['name']=I('post.user');
		$check['password']=md5(I('post.password'));
		$result=$m->field('name,photo,password')->where($check)->find();
		
		if ($result)
		{
			cookie('user',$_POST['user'],3600);
			cookie('password',md5(I('post.password')),3600);
			cookie('photo', $result['photo']);

			session('user',$result['name']);
			session('password',$result['password']);
			session('photo',$result['photo']);
			
			$this->ajaxReturn(true);
		}
		else
		{$this->ajaxReturn(false);}
	}
	
	public function verifying() {
		$m = M('user');
		$check['name']=urldecode(I('post.user'));
		$check['password']=I('post.password');

		$result=$m->field('name,photo,password')->where($check)->find();
		
		if ($result)
		{
			cookie('user',$_POST['user'],3600);
			cookie('password',md5(I('post.password')),3600);
			cookie('photo', $result['photo']);

			session('user',$result['name']);
			session('password',$result['password']);
			session('photo',$result['photo']);
			
			$this->ajaxReturn(true);
		}
		else
		{$this->ajaxReturn(false);}
	}

	public function quit()                                         //退出  cookie session 注销
	{
		cookie('user',null);
		cookie('password',null);
		session(null);
		$this->redirect('Index/index');
	}

	public function signOut() {
		cookie('user',null);
		cookie('password',null);
		session(null);
	}

	public function _empty()                                       //安全防范
	{
		$this->show('<h1>404</h1>');
	}
} 
?>