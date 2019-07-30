<?php
class GitHub {
    private static $product = 'GitHub';
	private static $audience = 'everyone';
	
	public static function getProduct() {return self::$product;}
	public static function getAudience() {return self::$audience;}
	
	
}

?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title><?=GitHub::getProduct()?> is for <?=GitHub::getAudience()?></title>
   </head>
   <body>
      <div id='<?=GitHub::getProduct()?>' data-intended-audience='<?=GitHub::getAudience()?>'>
         <h1><?=GitHub::getProduct()?> is for <?=GitHub::getAudience()?>!</h1>
      </div>
   </body>
</html>

