<?php
class Github {
    private static $product = 'Github';
	private static $audience = 'everyone';
	
	public static function getProduct() {return self::$product;}
	public static function getAudience() {return self::$audience;}
	
	
}

?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title><?=Github::getProduct()?> is for <?=Github::getAudience()?></title>
   </head>
   <body>
      <div id='<?=Github::getProduct()?>' data-intended-audience='<?=Github::getAudience()?>'>
         <h1><?=Github::getProduct()?> is for <?=Github::getAudience()?>!</h1>
      </div>
   </body>
</html>

