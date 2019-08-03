<div class="imprint-close">
	<div class="imprint-close_i">
		<div class="imprint-close_ii">
			<div class="imprint-close__line-1"></div>
			<div class="imprint-close__line-2"></div>
			<div class="imprint-close__line-3"></div>
		</div>
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
<script>
    $("[data-f-id=pbf]").hide();
</script>
</body>

</html>

</html>