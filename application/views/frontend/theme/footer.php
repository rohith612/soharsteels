<div class="imprint-close">
    <div class="imprint-close_i">
        <div class="imprint-close_ii">
            <div class="imprint-close__line-1"></div>
            <div class="imprint-close__line-2"></div>
            <div class="imprint-close__line-3"></div>
        </div>
    </div>
</div>

<div class="imprint">
    <div class="imprint-wrap">
        <div class="border-left"></div>
        <div class="border-right"></div>
        <div class="border-top"></div>
        <div class="border-bott"></div>
        <div class="imprint_i  mCustomScrollbar _mCS_1"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
            <div class="imprint_ii clearfix">
                <div class="col">
                   <p>Adwyse &amp; Co. GmbH &amp; Co. KG<br> Konrad-Zuse-Platz 8<br> D-81829 München</p>
<p>Tel. +49 89 95476600<br> E-Mail: hello@adwyse.de</p>
<p>Registergericht: Amtsgericht München<br> Registernummer: HRA 102666</p>
<p>Persönlich haftende Gesellschafterin<br> der Adwyse &amp; Co. GmbH &amp; Co. KG:</p>
<p>MyCorp GmbH<br> Geschäftsführer der MyCorp GmbH: Igor Suslov, Daniel Pasternak<br> Registergericht: Amtsgericht München<br> Registernummer: HRB 189960</p>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br><br> DE-276098088<br><br> Redaktionelle Verantwortung:<br><br> Igor Suslov, Landsberger Str. 291, 80687 München</p>
                </div>
                <div class="col">
                    <p>Haftungshinweis:</p>
<p>Für Verweise auf unseren Seiten möchten wir ausdrücklich betonen, dass wir keinerlei Einfluss auf den Linktext, die Gestaltung, evtl. Verletzungen geltender Rechte, auch Marken- und Titelrechte und die Inhalte der gelinkten Seiten haben. Wir distanzieren uns ausdrücklich von den Linkformulierungen, sowie von allen Inhalten aller Seiten auf die wir Verweise gesetzt haben und machen uns ihre Inhalte nicht zu eigen. Diese Erklärung gilt für alle auf unserer Website angebrachten Links und für alle Inhalte der Seiten, zu denen die bei uns angemeldeten Banner oder Links führen.</p>
<p>Wir bemühen uns, möglichst genaue und zuverlässige Informationen auf unseren Webseiten zu veröffentlichen. Wir können jedoch keinerlei Gewähr für die Richtigkeit aller veröffentlichten Informationen leisten. Jegliche Haftung für den Fall von Irrtümern oder Auslassungen auf unseren Webseiten wird ausgeschlossen.</p>
<p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert.</p>
<p>Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen.</p>
<p>Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.</p>
<p>Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können.</p>
<p>Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p>
                </div>
            </div>
        </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 119px; max-height: 345px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
    </div>
</div>
<script src="<?php echo base_url(); ?>template/frontend/js/verge.min.js"></script>
<script src="<?php echo base_url(); ?>template/frontend/js/jquery.scrollTo.min.js"></script>
<script src="<?php echo base_url(); ?>template/frontend/js/jquery.mousewheel.min.js"></script>
<script src="<?php echo base_url(); ?>template/frontend/js/jquery.mCustomScrollbar.js"></script>
<script src="<?php echo base_url(); ?>template/frontend/js/modernizr.custom.92668.js"></script>
<script src="<?php echo base_url(); ?>template/frontend/js/owl.carousel.min.js"></script>
<script>
	var addthis_config = {
		ui_click: true,
		data_track_clickback: false
	}
</script>

<script src="<?php echo base_url(); ?>template/frontend/js/start.js"></script>

<script type="text/javascript">
	(function($) {
		$.expr[":"].Contains = function(a, i, m) {
			return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
		};

		function filterList(header, list) {

			var form = $("<form>").attr({
					"class": "filterform",
					action: "#"
				}),
				input = $("<input>").attr({
					"class": "filterinput",
					type: "text"
				});
			$(form).append(input).appendTo(header);
			$(input).change(function() {
				var filter = $(this).val();
				if (filter) {
					$matches = $(list).find("a:Contains(" + filter + ")").parent();
					$("li", list).not($matches).slideUp();
					$matches.slideDown();
				} else {
					$(list).find("li").slideDown();
				}
				return false;
			}).keyup(function() {
				$(this).change();
			});
		}
		$(function() {
			filterList($("#form"), $("#demo-list"));
		});
	})(jQuery);
</script>
</body>

</html>

</html>