<?php
namespace Home\Controller;
use Think\Controller;
header('content-type:text/html;charset=utf-8');
class LiuController extends Controller {
		public function _initialize(){                                    //检查cookie
	      if(empty($_SESSION['user'])){
			  $this->error('请先登录，亲！！！',U('home/index/index','',false));
			  }
	  
	}
	public function liushuo(){
		$total= M('tb_luan')->count();
		$this->total=$total;
		$tota=M('tb_xiaofa')->count();
		$this->tota=$tota;
		$this->tar=$total+$tota;
		$this->display();
		}
	public function xiaofaindex($id=null,$content=null){
		$this->data=M('tb_xiaofa')->where(array('id'=>$id))->find();
		$this->arrdata=M('tb_bing')->where(array('ucontent'=>$content))->select();
		$this->display();
		}
	public function index($id=null,$content=null){
		$this->data=M('tb_luan')->where(array('id'=>$id))->find();
		$this->arrdata=M('tb_bing')->where(array('ucontent'=>$content))->select();
		$this->display();
		}
		public function rdd($content=null,$id=null){
		 $aad=I('session.');
		$arrdata=I('post.');
		$acb=$_POST['editorValue'];		
		$arrdata['sj']=date("Y-m-d H:i:s");
		$abb['iners']=$acb;
		$abb['sj']=$arrdata['sj'];
		$abb['ucontent']=$content;
		$abb['photo']=$aad['photo'];
		$abb['uuser']=$aad['user'];
		$abb['diaoji']=$arrdata['diaoji'];
		$a=M('tb_bing')->data($abb)->add();
	    if($a){
            	$this->success('操作成功',U('home/liu/xiaofaindex',array('id'=>$id,'content'=>$abb['ucontent']),false));
            }else{
            	$this->error('操作失败',U('liu/index','',false));
            }
		
		}
	public function ardd($content=null,$id=null){
		 $aad=I('session.');
		$arrdata=I('post.');
		$arrdata['sj']=date("Y-m-d H:i:s");
		$abb['iners']=$_POST['editorValue'];
		$abb['sj']=$arrdata['sj'];
		$abb['ucontent']=$content;
		$abb['photo']=$aad['photo'];
		$abb['uuser']=$aad['user'];
		$abb['diaoji']=$arrdata['diaoji'];
		$a=M('tb_bing')->data($abb)->add();
	    if($a){
            	$this->success('操作成功',U('home/liu/index',array('id'=>$id,'content'=>$abb['ucontent']),false));
            }else{
            	$this->error('操作失败',U('liu/index','',false));
            }
		
		}
	
	public function fabao()
	{
		$m=M('tb_luan');
		$num=$m->count('*');
		$page=new \Org\Page($num,5);
		$data=$m->limit($page->limit)->select();
		$this->assign('data',$data);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	
   public function add() {
	     $aad=I('session.');
		$arrData = I('post.');
		if(empty($arrData)){
		  $this->display();
		}else{
			$arrData['sj']=date("Y-m-d H:i:s");
			$arrDatax['content']=$arrData['fabao'];
			$arrDatax['iner']=$_POST['editorValue'];
			$arrDatax['sj']=$arrData['sj'];
			$arrDatax['name']=$aad['user'];
			$arrDatax['photo']=$aad['photo'];
			$arrDatax['diaoji']=$arrData['diaoji'];
            $Data = M('tb_luan')->data($arrDatax)->add();
            if($Data){
            	$this->success('操作成功',U('liu/fabao','',false));
            }else{
            	$this->error('操作失败',U('liu/fabao','',false));
            }
		}
	}
	public function xiaofa()
	{
		$m=M('tb_xiaofa');
		$num=$m->count('*');
		$page=new \Org\Page($num,5);
		$data=$m->limit($page->limit)->select();
		$this->assign('data',$data);
		$this->assign('msg',$page->msg());
		$this->display();
	}
	 public function radd() {
	     $aad=I('session.');
		$arrData = I('post.');
		if(empty($arrData)){
		  $this->display();
		}else{
			$arrData['sj']=date("Y-m-d H:i:s");
			$arrDatax['content']=$arrData['fabao'];
			$arrDatax['iner']=$_POST['editorValue'];
			$arrDatax['sj']=$arrData['sj'];
			$arrDatax['name']=$aad['user'];
			$arrDatax['photo']=$aad['photo'];
			$arrDatax['diaoji']=$arrData['diaoji'];
            $Data = M('tb_xiaofa')->data($arrDatax)->add();
            if($Data){
            	$this->success('操作成功',U('liu/xiaofa','',false));
            }else{
            	$this->error('操作失败',U('liu/xiaofa','',false));
            }
		}
	}
	
    public function _empty(){
	 exit( "请输入你要发表的内容或是评论的内容");
	 } 


}


?>