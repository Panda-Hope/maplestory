<?php // content="text/plain; charset=utf-8"
//加载jpgraph核心代码
require_once ('jpgraph/jpgraph.php');
//加载饼状图类
require_once ('jpgraph/jpgraph_pie.php');
//加载3D饼状图类
require_once ('jpgraph/jpgraph_pie3d.php');
require_once ('db.class.php');

//$gJpgBrandTiming=true;

//饼状图初化
//$data = array(80,21,17,27,23,23);

$db = new Db();
$arrData = $db->fetchAll("select sum(total) as total from tb_order group by month(ordertime)");
$arrDatax = array();
foreach($arrData as $value){
	$arrDatax[] = $value['total'];
}
$data =$arrDatax;
//创建饼状图画布 
$graph = new PieGraph(800,400,'auto');
//添加阴影
$graph->SetShadow();

//设置标题及字体
$graph->title->Set("2015年南头沃尔玛上半年销售报表");
$graph->title->SetFont(FF_SIMSUN,FS_BOLD,20);

//创建3D图
$p1 = new PiePlot3D($data);
$p1->SetLegends(array("1月","2月","3月","4月","5月","6月"));
$graph->legend->SetFont(FF_SIMSUN,FS_NORMAL);
//地址
$targ=array("http://www.baidu.com","pie3d_csimex1.php?v=2","pie3d_csimex1.php?v=3",
			"pie3d_csimex1.php?v=4","pie3d_csimex1.php?v=5","pie3d_csimex1.php?v=6");
$alts=array("val=%f","val=%f","val=%f","val=%f","val=%f","val=%f");
//为每个区域指一个url地址
$p1->SetCSIMTargets($targ,$alts);

// Use absolute labels
/* $p1->SetLabelType(1);
$p1->value->SetFormat("%d kr"); */

//调位置
$p1->SetCenter(0.4,0.5);
//添加到画布
$graph->Add($p1);


// Send back the HTML page which will call this script again
// to retrieve the image.
//输出
$graph->StrokeCSIM();

?>


