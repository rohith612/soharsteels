/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Г‚В© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Г‚В© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad", swing: function (e, f, a, h, g) {
		return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
	}, easeInQuad: function (e, f, a, h, g) {
		return h * (f /= g) * f + a
	}, easeOutQuad: function (e, f, a, h, g) {
		return -h * (f /= g) * (f - 2) + a
	}, easeInOutQuad: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f + a
		}
		return -h / 2 * ((--f) * (f - 2) - 1) + a
	}, easeInCubic: function (e, f, a, h, g) {
		return h * (f /= g) * f * f + a
	}, easeOutCubic: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f + 1) + a
	}, easeInOutCubic: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f + 2) + a
	}, easeInQuart: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f + a
	}, easeOutQuart: function (e, f, a, h, g) {
		return -h * ((f = f / g - 1) * f * f * f - 1) + a
	}, easeInOutQuart: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f + a
		}
		return -h / 2 * ((f -= 2) * f * f * f - 2) + a
	}, easeInQuint: function (e, f, a, h, g) {
		return h * (f /= g) * f * f * f * f + a
	}, easeOutQuint: function (e, f, a, h, g) {
		return h * ((f = f / g - 1) * f * f * f * f + 1) + a
	}, easeInOutQuint: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return h / 2 * f * f * f * f * f + a
		}
		return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
	}, easeInSine: function (e, f, a, h, g) {
		return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
	}, easeOutSine: function (e, f, a, h, g) {
		return h * Math.sin(f / g * (Math.PI / 2)) + a
	}, easeInOutSine: function (e, f, a, h, g) {
		return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
	}, easeInExpo: function (e, f, a, h, g) {
		return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
	}, easeOutExpo: function (e, f, a, h, g) {
		return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
	}, easeInOutExpo: function (e, f, a, h, g) {
		if (f == 0) {
			return a
		}
		if (f == g) {
			return a + h
		}
		if ((f /= g / 2) < 1) {
			return h / 2 * Math.pow(2, 10 * (f - 1)) + a
		}
		return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
	}, easeInCirc: function (e, f, a, h, g) {
		return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
	}, easeOutCirc: function (e, f, a, h, g) {
		return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
	}, easeInOutCirc: function (e, f, a, h, g) {
		if ((f /= g / 2) < 1) {
			return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
		}
		return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
	}, easeInElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
	}, easeOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k) == 1) {
			return e + l
		}
		if (!j) {
			j = k * 0.3
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
	}, easeInOutElastic: function (f, h, e, l, k) {
		var i = 1.70158;
		var j = 0;
		var g = l;
		if (h == 0) {
			return e
		}
		if ((h /= k / 2) == 2) {
			return e + l
		}
		if (!j) {
			j = k * (0.3 * 1.5)
		}
		if (g < Math.abs(l)) {
			g = l;
			var i = j / 4
		} else {
			var i = j / (2 * Math.PI) * Math.asin(l / g)
		}
		if (h < 1) {
			return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
		}
		return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
	}, easeInBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * (f /= h) * f * ((g + 1) * f - g) + a
	}, easeOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
	}, easeInOutBack: function (e, f, a, i, h, g) {
		if (g == undefined) {
			g = 1.70158
		}
		if ((f /= h / 2) < 1) {
			return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
		}
		return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
	}, easeInBounce: function (e, f, a, h, g) {
		return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
	}, easeOutBounce: function (e, f, a, h, g) {
		if ((f /= g) < (1 / 2.75)) {
			return h * (7.5625 * f * f) + a
		} else {
			if (f < (2 / 2.75)) {
				return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
			} else {
				if (f < (2.5 / 2.75)) {
					return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
				} else {
					return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
				}
			}
		}
	}, easeInOutBounce: function (e, f, a, h, g) {
		if (f < g / 2) {
			return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
		}
		return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
	}
});

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jevin9@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
 * ----------------------------------------------------------------------------
 *
 * Autogrow Textarea Plugin Version v3.0
 * http://www.technoreply.com/autogrow-textarea-plugin-3-0
 *
 * THIS PLUGIN IS DELIVERD ON A PAY WHAT YOU WHANT BASIS. IF THE PLUGIN WAS USEFUL TO YOU, PLEASE CONSIDER BUYING THE PLUGIN HERE :
 * https://sites.fastspring.com/technoreply/instant/autogrowtextareaplugin
 *
 * Date: October 15, 2012
 */

jQuery.fn.autoGrow = function () {
	return this.each(function () {
		var createMirror = function (textarea) {
			jQuery(textarea).after('<div class="autogrow-textarea-mirror"></div>');
			return jQuery(textarea).next(".autogrow-textarea-mirror")[0]
		};
		var sendContentToMirror = function (textarea) {
			mirror.innerHTML = String(textarea.value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />") + ".<br/>.";
			if (jQuery(textarea).height() != jQuery(mirror).height())jQuery(textarea).height(jQuery(mirror).height())
		};
		var growTextarea = function () {
			sendContentToMirror(this)
		};
		var mirror = createMirror(this);
		mirror.style.display = "none";
		mirror.style.wordWrap = "break-word";
		mirror.style.padding = jQuery(this).css("padding");
		mirror.style.width = jQuery(this).css("width");
		mirror.style.fontFamily = jQuery(this).css("font-family");
		mirror.style.fontSize = jQuery(this).css("font-size");
		mirror.style.lineHeight = jQuery(this).css("line-height");
		this.style.overflow = "hidden";
		this.style.minHeight = this.rows + "em";
		this.onkeyup = growTextarea;
		sendContentToMirror(this)
	})
};

function throttle(fn, delay) {
	var allowSample = true;
	return function (e) {
		if (allowSample) {
			allowSample = false;
			setTimeout(function () {
				allowSample = true;
			}, delay);
			fn.apply(this, arguments);
		}
	};
}

function equalHeight(group, groupSize) {
	if (!group.length) {
		return;
	}
	groupSize = +(groupSize || 0);
	if (groupSize < 1) {
		groupSize = group.length;
	}
	var start = -groupSize, part;
	while ((part = group.slice(start += groupSize, start + groupSize)) && part.length) {
		part.height(Math.max.apply(null, $.makeArray(part.map(function () {
			return $(this).height();
		}))));
	}
}
$(document).on('click', '.addthis_button', function(e){
	e.preventDefault();
});

function updateAddThis() {
	console.log('updateaddthis', document.location.href);
	addthis.update('share', 'url', document.location.href);
	addthis.button('.addthis_button');
}


jQuery.extend(verge);
var desktop = true,
	tablet = false,
	mobile = false;

$(window).resize(function () {
	if ($.viewportW() > 1024) {
		desktop = true;
		tablet = false;
		mobile = false;
	}
	if ($.viewportW() >= 768 && $.viewportW() <= 1024) {
		desktop = false;
		tablet = true;
		mobile = false;
	}
	if ($.viewportW() <= 767) {
		desktop = false;
		tablet = false;
		mobile = true;
	}

}).resize();


$(function () {

		var holdLoadingPages = false; //wait until animations end and than load new pages if user clicked fast;


		if ($('.no-touch').length) {

			$(document).on('mouseenter', '.references-list a, .blog-list_i .item, .heads-list__item', function () {
				var el = $(this);
				el.find('.bl, .br, .bt, .bb').removeClass('inv');
				el.find('.bl, .br').css('height', 0);
				el.find('.bt, .bb').css('width', 0);

				if (el.closest('.blog-list').length) {
					el.find('.bl').stop(true, true).animate({
						height: el.find('.img').height() - 60
					}, 500, function () {
						el.find('.bb').stop(true, true).animate({
							width: el.find('.img').width() - 60
						}, 500);
					});
					el.find('.bt').stop(true, true).animate({
						width: el.find('.img').width() - 60
					}, 500, function () {
						el.find('.br').stop(true, true).animate({
							height: el.find('.img').height() - 60
						}, 500);
					});
				} else {
					el.find('.bl').stop(true, true).animate({
						height: el.height() - 60
					}, 500, function () {
						el.find('.bb').stop(true, true).animate({
							width: el.width() - 60
						}, 500);
					});
					el.find('.bt').stop(true, true).animate({
						width: el.width() - 60
					}, 500, function () {
						el.find('.br').stop(true, true).animate({
							height: el.height() - 60
						}, 500);
					});
				}
			})
				.on('mouseleave', '.references-list a, .blog-list_i .item, .heads-list__item', function () {
					var el = $(this);
					el.find('.bl, .br, .bt, .bb').stop(true, true).addClass('inv');
				});
		}

		var fixElementsBeforeResize = function (action, current) {
			//blog-list fix, remoe active class, because blog post closed
			$('.blog-list .item').removeClass('active');
			//add grey area
			if (action == 'resize') {
				current.addClass('grey');
			} else {
				$('section').addClass('grey');
			}
		}

		var fixElementsAfterResize = function (action) {
			var map = $('#map'),
				sections = $('section');
			$('.heads-quote ul').trigger('updateSizes');

			setTimeout(function () {
				var carousel1 = $('.second-step__list'),
					carousel2 = $('.heads-quote'),
					carousel3 = $('.home-carousel__list');
				if (
					carousel1.length) {
					carousel1.data('owlCarousel').onResize();
				}
				if (carousel2.length) {
					carousel2.data('owlCarousel').onResize();
				}
				if (carousel3.length) {
					carousel3.data('owlCarousel').onResize();
				}
				setTimeout(function () {
					sections.addClass('animated-grey').removeClass('grey');
				}, 500);
			}, 700);
			setTimeout(function () {
				sections.removeClass('animated-grey');
			}, 1000);
			if (map.length) {
				google.maps.event.trigger(map.get(0), "resize");
			}
		}

		var helpMenuVisibleItems = function () {
			//console.log('ede');
			$('.help-menu li').removeClass('inactive');
			$('section:not(.offscreen-left, .offscreen-right, .offscreen-top, .offscreen-bott, .remove)').each(function () {
				var link = $(this).attr('data-href');
				var current = $('.help-menus li [href="' + link + '"]');
				console.log(current);
				current.parent().addClass('inactive');
			});
		}

		//CLOSE PAGE
		$(document).on('click', '.page-position-controls .action-close', function (e) {
			e.preventDefault();
			if (!holdLoadingPages) {
				holdLoadingPages = true;
				var current = $(this).closest('section'),
					sections = $('section'),
					leftBlock = $(),
					rightBlock = $();

				document.location.hash = '';
				//document.location.hash = '#!/';

				sections.each(function () {
					var el = $(this);
					if (el.css('left') == '0px') {
						leftBlock = leftBlock.add(el);
					} else {
						rightBlock = rightBlock.add(el);
					}
				});

				current.addClass('offscreen-top');
				var helpMenu = $('.help-menu');
				if (!current.hasClass('wide')) {
					if (!leftBlock.not(current).length) {
						helpMenu.addClass('left');
						setTimeout(function () {
							helpMenu.find('.help-menu_i').addClass('active');
							layoutPosition();
						}, 1000);
					}

					if (!rightBlock.not(current).length) {
						helpMenu.addClass('right');
						setTimeout(function () {
							helpMenu.find('.help-menu_i').addClass('active');
							layoutPosition();
						}, 1000);
					}
				}

				setTimeout(function () {
					current.remove();
					checkVideoVisibility();
					holdLoadingPages = false;
				}, 1000);
			}
		});

		//remove help menu
		var removeHelpMenu = function () {
			$('.help-menu_i').removeClass('active');
			setTimeout(function () {
				$('.help-menu').removeClass('left right');
			}, 500);
		}

		//RESIZE PAGE TO WIDE
		$(document).on('click', '.page-position-controls .action-resize', function (e, duplicate) {
			e.preventDefault();

			if (!holdLoadingPages) {
				removeHelpMenu();
				holdLoadingPages = true;
				var sections = $('section'),
					current = $(this).closest('section'),
					leftBlock = $(),
					rightBlock = $();

				fixElementsBeforeResize('resize', current);
				setTimeout(function () {
					sections.each(function () {
						var el = $(this);
						if (el.css('left') == '0px') {
							leftBlock = leftBlock.add(el);
						} else {
							rightBlock = rightBlock.add(el);
						}
					});

					setTimeout(function () {
						if (current.hasClass('casestudy-item-wrap') || current.hasClass('blog-posto')) {
							current.addClass('wide').css('left', 0);
						}
						if (!(current.hasClass('blog-posto') || current.hasClass('casestudy-item-wrap'))) {
							current.addClass('wide').css('left', 0);
							rightBlock.not(current).removeClass('wide').addClass('animated offscreen-right');
							leftBlock.not(current).removeClass('wide').addClass('animated offscreen-left');
							calculateMenuItemPosition(current, 'center');
						}
					}, 500);

					setTimeout(function () {
						$('.offscreen-right, .offscreen-left, .remove').remove();
						layoutPosition();
						fixElementsAfterResize('resize');
						$(window).trigger('resize');
						holdLoadingPages = false;
					}, 1000);
				}, 400);
			}
		});

		//Calculate menu active element position
		var calculateMenuItemPosition = function (page, position) {
			if (page.hasClass('top-category')) {
				var menuItem = $('.nav-main a[href="' + page.attr('data-href') + '"]');
				menuItem.removeClass('right-fixed left-fixed active-left active-right center-active center-fixed');
				switch (position) {
					case 'left':
						menuItem.addClass('left-fixed').attr('data-position', 'left-fixed');
						//console.log(menuItem);
						break;
					case 'right':
						menuItem.addClass('right-fixed').attr('data-position', 'right-fixed');
						//console.log(menuItem);
						break;
					case 'center':
						$('.nav-main a').removeClass('active right-fixed left-fixed active-left active-right').attr('data-position', '');
						//console.log(menuItem);
						menuItem.addClass('active center-fixed').attr('data-position', 'center-fixed');
						break;
					case 'clear':
						menuItem.removeClass('active right-fixed left-fixed active-left active-right').attr('data-position', '');
						break;
				}
			}
		}

		//Move page to left side
		$(document).on('click', '.page-position-controls .action-left', function (e, duplicate) {
			e.preventDefault();
			var leftBlock = $(),
				rightBlock = $(),
				sections = $('section'),
				overlay = $('.overlay'),
				home = $('.home'),
				current = $(this).closest('section'),
				casestudy = $('.casestudy'),
				bloglist = $('.blog-list');

			if (sections.filter('.wide').length) {
				if (!holdLoadingPages) {
					holdLoadingPages = true;
					fixElementsBeforeResize('left');
					setTimeout(function () {
						$('.casestudy-list ul, .blog-list_i').addClass('inv');

						calculateMenuItemPosition(current, 'left');

						helpMenuVisibleItems();

						if (current.hasClass('blog-posto')) {
							sections.not(current).not(bloglist).remove();
							calculateMenuItemPosition(home, 'clear');
							current.addClass('animated').removeClass('wide').css('left', '0');
							bloglist.addClass('animated').removeClass('wide').css('left', '50%');
							calculateMenuItemPosition(bloglist, 'right');
							helpMenuVisibleItems();
							setTimeout(function () {
								layoutPosition();
							}, 1000);
						} else {
							if (current.hasClass('casestudy-item-wrap')) {
								sections.not(current).not(casestudy).remove();
								current.addClass('animated').removeClass('wide').css('left', '0');
								casestudy.addClass('animated').removeClass('wide').css('left', '50%');
								calculateMenuItemPosition(casestudy, 'right');
								calculateMenuItemPosition(home, 'clear');
								helpMenuVisibleItems();
								setTimeout(function () {
									layoutPosition();
								}, 1000);
							} else {
								if (sections.length == 1) { //open help menu
									var helpMenu = $('.help-menu');
									helpMenu.addClass('right');
									sections.addClass('animated').removeClass('wide').css('left', '0');
									setTimeout(function () {
										helpMenu.find('.help-menu_i').addClass('active');
										layoutPosition();
									}, 1000);
								}
							}
						}
						holdLoadingPages = false;
						fixElementsAfterResize();
					}, 300);
				}
			} else {

				sections.each(function () {
					var el = $(this);
					if (el.css('left') == '0px') {
						leftBlock = leftBlock.add(el);
					} else {
						rightBlock = rightBlock.add(el);
					}
				});

				if (!holdLoadingPages) {
					holdLoadingPages = true;

					var deferedArray = [],
						newBlocks = $();

					if (current.hasClass('casestudy-item-wrap') || current.hasClass('blog-posto')) {
						//is sub category moves and it is one
						var moveBlocks = function () {
							leftBlock.not('.top-category').addClass('animated offscreen-left');
							rightBlock.not('.top-category').addClass('animated').css('left', '0');
							if (!rightBlock.filter('.top-category').length) {
								var helpMenu = $('.help-menu');
								helpMenu.addClass('right');
								setTimeout(function () {
									helpMenu.find('.help-menu_i').addClass('active');
								}, 1000);
							}
							leftBlock = leftBlock.not('.top-category');
							rightBlock = rightBlock.not('.top-category');

							setTimeout(function () {
								leftBlock.remove();
								layoutPosition();
							}, 1500);
						}
						if ($('.help-menu_i').hasClass('active')) {
							removeHelpMenu();
							setTimeout(moveBlocks, 600);
						} else {
							moveBlocks();
						}
						//console.log('Left holdLoadingPages:', holdLoadingPages);
						holdLoadingPages = false;
					} else {
						leftBlock = leftBlock.filter('.top-category');
						rightBlock = rightBlock.filter('.top-category');

						leftBlock.each(function () {
							var url = $(this).attr('data-href');
							var loadPage = $.get(url.replace(/^#?!\//, ''));
							deferedArray.push(loadPage);
						});
						layoutPosition();

						if (deferedArray.length) {
							overlay.css('display', 'block').removeClass('animated left offscreen-left').addClass('right offscreen-right');
						}

						$.when.apply($, deferedArray).done(function (data) {
							data = Array.prototype.slice.call(arguments);
							if (deferedArray.length == 1) {
								data = [data];
							}
							$.each(data, function () {
								var newBlock = $($.trim(this[0]));
								newBlock.addClass('animated inv').css('left', '50%');
								$('.content').append(newBlock);
								newBlocks = newBlocks.add(newBlock);
								detectPage(newBlock);
							});

							if (sections.filter('.top-category').length == 1) {
								removeHelpMenu();
								setTimeout(function () {
									$('.help-menu').addClass('right');
									$('.help-menu_i').addClass('active');
								}, 1000);
								setTimeout(function () {
									leftBlock.addClass('animated offscreen-left');
									rightBlock.addClass('animated').removeClass('wide').css('left', 0);
									calculateMenuItemPosition(rightBlock, 'left');
									calculateMenuItemPosition(leftBlock, 'right');
								}, 500);
							} else {
								removeHelpMenu();
								leftBlock.addClass('animated offscreen-left');
								rightBlock.addClass('animated').removeClass('wide').css('left', 0);
								calculateMenuItemPosition(rightBlock, 'left');
								calculateMenuItemPosition(leftBlock, 'right');
							}
							if (deferedArray.length) {
								var subcategoryOpen = $('section:not(.top-category)');
								if (subcategoryOpen.length) {
									if (!(parseInt(subcategoryOpen.css('left')) != 0)) {
										overlay.addClass('animated').removeClass('offscreen-right');
									}
								} else {
									overlay.addClass('animated').removeClass('offscreen-right');
								}
							}

							setTimeout(function () {
								leftBlock.remove();
								var subCategoryFirst = newBlocks.filter('section:not(.top-category)');
								if (subCategoryFirst.length) {
									subCategoryFirst.removeClass('inv');
									setTimeout(function () {
										newBlocks.removeClass('inv');
									}, 800);
								} else {
									newBlocks.removeClass('inv');
								}
								setTimeout(function () {
									overlay.removeClass('animated').fadeOut();
								}, 1000);
								drowLines();
								layoutPosition();
							}, 1500);
							//console.log('Left holdLoadingPages:', holdLoadingPages);
							holdLoadingPages = false;
						});
					}
				}
			}
		});

		//Move page to right side
		$(document).on('click', '.page-position-controls .action-right', function (e, duplicate) {
			e.preventDefault();
			var leftBlock = $(),
				rightBlock = $(),
				home = $('.home'),
				overlay = $('.overlay'),
				sections = $('section'),
				current = $(this).closest('section'),
				casestudy = $('.casestudy'),
				bloglist = $('.blog-list');

			if (sections.filter('.wide').length) {//Turn wide page to right and at left side we need to show home page
				if (!holdLoadingPages) {
					holdLoadingPages = true;
					fixElementsBeforeResize();

					setTimeout(function () {
						$('.casestudy-list ul, .blog-list_i').addClass('inv');
						calculateMenuItemPosition(current, 'right');
						helpMenuVisibleItems();
						if (current.hasClass('blog-posto')) {
							sections.not(bloglist).not(current).remove();
							calculateMenuItemPosition(home, 'clear');

							current.addClass('animated').removeClass('wide').css('left', '50%');
							bloglist.addClass('animated').removeClass('wide').css('left', '0');
							calculateMenuItemPosition(bloglist, 'left');
							calculateMenuItemPosition(home, 'clear');
							helpMenuVisibleItems();
							setTimeout(function () {
								layoutPosition();
							}, 1000);
						} else {
							if (current.hasClass('casestudy-item-wrap')) {
								sections.not(casestudy).not(current).remove();
								calculateMenuItemPosition(home, 'clear');

								current.addClass('animated').removeClass('wide').css('left', '50%');
								casestudy.addClass('animated').removeClass('wide').css('left', '0');
								calculateMenuItemPosition(casestudy, 'left');
								setTimeout(function () {
									layoutPosition();
								}, 1000);
							} else {

								if (sections.length == 1) { //open help menu
									var helpMenu = $('.help-menu');
									helpMenu.addClass('left');
									sections.addClass('animated').removeClass('wide').css('left', '50%');
									setTimeout(function () {
										helpMenu.find('.help-menu_i').addClass('active');
										layoutPosition();
									}, 1000);
								}
							}
						}
						fixElementsAfterResize();
						holdLoadingPages = false;
					}, 300);
				}
			} else {

				sections.each(function () {
					var el = $(this);
					if (el.css('left') == '0px') {
						leftBlock = leftBlock.add(el);
					} else {
						rightBlock = rightBlock.add(el);
					}
				});

				if (!holdLoadingPages) {
					holdLoadingPages = true;

					var deferedArray = [],
						newBlocks = $();

					if (current.hasClass('casestudy-item-wrap') || current.hasClass('blog-posto')) {
						//is sub category moves and it is one
						var moveBlocks = function () {
							rightBlock.not('.top-category').addClass('animated offscreen-right');
							leftBlock.not('.top-category').addClass('animated').css('left', '50%');
							if (!leftBlock.filter('.top-category').length) {
								var helpMenu = $('.help-menu');
								helpMenu.addClass('left');
								setTimeout(function () {
									helpMenu.find('.help-menu_i').addClass('active');
								}, 1000);
							}
							leftBlock = leftBlock.not('.top-category');
							rightBlock = rightBlock.not('.top-category');
							setTimeout(function () {
								rightBlock.remove();
								layoutPosition();
							}, 1500);
						}
						if ($('.help-menu_i').hasClass('active')) {
							removeHelpMenu();
							setTimeout(moveBlocks, 600);
						} else {
							moveBlocks();
						}
						//console.log('Left holdLoadingPages:', holdLoadingPages);
						holdLoadingPages = false;
					} else {

						rightBlock = rightBlock.filter('.top-category');
						leftBlock = leftBlock.filter('.top-category');
						rightBlock.each(function () {
							var url = $(this).attr('data-href');
							var loadPage = $.get(url.replace(/^#?!\//, ''));
							deferedArray.push(loadPage);
						});

						if (deferedArray.length) {
							if (parseInt($('section:not(.top-category)').css('left')) != 0) {
								overlay.css('display', 'block').removeClass('animated right offscreen-right').addClass('left offscreen-left');
							}
						}

						$.when.apply($, deferedArray).done(function (data) {
							data = Array.prototype.slice.call(arguments);
							if (deferedArray.length == 1) {
								data = [data];
							}
							$.each(data, function () {
								var newBlock = $($.trim(this[0]));
								newBlock.addClass('animated inv').css('left', 0);
								$('.content').append(newBlock);
								newBlocks = newBlocks.add(newBlock);
								detectPage(newBlock);
							});

							if (sections.filter('.top-category').length == 1) { //open help menu if there no page at side
								removeHelpMenu();
								setTimeout(function () {
									$('.help-menu').addClass('left');
									$('.help-menu_i').addClass('active');
								}, 1000);
								setTimeout(function () {
									rightBlock.addClass('animated offscreen-right');
									leftBlock.addClass('animated').removeClass('wide').css('left', '50%');
									calculateMenuItemPosition(leftBlock, 'right');
									calculateMenuItemPosition(rightBlock, 'left');
								}, 500);
							} else {
								removeHelpMenu();
								rightBlock.addClass('animated offscreen-right');
								leftBlock.addClass('animated').removeClass('wide').css('left', '50%');
								calculateMenuItemPosition(leftBlock, 'right');
								calculateMenuItemPosition(rightBlock, 'left');
							}

							if (deferedArray.length) {
								overlay.addClass('animated').removeClass('offscreen-left');
							}
							setTimeout(function () {
								rightBlock.remove();
								var subCategoryFirst = newBlocks.filter('section:not(.top-category)');
								if (subCategoryFirst.length) {
									subCategoryFirst.removeClass('inv');
									setTimeout(function () {
										newBlocks.removeClass('inv');
									}, 800);
								} else {
									newBlocks.removeClass('inv');
								}
								setTimeout(function () {
									overlay.removeClass('animated').fadeOut();
								}, 1000);
								drowLines();
								layoutPosition();
							}, 1500);
							holdLoadingPages = false;
						});
					}
				}
			}
		});


		var checkVideoVisibility = function () {
			var leftBlock = $(),
				rightBlock = $(),
				home = $('.home'),
				sections = $('section'),
				videoBg = $('.home-video').get(0);

			sections.each(function () {
				var el = $(this);
				if (el.css('left') == '0px') {
					leftBlock = leftBlock.add(el);
				} else {
					rightBlock = rightBlock.add(el);
				}
			});

			if (leftBlock.not(home).not('.blog-list').length && rightBlock.not(home).not('.blog-list').length || leftBlock.not(home).not('.blog-list').filter('.wide').length) {
				videoBg.pause();
			} else {
				videoBg.play();
			}
		}

		var layoutPosition = function () {

			checkVideoVisibility();

			$('.page-position-controls').each(function () {
				var controls = $(this);
				var section = controls.closest('section');
				if (section.hasClass('wide')) {
					controls.css('display', 'none');
					controls.removeClass('left right');
					controls.addClass('right');
				} else {
					if (parseInt(section.css('left')) < 10) {
						controls.css('display', 'none');
						controls.removeClass('left right');
						controls.addClass('left');
					}
					if (parseInt(section.css('left')) > 10) {
						controls.css('display', 'none');
						controls.removeClass('left right');
						controls.addClass('right');
					}
				}

				setTimeout(function () {
					$('.casestudy-list ul, .blog-list_i').removeClass('inv');
				}, 500);
				$(window).trigger('resize');
				controls.fadeIn();
			});
		}

		layoutPosition();


		var navigation = function () {

			var loadResource = function (manual) {

				if (!holdLoadingPages) {

					holdLoadingPages = true;

					var el = $(this),
						url = el.attr('href'),
						animation = $.Deferred(),
						target = $('.content'),
						left = false,
						overlay = $('.overlay'),
						right = false,
						center = false,
						activeSection = $('section'),
						home = $('.home'),
						leftBlock = $(), rightBlock = $();
					//url = url.replace(/^#?!\//, '');

					console.log();

					if (manual) {
						url = document.location.hash.replace(/^#?!\//, '');
					}

					if (el.find('.left').hasClass('active')) {
						left = true;
					}
					if (el.find('.right').hasClass('active')) {
						right = true;
					}
					if (el.find('.center').hasClass('active')) {
						center = true;
					}

					if ($('.touch').length) {
						left = false;
						right = false;
						center = true;
					}

					activeSection.each(function () {
						var el = $(this);
						if (el.css('left') == '0px') {
							leftBlock = leftBlock.add(el);
						} else {
							rightBlock = rightBlock.add(el);
						}
					});

					$('body').removeClass('menu-open menu-animated');
					animation.resolve();

					//location change
					if (!manual) {
						//document.location.hash = '#!/' + el.attr('href');
						document.location.hash =  el.attr('href');
						//if (el.closest('.casestudy-list').length || el.closest('.blog-list').length) {
						//	document.location.hash = '#!/' + el.attr('href');
						//} else {
						//	document.location.hash = '#!/';
						//}
					}

					//Menu active state
					if (el.closest('.nav-main').length) {
						$('.nav-main a').each(function () {
							var item = $(this);
							if (item.hasClass('left-active') || item.hasClass('left-fixed')) {
								item.attr('data-position', 'left-fixed').addClass('left-fixed');
							}
							if (item.hasClass('right-active') || item.hasClass('right-fixed')) {
								item.attr('data-position', 'right-fixed').addClass('right-fixed');
							}
							if (item.hasClass('center-active') || item.hasClass('center-fixed')) {
								item.attr('data-position', 'center-fixed').addClass('center-fixed');
							}
							if (!item.hasClass('center-fixed') && !item.hasClass('left-fixed') && !item.hasClass('right-fixed') && !item.hasClass('left-active') && !item.hasClass('right-active') && !item.hasClass('center-active')) {
								item.attr('data-position', '').removeClass('active');
							}
							item.removeClass('right-fixed left-fixed center-fixed');
							el.addClass('active');
						});
					}

					//Check for duplicating content and don't load it, make movement of it, if it is necessary
					var clone = $('[data-href]').filter(function () {
						return $(this).attr('data-href') == url
					});

					if (clone.length) {
						if (!clone.hasClass('wide')) {
							$('.help-menu_i').removeClass('active');
							$('.help-menu').removeClass('left right');
						}
						if (el.closest('.casestudy-list').length || el.closest('.blog-list_i').length) {
							holdLoadingPages = false;
							return;
						}
						if (left) {
							if (clone.css('left') != '0px') {
								holdLoadingPages = false;
								clone.find('.action-left').trigger('click');
							}
							return false;
						}
						if (right) {
							if (clone.css('left') == '0px') {
								holdLoadingPages = false;
								clone.find('.action-right').trigger('click');
							}
							return false;
						}
						if (center || !center && !left && !right) {
							holdLoadingPages = false;
							clone.find('.action-resize').trigger('click', true);
						}
						return false;
					}
					$.when($.get(url.replace(/^#?!\//, '')), animation).done(function (data) {
						var content = $($.trim(data[0])).addClass('inv'),
							topCategory = $('.top-category');

						$(function () {
							//if(content.hasClass('casestudy') || content.hasClass('blog-list')){
							//	overlay.addClass('transparent');
							//}else{
							//	overlay.removeClass('transparent');
							//}
							//CASE manual load
							if (manual) {
								removeHelpMenu();
								//console.log('CASE 0: home page open');
								leftBlock.add(rightBlock).addClass('offscreen-top');
								content.addClass('wide offscreen-top').css('left', '0');
								overlay.css('display', 'block').addClass('wide left wide offscreen-bott');
								return false;
							}
							//CASE 0 logo click, home page open
							if (el.closest('.logo').length) {
								removeHelpMenu();
								//console.log('CASE 0: home page open');
								leftBlock.add(rightBlock).addClass('offscreen-top');
								content.addClass('wide offscreen-top').css('left', '0');
								overlay.css('display', 'block').addClass('wide left wide offscreen-bott');
								return false;
							}

							//CASE 1 page open in Center
							if (center) {
								removeHelpMenu();
								//console.log('CASE 1: center');
								content.addClass('wide offscreen-bott').css('left', '0');
								leftBlock.add(rightBlock).addClass('animated offscreen-top');
								home.addClass('wide').css('left', '0');
								overlay.css('display', 'block').addClass('wide left offscreen-bott');
								return false;
							}

							//CASE 1.1
							//Top category opened, and new top category opening
							if (topCategory.length >= 1 && !topCategory.hasClass('wide') && content.hasClass('top-category')) {
								//console.log('case 1.1');
								if (left) {
									content.addClass('offscreen-bott').css('left', 0);
									leftBlock.addClass('animated offscreen-top');
									overlay.css('display', 'block').addClass('left offscreen-bott');
									//console.log('left', left);
									if (rightBlock.length) {
										removeHelpMenu();
									}
								}
								if (right) {
									content.addClass('offscreen-bott').css('left', '50%');
									rightBlock.addClass('animated offscreen-top');
									overlay.css('display', 'block').addClass('right offscreen-bott');
									//console.log('right');
									if (leftBlock.length) {
										removeHelpMenu();
									}
								}
							}

							//CASE 1.3
							//sub category opening
							if (!content.hasClass('top-category')) {
								//removeHelpMenu();
								//console.log('case 1.3');
								var subCategoryParent;

								if (content.hasClass('blog-post')) {
									subCategoryParent = $('.blog-list');
								} else {
									subCategoryParent = $('.casestudy');
								}
								//if top category is wide
								var wide = subCategoryParent.hasClass('wide');

								if (wide) {
									content.addClass('wide');
									overlay.addClass('wide');
								}

								overlay.css('display', 'block').addClass('offscreen-top');
								//CASE 1.3.1 no same subcategory open

								if (content.hasClass('casestudy-item-wrap') && !$('.casestudy-item-wrap').length || content.hasClass('blog-post') && !$('.blog-post').length) {
									//removeHelpMenu();

									content.addClass('offscreen-top').css('left', subCategoryParent.css('left'));
									//console.log(parseInt(subCategoryParent.css('left')));
									if (parseInt(subCategoryParent.css('left')) <= 0) {
										overlay.addClass('left');
									} else {
										overlay.addClass('right');
									}
								}

								//CASE 1.3.2 same category opening
								if (content.hasClass('casestudy-item-wrap') && $('.casestudy-item-wrap').length || content.hasClass('blog-post') && $('.blog-post').length) {
									//removeHelpMenu();
									//console.log('case 1.3.2');
									content.addClass('offscreen-top').css('left', subCategoryParent.css('left'));
									if (parseInt(subCategoryParent.css('left')) > 0) {
										overlay.addClass('right');
									} else {
										overlay.addClass('left');
									}
								}
							}

							//CASE 2:
							//One category or subcategory open wide and new top category opening
							if (topCategory.hasClass('wide') && content.hasClass('top-category')) {
								//console.log('case 2');
								removeHelpMenu();
								fixElementsBeforeResize();
								if (left) {
									content.addClass('offscreen-left').css('left', 0);
									activeSection.addClass('animated').removeClass('wide').css('left', '50%');
									overlay.css('display', 'block').addClass('left offscreen-bott');
									//console.log('left element');
								}
								if (right) {
									content.addClass('offscreen-bott').css('left', '50%');
									activeSection.addClass('animated').removeClass('wide').css('left', 0);
									overlay.css('display', 'block').addClass('right offscreen-bott');
									//console.log('right element');
								}
							}

							//CASE 2.1:
							////One category or subcategory open wide and new sub category opening
							if (topCategory.length == 1 && topCategory.hasClass('wide') && !content.hasClass('top-category')) {
								//console.log('case 2.1:');
								removeHelpMenu();
								content.addClass('offscreen-top wide').css('left', 0);
								$('.section:not(.top-category)').addClass('offscreen-bott');
							}
						});

						target.append(content);
						detectPage(content);

						setTimeout(function () {
							content.addClass('animated').removeClass('offscreen-left offscreen-right offscreen-top offscreen-bott');
							overlay.addClass('animated').removeClass('offscreen-bott offscreen-top');
						}, 1000);

						setTimeout(function () {
							$('.offscreen-left, .offscreen-right, .offscreen-top, .offscreen-bott, .remove').remove();
							fixElementsAfterResize();

							updateAddThis();

							setTimeout(function () {
								overlay.addClass('hide-loader');
								setTimeout(function () {
									overlay.fadeOut('slow', function () {
										overlay.removeClass('left right wide hide-loader');
									});
									holdLoadingPages = false;
								}, 1500);
							}, 1500);
							content.removeClass('inv');
							drowLines();
							layoutPosition();

							//load parent if manual
							if (manual) {
								var parent;
								if (content.hasClass('casestudy-item-wrap')) {
									parent = $('.casestudy-link');
								}
								if (content.hasClass('blog-post')) {
									parent = $('.bloglist-link');
								}
								$('.nav-main li a').removeClass('active center-fixed left-fixed right-fixed').attr('data-position', '');
								parent.attr('data-position', 'center-fixed').addClass('center-fixed active');
								$.when($.get(parent.attr('href'))).done(function (data) {
									var content = $($.trim(data)).addClass('wide');
									target.append(content);
									updateAddThis();
									detectPage(content);
									setTimeout(function () {
										drowLines();
										layoutPosition();
									}, 1000);
								});
							}
						}, 2000);
					});
				}
			}


			if (document.location.hash.replace(/^#?!\//, '') != '') {
				loadResource(true);
			}

			$(document)
				.on('click', '.logo a', function (e) {
					e.preventDefault();
					var el = $(this);
					var link = $('.nav-main [href="' + el.attr('href') + '"]');
					$('.nav-main a').not(link).attr('data-position', '').removeClass('left-fixed right-fixed active center-fixed');
					link.find('.center').addClass('active');
					link.addClass('center-active center-fixed').trigger('click').trigger('mouseleave');
				})
				.on('click', '.nav-main ul a, .blog-list_i .item, .casestudy-list a', function (e) {
					e.preventDefault();
					$.proxy(loadResource, this)(false);
				})

				.on('click', '.help-menus a', function (e) {
					e.preventDefault();
					var el = $(this).parent();
					var menu = $('.help-menu');
					menu.removeClass('active');
					setTimeout(function () {
						if (menu.hasClass('left')) {
							el = $('.nav-main a').eq(el.index());
							el.find('.left').addClass('active');
							el.addClass('left-active left-fixed').trigger('click').trigger('mouseleave');
						} else {
							el = $('.nav-main a').eq(el.index());
							el.find('.right').addClass('active');
							el.addClass('right-active right-fixed').trigger('click').trigger('mouseleave');
						}
					}, 1000);
				})

				.on('click', '.home-carousel a', function (e) {
					e.preventDefault();
					var el = $(this);
					var link = $('.nav-main [href="' + el.attr('href') + '"]');
					$('.nav-main a').not(link).attr('data-position', '').removeClass('left-fixed right-fixed active center-fixed');
					if (el.hasClass('left')) {
						link.find('.left').addClass('active');
						link.addClass('left-active left-fixed').trigger('click').trigger('mouseleave');
					}
					if (el.hasClass('right')) {
						link.find('.right').addClass('active');
						link.addClass('right-active right-fixed').trigger('click').trigger('mouseleave');
					}
					if (el.hasClass('center')) {
						link.find('.center').addClass('active');
						link.addClass('center-active center-fixed').trigger('click').trigger('mouseleave');
					}
				})
		}

		navigation();

		//Page detection for initializing functions
		var detectPage = function (data, type) {
			//console.log('Detect page call');

			data.each(function () {
				var content = $(this);

				if (content.hasClass('aboutus')) {
					aboutPage(content);
					//console.log('aboutus page detected');
					return false;
				}

				if (content.hasClass('contactus')) {
					contactPage(content);
					//console.log('contactus page detected');
					return false;
				}

				if (content.hasClass('casestudy-item-wrap')) {
					casestudyItemPage(content);
					//console.log('casestudy item page detected');
					return false;
				}

				if (content.hasClass('casestudy')) {
					casestudyPage(content);
					//console.log('casestudy page detected');
					return false;
				}

				if (content.hasClass('references')) {
					referencesPage(content);
					//console.log('references page detected');
					return false;
				}

				if (content.hasClass('blog-list')) {
					blogListPage(content);
					//console.log('references page detected');
					return false;
				}

				if (content.hasClass('blog-post')) {
					if (type == 'fast') {
						blogPostPage(content, 'fast');
					} else {
						blogPostPage(content);
					}

					//console.log('Blog post page detected');
					return false;
				}

				if (content.hasClass('home')) {
					homePage(content);
					//console.log('Home page detected');
					return false;
				}
				return false;
			});
		}

		//Preloader animation
		var preloaderLines = $('.preloader__l, .preloader__r, .preloader__b, .preloader__t');
		var preloader = $('.preloader');
		var animatePreloader = function () {
			if ($('.preloader-wrap').css('display') == 'none') {
				return false;
			}
			preloader.removeClass('animated active-first active-second');
			setTimeout(function () {
				preloader.addClass('animated active-first');
				preloaderLines.off('transitionend').on('transitionend', function () {
					$(this).off('transitionend');
					$('.preloader').addClass('active-second');
					setTimeout(animatePreloader, 1200);
				});
			}, 1000);
		}
		animatePreloader();

		var loadingScreen = function (progress) {
			if (progress != 100) {
				preloader.find('.preloader__progress i').css('width', progress + '%');
			} else {
				$('.preloader-wrap').fadeOut(function () {

					if ($('.home').length) {
						homePage($('.home'));
					}

					if ($('.casestudy').length) {
						casestudyPage($('.casestudy'));
					}

					if ($('.aboutus').length) {
						aboutPage($('.aboutus'));
					}

					if ($('.blog-list').length) {
						blogListPage($('.blog-list'));
					}

					if ($('.blog-post').length) {
						blogPostPage($('.blog-post'));
					}

					if ($('.contactus').length) {
						contactPage($('.contactus'));
					}

					if ($('.references').length) {
						referencesPage($('.references'));
					}

					drowLines();
					$(window).resize(function () {
						$('.out').height($(window).height());
						$('.logo, .btn-menu').addClass('active');
					}).resize();
				});
			}
		}

		if (preloader.length) {
			var faketime = 60;
			if($('.blog-post').length){
//				console.log('a')
				faketime = 10;
			}
			if ($('.touch').length) {
				faketime = 10;
			}
			$('.preloader-wrap_i').height($(window).height() - $('.preloader__descr').innerHeight()).addClass('vis');
			var progress = 1;
			setTimeout(function () {
				loadingScreen(progress++);
				progress <= 100 && setTimeout(arguments.callee, faketime); //70 set
			}, faketime);
		}

		var drowLines = function () {
			var boxWidth,
				offset = 60,
				wW = $(window).width(),
				wH = $(window).height();
			if ($('.wrap-border-left:not(.stable)').closest('section').width() < wW) {
				boxWidth = wW / 2;
			} else {
				boxWidth = wW;
			}

			if (mobile) {
				offset = 20;
			}

			setTimeout(function () {
				$('.wrap-border-left:not(.stable)').animate({
					height: wH - offset
				}, 500, 'easeInQuad', function () {
					$('.wrap-border-bott:not(.stable)').animate({
						width: boxWidth - offset
					}, 500, 'easeInQuad');
				});

				$('.wrap-border-top:not(.stable)').animate({
					width: boxWidth - offset
				}, 500, 'easeInQuad', function () {
					$('.wrap-border-right:not(.stable)').animate({
						height: wH - offset
					}, 500, 'easeInQuad', function () {
						$('.wrap-border-bott:not(.stable), .wrap-border-right:not(.stable), .wrap-border-left:not(.stable), .wrap-border-top:not(.stable)').addClass('stable');
					});
				});

			}, 700);
		}

		//main nav dynamic
		$(window).resize(function () {
			$('.menu__top-part, .menu__bott-part').height(parseInt(($(window).height() - $('.nav-main').height()) / 2 - 2));
		});
		var btnMenuHoverTimeout;
		$('.btn-menu').on('click', function (e) {
			e.preventDefault();
			var body = $('body');
			body.toggleClass('menu-animated menu-open');
		});

		$('.btn-imprint').on('click', function (e) {
			e.preventDefault();
			var body = $('body');
			body.removeClass('menu-open');
			setTimeout(function () {
				body.addClass('imprint-open');
				setTimeout(function () {
					$('.imprint .border-left').animate({
						height: $(window).height() - 60
					}, 1000, function () {
						$('.imprint .border-bott').animate({
							width: $(window).width() - 60
						}, 1000);
					});
					$('.imprint  .border-top').animate({
						width: $(window).width() - 60
					}, 1000, function () {
						$('.imprint .border-right').animate({
							height: $(window).height() - 60
						}, 1000);
					});
				}, 700);
			}, 700);
		});

		$(document)
			.on('click', '.subscribe .title', function (e) {
				e.preventDefault();
				$('.subscribe').addClass('open');
			})
			.on('click', '.imprint-close', function (e) {
				e.preventDefault();
				$('body').removeClass('imprint-open');
			})
			.on('mouseleave', '.subscribe', function () {
				if (!$('.subscribe__form__email').hasClass('focus')) {
					$('.subscribe').removeClass('open');
				}
			});

		$('.subscribe__submit').on('click', function (e) {
			e.preventDefault();
			$(this).closest('form').submit();
		});

		$('.subscribe__form__email').on('focus', function () {
			$(this).addClass('focus');
		}).on('blur', function () {
			$(this).removeClass('focus');
		})

		$('.subscribe__form form').on('submit', function () {
			var subscribe = $('.subscribe'),
				message = $('.subscribe__message');

			message.on('click', function (e) {
				e.preventDefault();
				subscribe.removeClass('subscribe_error');
			});

			$.ajax({
				url: '//adwyse.us11.list-manage.com/subscribe/post-json?u=7f2fc198804860d444fef1de8&id=70a04a76da&c=?',
				data: {
					EMAIL: $('.subscribe__form__email').val()
				},
				type: 'get',
				dataType: 'json',
				success: function (data) {
					if (data.result && data.result == 'success') {
						if (data.msg && typeof data.msg === 'string') {
							$('.menu__bott-part').html('<p>' + data.msg.replace(/<a[^>]+>.*?<\/a>/, '').replace('list', '') + '</p>');
							setTimeout(function () {
								$('.menu__bott-part p').fadeOut(function () {
									setTimeout(function () {
										$('.menu__bott-part').html('');
										subscribe.removeClass('open');
									}, 100)
								});
							}, 10000);
						}
					} else {
						subscribe.addClass('subscribe_error');
						message.html('Error, enter email again');
						setTimeout(function () {
							subscribe.removeClass('subscribe_error');
						}, 3000);
					}
				},
				error: function () {
					subscribe.addClass('subscribe_error');
					message.html('Error, enter email again');
					setTimeout(function () {
						subscribe.removeClass('subscribe_error');
					}, 3000);
				}
			});
			return false;
		});

		$('.nav-main li a').on('mouseleave', function () {
			var el = $(this);
			el.find('.right, .left, .center').removeClass('active');
			el.removeClass('left-active right-active center-active');
//		console.log(el.find('.center').attr('data-center'));
			$('.nav-main a').removeClass('left-fixed right-fixed center-fixed').addClass(function () {
				return $(this).attr('data-position');
			});
		}).on('mousemove', function (e) {
			var el = $(this),
				activeNav = $('.nav-main a.active');

			$('.nav-main a').removeClass('left-fixed right-fixed center-fixed');

			if (e.pageX > $(window).width() / 2 + el.width() / 2 - 40) {
				el.addClass('right-active');
				el.removeClass('center-active left-active');
				el.find('.right').addClass('active');
				el.find('.left').removeClass('active');
				el.find('.center').removeClass('active');
//			console.log('hover right');

				if (el.hasClass('active')) {
					$('.nav-main a.active[data-position="right-fixed"], .nav-main a.active[data-position="left-fixed"]').not(el).addClass('left-fixed');
				} else {
					$('.nav-main a.active:not([data-position="right-fixed"])').not(el).addClass('left-fixed');
					$('.nav-main a.active[data-position="right-fixed"]').not(el).removeClass('right-fixed');
				}

				return false;
			}
			if (e.pageX < $(window).width() / 2 - el.width() / 2 + 40) {
				el.addClass('left-active');
				el.removeClass('center-active right-active');
				el.find('.left').addClass('active');
				el.find('.right').removeClass('active');
				el.find('.center').removeClass('active');
//			console.log('hover left');
				if (el.hasClass('active')) {
					$('.nav-main a.active[data-position="left-fixed"], .nav-main a.active[data-position="right-fixed"]').not(el).addClass('right-fixed');
				} else {
					$('.nav-main a.active:not([data-position="left-fixed"])').not(el).addClass('right-fixed');
					$('.nav-main a.active[data-position="left-fixed"]').not(el).removeClass('left-fixed');
				}
				return false;
			}
			if (e.pageX > $(window).width() / 2 - el.width() / 2 && e.pageX < $(window).width() / 2 + el.width() / 2) {
				el.find('.right, .left').removeClass('active');
				el.find('.center').addClass('active');
				el.addClass('center-active');
				el.removeClass('left-active right-active');
//			console.log('hover center');

				return false;
			}
		});


		var scrollAppearance = function (elements, scrollingBlock) {
			if (elements.not('.visible').length) {
				var wH = $(window).height();
				var scrollingBlockOffset = parseInt(scrollingBlock.css('top'));
				elements.not('.visible').each(function () {
					var el = $(this);
					var elOffset = el.offset().top + Math.abs(scrollingBlockOffset);
					if (elOffset < -scrollingBlockOffset + wH) {
						el.addClass('visible');
					}
				});
			}
		}
		var onInitScrollAppearance = function (elements) {
			var wH = $(window).height();
			var count = 0;
			elements.each(function () {
				var el = $(this);
				count += 100;
				var elOffset = el.offset().top;
				if (elOffset < wH) {
					setTimeout(function () {
						el.addClass('visible');
					}, count);
				}
			});
		}

		//HOMA PAGE
		var homePage = function (box) {
			var carouselList = box.find('.home-carousel__list'),
				autohideTimeout;

			carouselList.owlCarousel({
				items: 1,
				animateOut: 'fadeOut',
				autoplay: true,
				autoplayTimeout: 10000,
				mouseDrag: false,
				loop: true,
				onInitialized: function () {
					carouselList.find('.active').addClass('vis');
				},
				onTranslated: function () {
					clearTimeout(autohideTimeout);
					carouselList.find('.active').addClass('vis');
					autohideTimeout = setTimeout(function () {
						carouselList.find('.active').removeClass('vis');
					}, 8500);
				}
			});

			function stopAutoplay() {
				carouselList.data('owlCarousel').settings.autoplay = false;
				carouselList.trigger('stop.owl.autoplay');
			};

			function startAutoplay() {
				carouselList.data('owlCarousel').settings.autoplay = true;
				carouselList.trigger('start.owl.autoplay');
			};


			var scrollAllowed = true;
			carouselList.on('mousewheel', function (e) {

				if (!scrollAllowed) {
					return;
				}
				scrollAllowed = false;
				var delta = e.deltaY * e.deltaFactor;

				stopAutoplay();
				carouselList.find('.active').removeClass('vis');

				if (delta > 0) {
					setTimeout(function () {
						carouselList.trigger('prev.owl');
					}, 700);
				} else {
					setTimeout(function () {
						carouselList.trigger('next.owl');
					}, 700);
				}

				setTimeout(function () {
					scrollAllowed = true;
					startAutoplay();
				}, 2500);

				e.preventDefault();
			});

		}


		//CASESTUDY PAGE
		var casestudyPage = function (box) {
			$(window).resize(function () {
				box.find('.section-wrap').height($(window).height());
			}).resize();

			var afterLayout = function () {
				if ($('.no-touch').length) {
					box.find('.section-wrap').mCustomScrollbar({
						axis: "y",
						scrollInertia: 100,
						callbacks: {
							onInit: function () {
								setTimeout(function () {
									onInitScrollAppearance(box.find('.casestudy-list >ul>li>a, .casestudy__text_i'));
								}, 5000);
							},
							whileScrolling: function () {
								scrollAppearance(box.find('.casestudy-list >ul>li>a, .casestudy__text_i'), box.find('.mCSB_container'));
							}
						}
					});
				}
			}
			afterLayout();
		}


		//CASESTUDY ITEM PAGE
		var casestudyItemPage = function (box) {

			$(window).resize(function () {
				var wh = $(window).height();
				if (box.hasClass('wide')) {
					box.find('.first-step, .section-wrap, .second-step, .wrap-bg-2').height(wh);
				} else {
					box.find('.first-step, .section-wrap').height(wh);
					box.find('.second-step, .wrap-bg-2').height('auto');
				}
			}).resize();

			if ($('.no-touch').length) {
				box.find('.section-wrap').mCustomScrollbar({
					axis: "y",
					scrollInertia: 100,
					callbacks: {
						whileScrolling: function () {
							scrollAppearance(box.find('.detect-inview'), box.find('.mCSB_container'));
							var wh = $(window).height();
							var scrollTop = Math.abs(parseInt(box.find('.mCSB_container').css('top')));
							box.find('.first-step__bg').css('top', scrollTop);

						},
						onInit: function () {
							setTimeout(function () {
								onInitScrollAppearance(box.find('.detect-inview'));
								setTimeout(function () {
									box.find('.first-step .next a').addClass('visible');
								}, 200);
							}, 5000);
						},
						onTotalScrollOffset: 400,
						onTotalScroll: function () {
							box.find('.detect-inview').addClass('visible');
						}
					}
				});
			}

			setTimeout(function () {
				drowLines();
				layoutPosition();
			}, 1000);

			if (box.find('.mac-carousel-big').length) {
				if (!mobile) {
					box.find('.mac-carousel-big__list').owlCarousel({
						loop: true,
						nav: false,
						responsive: {
							0: {
								items: 1
							},
							600: {
								items: 1
							},
							1000: {
								items: 1
							}
						}
					});
				}
				box.find('.mac-carousel-small__list').owlCarousel({
					loop: true,
					nav: false,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 1
						},
						1000: {
							items: 1
						}
					}
				});
				box.find('.mac-carousel-controls li').on('click', function (e) {
					e.preventDefault();
					var el = $(this);
					box.find('.mac-carousel-controls li').removeClass('active');
					el.addClass('active');
					box.find('.mac-carousel-big__list').trigger('to.owl.carousel', [el.index()]);
					box.find('.mac-carousel-small__list').trigger('to.owl.carousel', [el.index()]);
				});
			}
			if (box.find('.white-phone-carousel').length) {
				var whitePhoneCarousel = box.find('.white-phone-carousel__list').owlCarousel({
					loop: true,
					nav: false,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 1
						},
						1000: {
							items: 1
						}
					},
					onTranslated: function () {
						box.find('.white-phone-carousel__controls .title').html(box.find('.owl-item.active img').attr('alt'));
					}
				});
				box.find('.white-phone-carousel__controls .next').on('click', function (e) {
					e.preventDefault();
					whitePhoneCarousel.trigger('next.owl.carousel');
				});
				box.find('.white-phone-carousel__controls .prev').on('click', function (e) {
					e.preventDefault();
					whitePhoneCarousel.trigger('prev.owl.carousel');
				});
			}

		}

		//ABOUT US PAGE
		var aboutPage = function (box) {
			$(document).on('click', '.heads-list__item', function (e) {
				e.preventDefault();
				$(this).addClass('open');
			});
			$(document).on('click', '.heads-list__item .close', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).closest('.heads-list__item').removeClass('open');
				return false;
			}).on('touchstart', '.about-do .row .item', function () {
				$(this).toggleClass('hover');
			});

			box.find('.heads-quote').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				autoplay: true,
				autoplayTimeout: 10000,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});

			$(window).resize(function () {
				var wh = $(window).height();
				box.find('.first-step, .second-step, .section-wrap, .wrap-bg__bg').height(wh);
			}).resize();


			if ($('.no-touch').length) {
				box.find('.section-wrap').mCustomScrollbar({
					axis: "y",
					scrollInertia: 100,
					callbacks: {
						whileScrolling: function () {
							var bg2 = box.find('.wrap-bg__bg');
							var wh = $(window).height();
							var scrollTop = Math.abs(parseInt(box.find('.mCSB_container').css('top')));
							box.find('.first-step__bg').css('top', scrollTop);
							if (scrollTop > wh * 2) {
								bg2.css('top', scrollTop - wh * 2);
							}
							scrollAppearance(box.find('.detect-inview'), box.find('.mCSB_container'));
						},
						onInit: function () {
							setTimeout(function () {
								onInitScrollAppearance(box.find('.detect-inview'));
								setTimeout(function () {
									box.find('.first-step .next a').addClass('visible');
								}, 200);
							}, 5000);
						}
					}
				});
			}

			box.find('.second-step__list').owlCarousel({
				loop: true,
				nav: false,
				dots: true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				autoplay: true,
				autoplayTimeout: 30000,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
		}


		//BLOG-LIST PAGE
		var blogListPage = function (box) {
			$(window).resize(function () {
				box.find('.section-wrap').height($(window).height());
			}).resize();
			if ($('.no-touch').length) {
				$('.blog-list .section-wrap').mCustomScrollbar({
					axis: "y",
					scrollInertia: 100,
					callbacks: {
						onInit: function () {
							setTimeout(function () {
								onInitScrollAppearance($('.blog-list_i .item'));
							}, 5000);
						},
						whileScrolling: function () {
							scrollAppearance($('.blog-list_i .item'), $('.blog-list .mCSB_container'));
						}
					}
				});
			}
		}

		//blog post page load next/prev post links
		$(document).on('click', '.post-nav .prev, .post-nav .next', function (e) {
			e.preventDefault();
			holdLoadingPages = true;

			var el = $(this),
				url = $(this).attr('href'),
				animation = $.Deferred(),
				newBlock,
				page = el.closest('section'),
				pagePosition = page.css('left'),
				overlay = $('.white-overlay'),
				wide = page.hasClass('wide');

			//document.location.hash = '#!/' + el.attr('href');
			document.location.hash = el.attr('href');

			overlay.css({'left': page.css('left'), 'width': page.css('width')}).addClass('visible');
			setTimeout(function () {


				page.fadeOut('slow', function () {
					setTimeout(function () {
						page.remove();
					}, 200);
					animation.resolve();
				});

				$.when($.get(url.replace(/^#?!\//, '')), animation).done(function (data) {
					newBlock = $($.trim(data[0])).css('left', pagePosition).addClass('inv');
					if (wide) {
						newBlock.addClass('wide');
					}
					$('.content').append(newBlock);
					detectPage(newBlock, 'fast');
					setTimeout(function () {
						holdLoadingPages = false;
						newBlock.addClass('animated').removeClass('inv');
						updateAddThis();
					}, 500);
					setTimeout(function () {
						holdLoadingPages = false;
						overlay.removeClass('visible');
						drowLines();
						layoutPosition();
					}, 1000);
				})
			}, 500);
		});

		//Case study next link
		$(document).on('click', '.next-case-study a', function (e) {
			e.preventDefault();
			holdLoadingPages = true;

			var el = $(this),
				url = $(this).attr('href'),
				animation = $.Deferred(),
				newBlock,
				page = el.closest('section'),
				pagePosition = page.css('left'),
				overlay = $('.grey-overlay'),
				wide = page.hasClass('wide');

			//document.location.hash = '#!/' + el.attr('href');
			document.location.hash = el.attr('href');

			overlay.css({'left': page.css('left'), 'width': page.css('width')}).addClass('visible');
			setTimeout(function () {

				page.fadeOut('slow', function () {
					setTimeout(function () {
						page.remove();
					}, 200);
					animation.resolve();
				});

				$.when($.get(url.replace(/^#?!\//, '')), animation).done(function (data) {
					newBlock = $($.trim(data[0])).css('left', pagePosition).addClass('inv');
					if (wide) {
						newBlock.addClass('wide');
					}
					$('.content').append(newBlock);
					detectPage(newBlock, 'fast');
					setTimeout(function () {
						holdLoadingPages = false;
						newBlock.addClass('animated').removeClass('inv');
						updateAddThis();
					}, 500);
					setTimeout(function () {
						holdLoadingPages = false;
						overlay.removeClass('visible');
						drowLines();
						layoutPosition();
					}, 1000);
				})
			}, 500);
		});

		//BLOG-POST US PAGE
		var blogPostPage = function (box, type) {
			$(window).resize(function () {
				box.find('.section-wrap').height($(window).height());
				box.find('.section-wrap_i').css({'minHeight': $(window).height()});
			}).resize();

			if ($('.no-touch').length) {
				box.find('.section-wrap').mCustomScrollbar({
					axis: "y",
					scrollInertia: 100,
					callbacks: {
						whileScrolling: function () {
							scrollAppearance(box.find('.detect-inview'), box.find('.mCSB_container'));
							box.find('.img').css('top', Math.abs(parseInt(box.find('.mCSB_container').css('top'))));
						},
						onInit: function () {
							if (type == 'fast') {
								setTimeout(function () {
									onInitScrollAppearance(box.find('.detect-inview'));
								}, 1000);
							} else {
								setTimeout(function () {
									onInitScrollAppearance(box.find('.detect-inview'));
								}, 5000);
							}
						}
					}
				});
			}
			if (box.find('.mCS_y_hidden').length) {
				if (type == 'fast') {
					setTimeout(function () {
						onInitScrollAppearance(box.find('.detect-inview'));
					}, 1000);
				} else {
					setTimeout(function () {
						onInitScrollAppearance(box.find('.detect-inview'));
					}, 5000);
				}
			}
		}

		//REFERENCES PAGE
		var referencesPage = function (box) {

			$(window).resize(function () {
				box.find('.section-wrap').height($(window).height());
			}).resize();

			box.find('.section-wrap').mCustomScrollbar({
				axis: "y",
				scrollInertia: 100
			});

			setTimeout(function () {
				$('.references-list').isotope({
					itemSelector: '.item',
					layoutMode: 'fitRows'
				});

				$('.references-list .item a').addClass('active');

			}, 3000);

		}


		//CONTACT PAGE
		var contactPage = function (box) {

			$(window).resize(function () {
				var wH = $(window).height(),
					contactFormHeight = $('.contact-form').height() + 250;
				box.find('.section-wrap, .map').height(wH);
			}).resize();

			var map;

			var initialize = function () {
				var mapOptions = {
					zoom: 17,
					center: new google.maps.LatLng(-34.397, 150.644),
					styles: [
						{
							"featureType": "landscape", "stylers": [
							{"saturation": -100},
							{"lightness": 65},
							{"visibility": "on"}
						]
						},
						{
							"featureType": "poi", "stylers": [
							{"saturation": -100},
							{"lightness": 51},
							{"visibility": "simplified"}
						]
						},
						{
							"featureType": "road.highway", "stylers": [
							{"saturation": -100},
							{"visibility": "simplified"}
						]
						},
						{
							"featureType": "road.arterial", "stylers": [
							{"saturation": -100},
							{"lightness": 30},
							{"visibility": "on"}
						]
						},
						{
							"featureType": "road.local", "stylers": [
							{"saturation": -100},
							{"lightness": 40},
							{"visibility": "on"}
						]
						},
						{
							"featureType": "transit", "stylers": [
							{"saturation": -100},
							{"visibility": "simplified"}
						]
						},
						{
							"featureType": "administrative.province", "stylers": [
							{"visibility": "off"}
						]
						},
						{
							"featureType": "water", "elementType": "labels", "stylers": [
							{"visibility": "on"},
							{"lightness": -25},
							{"saturation": -100}
						]
						},
						{
							"featureType": "water", "elementType": "geometry", "stylers": [
							{"hue": "#ffff00"},
							{"lightness": -25},
							{"saturation": -97}
						]
						}
					],
					scrollwheel: false,
					navigationControl: false,
					mapTypeControl: false,
					scaleControl: false,
					draggable: false,
					panControl: false,
					zoomControl: false
				};

				map = new google.maps.Map(box.find('.map').get(0), mapOptions);
				var location = box.find('.address__list .item').eq(0).attr('data-location').split(',');
				map.panTo(new google.maps.LatLng(location[0], location[1]));
			}

			initialize();

			$('.contact-form textarea').autoGrow();

			box.find('.section-wrap_i').css('min-height', $('.contact-form').height() + 250);//top position of contact form block
			if ($('.no-touch').length) {
				box.find('.section-wrap').mCustomScrollbar({
					axis: "y",
					scrollInertia: 100,
					callbacks: {
						whileScrolling: function () {
							scrollAppearance(box.find('.detect-inview'), box.find('.mCSB_container'));
							var map = box.find('.map');
							var scrollTop = Math.abs(parseInt(box.find('.mCSB_container').css('top')));
							box.find('.first-step__bg').css('top', scrollTop);
							map.css('top', scrollTop);
						}
					}
				});
			}

			setTimeout(function () {
				onInitScrollAppearance(box.find('.detect-inview'));
			}, 5000);

			$('.address__controls a').on('click', function (e) {
				e.preventDefault();
				var el = $(this),
					index = el.index(),
					layers = $('.address__list .item');
				$('.address__controls a').removeClass('active');
				el.addClass('active');
				layers.not($('.address__list .item').eq(index)).css('display', 'none');
				layers.eq(index).fadeIn();
				var location = layers.eq(index).attr('data-location').split(',');
				map.panTo(new google.maps.LatLng(location[0], location[1]));
			});

			box.find('form').off('submit').on('submit', function () {
				var form = $(this);
				form.find('div.error').removeClass('error');
				$.ajax({
					url: form.attr('action'),
					data: $(this).serialize(),
					type: form.attr('method'),
					dataType: 'json',
					success: function (response) {
						if (response.success) {
							alert('Your message was successfully sent.');
							form[0].reset();
						} else {
							if (response.errors) {
								$.each(response.errors, function (field, error) {
									var field = form.find('[name="' + field + '"]');
									if (field.length) {
										var container = field.closest('div');
										var errorContainer = container.find('.error-text');
										if (!errorContainer.length) {
											errorContainer = $('<div/>', {
												'class': 'error-text'
											});
											container.append(errorContainer);
										}
										errorContainer.html(field.attr('placeholder') + ': ' + error);
										container.addClass('error');
									}
								});
								if (response.error) {
									alert(response.error);
								}
							} else {
								alert('Error while submitting the form, please try again later');
							}
						}
					},
					error: function () {
						alert('Error while submitting the form, please try again later');
					}
				});
				return false;
			}).find('.btn-gold').off('click').on('click', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).closest('form').submit();
			});

			$(document).on('click', '.contactus .error-text', function (e) {
				e.preventDefault();
				$(this).closest('.error').removeClass('error');
			});
		}

		//Close references
		$(document).on('click', '.btn-close-references', function () {
			$('.references').fadeOut(function () {
				$(this).remove();
				$('.btn-menu').fadeIn();
			});
		});

		//button scroll to top
		$(document).on('click', '.btn-top', function (e) {
			e.preventDefault();
			$(this).closest('.section-wrap').mCustomScrollbar("scrollTo", 0, {
				scrollInertia: 1000,
				scrollEasing: "easeOut"
			});
		});

		//imprint scroll
		if ($('.no-touch').length) {
			$('.imprint_i').mCustomScrollbar({
				axis: "y",
				scrollInertia: 100
			});
		}

		//Button scroll to next section
		$(document).on('click', '.casestudy-item .btn-down', function () {
			var el = $(this);
			var parent = el.closest('.section-wrap');
			parent.mCustomScrollbar("scrollTo", parent.find('.second-step'), {
				scrollInertia: 1000,
				scrollEasing: "easeOut"
			});
		});

		$(document).on('click', '.about-wrap .first-step .btn-down', function () {
			var el = $(this);
			var parent = el.closest('.section-wrap');
			parent.mCustomScrollbar("scrollTo", parent.find('.second-step'), {
				scrollInertia: 1000,
				scrollEasing: "easeOut"
			});

		});
	}
)
;