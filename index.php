<!DOCTYPE html>

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300|Oswald:300,700|Great+Vibes' rel='stylesheet' type='text/css'>
<title>Detroit's Bachelor Party Headquarters</title>

<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/simplegrid.css" />


<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>


<script src="js/picturefill.js"></script>
<script src="js/menu.js"></script>
</head>



<body>
<div id="container"> <!-- main container all up in this piece -->


<?php

 // 1. Define an array of allowed $_GET values:
    $content = array('home', 'menu','contact','gallery','packages');

// 2. If the page is allowed, include it:
    if (in_array($_GET['id'], $content)) {
     include ($_SERVER['DOCUMENT_ROOT'] . '/pages/' . $_GET['id'] . '.php');
    }

// 3. If there is no $_GET['id'] defined, then serve the homepage:
  elseif (!isset($_GET['id'])) {
   include ("pages/home.php"); 	
	}
?>


</div> <!--  end main container  -->







<!-- navigation  -->
<nav>
<ul class="navbar">
<li class="navselection"><a href="home">HOME</a>
<li class="navselection"><a href="menu">MENU</a>
<li class="navselection"><a href="gallery">GALLERY</a>
<li class="navselection"><a href="VIP">VIP PACKAGES</a>
	<li class="navselection"><a href="contact">CONTACT</a>
</ul>
</nav>


<nav id="swipenav">
<ul class="navbar">
<li class="navselection"><a href="home">HOME</a>
<li class="navselection"><a href="menu">MENU</a>
<li class="navselection"><a href="VIP">VIP PACKAGES</a>
	<li class="navselection"><a href="contact">CONTACT</a>
</ul>
</nav>


<!-- end navigation -->
 
 
 <!-- top and bottom banners and logo -->

 <!--div id="swipeprompt"><p>SWIPE LEFT OR RIGHT FOR MENU</p></div-->
<div id="hamburger"><img src="img/hamburger.png" /></div>
<div id="logo"><img src="img/logo2.png" /></div>
<div id="blackbar"></div>
<div class="pinkline bottom"></div>

</body>
</html>