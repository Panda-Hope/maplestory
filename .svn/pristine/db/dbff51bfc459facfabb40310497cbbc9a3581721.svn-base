<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class IndexController extends Controller {
	public function _initialize()                                      //检查cookie
	{
	  if (isset($_COOKIE['user'])&&isset($_COOKIE['password']))
		{
			$user=I('cookie.user');
			$password=I('cookie.password');
			$m=M('user');
			$check['name']=$user;
			$check['password']=$password;
			$result=$m->where($check)->field('name,password,photo')->find();
		    if($result['name']==$user&&$result['password']==$password)
			{
				session('user',$result['name']);
				session('password',$result['password']);
				session('photo',$result['photo']);
			}
			else
			{return false;}
		}
		else
		{return false;}
	}
	
	/*羽勇网页测试*/
	public function yuyong()
	{
		$this->display();
	}
	
    public function index()                                              //首页
	{
		$m=M('big_ad_pic');
		$path=$m->limit(0,15)->select();
		$this->assign('ad_path',$path);
		
		$path=$m->table('kxzb')->limit(0,15)->order('id desc')->select();
		$this->assign('kxzb_path',$path);
		
		$path=$m->table('xpzs')->limit(0,15)->order('id desc')->select();
		$this->assign('xpzs_path',$path);
		
		$path=$m->table('syxh')->limit(0,15)->order('id desc')->select();
		$this->assign('syxh_path',$path);
		
		$path=$m->table('cwzx')->limit(0,15)->order('id desc')->select();
		$this->assign('cwzx_path',$path);
		$this->display();
	}
	
	public function register()                                           //验证码显示
	{
	   $this->display();
	}
	
	public function verify()
	{
		$code=new \Org\Verify\Verify;
	}
	
	public function check_user()                                         //用户名AJAX检测
	{
		$m=M('user');
		$data['name']=I('post.user');
		$result=$m->where($data)->find();
		if ($result)
		{$this->ajaxreturn(true);}
		else
		{$this->ajaxreturn(false);}
	}
	
	public function check_phone()                                        //手机号AJAX检测
	{
		$m=M('user');
		$data['phone']=I('post.phone');
		$result=$m->where($data)->find();
		if ($result)
		{$this->ajaxreturn(true);}
		else
		{$this->ajaxreturn(false);}
	}
	
	public function check_mail()                                          //邮箱AJAX检测
	{
		$m=M('user');
		$data['mail']=I('post.mail');
		$result=$m->where($data)->find();
		if ($result)
		{$this->ajaxreturn(true);}
		else
		{$this->ajaxreturn(false);}
	}
	
	public function check_verify()                                        //验证码检测
	{
		if (I('post.code')==I('session.valicode'))
		{$this->ajaxreturn(true);}
		else
		{$this->ajaxreturn(false);}
	}
	
	public function deal()                                                //初步注册 邮件发送
	{
		$m=M('temp_user');
		$data['name']=I('post.user');
		$data['password']=md5(I('post.password'));
		$data['phone']=I('post.phone');
		$data['mail']=I('post.mail');
		$m->add($data);
		$server=I('post.mail');
		preg_match('/@[A-z0-9]+\./',$server,$msg);
		preg_match('/[A-z0-9]{2,5}/',$msg[0],$result);
		$addr=$result[0];
		$this->assign('addr',$addr);
		$this->display();
		$this->assign('name',I('post.user'));
		$this->assign('addr',urlencode(I('post.user')));
		$time=strftime("%Y年%m月%d日 %H时%M分");
		$this->assign('time',$time);
		$html=$this->fetch('mail');
		import('ORG.Mail');
		SendMail(I('post.mail'),'冒险岛商城账号激活',$html,'冒险岛商城');
	}
	

	public function jihuo()                                                 //账户激活 
	{
		if (!I('get.key',0))
		{$this->redirect('index');}
		else
	    {
			$name=urldecode(I('get.key'));
			$m=M('user');
			$user['name']=$name;
			$result=$m->where($user)->find();
			if ($result>0)
			{$this->assign('think',0);}
			else
			{
				$result=$m->table('temp_user')->where($user)->find();
				if ($result<1)
				{$this->assign('think',1);}
				else
				{
					$condition['name']=$name;
					$result=$m->table('temp_user')->field('name,password,mail,phone')->where($condition)->find();
					$data['name']=$result['name'];
					$data['password']=$result['password'];
					$data['mail']=$result['mail'];
					$data['phone']=$result['phone'];
					$m->add($data);
					$this->assign('think',2);
					$check['name']=$result['name'];
					cookie('user',$result['name'],3600);
					cookie('password',$result['password'],3600);
					session('user',$result['name']);
					session('password',$result['password']);
					$result=$m->where($check)->field('photo')->find();
				    session('photo',$result['photo']);
					$usermsg['name']=I('session.user');
					$userid=$m->field('id')->where($usermsg)->find();
					$m=M('useraddr');
					$addmsg['userid']=$userid['id'];
					$addmsg['xingming']='暂无';
					$addmsg['shengfen']='暂无';
					$addmsg['city']='暂无';
					$addmsg['street']='暂无';
					$addmsg['qq']='0';
					$m->add($addmsg);
			   }
			}
            $this->display();
		}
	}
	
	public function _empty()                                         //安全检测
	{
		$this->show('<h1>404</h1>');
	}
}