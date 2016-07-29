-- MySQL dump 10.13  Distrib 5.1.73, for redhat-linux-gnu (x86_64)
--
-- Host: 10.67.15.85    Database: app_zhmxd
-- ------------------------------------------------------
-- Server version	5.6.23-72.1-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `password` char(32) NOT NULL,
  `level` tinyint(4) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'MapleStory','bfff068d1ff416995f60839d74a0ec1e',5,'2015-08-31 19:27:13'),(2,'Test','e10adc3949ba59abbe56e057f20f883e',4,'0000-00-00 00:00:00');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `big_ad_pic`
--

DROP TABLE IF EXISTS `big_ad_pic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `big_ad_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pathname` varchar(30) NOT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`,`pathname`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `big_ad_pic`
--

LOCK TABLES `big_ad_pic` WRITE;
/*!40000 ALTER TABLE `big_ad_pic` DISABLE KEYS */;
INSERT INTO `big_ad_pic` VALUES (1,'bg4.jpg','2015-08-27 22:01:00'),(2,'bg1.jpg','2015-08-27 22:07:04'),(3,'bg3.jpg','2015-08-27 22:04:00'),(4,'bg2.jpg','2015-08-27 22:07:07');
/*!40000 ALTER TABLE `big_ad_pic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cwzx`
--

DROP TABLE IF EXISTS `cwzx`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cwzx` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `price` smallint(6) NOT NULL,
  `path` varchar(40) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`price`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cwzx`
--

LOCK TABLES `cwzx` WRITE;
/*!40000 ALTER TABLE `cwzx` DISABLE KEYS */;
INSERT INTO `cwzx` VALUES (1,'香喷喷面包(11个)',3000,'4878_2361165.gif','2015-08-29 09:03:04'),(2,'独角兽糖果 1个',300,'NukdU4Pu25r3rHjus0.jpg','2015-08-29 09:03:04'),(3,'花蘑菇仔',4000,'1424_777385.gif','2015-08-29 09:08:45'),(4,'啊呜啊呜',5800,'7058_1170807.gif','2015-08-29 09:08:45'),(5,'刺猬',2485,'8758_2064710.jpg','2015-08-29 09:08:45'),(6,'米儿(龙龙)',5000,'7838_2178957.gif','2015-08-29 09:08:45'),(7,'小象宠物',3600,'3941_2627860.gif','2015-08-29 09:08:45'),(8,'波斯猫',4600,'9844_2882581.gif','2015-08-29 09:08:45'),(9,'威尔士柯基狗',3300,'5275_3548716.gif','2015-08-29 09:08:45'),(10,'潜水玩具鸭',6000,'5474_2361124.gif','2015-08-29 09:08:45'),(11,'蛋糕宝宝',2200,'oWUfU4X8scy0yZqd31.jpg','2015-08-29 09:08:45'),(12,'馅饼宝宝',2200,'qTAeU4BN7Wy0xBaLu0.jpg','2015-08-29 09:08:45'),(13,'龙',5800,'r3XdU49YZlA40NbzA0.jpg','2015-08-29 09:11:03'),(14,'嫩绿蘑菇帽',800,'9753_777395.gif','2015-08-29 09:12:36'),(15,'如虎添翼',1800,'3067_1221057.gif','2015-08-29 09:12:36'),(16,'asd',20,'1585_9994261.GIF','2015-11-03 11:06:56');
/*!40000 ALTER TABLE `cwzx` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kxzb`
--

DROP TABLE IF EXISTS `kxzb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kxzb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `price` smallint(6) NOT NULL,
  `path` varchar(40) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`price`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kxzb`
--

LOCK TABLES `kxzb` WRITE;
/*!40000 ALTER TABLE `kxzb` DISABLE KEYS */;
INSERT INTO `kxzb` VALUES (1,'法老头饰',1680,'6931_1187398.gif','2015-08-28 21:02:00'),(2,'天界圣战之冠',1280,'9501_2178983.gif','2015-08-28 21:15:06'),(3,'经典款T恤',780,'3756_8823008.jpg','2015-08-28 21:15:06'),(4,'橙灯罩裙',680,'1929_2027704.jpg','2015-08-28 21:18:52'),(5,'星星凉拖',580,'9296_472424.gif','2015-08-28 21:18:52'),(6,'伊丽莎白手套(女)',980,'1582_2428466.gif','2015-08-28 21:20:40'),(7,'超大心环绕戒指',1280,'6513_1946358.jpg','2015-08-28 21:20:40'),(8,'炫彩星星披风',1580,'1753_767972.gif','2015-08-28 21:22:30'),(9,'粉遮阳帽',780,'42c07557-0a9b-4dd4-b980-d27a2c275f5c.jpg','2015-08-28 21:22:30'),(10,'蓝遮阳帽',780,'e8551537-c73e-444a-a022-132013cabc92.jpg','2015-08-28 21:28:48'),(11,'黄遮阳帽',780,'bd04417e-1db3-401f-8b74-c003c80eacbf.jpg','2015-08-28 21:28:48'),(12,'蓝心头冠',880,'abc55859-624f-4137-a777-c2897c6a253d.gif','2015-08-28 21:34:55'),(13,'公主冠',880,'454602af-1d75-4611-835a-fedabf0c1818.gif','2015-08-28 21:34:55'),(14,'baby雪犬帽',880,'9924_621399.gif','2015-08-28 21:56:04'),(15,'我最IN－帽子',1280,'3791_659525.gif','2015-08-28 21:56:04'),(16,'天使之光',30,'9501_2178983.GIF','2015-11-03 10:50:37'),(17,'法老头饰',1680,'6931_1187398.GIF','2015-11-04 08:00:13'),(18,'Baby雪犬帽',880,'9924_621399.GIF','2015-11-04 08:03:56'),(19,'炫彩星星披风',1580,'1753_767972.GIF','2015-11-04 08:04:56'),(20,'伊丽莎白手套(女)',980,'1582_2428466.GIF','2015-11-04 08:05:26'),(21,'超大环心戒指',1280,'6513_1946358.JPG','2015-11-04 08:06:15'),(22,'我最IN-帽子',1280,'3791_659525.GIF','2015-11-04 08:07:05'),(23,'黄遮阳帽',780,'bd04417e-1db3-401f-8b74-c003c80eacbf.jpg','2015-11-04 08:07:56'),(24,'蓝遮阳帽',780,'e8551537-c73e-444a-a022-132013cabc92.jpg','2015-11-04 08:08:15'),(25,'粉遮阳帽',780,'42c07557-0a9b-4dd4-b980-d27a2c275f5c.jpg','2015-11-04 08:08:30'),(26,'公主冠',880,'abc55859-624f-4137-a777-c2897c6a253d.gif','2015-11-04 08:09:19');
/*!40000 ALTER TABLE `kxzb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderlist`
--

DROP TABLE IF EXISTS `orderlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderlist` (
  `orderid` varchar(23) NOT NULL,
  `userid` varchar(10) NOT NULL,
  `commodityname` varchar(15) NOT NULL,
  `price` double NOT NULL,
  `smalltype` varchar(10) NOT NULL,
  `bigtype` varchar(10) NOT NULL,
  `addtime` datetime NOT NULL,
  KEY `userid` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderlist`
--

LOCK TABLES `orderlist` WRITE;
/*!40000 ALTER TABLE `orderlist` DISABLE KEYS */;
INSERT INTO `orderlist` VALUES ('sad55','2','经典款T恤',7.8,'暂无','kxzb','2015-09-01 10:59:08'),('55e54a6e08338','2','baby雪犬帽',8.8,'暂无','kxzb','2015-09-01 14:51:00');
/*!40000 ALTER TABLE `orderlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `syxh`
--

DROP TABLE IF EXISTS `syxh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `syxh` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `price` smallint(6) NOT NULL,
  `path` varchar(40) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`price`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `syxh`
--

LOCK TABLES `syxh` WRITE;
/*!40000 ALTER TABLE `syxh` DISABLE KEYS */;
INSERT INTO `syxh` VALUES (1,'天降甜甜圈(3个装)',300,'4521_1272033.gif','2015-08-28 23:26:33'),(2,'神奇魔方1个',600,'4603_2126438.gif','2015-08-28 23:30:58'),(3,'神奇魔方6个',3500,'9531_2126405.gif','2015-08-28 23:30:58'),(4,'浪漫樱花10个',780,'85dd705c-499f-40a4-a8c3-c51dd873ee3a.jpg','2015-08-28 23:31:58'),(5,'浪漫樱花3个',280,'85dd705c-499f-40a4-a8c3-c51dd873ee3a.jpg','2015-08-28 23:31:58'),(6,'熊宝宝1个',180,'ae1da506-da72-4106-bb63-52f863cfb384.gif','2015-08-28 23:32:38'),(7,'熊宝宝11个',1800,'ae1da506-da72-4106-bb63-52f863cfb384.gif','2015-08-28 23:32:38'),(8,'祝你生日快乐1个',180,'5560_514419.gif','2015-08-28 23:33:33'),(9,'祝你生日快乐11个',1800,'5560_514419.gif','2015-08-28 23:33:33'),(10,'天降甜甜圈(10个装',850,'4521_1272033.gif','2015-08-28 23:34:43'),(11,'参鸡汤1个',180,'6768_9994931.gif','2015-08-28 23:34:43'),(12,'参鸡汤11个',1800,'1585_9994261.gif','2015-08-28 23:37:36'),(13,'炮竹声声(1个)',260,'tu1J92LKle73hJ2q61.jpg','2015-08-28 23:37:36'),(14,'炮竹声声(10个)',2500,'RwBcU4NBqb73wYjix0.jpg','2015-08-28 23:40:03'),(15,'真情告白3个',500,'c515ee19-7708-4860-b9c6-d649e0e3a2a0.jpg','2015-08-28 23:40:03'),(17,'神奇魔方一个',600,'4603_2126438.GIF','2015-11-04 12:41:07');
/*!40000 ALTER TABLE `syxh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_bing`
--

DROP TABLE IF EXISTS `tb_bing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_bing` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuser` varchar(50) NOT NULL,
  `photo` char(100) NOT NULL,
  `ucontent` varchar(50) NOT NULL,
  `iners` text NOT NULL,
  `sj` datetime NOT NULL,
  `diaoji` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_bing`
--

LOCK TABLES `tb_bing` WRITE;
/*!40000 ALTER TABLE `tb_bing` DISABLE KEYS */;
INSERT INTO `tb_bing` VALUES (25,'枫叶','maplestory.png','天天爱','<p><img src=\"http://img.baidu.com/hi/jx2/j_0050.gif\"/>尼玛别坑好不</p>','2015-09-03 20:56:58','游戏'),(26,'枫叶','maplestory.png','尼玛谁是坑','<p><img src=\"http://img.baidu.com/hi/jx2/j_0020.gif\"/>好吧，你是个坑</p>','2015-09-03 21:01:25','游戏'),(27,'枫叶','maplestory.png','尼玛谁是坑','<p><img src=\"http://img.baidu.com/hi/jx2/j_0037.gif\"/></p>','2015-09-03 21:14:51','游戏'),(28,'枫叶','maplestory.png','尼玛谁是坑','<p><img src=\"http://img.baidu.com/hi/jx2/j_0068.gif\"/></p>','2015-09-03 21:17:02','游戏'),(29,'枫叶','maplestory.png','尼玛谁是坑','<p><img src=\"http://img.baidu.com/hi/jx2/j_0056.gif\"/></p>','2015-09-03 21:25:33','游戏'),(30,'枫叶','maplestory.png','尼玛谁是坑','','2015-09-03 21:31:31','游戏'),(31,'枫叶','maplestory.png','尼玛谁是坑','<p>asdfsadf<br/></p>','2015-09-03 21:31:44','游戏'),(32,'刺蘑菇','maplestory.png','天天爱','<p><img src=\"http://img.baidu.com/hi/jx2/j_0026.gif\"/></p>','2015-09-03 22:00:20','游戏'),(33,'刺蘑菇','maplestory.png','尼玛谁是坑','<p>asdfkjashkdjiuqwefsa<br/></p>','2006-01-01 00:28:23','游戏'),(34,'刺蘑菇','maplestory.png','尼玛谁是坑','<p>zxcvzxdsadf<br/></p>','2006-01-01 01:19:34','游戏'),(35,'枫叶','maplestory.png','OK','<p><img alt=\"Desert.jpg\" src=\"/ueditor/php/upload/image/20060101/1136050627413965.jpg\" title=\"1136050627413965.jpg\"/></p>','2006-01-01 01:37:09','游戏'),(36,'枫叶','maplestory.png','这是消费吗','<p>asdfasdfas<span style=\"text-decoration: underline; border: 1px solid rgb(0, 0, 0);\"><em></em></span><br/></p>','2006-01-01 05:43:51','消费'),(37,'枫叶','maplestory.png','这是消费吗','<p>my good data<br/></p>','2006-01-01 05:47:28','消费'),(44,'枫叶','maplestory.png','这是消费吗','<p>asdfasdfsdafsdafsdafdsafsdafsadfsadfsadfsadfsad<br/></p>','2006-01-01 06:38:59','消费'),(45,'枫叶','maplestory.png','这是消费吗','<p>dsadfasdfa<br/></p>','2006-01-01 06:39:08','消费'),(46,'枫叶','maplestory.png','这是消费吗','<p>dsafdsafasdf<br/></p>','2006-01-01 06:39:46','消费'),(47,'枫叶','maplestory.png','这是消费吗','<p>sdfgsdfg<br/></p>','2006-01-01 06:44:04','消费'),(48,'枫叶','maplestory.png','小红帽','<p>这个多少银币<br/></p>','2006-01-01 07:12:14','消费'),(49,'枫叶','maplestory.png','小红帽','<p>基本原理<img src=\"http://img.baidu.com/hi/jx2/j_0079.gif\"/></p>','2006-01-01 07:18:42','消费');
/*!40000 ALTER TABLE `tb_bing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_guan`
--

DROP TABLE IF EXISTS `tb_guan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_guan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(15) NOT NULL,
  `pw` varchar(32) NOT NULL,
  `tel` bigint(20) NOT NULL,
  `lei` char(10) NOT NULL,
  `qx` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_guan`
--

LOCK TABLES `tb_guan` WRITE;
/*!40000 ALTER TABLE `tb_guan` DISABLE KEYS */;
INSERT INTO `tb_guan` VALUES (1,'刘德华','e10adc3949ba59abbe56e057f20f883e',123456789,'普通管理员',0),(2,'sulin','202cb962ac59075b964b07152d234b70',123456789,'超级管理员',1),(3,'MapleStory','e10adc3949ba59abbe56e057f20f883e',123456,'超级管理员',1);
/*!40000 ALTER TABLE `tb_guan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_luan`
--

DROP TABLE IF EXISTS `tb_luan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_luan` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_esperanto_ci NOT NULL,
  `photo` char(100) COLLATE utf8_esperanto_ci NOT NULL,
  `content` varchar(30) CHARACTER SET utf8 NOT NULL,
  `iner` text CHARACTER SET utf8 NOT NULL,
  `sj` datetime NOT NULL,
  `diaoji` varchar(10) COLLATE utf8_esperanto_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_esperanto_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_luan`
--

LOCK TABLES `tb_luan` WRITE;
/*!40000 ALTER TABLE `tb_luan` DISABLE KEYS */;
INSERT INTO `tb_luan` VALUES (12,'枫叶','maplestory.png','尼玛谁是坑','<p>邓2货你是坑吗？天坑，地坑？<br/></p>','2015-09-03 21:00:39','游戏'),(13,'刺蘑菇','maplestory.png','','<p><img src=\"http://img.baidu.com/hi/jx2/j_0059.gif\"/></p>','2015-09-03 21:59:54','游戏'),(14,'枫叶','maplestory.png','OK','<p>好了<br/></p>','2006-01-01 01:36:18','游戏'),(16,'枫叶','maplestory.png','1234','<p>基本原理<br/></p>','2006-01-01 05:10:19','游戏');
/*!40000 ALTER TABLE `tb_luan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_rizhi`
--

DROP TABLE IF EXISTS `tb_rizhi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_rizhi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `ip` varchar(30) NOT NULL,
  `caozuo` varchar(100) NOT NULL,
  `tjtime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_rizhi`
--

LOCK TABLES `tb_rizhi` WRITE;
/*!40000 ALTER TABLE `tb_rizhi` DISABLE KEYS */;
INSERT INTO `tb_rizhi` VALUES (3,'MapleStory','127.0.0.1','对表kxzb添加了新商品,商品名:回家了,价格:898,图片:psbe.jpg','0000-00-00 00:00:00'),(4,'MapleStory','127.0.0.1','对表kxzb添加了新商品,商品名:对对对,价格:555,图片:psb (1).jpg','2015-09-07 08:00:10'),(5,'MapleStory','127.0.0.1','对表syxh->id为23,商品为：执行了删除操作','2015-09-07 08:01:18'),(7,'MapleStory','127.0.0.1','对表syxh->id为24,商品为：33为执行了删除操作','2015-09-07 08:21:23'),(8,'MapleStory','127.0.0.1','表big_ad_pic 添加了新广告图文件名为psb (6).jpg','2015-09-07 08:42:11'),(10,'MapleStory','127.0.0.1','对表kxzb添加了新商品,商品名:55,价格:445,图片:psb.jpg','2015-09-07 08:55:40'),(11,'MapleStory','127.0.0.1','对表syxh->id为25,商品为：呵呵,执行了删除操作','2015-09-07 08:56:33'),(12,'MapleStory','127.0.0.1','表big_ad_pic 添加了新广告图文件名为psb (16).jpg','2015-09-07 09:19:13'),(13,'MapleStory','127.0.0.1','删除了表syxh->id为17,文件名为：psb (6).jpg的广告图。','2015-09-07 09:19:42'),(14,'MapleStory','127.0.0.1','删除了表syxh->id为18,文件名为：psb (16).jpg的广告图。','2015-09-07 09:35:18'),(15,'MapleStory','127.0.0.1','对表syxh->id为26,商品为：55,执行了删除操作','2015-09-07 09:38:55'),(16,'MapleStory','127.0.0.1','为表kxzb添加了新商品,商品名:hkah,价格:445,图片:注册.jpg','2015-09-07 09:59:19'),(17,'MapleStory','127.0.0.1','对表syxh->id为27,商品为：hkah,执行了删除操作','2015-09-07 09:59:27'),(18,'MapleStory','127.0.0.1','表big_ad_pic 添加了新广告图文件名为0000j7Xk.jpg','2015-09-07 10:00:43'),(19,'MapleStory','127.0.0.1','表big_ad_pic 添加了新广告图文件名为20150324181822_46500.jpg','2015-09-08 07:54:34'),(20,'MapleStory','127.0.0.1','为表cwzx添加了新商品,商品名:花之一,价格:500,图片:2123_392576.GIF','2015-09-08 07:55:04'),(21,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:法老头饰,价格:1680,图片:6931_1187398.GIF','2015-11-04 08:00:13'),(22,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:Baby雪犬帽,价格:880,图片:9924_621399.GIF','2015-11-04 08:03:56'),(23,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:炫彩星星披风,价格:1580,图片:1753_767972.GIF','2015-11-04 08:04:56'),(24,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:伊丽莎白手套(女),价格:980,图片:1582_2428466.GIF','2015-11-04 08:05:26'),(25,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:超大环心戒指,价格:1280,图片:6513_1946358.JPG','2015-11-04 08:06:15'),(26,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:我最IN-帽子,价格:1280,图片:3791_659525.GIF','2015-11-04 08:07:05'),(27,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:黄遮阳帽,价格:780,图片:bd04417e-1db3-401f-8b74-c003c80eacbf.jpg','2015-11-04 08:07:56'),(28,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:蓝遮阳帽,价格:780,图片:e8551537-c73e-444a-a022-132013cabc92.jpg','2015-11-04 08:08:15'),(29,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:粉遮阳帽,价格:780,图片:42c07557-0a9b-4dd4-b980-d27a2c275f5c.jpg','2015-11-04 08:08:30'),(30,'MapleStory','112.90.50.167','为表kxzb添加了新商品,商品名:公主冠,价格:880,图片:abc55859-624f-4137-a777-c2897c6a253d.gif','2015-11-04 08:09:19'),(31,'MapleStory','58.251.146.177','为表syxh添加了新商品,商品名:哈哈,价格:908,图片:logo.png','2015-11-04 12:40:08'),(32,'MapleStory','58.251.146.177','为表syxh添加了新商品,商品名:神奇魔方一个,价格:600,图片:4603_2126438.GIF','2015-11-04 12:41:07'),(33,'MapleStory','58.251.146.177','表syxh->id为16,商品为：哈哈,执行了删除操作','2015-11-04 12:41:15');
/*!40000 ALTER TABLE `tb_rizhi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_xiaofa`
--

DROP TABLE IF EXISTS `tb_xiaofa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_xiaofa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `content` varchar(100) NOT NULL,
  `iner` text NOT NULL,
  `sj` datetime NOT NULL,
  `diaoji` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_xiaofa`
--

LOCK TABLES `tb_xiaofa` WRITE;
/*!40000 ALTER TABLE `tb_xiaofa` DISABLE KEYS */;
INSERT INTO `tb_xiaofa` VALUES (1,'枫叶','maplestory.png','这是消费吗','<p>试试看不就知道了<br/></p>','2006-01-01 05:17:39','消费'),(2,'枫叶','maplestory.png','小红帽','<p><img alt=\"2946_2215483.GIF\" src=\"/ueditor/php/upload/image/20060101/1136070645770053.gif\" title=\"1136070645770053.gif\"/>小红帽</p>','2006-01-01 07:10:55','消费');
/*!40000 ALTER TABLE `tb_xiaofa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_user`
--

DROP TABLE IF EXISTS `temp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temp_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `password` char(32) NOT NULL,
  `mail` varchar(20) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_user`
--

LOCK TABLES `temp_user` WRITE;
/*!40000 ALTER TABLE `temp_user` DISABLE KEYS */;
INSERT INTO `temp_user` VALUES (28,'月牙标','bfff068d1ff416995f60839d74a0ec1e','1246275060@qq.com',15646464687,'2015-09-01 23:16:41'),(25,'刺蘑菇','bfff068d1ff416995f60839d74a0ec1e','494873674@qq.com',15608430479,'2015-09-01 20:18:52'),(10,'枫叶','bfff068d1ff416995f60839d74a0ec1e','494873684@qq.com',15608430475,'2015-08-30 11:45:03'),(27,'月牙标','bfff068d1ff416995f60839d74a0ec1e','applezhenhua@163.com',15608436464,'2015-09-01 23:14:24'),(29,'冒险岛','bfff068d1ff416995f60839d74a0ec1e','applezhenhua@163.com',15646479867,'2015-09-02 18:57:58'),(30,'Test','e10adc3949ba59abbe56e057f20f883e','1246275068@qq.com',15608464646,'0000-00-00 00:00:00');
/*!40000 ALTER TABLE `temp_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `password` char(32) NOT NULL,
  `mail` varchar(20) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `photo` varchar(40) NOT NULL DEFAULT 'maplestory.png',
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'MapleStory','e10adc3949ba59abbe56e057f20f883e','1246275947@qq.com',15608432565,'maplestory.png','2015-08-29 21:01:47'),(2,'枫叶','bfff068d1ff416995f60839d74a0ec1e','494873694@qq.com',15608430471,'maplestory.png','2015-08-30 10:52:40'),(19,'月牙标','bfff068d1ff416995f60839d74a0ec1e','1246275060@qq.com',15646464687,'maplestory.png','0000-00-00 00:00:00'),(18,'刺蘑菇','bfff068d1ff416995f60839d74a0ec1e','494873674@qq.com',15608430479,'maplestory.png','0000-00-00 00:00:00'),(20,'冒险岛','bfff068d1ff416995f60839d74a0ec1e','applezhenhua@163.com',15646479867,'maplestory.png','0000-00-00 00:00:00'),(21,'Test','e10adc3949ba59abbe56e057f20f883e','',0,'maplestory.png','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useraddr`
--

DROP TABLE IF EXISTS `useraddr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `useraddr` (
  `userid` int(11) NOT NULL,
  `xingming` varchar(5) NOT NULL,
  `shengfen` varchar(8) NOT NULL,
  `city` varchar(5) NOT NULL,
  `street` varchar(15) NOT NULL,
  `qq` bigint(20) NOT NULL,
  UNIQUE KEY `userid_3` (`userid`),
  KEY `userid` (`userid`),
  KEY `userid_2` (`userid`),
  KEY `userid_4` (`userid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useraddr`
--

LOCK TABLES `useraddr` WRITE;
/*!40000 ALTER TABLE `useraddr` DISABLE KEYS */;
INSERT INTO `useraddr` VALUES (2,'臻华','湖南','娄底市','某某某',494873674),(1,' 小明','内蒙古','呼和浩特','传说中的街道',0),(18,'暂无','暂无','暂无','暂无',0),(19,'暂无','暂无','暂无','东方神州',0),(20,'暂无','暂无','暂无','暂无',0);
/*!40000 ALTER TABLE `useraddr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xpzs`
--

DROP TABLE IF EXISTS `xpzs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xpzs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `price` smallint(6) NOT NULL,
  `path` varchar(40) NOT NULL,
  `addtime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`,`price`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xpzs`
--

LOCK TABLES `xpzs` WRITE;
/*!40000 ALTER TABLE `xpzs` DISABLE KEYS */;
INSERT INTO `xpzs` VALUES (1,'呆萌鼠鼠_男',0,'JipK92LYIK04nkDYC1.gif','2015-08-28 23:12:01'),(2,'人鱼传说_男',0,'vHCK92JtF962kzmlO1.gif','2015-08-28 23:12:01'),(3,'呼啦夏威夷男',0,'KFOeU4fu0Uh080cJg0.gif','2015-08-28 23:14:08'),(4,'沙滩宝贝_男',0,'PusK92t55Di3WJ5Jx0.gif','2015-08-28 23:14:08');
/*!40000 ALTER TABLE `xpzs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-29 10:39:42
