<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
<meta charset="utf-8">
</head>

<body>
<body onload="tijiao()">
<form action="https://pay3.chinabank.com.cn/PayGate" method="post" id="form1">
<input type="hidden" name="v_mid"         value="<?php echo ($v_mid); ?>">
<input type="hidden" name="v_oid"         value="<?php echo ($v_oid); ?>">
<input type="hidden" name="v_amount"      value="<?php echo ($v_amount); ?>">
<input type="hidden" name="v_moneytype"   value="<?php echo ($v_moneytype); ?>">
<input type="hidden" name="v_url"         value="<?php echo ($v_url); ?>">
<input type="hidden" name="v_md5info"     value="<?php echo ($v_md5info); ?>">
 <!--以下几项项为网上支付完成后，随支付反馈信息一同传给信息接收页 -->	
<input type="hidden" name="remark1"       value="<?php echo ($remark1); ?>">
</form>

<script type="text/javascript">
function tijiao(){
	document.getElementById('form1').submit();
}

</script>
</body>
</html>