<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
	 
	public function tuichu()                                            //退出
	{
		cookie('adminname',null);
		cookie('adminpw',null);
		session('adminname',null);
		session('adminpw',null);
		$this->redirect('Index/index');
	}
	
	public function test()
	{
		dump($this->redirect('Index/index'));
	}
	
	public function verify()                                           //验证码显示
	{
		$code=new \Org\Verify\Verify;
	}
	
	public function index()                                            //登陆界面显示
	{
        $this->display();
    }
	
	public function check()                                            //登陆检测
	{
		$verify=I('post.verify');
		if ($verify==I('session.valicode'))
		{
			$m=M('admin');
			$data['name']=I('post.admin');
			$data['password']=md5(I('post.pw'));
			$result=$m->where($data)->find();
			if ($result)
			{
				cookie('adminname',$result['name'],3600);
				cookie('adminpw',$result['password'],3600);
				cookie('adminlevel',$result['level'],3600);
				session('adminname',$result['name']);
				session('adminpw',$result['password']);
				session('adminlevel',$result['level']);
				$this->redirect('Index/admin');
			}
			else
			{$this->error('账户或密码错误','Index/index');}
		}
		else
		{$this->error('验证码错误','Index/index');}
	}
	
	public function admin()                                       //界面显示
	{
		$this->display();
	}
	
	public function UserControll()                                //用户管理
	{
		$m=M('user');
		$num=$m->count('*');
		$page=new \Org\Page($num,6);
		$result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function moremsg()                                     //用户详细信息
	{
		$m=M('user');
		$id=I('get.id');
		$where['id']=$id;
		$result=$m->where($where)->limit($page->limit)->join("__USERADDR__ ON userid=$id")->find();
		$this->assign('result',$result);
		$this->display();
	}
	
	public function AdControll()                                  //广告图片管理
	{
		$m=M('big_ad_pic');
		$num=$m->count('*');
		$page=new \Org\Page($num,2);
        $result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function DeleteAd()                                    //删除广告
	{
		$m=M('big_ad_pic');
		$id=I('get.id');
		$bool=$m->delete($id);
		if($bool){
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='删除了表syxh->id为'.$id.',文件名为：'.I('get.gg').'的广告图。';
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
				  }					
		echo '<script>window.history.go(-2);</script>';
	}
	 
	public function AddAd()                                       //添加广告页面
	{
		$this->display();
	}
	
	public function Addaction()                                   //加添广告操作
	{
		$upload = new \Think\Upload();
		$upload->maxSize=3145728;
		$upload->exts=array('jpg', 'gif', 'png', 'jpeg'); 
		$upload->saveName='';
		$upload->rootPath ='./Public/IMAGES/';
		$upload->autoSub  = false;
		$info=$upload->uploadOne($_FILES['pic']);
		if ($info)
		{
		   $m=M('big_ad_pic');
		   $data['pathname']=$info['savename'];
		   $data['addtime']=date('y-m-d h:i:s',time());
		   $m->add($data);
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='表big_ad_pic 添加了新广告图文件名为'.$info['savename'];
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
		  
			echo "<script>window.history.go(-2)</script>";
		}
		else
		{echo $upload->getError();}
	}
	
	public function CommodityControll()                            //商品管理
	{
		$m=M('kxzb');
		$num=$m->count('*');
		$page=new \Org\Page($num,6);
        $result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function cwzx()                                         //商品管理
	{
		$m=M('cwzx');
		$num=$m->count('*');
		$page=new \Org\Page($num,6);
        $result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function syxh()                                         //商品管理
	{
		$m=M('syxh');
		$num=$m->count('*');
		$page=new \Org\Page($num,6);
        $result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function DeleteCommodity()                                  //商品删除
	{
		$id=I('get.id');
		$m=M('kxzb');
		$bool=$m->delete($id);
		if($bool){
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='对表syxh->id为'.$id.',商品为：'.I('get.sp').',执行了删除操作';
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
		   
				  }					
		echo '<script>window.history.go(-2);</script>';	
	}
	 
	public function Deletecwzx()                                       //商品删除
	{
		$id=I('get.id');
		$m=M('cwzx');
		$bool=$m->delete($id);
		if($bool){
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='对表syxh->id为'.$id.',商品为：'.I('get.sp').',执行了删除操作';
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
		  
				  }					
		echo '<script>window.history.go(-2);</script>';	
	}
	 
	public function Deletesyxh()                                       //商品删除
	{
		$id=I('get.id');
		$m=M('syxh');
		$bool=$m->delete($id);
		 if($bool){
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='表syxh->id为'.$id.',商品为：'.I('get.sp').',执行了删除操作';
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
		  
				  }					
		echo '<script>window.history.go(-2);</script>';	
	}
	
	public function AddCommodity()                                     //添加商品页面显示
	{
		$this->display();
	}
	
	
	public function CommodityAction()                                   //添加商品操作
	{
		$upload = new \Think\Upload();
		$upload->maxSize=3145728;
		$upload->exts=array('jpg', 'gif', 'png', 'jpeg'); 
		$upload->saveName='';
		$upload->rootPath ='./Public/IMAGES/';
		$upload->autoSub  = false;
		$info=$upload->uploadOne($_FILES['pic']);
		if ($info)
		{
			$type=I('post.type');
			$m=M($type);
			$data['path']=$info['savename'];
			$data['name']=I('post.name');
			$data['price']=I('post.price');
			$data['addtime']=date('y-m-d h:i:s',time());
			$bool=$m->add($data);
			 if($bool){
		   $arrdat['name']=$_SESSION['adminname'];
		   $arrdat['ip']=$_SERVER['REMOTE_ADDR'];
		   $arrdat['caozuo']='为表'.$type.'添加了新商品,商品名:'.I('post.name').',价格:'.I('post.price').',图片:'.$info['savename'];
		   $arrdat['tjtime']=date('y-m-d h:i:s',time());
		   $boo=M('tb_rizhi')->data($arrdat)->add();  
		  
				  }					
			echo "<script>window.history.go(-2)</script>";
		}
		else
		{echo $upload->getError();}
	}
	                                                            //论坛管理
	public function TalkControll()                              //查看
	{   $m=M('tb_luan');
		$num=$m->count('*');
		$page=new \Org\Page($num,5);
		$data=$m->limit($page->limit)->select();
		$this->assign('data',$data);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
	public function xiaofaindex($id=null,$content=null){          //评论查看
		$this->data=M('tb_luan')->where(array('id'=>$id))->find();
		$this->arrdata=M('tb_bing')->where(array('ucontent'=>$content))->select();
		$this->display();
		}
	public function accd($id=null,$content=null){                                //文章及评论删除                                  
		$select=M('tb_luan')->where(array('id'=>$id))->delete();
		$select1=M('tb_bing')->where(array('uconent'=>$conent))->delete();
		if($select){
            	$this->success('操作成功',U('home/index/TalkControll','',false));
            }else{
            	$this->error('操作失败',U('home/index/TalkControll','',false));
            }
		}
	public function OrderControll()                               //订单信息
	{
		$m=M('orderlist');
		$num=$m->count('*');
		$page=new \Org\Page($num,5);
		$m=M('user');
		$result=$m->limit($page->limit)->join("__ORDERLIST__ ON userid=id")->select();
		$this->assign('result',$result);
		$this->assign('msg',$page->msg());
		$this->display();
 	}
	
	 public function rizhi(){                                        //查看日志
	    
		$m=M('tb_rizhi');
		$num=$m->count('*');
		$page=new \Org\Page($num,13);
		$result=$m->order('id desc')->limit($page->limit)->select();
		$this->assign('data',$result);
		$this->assign('pageinfoa',$page->msg());
		$this->display();
	 }
	 
	  public function deleterj(){                                        //删除日志
	    
		$m=M('tb_rizhi');
		$id=$_GET['id'];
		$bool=$m->where(array("id=$id"))->delete();
        $this->redirect('Index/rizhi');
	 }
		                                                                   
	public function asd()
	{
		$this->display();
	}
	
	
	public function quit()                                         //退出  cookie session 注销
	{
		cookie('user',null);
		cookie('password',null);
		session(null);
		$this->redirect('Index/index');
	}
}