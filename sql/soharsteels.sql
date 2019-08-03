-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 01, 2019 at 06:48 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `soharsteels`
--

-- --------------------------------------------------------

--
-- Table structure for table `content_map`
--

CREATE TABLE IF NOT EXISTS `content_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_id` int(11) NOT NULL,
  `sub_content_title` varchar(255) DEFAULT NULL,
  `sub_contents` text,
  `sub_content_image` varchar(255) DEFAULT NULL,
  `sub_order` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `content_map`
--

INSERT INTO `content_map` (`id`, `page_id`, `sub_content_title`, `sub_contents`, `sub_content_image`, `sub_order`) VALUES
(1, 3, 'title 1', '<p>sub content 1222256456456</p>', 'flight-logo-one2.png', 1),
(2, 3, 'title 2', '<p>sub content 2</p>', 'flight-logo-one.png', 2),
(3, 3, 'title 3.1', '<p><br></p><div class="u_fNK" data-grammarly-part="highlights" style="position: absolute; top: 0px; left: 0px;"><div style="box-sizing: content-box; top: 168.75px; left: 0px; width: 300px; height: 37px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"><div style="position: absolute; top: 0px; left: 0px;"><div style="height: 717px; width: 1580px;"><br></div><div style="position: absolute; top: 0px; left: 0px; height: 717px; width: 1580px;"><br></div></div></div></div><div class="u_fNK" data-grammarly-part="button" style="position: absolute; top: 0px; left: 0px;"><div style="box-sizing: content-box; top: 168.75px; left: 0px; width: 300px; height: 37px; position: relative; pointer-events: none; overflow: hidden; border: 0px; border-radius: 0px; padding: 0px; margin: 0px;"><div style="position: absolute; transform: translate(-100%, -100%); top: 27px; left: 295px; width: auto; height: auto; pointer-events: all;"><div style="display: flex; flex-direction: row;"><div style="position: relative;"><div class="_2vV1Z _3uWIx" style="position: absolute; right: 0px; top: 0px;"><div class="_2mmtW"><div class="-mjUa"><div class="_3dPLF _2_DQz" style="transform: scale(1);">0</div>&nbsp;Advanced issues found<div class="ll-S4">?</div><div class="_3pmCo"><br></div></div></div></div><div class="Y3pRF _2lkte _1tE8n" style="position: absolute; right: 0px; top: 0px;"><div class="Y3pRF RHTGC"><br></div></div></div><div><div class="_5WizN _37oOc _1QzSN"><div class="_3YmQx"><div class="_3QdKe" title="Protected by Grammarly">&nbsp;</div></div></div></div></div></div></div></div><p><span class="fr-img-wrap"><span class="fr-inner" contenteditable="true" spellcheck="false">rererere</span></span>sub content 3 old new testdedfsffds fsfsdfsdfsdddddddddddddddddddddddddddddddddddddddddddddddddddddd</p><p><br></p><p>fgdgfgdf</p>', 'logo.png', 3),
(4, 3, 'sdsd', 'sadasd', NULL, 4);

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `page_id` int(11) NOT NULL AUTO_INCREMENT,
  `page_icons` varchar(75) DEFAULT NULL,
  `page_parent` int(11) NOT NULL DEFAULT '0',
  `page_name` varchar(75) DEFAULT NULL,
  `page_content` text NOT NULL,
  `page_banner` varchar(255) DEFAULT NULL,
  `page_meta_title` varchar(255) NOT NULL,
  `page_meta_description` varchar(255) NOT NULL,
  `page_meta_key_word` varchar(255) NOT NULL,
  `page_order` int(1) NOT NULL,
  `page_status` int(11) NOT NULL,
  PRIMARY KEY (`page_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`page_id`, `page_icons`, `page_parent`, `page_name`, `page_content`, `page_banner`, `page_meta_title`, `page_meta_description`, `page_meta_key_word`, `page_order`, `page_status`) VALUES
(1, '<i class="fa fa-home">', 0, 'HOME', '<div class="section-wrap"><div class="home-carousel"><div class="home-carousel__list"><div class="item"><div class="title"><h2 class="line-1 anim-typewriter">THE INNER STRENGTH OF OMAN</h2></div><div class="text"><p><br></p></div></div><div class="item"><div class="title"><h2 class="line-2 anim-typewriter1">SOHAR STEEL GROUP</h2></div><div class="text"><p>One of the major producers of new generation high strength steel</p></div></div></div></div></div><p><span xss=removed> Copyright © 2018. All rights reserved by Sohar Steel Group | Designed by Tech Galaxy LLC. </span></p>', NULL, 'home', 'home', 'home', 1, 1),
(2, '<i class="fa fa-user">', 0, 'ABOUT US', '<p>ABOUT US</p>', NULL, 'ABOUT US', 'ABOUT US', 'ABOUT US', 2, 1),
(3, NULL, 2, 'Company Profile', '<p>Company Profile</p>', NULL, 'Company Profile', 'Company Profile', 'Company Profile', 0, 1),
(4, NULL, 2, 'HSE Policy & The Environment', '<p>HSE Policy & The Environment</p>', NULL, 'HSE Policy & The Environment', 'HSE Policy & The Environment', 'HSE Policy & The Environment', 0, 1),
(5, '<i class="fa fa-cog">', 0, 'GROUP OF COMPANIES', '<p>GROUP OF COMPANIES</p>', NULL, 'GROUP OF COMPANIES', 'GROUP OF COMPANIES', 'GROUP OF COMPANIES', 3, 1),
(6, NULL, 5, 'Sharq Sohar Steel Rolling Mills', '<p>Sharq Sohar Steel Rolling Mills</p>', NULL, 'Sharq Sohar Steel Rolling Mills', 'Sharq Sohar Steel Rolling Mills', 'Sharq Sohar Steel Rolling Mills', 0, 1),
(7, NULL, 5, 'Middle East Conversion Industries LLC (MECI)', '<p>Middle East Conversion Industries LLC (MECI)</p>', NULL, 'Middle East Conversion Industries LLC (MECI)', 'Middle East Conversion Industries LLC (MECI)', 'Middle East Conversion Industries LLC (MECI)', 0, 1),
(8, NULL, 5, 'Sohar Steel LLC', '<p>Sohar Steel LLC</p>', NULL, 'Sohar Steel LLC', 'Sohar Steel LLC', 'Sohar Steel LLC', 0, 1),
(9, '<i class="fa fa-suitcase">', 0, 'PRODUCTS', '<p>PRODUCTS</p>', NULL, 'PRODUCTS', 'PRODUCTS', 'PRODUCTS', 4, 1),
(10, NULL, 9, 'Reinforcing Bars', '<div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">REINFORCING BARS</h1></div><div class="post detect-inview visible" xss=removed><p class="detect-inview visible">The prime finished product of Sohar Steel Group is the steel reinforcment bars or rebars .<br><br><strong>Product Range</strong><br>8mm, 10mm, 12mm, 14mm, 16mm, 18mm, 20mm, 22mm, 25mm and 32mm<br><br>The prime finished product of Sohar Steel is the BS 4449 -2009 (B500B) rebars that are produced at Sharq Sohar Steel Rolling Mills. Rebars of nominal diameter 8mm, 10mm, 12mm, 14mm, 16mm, 18mm, 20mm, 22mm, 25mm and 32mm are produced at the rolling mill. Bars carrying both SSBS and CARES are mark are produced based on specific customer requirements. Low carbon content, higher yield strength, tensile strength, and percentage elongation are the prime advantages of Sohar Steel’s rebars.<br><br><strong>Chemical Properties</strong><br>As BS 4449:2005 (B500B) and GSO/ISO 6935:2007(B500BWR)- % Max value - Cast analysy<br><span class="str">Carbon <br> 0.22</span> <span class="str">Sulpher <br> 0.05</span> <span class="str">Phosphorous <br> 0.012</span> <span class="str">Copper <br> 0.80</span> <span class="str">Silicon <br> 0.60</span> <span class="str">Manganese <br> 1.60</span> <span class="str">C.E <br> 0.50</span><br><br><br>As per ASTM A 615 Gr 60 - Phosphorous - 006 % Max<br><br><strong>Mechanical Properties</strong><br><span class="bor">As per BS: 4449 - 2005 (B500B) and GSO ISO 935-2/2007 (B500BWWR)</span><br><span class="bor"> Y.S. = 500N/mm2 (mm) </span><br><span class="bor">T.S./Y.S. Ratio =1.08 (mm)</span><br><span class="bor"> Total Elongation(Agt) = 5% (mm)</span><br><span class="bor"> Elongation at fracture(AS) = 14% (mm)</span><br><span class="bor"> Rebend &lt;/= 16mm = 4d, where d is nominal dia of bar.<br> > 16mm =7 (d) </span><br><span class="bor"> As per ASTM A-615 Gr 60 </span><br><span class="bor"> Y.S = 420 N/mm2 minimum </span><br><span class="bor"> T.S = 620 N/mm2 minimum </span><br><span class="bor"> Elongation (in 8") = 9%(8mm to 20mm) minimum<br> = 8%(25mm) and 7%(32mm) </span><br><br><br><br></p><br></div></div>', NULL, 'Reinforcing Bars', 'Reinforcing Bars', 'Reinforcing Bars', 0, 1),
(11, NULL, 9, 'Steel Mesh', '<p>Steel Mesh</p>', NULL, 'Steel Mesh', 'Steel Mesh', 'Steel Mesh', 0, 1),
(12, NULL, 9, 'Steel Billets', '<p>Steel Billets</p>', NULL, 'Steel Billets', 'Steel Billets', 'Steel Billets', 0, 1),
(13, NULL, 9, 'Epoxy Coating', '<p>Epoxy Coating</p>', NULL, 'Epoxy Coating', 'Epoxy Coating', 'Epoxy Coating', 0, 1),
(14, '<i class="fa fa-shield"></i>', 0, 'QUALITY STANDARDS', '<div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">QUALITY STANDARDS</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Sharq Sohar Steel Rolling Mills and Steel Melt Shop have quality standards certified by CARES.The manufacturing units are also accredited with ISO 9001:2015, ISO 14001:2015 and OHSAS 18001:2007.</p><p>CARES is an independent, not-for-profit certification body, established in 1983 to provide confidence to the users, purchasers and specifiers of constructional steels through a regime of regulation, testing and inspection. CARES certifications are considered to be of foremost recognition for quality in the reinforcement steel manufacturing industry. CARES certification entitles Sharq Sohar to use CARES marks on its BS 4449 2005 Grade B500B Bar of 8mm to 32mm and BS 4449 1997 Grade 460 Bar of 8mm to 32mm.</p><p>Each manufacturing unit also has its own fully equipped testing lab to carryout chemical and tensile analysis of steel at different stages of production to ensure quality. Sohar Steel SMS is equipped with modernized Wet Lab facilities and most modern type Spectrometer through which strict quality control measures are practiced to achieve the specified product quality standards.</p><p>Sohar Steel believes in the protection of the environment and conservation of nature and consider it as one of the prime responsibility. Best Available Dust collection technology is adopted to limit the emission within the international standards. Continuous efforts are on to keep the plant green, clean and environmental friendly.</p></div></div><div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">SUSTAINABILITY</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Sohar Steel follows principles of sustainability, namely, inclusivity, integrity, stewardship and transperancy, as per the guidlines of UK-CARES. Sustainability policies of Sohar Steel can be downloded from the links below:</p><ul><li><a href="http://soharsteel.com/oman/images/sustainability-policy.pdf" target="_blank">SUSTAINABILITY POLICY</a></li><li><a href="http://soharsteel.com/oman/images/responsible-sourcing-policy.pdf" target="_blank">RESPONSIBLE SOURCING POLICY</a></li><li><a href="http://soharsteel.com/oman/images/stakeholder-map.pdf" target="_blank">STAKEHOLDER MAP</a></li></ul></div></div><div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">CHEMICAL ANALYSIS</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Scrap Melt Shop is equipped with modernized Wet Lab facilities and most modern type Spectrometer through which strict quality control measures are practiced to achieve the specified product quality standards. Sharq Sohar Steel Rolling Mills (SSSRM) is also equipped with spectrometer to test the chemical properties of steel at different stages of manufacturing.The different chemical composition of SSSRM rebars are listed in table below:<br><img src="img/quality_chemical-analysis.jpg" width="595" height="144" xss=removed class="fr-fic fr-dii"></p><p>Chemical composition listed are in %(max). Carbon value is permitted to allow maximum by 0.03%, provided the CE (Carbon Equivalent) is decreased by 0.02%. Higher Nitrogen contents are permitted if sufficient Nitrogen binding elements are present.</p><br><br><br><table><tbody><tr><td><p><strong>As per BS:4449-2005(B500B):</strong></p><ul type="square"><li>Y.S. = 500N/mm2 (min)</li><li>Y.S./Y.S.Ratio = 1.08(min)</li><li>% Elongation = 14 (min)</li><li>Total Elongation = 5%(min)</li><li>Rebend &lt;= 16mm = 4(d)</li><li>Rebend > 16mm = 7(d)</li></ul></td><td><p><strong>As per ASTM A-615 Gr.60:</strong></p><ul type="square"><li>Y.S. = 420N/mm2 (min)</li><li>T.S. = 620N/mm2 (min)</li><li>% Elongation = 9 (8-20mm)</li><li>% Elongation = 8 (25mm)</li><li>% Elongation = 7 (32mm)</li><li>Bend 16mm= 2(d)</li><li>Bend >16mm25mm = 5()</li><li>Bend >32mm = 7(d)</li></ul></td><td><p><strong>As per SASO-SSA/1992:</strong></p><ul type="square"><li>Y.S. = 460N/mm2 (min)</li><li>T.S. = 506N/mm2 (min)</li><li>% Elongation = 12 (min)</li><li>Bend = 3(d)</li><li>Rebend = 5(d)</li><li>[where &#39;d&#39; = bar diameter]</li></ul></td></tr></tbody></table></div></div><div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">QUALITY LABS</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Quality Labs equipped with state of the art testing equipments are located at each manufacturing facility of Sohar Steel. Some of the equipments available in our different Quality Labs are listed belowThe Computer controlled Tensile testing machine (Zwick , Germany) . The software “ Zwick TestXpert ” provides all the mechanical properties including Engineering stress-strain curve on the PC monitor. OSCAM bending machine.This machine, consisting of an in-built electronic programmer, is used for bending and rebending of the bar for bend test. Angles from 0 degree to 180 degree for bending and rebending are set through an electronic program.</p><br><br><br></div></div><p><a class="btn-top" href="#"></a></p>', NULL, 'QUALITY STANDARDS', 'QUALITY STANDARDS', 'QUALITY STANDARDS', 5, 1),
(15, '<i class="fa fa-file-image-o"></i>', 0, 'QUALITY CERTIFICATES', '<div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">QUALITY CERTIFICATES FOR QUALITY STEEL PRODUCTS</h1></div><div class="post detect-inview visible"><img src="img/iso-soharsteel.jpg" class="fr-fic fr-dii"><br><p class="detect-inview visible ">Sohar Steel Group companies have ISO 9001:2008 Quality management process and also produces CARES-UK Certified steel rebars and billets. The bars are confirming to the latest BS 4449:2005 standard (grade B500B. ) The Products also have prestigious CARES certification by Ms UKAS, UK for the complete product range from 8mm to 32 mm for both BS4449:2005 and BS4449:1997 grade 460B The group has also been awarded with th DCL product conformity Certification by the Municipality.<br><br><br><br><br></p></div></div>', NULL, 'QUALITY CERTIFICATES', 'QUALITY CERTIFICATES', 'QUALITY CERTIFICATES', 6, 1),
(16, '<i class="fa fa-envelope"></i>', 0, 'CONTACT US', '<div class="about-do"><div class="text clearfix"><h2 class="detect-inview visible">CONTACT US</h2><p class="detect-inview visible"><strong> SOHAR STEEL GROUP</strong><br>Postal Code: 322, PO Box 452, Plot No.11, SIPC, Majees, Sohar, Sultanate of Oman.<br>Tel: +968 26751567,+968 26850205<br>Fax: +968 26751569, +968 26850204<br>Email: info@soharsteelsms.com</p></div><div class="row clearfix"><br></div></div><div class="blog-post__text"><div class="title clearfix"><h1 class="detect-inview visible">Sharq Sohar Steel Rolling Mills LLC</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Postal Code: 327, PO Box 12<br>SIE (Sohar Industrial Estate), Sohar<br>Sultanate of Oman<br>Tel: +968 26751567 | Fax: +968 26751569<br>Email: info@soharsteel.com</p></div><div class="title clearfix"><h1 class="detect-inview visible">Middle East Traders (Oman) LLC</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Postal Code: 114, PO Box 406<br>Muttrah, Muscat, Sultanate of Oman<br>Tel: +968 24590694/95/96 | Fax:+968 24590496<br>Email: meto@soharsteelsms.com</p></div><div class="title clearfix"><h1 class="detect-inview visible">Sohar Steel UAE Representative Office</h1></div><div class="post detect-inview visible"><p class="detect-inview visible">Middle East Traders (Oman) LLC - DUBAI<br>PO BOX: 26988, Al Zahra Building<br>504, Khalid Bin Al Waleed Street<br>Dubai, United Arab Emirates<br>Tel: +971 43936428,+971 43936429 | Fax:+971 43936469<br>Email: welcome@soharsteel.com</p><br><br></div></div><div class="row clearfix"><br></div><p><a class="btn-top" href="#"></a></p><div class="imprint-close"><div class="imprint-close_i"><div class="imprint-close_ii"><div class="imprint-close__line-1"><br></div><div class="imprint-close__line-2"><br></div><div class="imprint-close__line-3"><br></div></div></div></div>', NULL, 'CONTACT US', 'CONTACT US', 'CONTACT US', 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `template`
--

CREATE TABLE IF NOT EXISTS `template` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_id` int(11) NOT NULL,
  `slug_url` varchar(75) NOT NULL,
  `temp_function` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `template`
--

INSERT INTO `template` (`id`, `page_id`, `slug_url`, `temp_function`) VALUES
(1, 1, 'home', ''),
(2, 2, 'about-us', ''),
(3, 3, 'company-profile', 'comapny_profile'),
(4, 4, 'hse-policy-and-the-environment', 'policy_env'),
(5, 5, 'group-of-companies', ''),
(6, 6, 'sharq-sohar-steel-rolling-mills', 'rolling_mills'),
(7, 7, 'middle-east-conversion-industries-llc-(meci)', 'industries_llc'),
(8, 8, 'sohar-steel-llc', 'steel_llc'),
(9, 9, 'products', ''),
(10, 10, 'reinforcing-bars', 'reinforcing_bars'),
(11, 11, 'steel-mesh', 'steel_mesh'),
(12, 12, 'steel-billets', 'steel_billets'),
(13, 13, 'epoxy-coating', 'epoxy_coating'),
(14, 14, 'quality-standards', 'quality_standards'),
(15, 15, 'quality-certificates', 'quality_certificates'),
(16, 16, 'contact-us', 'contact_us');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(25) NOT NULL,
  `password` varchar(75) NOT NULL,
  `status` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `password`, `status`, `user`) VALUES
(1, 'admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, 'Administrator');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
