<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class MyhomeController extends Controller
{
	// public function _initialize()                                        //cookie检测 无则跳至首页
	// {
	// 	if (isset($_COOKIE['user'])&&isset($_COOKIE['password']))
	// 	{
	// 		$user=I('cookie.user');
	// 		$password=I('cookie.password');
	// 		$m=M('user');
	// 		$check['name']=$user;
	// 		$check['password']=$password;
	// 		$result=$m->where($check)->field('name,password,photo')->find();
	// 	    if($result['name']==$user&&$result['password']==$password)
	// 		{
	// 			session('user',$result['name']);
	// 			session('password',$result['password']);
	// 			session('photo',$result['photo']);
	// 		}
	// 		else
	// 		{$this->redirect('Index/index');}
	// 	}
	// 	else
	// 	{$this->redirect('Index/index');}
	// }
	
	public function index()                                             //提示语 时间检测
	{
		$time=getdate();
		if ($time['hours']>=0&&$time['hours']<6)
		{$msg='夜深了注意休息';}
		else if($time['hours']>=6&&$time['hours']<12)
		{$msg='早上好';}
		else if ($time['hours']>=12&&$time['hours']<18)
		{$msg='下午好';}
		else if ($time['hours']>=18&&$time['hours']<24)
		{$msg='晚上好';}
		$this->assign('msg',$msg);
		$this->display();
	}
	
	public function changephoto()                                      //更换头像AJAX
    {
		$m=M('user');
		$where['name']=I('session.user');
		$data['photo']=I('post.photo');
		$result=$m->where($where)->save($data);
		if ($result)
		{$this->ajaxReturn(true);}
		else
		{$this->ajaxReturn(false);}
	}
	
	public function usermsg()                                          //用户信息
	{
		$m=M('user');
		$data['name']=I('session.user');
		$result=$m->where($data)->alias(a)->join("__USERADDR__ b ON b.userid=a.id")->select();
		$this->assign('result',$result);
		$this->display();
	}

	public function usermsgVue()                                          //用户信息
	{
		$m=M('user');
		$data['name']=I('session.user');
		$result=$m->where($data)->alias(a)->join("__USERADDR__ b ON b.userid=a.id")->select();
		$this->ajaxReturn($result);
	}
	
	public function order()                                            //用户订单
	{
		$m=M('user');
		$data['name']=I('session.user');
		$Myname=$m->where($data)->find();
		$id['userid']=$Myname['id'];
		$result=$m->table('orderlist')->where($id)->select();
		$page=new \Org\Page(count($result),1);
		$result=$m->limit($page->limit)->where($data)->alias(a)->field('a.phone,b.orderid,b.commodityname,b.price,b.addtime,c.xingming,c.shengfen,c.city,c.street')->join("__ORDERLIST__ b ON b.userid=a.id")->join("__USERADDR__ C ON c.userid=a.id")->order('id desc')->select();
		$this->assign('result',$result);
		$this->assign('prev',$page->prev());
		$this->assign('next',$page->next());
		$this->assign('html',$page->html());
		$this->display();
	}

	public function orderVue()                                            //用户订单
	{
		$m=M('user');
		$data['name']=I('session.user');
		$Myname=$m->where($data)->find();
		$id['userid']=$Myname['id'];
		$result=$m->table('orderlist')->where($id)->select();
		$page=new \Org\Page(count($result),1);
		$result=$m->where($data)->alias(a)->field('a.phone,b.orderid,b.commodityname,b.price,b.addtime,c.xingming,c.shengfen,c.city,c.street')->join("__ORDERLIST__ b ON b.userid=a.id")->join("__USERADDR__ C ON c.userid=a.id")->order('id desc')->select();
		$this->ajaxReturn($result);
	}
	
	public function useraddr()                                         //用户收货地址显示
	{
		$m=M('user');
		$data['name']=I('session.user');
		$result=$m->alias('a')->where($data)->field('a.phone,a.mail,b.xingming,b.shengfen,b.city,b.street')->join("__USERADDR__ b ON userid=id")->find();
		$this->assign('result',$result);
		$this->display();
	}

	public function useraddrVue()                                         //用户收货地址显示
	{
		$m=M('user');
		$data['name']=I('session.user');
		$result=$m->alias('a')->where($data)->field('a.phone,a.mail,b.xingming,b.shengfen,b.city,b.street')->join("__USERADDR__ b ON userid=id")->find();
		$this->ajaxReturn($result);
	}
	
	public function modify()                                          //用户收货地址修改
	{
		$m=M('user');
		$where['name']=I('session.user');
		$data1['phone']=I('post.phone');
		$data1['mail']=I('post.mail');
		$m->where($where)->save($data1);
		$userid=$m->field('id')->where($where)->find();
		$data2['xingming']=I('post.xingming');
		$data2['shengfen']=I('post.shengfen');
		$data2['city']=I('post.city');
		$data2['street']=I('post.street');
		$where2['userid']=$userid['id'];
		$m=M('useraddr');
		$a=$m->where($where2)->save($data2);
	    $this->redirect('useraddr');
	}
	public function modifyVue()                                          //用户收货地址修改
	{
		$m=M('user');
		$where['name']=I('session.user');
		$data1['phone']=I('get.phone');
		$data1['mail']=I('get.mail');
		$m->where($where)->save($data1);
		$userid=$m->field('id')->where($where)->find();
		$data2['xingming']=I('get.xingming');
		$data2['shengfen']=I('get.shengfen');
		$data2['city']=I('get.city');
		$data2['street']=I('get.street');
		$where2['userid']=$userid['id'];
		$m=M('useraddr');
		$a=$m->where($where2)->save($data2);
	    
	    if ($a) {
	    	$this->ajaxReturn(true);
	    }else {
	    	$this->ajaxReturn(false);
	    }
	}
	
	public function check()                                            //密码修改检测 
	{
		$m=M('user');
		$pw1=md5(I('post.pw1'));
		$pw2=md5(I('post.pw2'));
		$data['password']=$pw1;
		$data['name']=I('session.user');
		$result=$m->where($data)->find();
		if ($result)
		{
			$data2['name']=I('session.user');
			$save['password']=$pw2;
			$m->where($data2)->save($save);
			$this->ajaxReturn(true);
		}
		else
		{$this->ajaxReturn(false);}
	}

	public function checkVue()                                            //密码修改检测 
	{
		$m=M('user');
		$pw1=md5(I('get.oldpassword'));
		$pw2=md5(I('get.newpassword'));
		$data['password']=$pw1;
		$data['name']=I('session.user');
		$result=$m->where($data)->find();
		if ($result)
		{
			$data2['name']=I('session.user');
			$save['password']=$pw2;
			$m->where($data2)->save($save);
			$this->ajaxReturn(true);
		}
		else
		{$this->ajaxReturn(false);}
	}
}