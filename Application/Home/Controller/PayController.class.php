<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class PayController extends Controller
{
	public function _initialize()                                       //检查cookie
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

    public function paymoney()                                          //支付界面
	{
		if (empty($_SESSION['user']))
		{$this->redirect('Index/index');}
	    $array=array();
		$sum_pirce=0;
		foreach($_COOKIE['car'] as $key=>$value)
		{
			settype($value['carprice'],'integer');
			$sum_pirce+=$value['carprice'];
			array_unshift($array,$value);
		}
		$m=M('user');
		$addr=$m->where("name='{$_SESSION['user']}'")->join("__USERADDR__ ON userid=id")->find();
		$this->assign('addr',$addr);
		$this->assign('sum_price',$sum_pirce);
		$this->assign('array',$array);
		$this->display();
	}
	
    public function timo()                                               //任性取名不要问我为什么
	{
		if (empty($_SESSION['user']))
		{$this->redirect('Index/index');}
		$m=M('kxzb');
		$name=I('post.carname');
		$where['name']=$name;
		$result=$m->where($where)->union("SELECT*FROM cwzx WHERE name='{$name}'")->union("SELECT*FROM syxh WHERE name='{$name}'")->find();
		$m=M('user');
		$addr=$m->where("name='{$_SESSION['user']}'")->join("__USERADDR__ ON userid=id")->find();
		$this->assign('addr',$addr);
		$this->assign('result',$result);
		$this->display();
	}
	
	
	public function send()                                             //商品信息发送
	{
		if(!empty($_POST))
	  {
		//接收提交过来的数据，然后加工一下，最后提交到网银在线的网关
		$v_mid = '22676577';//商户号
		$v_url = 'http://www.23php.com/zf/recive.php';// 请填写返回url,地址应为绝对路径,带有http协议
		$key   = 'tangyong230';//密钥
		$v_oid = date("Ymd",time()).rand(1,10000).date("His",time());//订单号
		$v_amount = trim($_POST['je']);                   //支付金额
		$v_moneytype = "CNY";                                            //币种
		$text = $v_amount.$v_moneytype.$v_oid.$v_mid.$v_url.$key;        //md5加密拼凑串,注意顺序不能变
		$v_md5info = strtoupper(md5($text));                             //md5函数加密并转化成大写字母
		$remark1 = "不要发错货";		      //备注字段1
		$this->assign('v_mid',$v_mid);
		$this->assign('v_oid',$v_oid);
		$this->assign('v_amount',$v_amount);
		$this->assign('v_moneytype',$v_moneytype);
		$this->assign('v_url',$v_url);
		$this->assign('v_md5info',$v_md5info);
		$this->assign('remark1',$remark1);
		$this->display();
     }
	}
	
	public function paycheck()                                          //支付前检测
	{
		if (empty($_SESSION['user']))
		{$data['login']=0;}
		else
		{
			$data['login']=1;
			$m=M('user');
			$id=$m->field('id')->where("name='{$_SESSION['user']}'")->find();
			$addr=$m->table('useraddr')->where("userid={$id['id']}")->find();
			if ($addr['xingming']=='暂无'||$addr['shengfen']=='暂无'||$addr['city']=='暂无')
			{$data['addr']=0;}
			else
			{$data['addr']=1;}
		}
		if (empty($_COOKIE['car']))
		{$data['car']=0;}
		else
		{$data['car']=1;}
		$this->ajaxReturn($data);
	}
	
	public function index()                                              //首页
	{
	    $m=M('kxzb');
		$result=$m->select();
		$page=new \Org\Page(count($result),15);
		$path=$m->limit($page->limit)->order('id desc')->select();
	    if (!empty($_COOKIE['car']))
		{
			$array=array();
			foreach($_COOKIE['car'] as $key=>$value)
			{
				$data['key']=$key;
				array_push($value,$key);
				array_unshift($array,$value);
			}
			$this->assign('array',$array);
		}
		$this->assign('kxzb_path',$path);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function CarAdd()                                             //商品页面购物车添加AJAX
	{
		$m=M('kxzb');
		$name=I('post.name');
		$where['name']=$name;
		$result=$m->where($where)->union("SELECT*FROM cwzx WHERE name='{$name}'")->union("SELECT*FROM syxh WHERE name='{$name}'")->find();
		$cookie=$_COOKIE['car'];
                                            $num=count($cookie);
		setcookie("car[$num][carname]",$result['name'],time()+3600,'/');
		setcookie("car[$num][carprice]",$result['price'],time()+3600,'/');
		setcookie("car[$num][carphoto]",$result['path'],time()+3600,'/');
		if ($result)
		{$this->ajaxReturn(true);}
		else
		{$this->ajaxReturn(false);}
	}
	
	public function cwzx()                                               //宠物中心商品
	{
		$m=M('cwzx');
		$result=$m->select();
		$page=new \Org\Page(count($result),15);
		$path=$m->order('id desc')->limit($page->limit)->select();
		if (!empty($_COOKIE['car']))
		{
			$array=array();
			foreach($_COOKIE['car'] as $key=>$value)
			{
				$data['key']=$key;
				array_push($value,$key);
				array_unshift($array,$value);
			}
			$this->assign('array',$array);
		}
		$this->assign('cwzx_path',$path);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function syxh()                                               //实用消耗商品
	{
		$m=M('syxh');
		$result=$m->select();
		$page=new \Org\Page(count($result),15);
		$path=$m->order('id desc')->limit($page->limit)->select();
		if (!empty($_COOKIE['car']))
		{
			$array=array();
			foreach($_COOKIE['car'] as $key=>$value)
			{
				$data['key']=$key;
				array_push($value,$key);
				array_unshift($array,$value);
			}
			$this->assign('array',$array);
		}
		$this->assign('syxh_path',$path);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function shoppingcar()                                        //购物车添加
	{
		$m=M('kxzb');
		$carname=I('get.carname');
		$where['name']=$carname;
		$result=$m->field('name,price,path')->where($where)->union("SELECT name,price,path FROM cwzx WHERE name='{$carname}'")->union("SELECT name,price,path FROM syxh WHERE name='{$carname}'")->find();
	    $cookie=$_COOKIE['car'];
	    $num=count($cookie);
		setcookie("car[$num][carname]",$result['name'],time()+3600,'/');
		setcookie("car[$num][carprice]",$result['price'],time()+3600,'/');
		setcookie("car[$num][carphoto]",$result['path'],time()+3600,'/');
		$this->redirect('Pay/index');
	}
	
	public function shoppingcwzx()                                        //购物车添加1
	{
		$m=M('kxzb');
		$carname=I('get.carname');
		$where['name']=$carname;
		$result=$m->field('name,price,path')->where($where)->union("SELECT name,price,path FROM cwzx WHERE name='{$carname}'")->union("SELECT name,price,path FROM syxh WHERE name='{$carname}'")->find();
	    $cookie=$_COOKIE['car'];
	    $num=count($cookie);
		setcookie("car[$num][carname]",$result['name'],time()+3600,'/');
		setcookie("car[$num][carprice]",$result['price'],time()+3600,'/');
		setcookie("car[$num][carphoto]",$result['path'],time()+3600,'/');
		$this->redirect('Pay/cwzx');
	}
	
	public function shoppingsyxh()                                        //购物车添加2
	{
		$m=M('kxzb');
		$carname=I('get.carname');
		$where['name']=$carname;
		$result=$m->field('name,price,path')->where($where)->union("SELECT name,price,path FROM cwzx WHERE name='{$carname}'")->union("SELECT name,price,path FROM syxh WHERE name='{$carname}'")->find();
	    $cookie=$_COOKIE['car'];
	    $num=count($cookie);
		setcookie("car[$num][carname]",$result['name'],time()+3600,'/');
		setcookie("car[$num][carprice]",$result['price'],time()+3600,'/');
		setcookie("car[$num][carphoto]",$result['path'],time()+3600,'/');
		$this->redirect('Pay/syxh');
	}
	
	public function shoppingsearch()                                        //购物车添加3
	{
		$m=M('kxzb');
		$carname=I('get.carname');
		$where['name']=$carname;
		$result=$m->field('name,price,path')->where($where)->union("SELECT name,price,path FROM cwzx WHERE name='{$carname}'")->union("SELECT name,price,path FROM syxh WHERE name='{$carname}'")->find();
	    $cookie=$_COOKIE['car'];
	    $num=count($cookie);
		setcookie("car[$num][carname]",$result['name'],time()+3600,'/');
		setcookie("car[$num][carprice]",$result['price'],time()+3600,'/');
		setcookie("car[$num][carphoto]",$result['path'],time()+3600,'/');
		$this->redirect('Pay/search');
	}
	
	public function clear()                                             //Cookie清空
	{
		$num=I('get.key');
		setcookie("car[$num][carname]",'',time()-3600,'/');
		setcookie("car[$num][carprice]",'',time()-3600,'/');
		setcookie("car[$num][carphoto]",'',time()-3600,'/');
		echo "<script>window.location.href = document.referrer;</script>";
	}
	
	public function search()                                             //搜索
	{
		$m=M();
		$search=I('post.search');
		$where['name']=array('like',"%$search%");
		$result=$m->query("SELECT*FROM kxzb WHERE NAME LIKE '%{$search}%' UNION SELECT*FROM cwzx WHERE NAME
LIKE '%{$search}%' UNION SELECT*FROM syxh WHERE NAME LIKE '%{$search}%';");;
		$page=new \Org\Page(count($result),15);
		$result=$m->query("SELECT*FROM kxzb WHERE NAME LIKE '%{$search}%' UNION SELECT*FROM cwzx WHERE NAME
LIKE '%{$search}%' UNION SELECT*FROM syxh WHERE NAME LIKE '%{$search}%' LIMIT {$page->limit};");
        $this->assign('result',$result);
		$this->assign('msg',$page->msg());
		if (!empty($_COOKIE['car']))
		{
			$array=array();
			foreach($_COOKIE['car'] as $key=>$value)
			{
				$data['key']=$key;
				array_push($value,$key);
				array_unshift($array,$value);
			}
			$this->assign('array',$array);
		}
		$this->display();
	}
	
	public function msgajax()                                            //商品信息处理
	{
		$m=M('kxzb');
		$name=I('post.name');
		$where['name']=I('post.name');
		$result=$m->field('name,price,path')->where($where)->union("SELECT name,price,path FROM cwzx WHERE name='{$name}'")->union("SELECT name,price,path FROM syxh WHERE name='{$name}'")->find();
		$this->ajaxReturn($result);
	}
}
?>