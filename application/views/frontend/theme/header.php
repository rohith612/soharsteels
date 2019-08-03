<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head lang="en">
    <title>Sohar Steel Group</title>
    <base>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="<?php echo base_url(); ?>" />
    <meta name="twitter:description" content="" />
    <meta name="og:title" content="Sohar Steel Group" />
    <meta name="og:type" content="website" />
    <meta name="og:description" content="" />
    <meta name="og:url" content="<?php echo base_url(); ?>" />
    <meta name="og:site_name" content="" />
    <link href="favicon.html" rel="shortcut icon" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo base_url(); ?>template/frontend/css/screen.css" />
    <link href="<?php echo base_url(); ?>template/frontend/css/jquery-accordion-menu.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>template/frontend/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <script src="<?php echo base_url(); ?>template/frontend/js/jquery-1.11.2.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>template/frontend/js/jquery-accordion-menu.js" type="text/javascript"></script>
    <script type="text/javascript">
        jQuery(document).ready(function() {
            jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
        });
        $(function() {
            
            $("#demo-list li").click(function() {

                $("#demo-list li.active").removeClass("active")

                $(this).addClass("active");

            })
        })
    </script>
	<?php if($page_menu=='home'){ ?> 
    <style>
        /* Google Fonts */
        @import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

        /* Global */
        .logo {
            background: none !important;
            top: 20px;
        }

        .line-1,
        .line-2,
        .line-3 {
            position: relative;

            width: 100%;
            margin: 0 auto;
            border-right: 2px solid rgba(255, 255, 255, .75);

            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            transform: translateY(-0%);
        }

        /* Animation */
        .anim-typewriter {
            animation: typewriter 4s steps(44) 1s 1 normal both,
                blinkTextCursor 500ms steps(44) infinite normal;
            font-family: 'Anonymous Pro', monospace;
        }

        .anim-typewriter1 {
            animation: typewriter1 4s steps(64) 4s 4 normal both,
                blinkTextCursor1 500ms steps(44) infinite normal;
            font-family: 'Anonymous Pro', monospace;
        }

        .anim-typewriter2 {
            animation: typewriters 4s steps(54) 5s 5 normal both,
                blinkTextCursors 700ms steps(66) infinite normal;
            font-family: 'Anonymous Pro', monospace;
        }

        @keyframes typewriter {
            from {
                width: 0;
            }

            to {
                width: 100%;
            }
        }

        @keyframes blinkTextCursor {
            from {
                border-right-color: rgba(255, 255, 255, .75);
            }

            to {
                border-right-color: transparent;
            }
        }

        @keyframes typewriter1 {
            from {
                width: 0;
            }

            to {
                width: 100%;
            }
        }

        @keyframes blinkTextCursor1 {
            from {
                border-right-color: rgba(255, 255, 255, .75);
            }

            to {
                border-right-color: transparent;
            }
        }

        @keyframes typewriters {
            from {
                width: 0;
            }

            to {
                width: 100%;
            }
        }

        @keyframes blinkTextCursors {
            from {
                border-right-color: rgba(255, 255, 255, .75);
            }

            to {
                border-right-color: transparent;
            }
        }
    </style>
	 <?php } ?>
</head>

<body>
	<?php //if($page_menu=='home'){ ?> 
    <div class="preloader-wrap">
        <div class="preloader-wrap_i">
            <div class="preloader animated">
                <div class="preloader__wrap">
                    <div class="preloader__logo"><img src="<?php echo base_url(); ?>template/frontend/img/preloader.gif" width="160" height="121"></div>
                </div>
            </div>
        </div>
    </div>
	<?php
	//}
	?>
    <div class="menu">
        <div class="menu_i">
            <div id="jquery-accordion-menu" class="jquery-accordion-menu">
                <ul id="demo-list">
                    <?php foreach ($menus as $row) { ?>
                        <li <?php if ($this->uri->segment(1) == $row['menu_url']) { ?> class="active" <?php } ?>><a href="<?php echo $row['menu_url']; ?>"><?php echo $row['menu_name']; ?></a>
                            <?php if (sizeof($row['menu_childs']) > 0) { ?>
                                <ul class="submenu">
                                    <?php foreach ($row['menu_childs'] as $child) { ?>
                                        <li><a href="<?php echo $child['menu_url']; ?>"><?php echo $child['menu_name']; ?></a></li>
                                    <?php } ?>
                                </ul>
                            <?php } else { ?>
                            <?php } ?>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div class="btn-menu">
        <div class="btn-menu_i">
            <div class="btn-menu_ii">
                <div class="btn-menu__line-4">MENU</div>
                <div class="btn-menu__line-1"></div>
                <div class="btn-menu__line-2"></div>
                <div class="btn-menu__line-3"></div>
            </div>
        </div>
    </div>
    <div class="logo ">
        <a href="<?php echo base_url();?> ">
            <span class="logo__img"></span>
        </a>
    </div>
    <div class="out">
        <div class="overlay">
            <div class="border-left"></div>
            <div class="border-right"></div>
            <div class="border-top"></div>
            <div class="border-bott"></div>
        </div>
        <div class="white-overlay"></div>
        <div class="grey-overlay"></div>
		<?php //if($page_menu=='home'){ ?> 
        <video autoplay loop class="home-video">
            <source src="<?php echo base_url(); ?>template/frontend/video/video1.mp4" type="video/mp4">
            <?php if ($this->uri->segment(1) == "") { ?>
                <source src="<?php echo base_url(); ?>template/frontend/video/demo1.webm" type="video/webm">
            <?php } else { ?>
                <source src="<?php echo base_url(); ?>template/frontend/video/demo.webm" type="video/webm">
            <?php } ?>
        </video>
		<?php //} ?>
        <div class="help-menu">
            <div id="jquery-accordion-menu" class="jquery-accordion-menu">
                <ul id="demo-list">
                    <?php foreach ($menus as $row) { ?>
                        <li><a href="<?php echo base_url() . $row['menu_url']; ?>"><?php echo $row['menu_name']; ?></a></li>
                    <?php } ?>
                </ul>
            </div>
        </div>
		<?php if($page_menu!='home'){ ?> 
        <div class="content">
		
			<section class="blog-list top-category blog-post wide animated animated-grey" data-href="#" style="left: 0px;">

			 
	
				<div class="page-position-controls right" style="display: block;">
					<ul>
						<li class="action-right"><a href="#"><i class="icon-right"></i><i class="icon-right-hover hover"></i></a>
						</li>
						<li class="action-left"><a href="#"><i class="icon-left"></i><i class="icon-left-hover hover"></i></a></li>
						<li class="action-resize"><a href="#"><i class="icon-resize"></i><i class="icon-resize-hover hover"></i></a>
						</li>
					</ul>
				</div>
				<div class="section-wrap mCustomScrollbar _mCS_2" style="height: 415px;"><div id="mCSB_2" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0"><div id="mCSB_2_container" class="mCSB_container" style="position: relative; top: 0px; left: 0px;" dir="ltr">
					<div class="wrap-border-left stable" style="height: 395px;"></div>
					<div class="wrap-border-right stable" style="height: 395px;"></div>
					<div class="wrap-border-top stable" style="width: 1306px;"></div>
					<div class="wrap-border-bott stable" style="width: 1306px;"></div>
					<div class="section-wrap_i ">
		<?php
		}
		?>			