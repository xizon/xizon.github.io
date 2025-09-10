/*!
 * 
 * DO NOT OVERRIDE THIS FILE.
 * Generated with "npm run build"
 *
 * ## Project Name        :  UIUX Lab
 * ## Project Description :  Free and easy tools for quick build websites, focusing on the WordPress toolkit for developers and regular users
 * ## Project URL         :  https://uiux.cc
 * ## Version             :  5.2.0
 * ## Based on            :  Uix Kit (https://github.com/xizon/uix-kit)
 * ## Last Update         :  January 16, 2025
 * ## Created by          :  UIUX Lab (https://uiux.cc) (uiuxlab@gmail.com)
 * ## Released under the MIT license.
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 500:
/***/ (() => {

/* 
 *************************************
 * Parallax Effect
 *
 * @param  {Number} speed       - The speed of movement between elements.
 * @param  {String} transition  - Transition time can simulate easing effect.
 * @param  {Object} bg            - Specify the background display. Default value: { enable: true, xPos: '50%' }
 * @return {Void}
 *
 *************************************
 */

(function ($) {
  'use strict';

  $.fn.UixParallax = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      speed: 0.25,
      transition: 'all 0.4s cubic-bezier(0, 0, 0.34, 0.96) 0s',
      bg: {
        enable: true,
        xPos: '50%'
      }
    }, options);
    this.each(function () {
      var bgEff = settings.bg,
        $this = $(this),
        bgXpos = '50%',
        speed = -parseFloat(settings.speed);
      if (bgEff) {
        bgEff = settings.bg.enable;
        bgXpos = settings.bg.xPos;
      }

      //Prohibit transition delay
      $this.css({
        'transition': 'none'
      });

      // Please do not use scroll's off method in each
      $(window).on('scroll.UixParallax touchmove.UixParallax', function (e) {
        scrollUpdate();
      });

      //Initialize the position of the background
      if (bgEff) {
        //background parallax
        TweenMax.set($this, {
          backgroundPosition: bgXpos + ' ' + -$this.offset().top * speed + 'px'
        });
      } else {
        //element parallax
        TweenMax.set($this, {
          y: 0
        });
      }
      function scrollUpdate() {
        var spyTop = $this[0].getBoundingClientRect().top;
        if (bgEff) {
          //background parallax
          TweenMax.set($this, {
            css: {
              'background-position': bgXpos + ' ' + (0 - spyTop * speed) + 'px',
              'transition': settings.transition
            }
          });
        } else {
          //element parallax
          TweenMax.set($this, {
            css: {
              'transform': 'matrix(1, 0, 0, 1, 0, ' + (0 - spyTop * speed) + ')',
              'transition': settings.transition
            }
          });
        }
      }
    });
  };
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/components/ES6/_global/js/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**

	TABLE OF CONTENTS
	---------------------------


	${{TOC}}

*/

/*
 *************************************
 * <!-- Base -->
 *************************************
 */


/*
 * Global variables from front pages
 *
 * @private
 */
var
  //If the file is in the root directory, you can leave it empty.
  //If in another directory, you can write: "/blog"
  templateUrl,
  //Eg. https://uiux.cc
  homeUrl,
  //Eg. https://uiux.cc/wp-admin/admin-ajax.php
  ajaxUrl;
if (typeof APP_ROOTPATH === 'undefined') {
  templateUrl = '';
  homeUrl = '';
  ajaxUrl = '';
} else {
  templateUrl = APP_ROOTPATH.templateUrl.replace(/\/\s*$/, '');
  homeUrl = APP_ROOTPATH.homeUrl.replace(/\/\s*$/, '');
  ajaxUrl = APP_ROOTPATH.ajaxUrl.replace(/\/\s*$/, '');
}

/*
 * Determine whether it is a special browser
 *
 * @private
 */
// Add feature test for passive event listener support
var supportsPassive = false;
try {
  document.addEventListener("test", null, {
    get passive() {
      supportsPassive = true;
    }
  });
} catch (e) {}
var browser = {
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isAndroid: /(android)/i.test(navigator.userAgent),
  isPC: !navigator.userAgent.match(/(iPhone|iPod|Android|ios|Mobile)/i),
  isSafari: !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
  /*Test to 9, 10. */
  isIE: !!window.ActiveXObject || "ActiveXObject" in window,
  /*Test to 6 ~ 11 (not edge) */
  supportsPassive: supportsPassive
};

/*
 * Core scripts for current site
 *
 * @private
 * @description Used for all modules from ./src/components/ES6/[__]/js
 * @requires ./examples/assets/js/min/jquery.waitforimages.min.js
 * @requires ./examples/assets/js/min/video.min.js
 * @requires ./examples/assets/js/min/TweenMax.min.js
 */
var UixModuleInstance = function ($, window, document) {
  var _APP = {},
    components = {
      documentReady: [],
      pageLoaded: []
    };
  if ($('img').length == 0) {
    $('body').prepend('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" style="display:none">');
  }
  if ($.isFunction($.fn.waitForImages)) {
    $('body').waitForImages(pageLoaded);
  } else {
    $(window).on('load', pageLoaded);
  }
  $(document).ready(documentReady);
  function documentReady(context) {
    context = _typeof(context) == ( true ? "undefined" : 0) ? $ : context;
    components.documentReady.forEach(function (component) {
      component(context);
    });
  }
  function pageLoaded(context) {
    context = _typeof(context) == "object" ? $ : context;
    components.pageLoaded.forEach(function (component) {
      component(context);
    });
  }
  _APP.setContext = function (contextSelector) {
    var context = $;
    if (_typeof(contextSelector) !== ( true ? "undefined" : 0)) {
      return function (selector) {
        return $(contextSelector).find(selector);
      };
    }
    return context;
  };
  _APP.components = components;
  _APP.documentReady = documentReady;
  _APP.pageLoaded = pageLoaded;
  return _APP;
}($, window, document);

/*
 * Create GUID / UUID
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @return {String}                        - The globally-unique identifiers.
 */
var UixGUID = UixGUID || function () {
  function t() {}
  return t.version = "0.0.1", t.create = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },
  //
  t;
}();

/*
 * Evaluating a string as a mathematical expression in JavaScript
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @return {String}            - New calculation result.
 */
var UixMath = UixMath || function () {
  function t() {}
  return t.version = "0.0.1", t.evaluate = function (s) {
    var chars = s.replace(/\s/g, '').split("");
    var n = [],
      op = [],
      index = 0,
      oplast = true;
    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {
      if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
        op[index] = chars[c];
        index++;
        n[index] = "";
        oplast = true;
      } else {
        n[index] += chars[c];
        oplast = false;
      }
    }

    // Calculate the expression
    s = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
      var num = parseFloat(n[o + 1]);
      switch (op[o]) {
        case "+":
          s = s + num;
          break;
        case "-":
          s = s - num;
          break;
        case "*":
          s = s * num;
          break;
        case "/":
          s = s / num;
          break;
      }
    }
    return s;
  },
  //
  t;
}();

/*
 * Get the CSS property
 *
 * @private
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @param  {!Element} el     - The Element for which to get the computed style. Using class name or ID to locate.
 * @return {String|Object}   - The value of property.
 */
var UixCssProperty = UixCssProperty || function () {
  function t() {}
  return t.version = "0.0.1", t.getTransitionDuration = function (el) {
    if (_typeof(el) === ( true ? "undefined" : 0)) {
      return 0;
    }
    var style = window.getComputedStyle(el),
      duration = style.webkitTransitionDuration,
      delay = style.webkitTransitionDelay;
    if (_typeof(duration) != ( true ? "undefined" : 0)) {
      // fix miliseconds vs seconds
      duration = duration.indexOf("ms") > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
      delay = delay.indexOf("ms") > -1 ? parseFloat(delay) : parseFloat(delay) * 1000;
      return duration;
    } else {
      return 0;
    }
  },
  //
  t.getAbsoluteCoordinates = function (el) {
    var windowWidth = window.innerWidth,
      leftPos = null,
      topPos = null;
    if (!document.getElementsByTagName('body')[0].className.match(/rtl/)) {
      leftPos = el.offsetLeft == 0 ? el.parentElement.offsetLeft : el.offsetLeft;
      topPos = el.offsetTop == 0 ? el.parentElement.offsetTop : el.offsetTop;
    } else {
      // width and height in pixels, including padding and border
      // Corresponds to jQuery outerWidth(), outerHeight()
      leftPos = el.offsetLeft == 0 ? windowWidth - (el.parentElement.offsetLeft + el.parentElement.offsetWidth) : windowWidth - (el.offsetLeft + el.offsetWidth);
      topPos = el.offsetTop == 0 ? windowWidth - (el.parentElement.offsetTop + el.parentElement.offsetHeight) : windowWidth - (el.offsetTop + el.offsetHeight);
    }
    return {
      'left': leftPos,
      'top': topPos
    };
  },
  //
  t;
}();
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/fn/UixModuleFilter.js
function UixModuleFilter_typeof(o) { "@babel/helpers - typeof"; return UixModuleFilter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, UixModuleFilter_typeof(o); }
/*
 * Method of deleting or adding a module
 *
 * @global
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @param  {Boolean|String} destroy       - If it is a string, it means destroying this module from UixModuleInstance
 * @param  {Object} add                     - New module data via JSON.
 * @param  {String} add.moduleName        - The name of the module (the default is all uppercase).
 * @param  {Boolean} add.pageLoaded       - Window loading module method. If true or 1, the module will execute after the page is loaded.
 * @param  {Number} add.version           - The new module version number.
 * @param  {Function} add.callback        - The new module script of function.
 * @return {Void}      
 *
 * @Usage:
 * !!! The code is to be inserted in front of the uix-kit core script.
	
	
<script>
window.MAIN = null;
( function( $ ) {
"use strict";
    $( document ).ready( function() {
		$( document ).UixModuleFilter( { 
		   'destroy' : 'MAIN',
		   'add'     : {
							moduleName    : 'YOUR_MODULE_NAME',
							pageLoaded    : true,
							version       : '0.0.1',
							callback      : function() {
								//the module will execute after the page is loaded.

							}
						}
		} );
    } );
} ) ( jQuery );
</script>

 *
 * 
 */


(function ($) {
  'use strict';

  $.fn.UixModuleFilter = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      destroy: false,
      add: {
        moduleName: 'OLD_MODULE_NAME',
        pageLoaded: false,
        version: '0.0.1',
        callback: function callback() {}
      }
    }, options);
    this.each(function () {
      //remove a module
      //-------------------------------------	
      if (settings.destroy && Object.prototype.toString.call(settings.destroy) == '[object String]') {
        var moduleName = settings.destroy;
        if (UixModuleFilter_typeof(UixModuleInstance[moduleName]) != ( true ? "undefined" : 0)) {
          delete UixModuleInstance[moduleName];
        }
      }

      //add or replace a module
      //-------------------------------------	
      if (settings.add && Object.prototype.toString.call(settings.add) == '[object Object]' && settings.add.hasOwnProperty('pageLoaded')) {
        var _moduleName2 = settings.add.moduleName;

        //delete the old module if exist
        if (UixModuleFilter_typeof(UixModuleInstance[_moduleName2]) != ( true ? "undefined" : 0)) {
          console.log('The module already exists, please destroy the old module or change the new module name.');
        } else {
          //loading mode "documentReady"
          if (!settings.add.pageLoaded || settings.add.pageLoaded == 0) {
            var _moduleName = function (module, $, window, document) {
              module[_moduleName2] = module[_moduleName2] || {};
              module[_moduleName2].version = settings.add.version;
              module[_moduleName2].documentReady = function ($) {
                settings.add.callback();
              };
              module.components.documentReady.push(module[_moduleName2].documentReady);
              return _moduleName;
            }(UixModuleInstance, jQuery, window, document);
            UixModuleInstance[_moduleName2].documentReady($);
          }

          //loading mode "pageLoaded"
          if (settings.add.pageLoaded || settings.add.pageLoaded == 1) {
            var _moduleName3 = function (module, $, window, document) {
              module[_moduleName2] = module[_moduleName2] || {};
              module[_moduleName2].version = settings.add.version;
              module[_moduleName2].pageLoaded = function () {
                settings.add.callback();
              };
              module.components.pageLoaded.push(module[_moduleName2].pageLoaded);
              return _moduleName3;
            }(UixModuleInstance, jQuery, window, document);
            UixModuleInstance[_moduleName2].pageLoaded();
          }
        }
      }
    });
  };
})(jQuery);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/fn/UixApplyAsyncScripts.js
/*
 * Apply some asynchronism scripts
 *
 * @global
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @param  {Boolean} scrollReveal          - Run script of module "Scroll Reveal". a page commonly used to
 *                                           load asynchronous information
 * @param  {Boolean} ajaxPostList          - Run script of module "Posts List With Ajax". a page commonly used to
 *                                           load asynchronous information
 * @param  {Boolean} ajaxDDList            - Run script of module "Dynamic Drop Down List from JSON".
 * @param  {Boolean} counterAnim           - Run script of module "Counter".
 * @return {Void}
 *
 * @Usage:
    
	
<script>
( function( $ ) {
"use strict";
    $( document ).ready( function() {
		$( document ).UixApplyAsyncScripts({
			scrollReveal    : true,
			ajaxPostList    : true,
			ajaxDDList      : true,
			counterAnim     : true,
			lightBox        : true 
		});
    } );
} ) ( jQuery );
</script>

 

 *
 * 
 */

(function ($) {
  'use strict';

  $.fn.UixApplyAsyncScripts = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      scrollReveal: true,
      // @from ./src/components/ES6/scroll-reveal
      ajaxPostList: true,
      // @from ./src/components/ES6/list-posts
      ajaxDDList: true,
      // @from ./src/components/ES6/dynamic-dropdown-list-json
      counterAnim: true,
      // @from ./src/components/ES6/counter
      lightBox: true // @from ./src/components/ES6/lightbox
    }, options);
    this.each(function () {
      //----
      if (UixModuleInstance.MAIN) UixModuleInstance.MAIN.pageLoaded(); //Theme Scripts
      if (UixModuleInstance.COMMON_HEIGHT) UixModuleInstance.COMMON_HEIGHT.pageLoaded(); //Common Height
      if (UixModuleInstance.ADVANCED_SLIDER) UixModuleInstance.ADVANCED_SLIDER.pageLoaded(); //Advanced Slider (Basic)
      if (UixModuleInstance.ADVANCED_SLIDER_FILTER) UixModuleInstance.ADVANCED_SLIDER_FILTER.pageLoaded(); //Advanced Slider
      if (UixModuleInstance.FULL_WIDTH_COLUMN_TO_EDGE) UixModuleInstance.FULL_WIDTH_COLUMN_TO_EDGE.pageLoaded(); //Full Width Column to Edge
      if (UixModuleInstance.STICKY_EL) UixModuleInstance.STICKY_EL.pageLoaded(); //Sticky Elements
      if (UixModuleInstance.TEXT_EFFECT) UixModuleInstance.TEXT_EFFECT.pageLoaded(); //Text effect
      if (UixModuleInstance.TIMELINE) UixModuleInstance.TIMELINE.pageLoaded(); //Timeline
      if (UixModuleInstance.HYBRID_CONTENT_SLIDER) UixModuleInstance.HYBRID_CONTENT_SLIDER.pageLoaded(); //Hybrid Content Slider

      //----
      if (UixModuleInstance.MAIN) UixModuleInstance.MAIN.documentReady($); //Theme Scripts
      if (UixModuleInstance.TABLE) UixModuleInstance.TABLE.documentReady($); //Responsive Table
      if (UixModuleInstance.TABLE_SORTER) UixModuleInstance.TABLE_SORTER.documentReady($); //Table Sorter
      if (UixModuleInstance.MODAL_DIALOG) UixModuleInstance.MODAL_DIALOG.documentReady($); //Modal Dialog
      if (UixModuleInstance.PARALLAX) UixModuleInstance.PARALLAX.documentReady($); //Parallax
      if (UixModuleInstance.VIDEOS) UixModuleInstance.VIDEOS.documentReady($); //Videos
      if (UixModuleInstance.BODY_AND_HEADER) UixModuleInstance.BODY_AND_HEADER.documentReady($); //Header Area
      if (UixModuleInstance.SET_BG) UixModuleInstance.SET_BG.documentReady($); //Specify a background image
      if (UixModuleInstance.GET_CUSTOM_ATTRS) UixModuleInstance.GET_CUSTOM_ATTRS.documentReady($); //Get all custom attributes of an element like "data-*"
      if (UixModuleInstance.PAGINATION) UixModuleInstance.PAGINATION.documentReady($); //Pagination
      if (UixModuleInstance.FORM) UixModuleInstance.FORM.documentReady($); //Form
      if (UixModuleInstance.FLEXSLIDER) UixModuleInstance.FLEXSLIDER.documentReady($); //Flexslider
      if (UixModuleInstance.RETINA) UixModuleInstance.RETINA.documentReady($); //Retina Graphics for Website
      if (UixModuleInstance.SHOW_MORELESS) UixModuleInstance.SHOW_MORELESS.documentReady($); //Show More Less
      if (UixModuleInstance.DROPDOWN_MENU) UixModuleInstance.DROPDOWN_MENU.documentReady($); //Dropdown Menu
      if (UixModuleInstance.DROPDOWN_MENU2) UixModuleInstance.DROPDOWN_MENU2.documentReady($); //Dropdown Menu2
      if (UixModuleInstance.ACCORDION) UixModuleInstance.ACCORDION.documentReady($); //Accordion
      if (UixModuleInstance.GALLERY) UixModuleInstance.GALLERY.documentReady($); //Gallery
      if (UixModuleInstance.IMAGE_SHAPES) UixModuleInstance.IMAGE_SHAPES.documentReady($); //Image Shapes
      if (UixModuleInstance.PERIODICAL_SCROLL) UixModuleInstance.PERIODICAL_SCROLL.documentReady($); //Periodical Scroll
      if (UixModuleInstance.PRICING) UixModuleInstance.PRICING.documentReady($); //Pricing
      if (UixModuleInstance.PROGRESS_BAR) UixModuleInstance.PROGRESS_BAR.documentReady($); //Progress Bar
      if (UixModuleInstance.PROGRESS_LINE) UixModuleInstance.PROGRESS_LINE.documentReady($); //Progress Line
      if (UixModuleInstance.ROTATING_EL) UixModuleInstance.ROTATING_EL.documentReady($); //Rotating Elements
      if (UixModuleInstance.SMOOTH_SCROLLING_ANCHORLINK) UixModuleInstance.SMOOTH_SCROLLING_ANCHORLINK.documentReady($); //Smooth Scrolling When Clicking An Anchor Link
      if (UixModuleInstance.TABS) UixModuleInstance.TABS.documentReady($); //Tabs
      if (UixModuleInstance.TEAM_FOCUS) UixModuleInstance.TEAM_FOCUS.documentReady($); //Team Focus
      if (UixModuleInstance.LAVA_LAMP_STYLE_MENU) UixModuleInstance.LAVA_LAMP_STYLE_MENU.documentReady($); //Lava-Lamp Style Menu
      if (UixModuleInstance.CIRCLE_LAYOUT) UixModuleInstance.CIRCLE_LAYOUT.documentReady($); //Circle Layout
      if (UixModuleInstance.MULTI_ITEMS_CAROUSEL) UixModuleInstance.MULTI_ITEMS_CAROUSEL.documentReady($); //Multiple Items Carousel
      if (UixModuleInstance.THREE_BACKGROUND) UixModuleInstance.THREE_BACKGROUND.documentReady($); //3D Background
      if (UixModuleInstance.THREE_CAROUSEL) UixModuleInstance.THREE_CAROUSEL.documentReady($); //3D Carousel
      if (UixModuleInstance.THREE_LIQUID_SCROLLSPY_SLIDER) UixModuleInstance.THREE_LIQUID_SCROLLSPY_SLIDER.documentReady($); //3D Liquid Scrollspy Slider

      //---- Prevent overlay clicks on asynchronous requests
      //---- Commonly used for AJAX modules that are clicked by button
      //Scroll Reveal
      if (settings.scrollReveal) {
        if (UixModuleInstance.SCROLL_REVEAL) UixModuleInstance.SCROLL_REVEAL.documentReady($);
      }

      //Posts List With Ajax
      if (settings.ajaxPostList) {
        if (UixModuleInstance.POST_LIST_AJAX) UixModuleInstance.POST_LIST_AJAX.documentReady($);
      }

      //Dynamic Drop Down List from JSON
      if (settings.ajaxDDList) {
        if (UixModuleInstance.DYNAMIC_DD_LIST) UixModuleInstance.DYNAMIC_DD_LIST.documentReady($);
      }

      //Counter
      if (settings.counterAnim) {
        if (UixModuleInstance.COUNTER) UixModuleInstance.COUNTER.documentReady($);
      }

      //Custom Lightbox
      if (settings.lightBox) {
        if (UixModuleInstance.LIGHTBOX) UixModuleInstance.LIGHTBOX.pageLoaded();
      }

      //----Uix Shortcodes (WordPress Plugin)
      if ($.isFunction($.uix_sc_init)) {
        $.uix_sc_init();
      }
    });
  };
})(jQuery);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/fn/UixApplyAsyncAllScripts.js
/*
 * Apply all the asynchronism scripts
 *
 * @global
 * @description This function can be used separately in HTML pages or custom JavaScript.
 * @param  {Boolean} runAll          - Run all module scripts.
 * @return {Void}
 *
 * @Usage:
    
<script>
( function( $ ) {
"use strict";
    $( document ).ready( function() {
		$( document ).UixApplyAsyncAllScripts();
    } );
} ) ( jQuery );
</script>
	

 *
 * 
 */

(function ($) {
  'use strict';

  $.fn.UixApplyAsyncAllScripts = function (options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      runAll: true
    }, options);
    this.each(function () {
      var scipts_pageLoaded = UixModuleInstance.components.pageLoaded,
        scipts_documentReady = UixModuleInstance.components.documentReady;
      if (settings.runAll) {
        for (var i = 0; i < scipts_pageLoaded.length; i++) {
          scipts_pageLoaded[i]();
        }
        for (var j = 0; j < scipts_documentReady.length; j++) {
          scipts_documentReady[j]($);
        }
      }

      //Uix Shortcodes
      if ($.isFunction($.uix_sc_init)) {
        $.uix_sc_init();
      }
    });
  };
})(jQuery);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/modules/body-and-header.js
function body_and_header_typeof(o) { "@babel/helpers - typeof"; return body_and_header_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, body_and_header_typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == body_and_header_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != body_and_header_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != body_and_header_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/* 
 *************************************
 * <!-- Body And Header -->
 *************************************
 */

var BODY_AND_HEADER = function (module, $, window, document) {
  if (window.BODY_AND_HEADER === null) return false;
  module.BODY_AND_HEADER = module.BODY_AND_HEADER || {};
  module.BODY_AND_HEADER.version = '0.0.7';
  module.BODY_AND_HEADER.documentReady = function ($) {
    //Prevent this module from loading in other pages
    if ($('body').hasClass('onepage')) return false;
    var $window = $(window);
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

    //-------- Header initialize
    headerInit(windowWidth);
    $window.on('resize', function () {
      // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
      if (window.innerWidth != windowWidth) {
        // Update the window width for next time
        windowWidth = window.innerWidth;

        // Do stuff here
        headerInit(windowWidth);
      }
    });
    function headerInit(w) {
      var $headerPlaceholder = $('.uix-header__placeholder.js-uix-header__placeholder-autoheight');
      if (w > 768) {
        $headerPlaceholder.css('height', $('.uix-header__container').outerHeight(true) + 'px');
        $('body').removeClass('is-mobile');
      } else {
        $headerPlaceholder.css('height', 0);
        $('body').addClass('is-mobile');
      }
    }

    //-------- Sticky header area
    //Note: Don't use Waypoint, because the Offset is wrong on calculating height of fixed element
    var $el = $('.uix-header__container, .uix-header__placeholder');
    $window.off('scroll.BODY_AND_HEADER touchmove.BODY_AND_HEADER').on('scroll.BODY_AND_HEADER touchmove.BODY_AND_HEADER', function () {
      var scrolled = $(this).scrollTop(),
        spyTop = 220;
      if (scrolled >= spyTop) {
        $el.addClass('is-fixed');
      } else {
        $el.removeClass('is-fixed');
      }
    });
  };
  module.components.documentReady.push(module.BODY_AND_HEADER.documentReady);
  return /*#__PURE__*/_createClass(function BODY_AND_HEADER() {
    _classCallCheck(this, BODY_AND_HEADER);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/modules/common-height.js
function common_height_typeof(o) { "@babel/helpers - typeof"; return common_height_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, common_height_typeof(o); }
function common_height_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, common_height_toPropertyKey(o.key), o); } }
function common_height_createClass(e, r, t) { return r && common_height_defineProperties(e.prototype, r), t && common_height_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function common_height_toPropertyKey(t) { var i = common_height_toPrimitive(t, "string"); return "symbol" == common_height_typeof(i) ? i : i + ""; }
function common_height_toPrimitive(t, r) { if ("object" != common_height_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != common_height_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function common_height_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/* 
 *************************************
 * <!-- Common Height -->
 
 *
 * Note: 
 *
 * Automatically sets the div height of the grid system to the height of the 
 * outer container when ".js-uix-common-height" class on ".row" or ".uix-core-grid__row" div.
 *
 *************************************
 */

var COMMON_HEIGHT = function (module, $, window, document) {
  if (window.COMMON_HEIGHT === null) return false;
  module.COMMON_HEIGHT = module.COMMON_HEIGHT || {};
  module.COMMON_HEIGHT.version = '0.0.3';
  module.COMMON_HEIGHT.pageLoaded = function () {
    var $window = $(window);
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;
    commonHeightInit(windowWidth);
    $window.on('resize', function () {
      // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
      if (window.innerWidth != windowWidth) {
        // Update the window width for next time
        windowWidth = window.innerWidth;

        // Do stuff here
        commonHeightInit(windowWidth);
      }
    });
    function commonHeightInit(w) {
      $('.js-uix-common-height').each(function () {
        var $this = $(this);
        var element = $this;
        var selectors = '[class*=col-], [class*=uix-core-grid__col-]'; //Bootstrap grid system and Custom uix grid system
        var maxHeight = 0;

        // Select and loop the elements you want to equalise
        element.children(selectors).each(function () {
          var element = $(this);

          //Solve the problem that the image cannot be read accurately
          element.find('img').each(function () {
            var imgOuter = $(this).parent('a').css('display');
            if (imgOuter == 'inline') {
              $(this).parent('a').css('display', 'inline-block');
            }
          });
          if (element.hasClass('max-height')) {
            // if has max-height
            maxHeight = element.outerHeight();
          } else {
            // if this box is higher than the cached highest then store it
            if (element.height() > maxHeight) {
              maxHeight = element.outerHeight();
            }
          }
        });

        // Set the height of all those children to whichever was highest 
        if (w > 768) {
          element.children(selectors).each(function () {
            $(this).css('height', maxHeight);
          });
        } else {
          element.children(selectors).each(function () {
            $(this).css('height', 'auto');
          });
        }
      });
    }
  };
  module.components.pageLoaded.push(module.COMMON_HEIGHT.pageLoaded);
  return /*#__PURE__*/common_height_createClass(function COMMON_HEIGHT() {
    common_height_classCallCheck(this, COMMON_HEIGHT);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/modules/custom-data-attrs.js
function custom_data_attrs_typeof(o) { "@babel/helpers - typeof"; return custom_data_attrs_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, custom_data_attrs_typeof(o); }
function custom_data_attrs_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, custom_data_attrs_toPropertyKey(o.key), o); } }
function custom_data_attrs_createClass(e, r, t) { return r && custom_data_attrs_defineProperties(e.prototype, r), t && custom_data_attrs_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function custom_data_attrs_toPropertyKey(t) { var i = custom_data_attrs_toPrimitive(t, "string"); return "symbol" == custom_data_attrs_typeof(i) ? i : i + ""; }
function custom_data_attrs_toPrimitive(t, r) { if ("object" != custom_data_attrs_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != custom_data_attrs_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function custom_data_attrs_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/* 
 *************************************
 * <!-- Get all custom attributes of an element like "data-*" -->
 *************************************
 */

/**
 * module.GET_CUSTOM_ATTRS
 * 
 * @requires ./src/components/ES5/_plugins-Miscellaneous
 */


var GET_CUSTOM_ATTRS = function (module, $, window, document) {
  if (window.GET_CUSTOM_ATTRS === null) return false;
  module.GET_CUSTOM_ATTRS = module.GET_CUSTOM_ATTRS || {};
  module.GET_CUSTOM_ATTRS.version = '0.0.1';
  module.GET_CUSTOM_ATTRS.documentReady = function ($) {
    $('[data-my-custom-datas]').each(function () {
      var $this = $(this);

      //Get all attributes of an element and push the new attributes like "data-*"
      var curAttrs = $this.attr(),
        customPostData = '';
      $.each(curAttrs, function (i, val) {
        if (i.indexOf('data-custom-field-') >= 0) {
          customPostData += '"' + i.replace('data-custom-field-', '') + '": ' + '"' + val + '", ';
        }
      });
      customPostData = customPostData.replace(/,\s*$/, '');
    });
  };
  module.components.documentReady.push(module.GET_CUSTOM_ATTRS.documentReady);
  return /*#__PURE__*/custom_data_attrs_createClass(function GET_CUSTOM_ATTRS() {
    custom_data_attrs_classCallCheck(this, GET_CUSTOM_ATTRS);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
// EXTERNAL MODULE: ./src/components/ES6/_global/js/fn/UixParallax.js
var UixParallax = __webpack_require__(500);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/modules/set-background.js
function set_background_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, set_background_toPropertyKey(o.key), o); } }
function set_background_createClass(e, r, t) { return r && set_background_defineProperties(e.prototype, r), t && set_background_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function set_background_toPropertyKey(t) { var i = set_background_toPrimitive(t, "string"); return "symbol" == set_background_typeof(i) ? i : i + ""; }
function set_background_toPrimitive(t, r) { if ("object" != set_background_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != set_background_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function set_background_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function set_background_typeof(o) { "@babel/helpers - typeof"; return set_background_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, set_background_typeof(o); }
/* 
 *************************************
 * <!-- Specify a background image -->
 *************************************
 */


var SET_BG = function (module, $, window, document) {
  if (window.SET_BG === null) return false;
  module.SET_BG = module.SET_BG || {};
  module.SET_BG.version = '0.0.6';
  module.SET_BG.documentReady = function ($) {
    var $window = $(window);
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

    //  Initialize
    setBGInit(windowWidth, windowHeight);
    $window.on('resize', function () {
      // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
      if (window.innerWidth != windowWidth) {
        // Update the window width for next time
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        // Do stuff here
        setBGInit(windowWidth, windowHeight);
      }
    });

    /*
     * Initialize background using "data-bg" attribute.
     *
     * @param  {Number} w         - Returns width of browser viewport
     * @param  {Number} h         - Returns height of browser viewport
     * @return {Void}
     */
    function setBGInit(w, h) {
      $('[data-bg]').each(function () {
        var $this = $(this);
        var config = $this.data('bg');
        if (set_background_typeof(config) === ( true ? "undefined" : 0)) {
          config = {
            "src": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            "position": "top left",
            "size": "cover",
            "repeat": "no-repeat",
            "fill": false,
            "parallax": 0,
            "transition": "none 0s ease 0s",
            "move": false // {"dir":"left","duration":"10s","easing":"linear","loop":true}
          };
        }
        if (config) {
          var dataImg = config.src,
            dataPos = config.position,
            dataSize = config.size,
            dataRepeat = config.repeat,
            dataEasing = config.transition,
            dataParallax = config.parallax,
            dataMove = config.move;
          if (set_background_typeof(dataPos) === ( true ? "undefined" : 0)) dataPos = 'top left';
          if (set_background_typeof(dataSize) === ( true ? "undefined" : 0)) dataSize = 'cover';
          if (set_background_typeof(dataRepeat) === ( true ? "undefined" : 0)) dataRepeat = 'no-repeat';
          if (set_background_typeof(dataEasing) === ( true ? "undefined" : 0)) dataEasing = 'none 0s ease 0s';
          if (set_background_typeof(dataMove) === ( true ? "undefined" : 0)) dataMove = false;

          //Using parallax
          if (dataParallax && set_background_typeof(dataParallax) != ( true ? "undefined" : 0) && dataParallax != 0) {
            dataPos = dataPos.replace('top', '50%');
          }

          //background animation
          var moveAnim = 'none',
            moveAnimLoop = 'infinite',
            moveEasing = 'linear',
            moveKeyframesTop = '@keyframes js-uix-cssanim--move-t{from{background-position:0 0;}to{background-position:0 -19999px;}',
            moveKeyframesBottom = '@keyframes js-uix-cssanim--move-b{from{background-position:0 0;}to{background-position:0 19999px;}',
            moveKeyframesLeft = '@keyframes js-uix-cssanim--move-l{from{background-position:0 0;}to{background-position:-19999px 0;}',
            moveKeyframesRight = '@keyframes js-uix-cssanim--move-r{from{background-position:0 0;}to{background-position:19999px 0;}';
          if (dataMove && Object.prototype.toString.call(dataMove) == '[object Object]') {
            if (!dataMove.loop) moveAnimLoop = '1 forwards';
            dataPos = '0 0';
            switch (dataMove.dir) {
              case 'top':
                moveAnim = 'js-uix-cssanim--move-t ' + parseInt(dataMove.speed) + 's ' + moveEasing + ' ' + moveAnimLoop;
                break;
              case 'bottom':
                moveAnim = 'js-uix-cssanim--move-b ' + parseInt(dataMove.speed) + 's ' + moveEasing + ' ' + moveAnimLoop;
                break;
              case 'left':
                moveAnim = 'js-uix-cssanim--move-l ' + parseInt(dataMove.speed) + 's ' + moveEasing + ' ' + moveAnimLoop;
                break;
              case 'right':
                moveAnim = 'js-uix-cssanim--move-r ' + parseInt(dataMove.speed) + 's ' + moveEasing + ' ' + moveAnimLoop;
                break;
            }

            //  CSS3 animation keyframe attributes inline
            if ($('#js-uix-cssanim--move-t').length == 0) {
              $('<style id="js-uix-cssanim--move-t">').text(moveKeyframesTop).appendTo('head');
            }
            if ($('#js-uix-cssanim--move-b').length == 0) {
              $('<style id="js-uix-cssanim--move-b">').text(moveKeyframesBottom).appendTo('head');
            }
            if ($('#js-uix-cssanim--move-l').length == 0) {
              $('<style id="js-uix-cssanim--move-l">').text(moveKeyframesLeft).appendTo('head');
            }
            if ($('#js-uix-cssanim--move-r').length == 0) {
              $('<style id="js-uix-cssanim--move-r">').text(moveKeyframesRight).appendTo('head');
            }
          }

          //-----
          if (set_background_typeof(dataImg) != ( true ? "undefined" : 0) && dataImg != '') {
            if (config.fill) {
              //Show Image Under Text
              if (Modernizr.cssanimations) {
                $this.css({
                  'background': 'url(' + dataImg + ') ' + dataRepeat + '',
                  'background-size': dataSize,
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                  'animation': moveAnim
                });
              }
            } else {
              $this.css({
                'background-image': 'url(' + dataImg + ')',
                'background-position': dataPos,
                'background-size': dataSize,
                'background-repeat': dataRepeat,
                'animation': moveAnim
              });
            }

            //Using parallax
            if (dataParallax && set_background_typeof(dataParallax) != ( true ? "undefined" : 0) && dataParallax != 0) {
              $this.UixParallax({
                'speed': dataParallax,
                transition: dataEasing,
                'bg': {
                  enable: true,
                  xPos: '50%'
                }
              });
            }
          }
        }
      });
    }
  };
  module.components.documentReady.push(module.SET_BG.documentReady);
  return /*#__PURE__*/set_background_createClass(function SET_BG() {
    set_background_classCallCheck(this, SET_BG);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/_global/js/modules/videos.js
function videos_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, videos_toPropertyKey(o.key), o); } }
function videos_createClass(e, r, t) { return r && videos_defineProperties(e.prototype, r), t && videos_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function videos_toPropertyKey(t) { var i = videos_toPrimitive(t, "string"); return "symbol" == videos_typeof(i) ? i : i + ""; }
function videos_toPrimitive(t, r) { if ("object" != videos_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != videos_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function videos_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function videos_typeof(o) { "@babel/helpers - typeof"; return videos_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, videos_typeof(o); }
/* 
 *************************************
 * <!-- Videos -->
 *************************************
 */

var VIDEOS = function (module, $, window, document) {
  if (window.VIDEOS === null) return false;
  module.VIDEOS = module.VIDEOS || {};
  module.VIDEOS.version = '0.1.3';
  module.VIDEOS.documentReady = function ($) {
    var $window = $(window);
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight;

    /* 
     ---------------------------
     Video Embed
     ---------------------------
     */
    $('.uix-video').each(function () {
      var $this = $(this);
      var curVideoID = $this.find('video').attr('id'),
        coverPlayBtnID = 'videocover-' + curVideoID,
        videoWrapperW = $this.closest('[data-embed-video-wrapper]').width();
      var dataAuto = $this.data('embed-video-autoplay'),
        dataLoop = $this.data('embed-video-loop'),
        dataControls = $this.data('embed-video-controls'),
        dataW = $this.data('embed-video-width'),
        dataH = $this.data('embed-video-height');

      //Push a new ID to video
      //Solve the problem that ajax asynchronous loading does not play
      $this.find('.video-js').attr('id', curVideoID);
      if (videos_typeof(dataAuto) === ( true ? "undefined" : 0)) {
        dataAuto = true;
      }
      if (videos_typeof(dataLoop) === ( true ? "undefined" : 0)) {
        dataLoop = true;
      }
      if (videos_typeof(dataControls) === ( true ? "undefined" : 0)) {
        dataControls = false;
      }
      if (videos_typeof(dataW) === ( true ? "undefined" : 0) || dataW == 'auto') {
        dataW = videoWrapperW;
      }
      if (videos_typeof(dataH) === ( true ? "undefined" : 0) || dataH == 'auto') {
        dataH = videoWrapperW / 1.77777777777778;
      }

      //Display cover and play buttons when some mobile device browsers cannot automatically play video
      if ($('#' + coverPlayBtnID).length == 0) {
        $('<div id="' + coverPlayBtnID + '" class="uix-video__cover"><span class="uix-video__cover__placeholder" style="background-image:url(' + $this.find('video').attr('poster') + ')"></span><span class="uix-video__cover__playbtn"></span></div>').insertBefore($this);
        var btnEv = Modernizr.touchevents ? 'touchstart' : 'click';
        $('#' + coverPlayBtnID + ' .uix-video__cover__playbtn').on(btnEv, function (e) {
          e.preventDefault();
          myPlayer.play();
          $('#' + coverPlayBtnID).hide();
        });

        //Prevent some devices from automatically playing video and trigger with buttons
        if (!dataAuto || browser.isAndroid) {
          $('#' + coverPlayBtnID + ' .uix-video__cover__playbtn').show();
        }
      }

      /* ---------  HTML5 video autoplay on mobile revisited  */
      if (windowWidth <= 768) {
        $this.find('.video-js').attr({
          'playsinline': 'true'
        });
      }
      var myPlayer = videojs(curVideoID, {
        width: dataW,
        height: dataH,
        loop: dataLoop,
        autoplay: dataAuto
      }, function onPlayerReady() {
        var initVideo = function initVideo(obj) {
          //Get Video Dimensions
          var curW = obj.videoWidth(),
            curH = obj.videoHeight(),
            newW = curW,
            newH = curH;
          newW = videoWrapperW;

          //Scaled/Proportional Content 
          newH = curH * (newW / curW);
          if (!isNaN(newW) && !isNaN(newH)) {
            obj.height(newH);
            obj.width(newW);
          }

          //Show this video wrapper
          $this.css('visibility', 'visible');

          //Hide loading effect
          $this.find('.vjs-loading-spinner, .vjs-big-play-button').hide();
        };
        initVideo(this);

        /* ---------  Video initialize */
        this.on('loadedmetadata', function () {
          initVideo(this);
        });

        /* ---------  Set, tell the player it's in fullscreen  */
        if (dataAuto) {
          this.muted(true); //Fix an error of Video auto play is not working in browser
          this.play();
        }

        /* ---------  Disable control bar play button click */
        if (!dataControls) {
          this.controls(false);
        }

        /* ---------  Determine if the video is auto played from mobile devices  */
        var autoPlayOK = false;
        this.on('timeupdate', function () {
          var duration = this.duration();
          if (duration > 0) {
            autoPlayOK = true;
            if (this.currentTime() > 0) {
              autoPlayOK = true;
              this.off('timeupdate');

              //Hide cover and play buttons when the video automatically played
              $('#' + coverPlayBtnID).hide();
            }
          }
        });
      });
    });

    /* 
     ---------------------------
     Video Popup Interaction
     ---------------------------
     */
    var modalDialogTrigger = '[data-video-win]';

    //Add video container
    $(modalDialogTrigger).each(function () {
      var $this = $(this);
      var videoSrcIfm = '',
        videoSrcMp4 = $this.data('video-mp4'),
        videoSrcWebm = $this.data('video-webm'),
        videoSrcOgv = $this.data('video-ogv'),
        videoPoster = $this.data('video-poster'),
        videoContainerMid = $this.data('modal-id'),
        videoContainerVid = videoContainerMid + '--videopush';
      if (videos_typeof(videoSrcMp4) === ( true ? "undefined" : 0)) {
        videoSrcMp4 = '';
      }
      if (videos_typeof(videoSrcWebm) === ( true ? "undefined" : 0)) {
        videoSrcWebm = '';
      }
      if (videos_typeof(videoSrcOgv) === ( true ? "undefined" : 0)) {
        videoSrcOgv = '';
      }
      if ($this.find('[data-video-iframe]').length > 0) {
        videoSrcIfm = $this.find('[data-video-iframe]').html();
      }

      //Add modal dialog
      if ($('#' + videoContainerMid).length == 0) {
        var v = '',
          vmp4 = '',
          vwebm = '',
          vogv = '';
        if (videoSrcMp4 != '') {
          vmp4 = '<source src="' + videoSrcMp4 + '" type="video/mp4">';
        }
        if (videoSrcWebm != '') {
          vwebm = '<source src="' + videoSrcWebm + '" type="video/webm">';
        }
        if (videoSrcOgv != '') {
          vogv = '<source src="' + videoSrcOgv + '" type="video/ogv">';
        }
        v += '<div class="uix-modal-box is-fullscreen is-video" role="dialog" tabindex="-1" aria-hidden="true" id="' + videoContainerMid + '">';
        v += '<button type="button" class="uix-modal-box__close" data-modal-close-trigger="true"></button>';
        v += '<div class="uix-modal-box__content" role="document">';
        v += '<div class="uix-modal-box__video-waiting"></div><div class="uix-modal-box__video-container" data-video-player-init="0">';
        if ($this.find('[data-video-iframe]').length > 0 && videoSrcIfm != '') {
          //If iframe
          v += '<div id="' + videoContainerVid + '" class="embed-responsive embed-responsive-16by9">';
          v += videoSrcIfm;
          v += '</div>';
        } else {
          //If local video
          v += '<video id="' + videoContainerVid + '" class="video-js vjs-default-skin" controls poster="' + videoPoster + '">';
          v += vmp4 + vwebm + vogv;
          v += '</video>';
        }
        v += '</div>';
        v += '</div>';
        v += '</div>';

        //Wait until previous .append() is complete
        $(v).appendTo('body');
      }
    });

    //Check out: http://docs.videojs.com/tutorial-player-workflows.html
    $(document).off('click.VIDEOS').on('click.VIDEOS', modalDialogTrigger, function () {
      var vid = $(this).data('modal-id') + '--videopush',
        newMaxW = windowWidth - 80,
        newMaxH = windowHeight - 80,
        $vContainer = $('#' + vid).closest('.uix-modal-box__video-container'),
        $vLoader = $vContainer.prev('.uix-modal-box__video-waiting'),
        myPlayerInit = $vContainer.data('video-player-init');
      var $ifm = false;

      //----- Hidden/Display the wrapper of video
      var displayVC = function displayVC() {
        TweenMax.set($vContainer, {
          alpha: 1
        });
        $vLoader.removeClass('is-active');
      };
      var hiddenVC = function hiddenVC() {
        TweenMax.set($vContainer, {
          alpha: 0
        });
        $vLoader.addClass('is-active');
      };

      //----- Embed iframe
      if ($('#' + vid).find('iframe').length > 0) {
        $ifm = $('#' + vid).find('iframe');
      } else {
        hiddenVC();
      }
      if ($ifm && videos_typeof($ifm) === 'object') {
        if ($ifm.length > 0) {
          var curW = $ifm.width(),
            curH = $ifm.height(),
            newW = curW,
            newH = curH;
          if (curH > newMaxH) {
            newH = newMaxH;

            //Scaled/Proportional Content 
            newW = curW * (newH / curH);
          }
          if (newW > newMaxW) {
            newW = newMaxW;

            //Scaled/Proportional Content 
            newH = curH * (newW / curW);
          }
          $ifm.css({
            'left': (newMaxW - newW) / 2 + 'px',
            'top': (newMaxH - newH) / 2 + 'px',
            'height': newH + 'px',
            'width': newW + 'px'
          });
          if (windowWidth <= 768) {
            $ifm.css({
              'top': 0
            }).parent('.embed-responsive').css({
              'top': (newMaxH - newH) / 2 + 'px'
            });
          }
        }
        return false;
      }

      //----- HTML5 video autoplay on mobile revisited
      if (windowWidth <= 768) {
        $('#' + vid).attr({
          'playsinline': 'true'
        });
      }

      //----- Embed local video
      var myPlayer = videojs(vid, {
        width: 1,
        height: 1,
        autoplay: true,
        loop: true
      }, function onPlayerReady() {
        var initVideo = function initVideo(obj) {
          //Get Video Dimensions
          var curW = obj.videoWidth(),
            curH = obj.videoHeight(),
            newW = curW,
            newH = curH;

          //Resise modal
          if (curH > newMaxH) {
            newH = newMaxH;

            //Scaled/Proportional Content 
            newW = curW * (newH / curH);
          }
          if (newW > newMaxW) {
            newW = newMaxW;

            //Scaled/Proportional Content 
            newH = curH * (newW / curW);
          }
          obj.height(newH);
          obj.width(newW);

          //In order to allow CSS to support video centering
          $vContainer.find(' > div.video-js').css({
            'width': newW + 'px'
          });

          //Vertically center the video area
          var mt = parseFloat(windowHeight - newH) / 2 - 50;
          $vContainer.css({
            'transform': 'translateY(' + mt + 'px)'
          });

          //Display the wrapper of video
          displayVC();
        };
        initVideo(this);

        /* ---------  Video Modal initialize */
        this.on('loadedmetadata', function () {
          initVideo(this);

          //If a player instance has already been created for this variable.
          $vContainer.data('video-player-init', 1);
        });

        /* ---------  Set, tell the player it's in fullscreen  */
        //this.exitFullscreen();
        //this.requestFullscreen();
        this.play();

        /* ---------  Disable control bar play button click */
        //this.controls( false );

        /* ---------  Display video playback progress  */
        this.on('timeupdate', function () {
          var duration = this.duration(),
            progressAmount = '0%';
          if (duration > 0) {
            progressAmount = this.currentTime() / duration * 100 + "%";
          }

          //console.log( progressAmount );
        });

        /* ---------  Callback for when a video has ended */
        this.on('ended', function () {
          //console.log( 'video is done!' );
        });
      });

      /* ---------  Display the wrapper of video  */
      if (myPlayerInit === 1) {
        displayVC();
      }

      /* ---------  Close the modal  */
      $(document).off('click.VIDEOS_CLOSE').on('click.VIDEOS_CLOSE', '.uix-modal-box [data-modal-close-trigger], .uix-modal-mask:not(.js-uix-disabled)', function () {
        myPlayer.ready(function () {
          this.pause();
        });
      });
    });
  };
  module.components.documentReady.push(module.VIDEOS.documentReady);
  return /*#__PURE__*/videos_createClass(function VIDEOS() {
    videos_classCallCheck(this, VIDEOS);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/fragment-atmosphere.glsl
/* harmony default export */ const fragment_atmosphere = ("#define GLSLIFY 1\nuniform float c;\nuniform float p;\nvarying vec3 vNormal;\nvoid main() \n{\n    float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p ); \n    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;\n}");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/vertex-atmosphere.glsl
/* harmony default export */ const vertex_atmosphere = ("#define GLSLIFY 1\nvarying vec3 vNormal;\nvoid main() \n{\n    vNormal = normalize( normalMatrix * normal );\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/fragment-line.glsl
/* harmony default export */ const fragment_line = ("#define GLSLIFY 1\n  uniform vec3 diffuse;\n  uniform float opacity;\n  uniform float time; // added time uniform\n\n  uniform float dashSize;\n  uniform float gapSize;\n  uniform float dotSize;\n  varying float vLineDistance;\n\n  void main() {\n    float totalSize = dashSize + gapSize;\n    float modulo = mod( vLineDistance + time, totalSize ); // time added to vLineDistance\n    float dotDistance = dashSize + (gapSize * .5) - (dotSize * .5);\n\n    if ( modulo > dashSize && mod(modulo, dotDistance) > dotSize ) {\n      discard;\n    }\n\n    gl_FragColor = vec4( diffuse, opacity );\n  }");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/vertex-line.glsl
/* harmony default export */ const vertex_line = ("#define GLSLIFY 1\n  attribute float lineDistance;\n  varying float vLineDistance;\n\n  void main() {\n    vLineDistance = lineDistance;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n  }");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/fragment-grid.glsl
/* harmony default export */ const fragment_grid = ("#define GLSLIFY 1\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4(vColor, 1.);\n}     ");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/vertex-grid.glsl
/* harmony default export */ const vertex_grid = ("#define GLSLIFY 1\nuniform float time;\nuniform vec2 limits;\nuniform float speed;\nattribute float moveable;\nvarying vec3 vColor;\nvoid main() {\n    vColor = color;\n    float limLen = limits.y - limits.x;\n    vec3 pos = position;\n    if (floor(moveable + 0.5) > 0.5) {\n        float dist = speed * time;\n        float currPos = mod((pos.z + dist) - limits.x, limLen) + limits.x;\n        pos.z = currPos;\n    }\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/fragment-distortion.glsl
/* harmony default export */ const fragment_distortion = ("#define GLSLIFY 1\n uniform sampler2D uTexture;\n uniform float uAlpha;\n uniform vec2 uOffset;\n\n varying vec2 vUv;\n\n vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offset) {\n   float r = texture2D(uTexture,vUv + 0.0).r;\n   vec2 gb = texture2D(uTexture,vUv).gb;\n   return vec3(r,gb);\n }\n\n void main() {\n   vec3 color = rgbShift(uTexture,vUv,uOffset);\n   gl_FragColor = vec4(color,uAlpha);\n }   ");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/vertex-distortion.glsl
/* harmony default export */ const vertex_distortion = ("#define GLSLIFY 1\n uniform vec2 uOffset;\n varying vec2 vUv;\n\n #define M_PI 3.1415926535897932384626433832795\n\n vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {\n   position.x = position.x + (sin(uv.y * M_PI) * offset.x);\n   position.y = position.y + (sin(uv.x * M_PI) * offset.y);\n   return position;\n }\n\n void main() {\n   vUv = uv;\n   vec3 newPosition = deformationCurve(position, uv, uOffset);\n   gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n }");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/fragment-glow.glsl
/* harmony default export */ const fragment_glow = ("#define GLSLIFY 1\nvarying vec3 vNormal;\nvoid main() \n{\n\tfloat intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 ); \n    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;\n}");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/shader/vertex-glow.glsl
/* harmony default export */ const vertex_glow = ("#define GLSLIFY 1\nvarying vec3 vNormal;\nvoid main() \n{\n    vNormal = normalize( normalMatrix * normal );\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}");
;// CONCATENATED MODULE: ./src/components/ES6/_main/js/index.js
function js_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, js_toPropertyKey(o.key), o); } }
function js_createClass(e, r, t) { return r && js_defineProperties(e.prototype, r), t && js_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function js_toPropertyKey(t) { var i = js_toPrimitive(t, "string"); return "symbol" == js_typeof(i) ? i : i + ""; }
function js_toPrimitive(t, r) { if ("object" != js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function js_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function js_typeof(o) { "@babel/helpers - typeof"; return js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, js_typeof(o); }
/* 
 *************************************
 * <!-- Theme Scripts  -->
 *************************************
 */




// shaders  










var MAIN = function (module, $, window, document) {
  if (window.MAIN === null) return false;
  module.MAIN = module.MAIN || {};
  module.MAIN.version = '0.0.1';
  module.MAIN.documentReady = function ($) {
    if ($('body').hasClass('page')) return false;

    // Event Status
    //-------------------------------------	  
    var __statusSceneMove = false; // scene move
    var __statusLoaderRemoveStart = false; // Loader remove start
    var __statusLoaderRemoveEnd = false; // Loader remove end
    var __statusLoaderParticleSystemMove = true; // Loader particle system
    var __statusSceneClickEnable = false; // enable scene click
    var __statusBallsAnimEnable = false; // Balls Animation enable
    var __statusBallsMove = false; //Balls position animation
    var __statusBallsRestore = false; // Balls position restore
    var __statusAudioAnimEnable = false; // audio wave line
    var __statusLightMove = true; // light position
    var __statusTetrahedronParticleMove = false; // tetrahedron particle
    var __statusDisableMouseClickEvent = false; // Disable any MOUSE CLICK completely
    var __statusNavBallClicked = false; //Ball of navigation clicked
    var __statusBackCircleEnable = false; //circle of back interaction
    var __statusWorksSpritesMove = true; //Works Sprites Move

    // Disable devices scaling
    //-------------------------------------	
    document.addEventListener('touchstart', function (e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    });
    var lastTouchEnd = 0;
    document.addEventListener('touchend', function (e) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, false);

    // Disable any MOUSE CLICK completely
    //-------------------------------------	
    var mouseOverlay = '#app-mouse-overlay';
    if ($(mouseOverlay).length == 0) {
      $('body').prepend('<div id="app-mouse-overlay" style="background-color: rgba(1, 1, 1, 0);bottom: 0;left: 0;position: fixed;right: 0;top: 0;z-index: 999999999;width: 100vw; height: 100vh;display: none;"></div>');
    }
    var disableMouseClickEvent = function disableMouseClickEvent() {
      __statusDisableMouseClickEvent = true;
      $(mouseOverlay).show();

      //disable all click events on page
      var handler = function handler(e) {
        e.stopPropagation();
        e.preventDefault();
      };
      document.addEventListener("pointerdown", handler, true);
      setTimeout(function () {
        $(mouseOverlay).hide();
        document.removeEventListener("pointerdown", handler, true);
        __statusDisableMouseClickEvent = false;
      }, 3000);
    };

    // Disable right click
    //-------------------------------------	
    document.addEventListener('contextmenu', function (event) {
      return event.preventDefault();
    });

    // 
    //-------------------------------------	
    // Static constant (not THREE.js)

    //circle of loader
    var loaderCircleID = '.app-cursor .app-cursor__progress svg.dot circle',
      loaderMorphCircleFromID = '.app-cursor .app-cursor__progress svg.circle path',
      loaderMorphCircleToID = '.app-cursor .app-cursor__progress svg.arrow path';

    //core loader progress
    var loaderProgressID = '.app-loader-progress',
      loaderProgressCounterID = '.app-loader-progress__counter';

    //audio icons
    var loaderHeadphone = '.app-loader-headphone';

    // enter button
    var enterBtnID = '.app-enter-btn';

    // brand
    var brandID = '.uix-brand';

    //navigation
    var navID = '.app-topnav__wrapper';

    // Scrolling Content
    var scrollingText = '.app-scrolling-textbox__wrapper',
      scrollingTextItem = '.app-scrolling-textbox > p';

    // Text Animations
    var mainTextSliderID = '#app-screen-home',
      mainTextDescSliderID = '#app-screen-home .app-screen-home__desc';

    // main config
    var mainConfig = {
      "fonts": ["assets/fonts/fjalla-one/FjallaOne_Regular.json?ver=1", "assets/fonts/abeezee/ABeeZee_Regular.json?ver=1", "assets/fonts/almonte/Almonte_Regular.json?ver=1"],
      "models": ["assets/models/gltf/cave-webgl.glb?ver=1", "assets/models/gltf/brand.glb?ver=1", "assets/models/gltf/stone-anim.glb?ver=1", "assets/models/gltf/stone.glb?ver=1"],
      "textures": ["assets/textures/sprites/water-blue.jpg?ver=1", "assets/textures/sprites/water.jpg?ver=1", "assets/textures/sprites/ps_ball.png?ver=1", "assets/textures/sprites/metal.jpg?ver=1", "assets/textures/sprites/metal-env.jpg?ver=1", "assets/textures/sprites/planet4-black.jpg?ver=1", "assets/textures/sprites/mask.jpg?ver=1", "assets/textures/sprites/txt-bg.jpg?ver=1"],
      "audios": ["assets/audios/bg.ogg?ver=1", "assets/audios/enter-scene.ogg?ver=1", "assets/audios/btn-hover.ogg?ver=1"],
      "aboutTextures": ["assets/videos/about.mp4", "assets/videos/about2.mp4", "assets/videos/about3.mp4"]
    };

    // Circle of loader
    //-------------------------------------	
    //Initialize circle of loader progress
    function loaderCircleProgress(progress) {
      TweenMax.to(loaderCircleID, .5, {
        drawSVG: progress + '%' //Progress is represented by numbers
      });
    }

    //Hide circle of loader
    function loaderCircleHide() {
      TweenMax.to(loaderCircleID, 1, {
        scale: 0.1,
        x: 16,
        y: 16,
        fill: '#ffffff',
        ease: Power1.easeInOut
      });
    }

    //Reset circle of loader
    function loaderCircleReset() {
      TweenMax.set(loaderCircleID, {
        scale: 1,
        x: 0,
        y: 0,
        fill: 'rgba(255,255,255,0)',
        drawSVG: '0%',
        alpha: 1
      });
    }

    // Cursor
    //-------------------------------------	
    var $cursor = $('.app-cursor');
    function moveCursor(e) {
      //cursor position
      var _mx, _my;
      var touches = e.touches;
      if (touches && touches.length) {
        _mx = touches[0].clientX;
        _my = touches[0].clientY;
      } else {
        _mx = e.clientX;
        _my = e.clientY;
      }
      TweenMax.to($cursor, 0.2, {
        left: _mx,
        top: _my,
        ease: Power4.easeOut
      });

      //
      var timer;
      $cursor.addClass('is-moving');
      clearTimeout(timer);
      timer = setTimeout(function () {
        $cursor.removeClass('is-moving');
      }, 300);

      //
      if ($cursor.hasClass('is-down')) {
        $cursor.removeClass('is-down');
      }
    }
    function downCursor(e) {
      //cursor position
      var _mx, _my;
      var touches = e.touches;
      if (touches && touches.length) {
        _mx = touches[0].clientX;
        _my = touches[0].clientY;
      } else {
        _mx = e.clientX;
        _my = e.clientY;
      }
      TweenMax.to($cursor, 0.2, {
        left: _mx,
        top: _my,
        ease: Power4.easeOut
      });

      //class
      $cursor.addClass('is-down');
    }
    function upCursor(e) {
      //class
      $cursor.removeClass('is-down');
    }
    $(document).on('pointermove.CURSOR touchmove.CURSOR', moveCursor).on('pointerdown.CURSOR touchstart.CURSOR', downCursor).on('pointerup.CURSOR touchend.CURSOR', upCursor);

    //--- enter button interaction
    $(enterBtnID).on('pointerenter.CURSOR_ENTER', function () {
      $(loaderCircleID).parent().addClass('is-disabled');
      $(loaderMorphCircleFromID).parent().addClass('is-disabled');
      $(loaderMorphCircleToID).parent().addClass('is-active');
    }).on('pointerleave.CURSOR_ENTER', function () {
      $(loaderCircleID).parent().removeClass('is-disabled');
      $(loaderMorphCircleFromID).parent().removeClass('is-disabled');
      $(loaderMorphCircleToID).parent().removeClass('is-active');
    }).on('click.CURSOR_ENTER', function () {
      $cursor.addClass('is-down');
      $(loaderCircleID).parent().removeClass('is-disabled');
      $(loaderMorphCircleFromID).parent().removeClass('is-disabled');
      $(loaderMorphCircleToID).parent().removeClass('is-active').addClass('is-down');

      //---
      // 	
      // Disable any MOUSE CLICK completely
      disableMouseClickEvent();
    });

    // Main Stage
    //-------------------------------------	
    var MainStage = function () {
      var $window = $(window);
      var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight;
      var rendererCanvasID = 'app-main';

      // THREE PARAMS
      //-------------------------------------	
      var camera,
        scene,
        lightMove,
        lights = [],
        renderer;

      // Loader manager
      var loadingManager = new THREE.LoadingManager();
      loadingManager.onLoad = function () {
        //console.log( '▶▶▶▶▶ Loading complete! ◀◀◀◀◀◀' );
      };
      loadingManager.onProgress = function (item, loaded, total) {
        //console.log( '▶▶▶▶▶ LoadingManager ◀◀◀◀◀◀ ( item: '+item+', loaded: '+loaded+', total: '+total+')' );
      };
      loadingManager.onError = function (url) {
        console.log('▶▶▶▶▶ There was an error loading ◀◀◀◀◀◀  ' + url);
      };
      var loaderImage = new THREE.TextureLoader(loadingManager);
      var loaderModel = new THREE.GLTFLoader(loadingManager);
      var fontLoader = new THREE.FontLoader(loadingManager);
      loaderImage.crossOrigin = 'anonymous';
      loaderModel.crossOrigin = 'anonymous';
      fontLoader.crossOrigin = 'anonymous';

      // controls
      var mouseX = 0,
        mouseY = 0,
        windowHalfX = windowWidth / 2,
        windowHalfY = windowHeight / 2;
      var targetX = 0.0,
        targetY = 0.0,
        angle = 0.0,
        height = 0.0;
      var clock = new THREE.Clock();
      var time = 0;
      var scaleMin = 0.00000001;

      // noise
      var simplex = new SimplexNoise();

      //3D modal
      //---
      var modalObjMainCave = new THREE.Object3D(); //3d modal cave
      var modalObjSubBrand = new THREE.Object3D(); //3d modal brand
      var modalObjSubStone = new THREE.Object3D(); //3d modal stone
      var modalObjSubStoneForWorks = new THREE.Object3D(); //3d modal stone for works

      // cover of works
      var coverContainer = new THREE.Object3D();
      var coverLine, coverLine2;
      var coverLineTempTargetReference;

      // root background
      var skyBox;
      var backgroundBg = "#".concat(new THREE.Color().setHSL(0, 0, 0).getHexString());

      // Light from scene ready
      var sceneReadyForLightPlane, sceneReadyForSpotLight, sceneReadyForAmbientLight;

      // Loader
      var loaderSurrogateRings = new THREE.Object3D();
      var loaderRing;
      var loaderRingSleeve;
      var loaderParticleSystem = [];

      // scene filter
      var composer, hBlur, vBlur, colorEffect;

      // collision interaction
      var mouseVector = new THREE.Vector2();
      var raycaster = new THREE.Raycaster();
      var intersects,
        INTERSECTED,
        collisionElements = [];

      //collision interaction for works
      var intersects_works, INTERSECTED_WORKS;

      // Ball of navigation & Flying ball
      var ballOfNavGroup = new THREE.Object3D();
      var flyingBallGroup = new THREE.Object3D();
      var pinprickBallGroup = new THREE.Object3D();
      var glowAnimMaterial = new THREE.ShaderMaterial({
        uniforms: {
          "c": {
            type: "f",
            value: 2.5
          },
          "p": {
            type: "f",
            value: 14.0
          }
        },
        vertexShader: vertex_atmosphere,
        fragmentShader: fragment_atmosphere
      });
      var navBallAtoms = [],
        navBallLineAtoms = [],
        flyingBallAtoms = [],
        pinprickBallAtoms = [];

      // ball of navigation's destination position
      var destinationPosOfBallNav = null;

      // camera data
      var fieldOfView, aspectRatio, nearPlane, farPlane;
      var dist, vFOV, visibleHeight, visibleWidth;

      // balls fly effect
      var maxBallsZ = 15;
      var xLimit, yLimit;

      // ball of navigation
      var menuTotal = 3;

      // line
      var lineMat = new THREE.ShaderMaterial({
        uniforms: {
          diffuse: {
            value: new THREE.Color(0xffffff)
          },
          dashSize: {
            value: 1
          },
          gapSize: {
            value: 1
          },
          dotSize: {
            value: 0.15
          },
          opacity: {
            value: 0.8
          },
          time: {
            value: 0
          } // added uniform
        },
        fragmentShader: fragment_line,
        vertexShader: vertex_line,
        transparent: true
      });

      // menu background
      var menuBGGridDivision = 20;
      var menuBGGridLimit = 400;
      var menuBGGridMat;
      var menuBGGrid, menuBGGrid2;

      // audio wave line
      var audioPointCount = 21;
      var audioPoints = [],
        audioPlane,
        audioLine;

      // about sprites
      var aboutContainer;
      var uniformsAboutContainer;
      var aboutLine;

      // contact sprites
      var contactCirclePlane;
      var uniformsContactCirclePlane;
      var contactTrianglePlane;
      var uniformsContactTrianglePlane;

      //  works sprites
      var workMask, workDetailMask;
      var uniformsWorkMask, uniformsWorkDetailMask;
      var workLine;

      //Primary Menu Texts
      var menuTextFillContainer, menuTextStrokeContainer;
      var uniformsTxtFill_1, uniformsTxtFill_2, uniformsTxtFill_3, uniformsTxtStroke;

      // sound
      var soundBg;
      var soundBgSwitchID = '.app-sound-switch';

      // Tetrahedron particle
      var tetrahedronParticleTotal = 50;
      var tetrahedronParticleGroup = new THREE.Object3D();
      var tetrahedronParticleDefaultY;

      // Loader circle of back
      //-------------------------------------	
      //circle of back
      var backCircleID = '.app-cursor .app-cursor__progress svg.dot-back circle',
        backArrowID = '.app-cursor .app-cursor__progress svg.back';

      //cursor down interaction
      var backCircleTrigger = window.document;
      var pressHoldDuration = 60; //1s
      var timePressed = 0;
      var backCirclePress = false;
      backCircleTrigger.addEventListener("pointerdown", downCursorForBack, false);
      backCircleTrigger.addEventListener("pointerup", upCursorForBack, false);
      backCircleTrigger.addEventListener("touchstart", downCursorForBack, false);
      backCircleTrigger.addEventListener("touchend", upCursorForBack, false);
      function counterCursorForBack() {
        if (__statusBackCircleEnable) {
          if (backCirclePress) {
            timePressed++;
            updateProgressingCursorForBack();
          } else {
            timePressed = 0;

            //reset
            TweenMax.to(backCircleID, 0.5, {
              drawSVG: 0
            });
          }
        }
        requestAnimationFrame(counterCursorForBack);
      }
      counterCursorForBack();
      function downCursorForBack(e) {
        backCirclePress = true;
        e.preventDefault();
      }
      function upCursorForBack(e) {
        backCirclePress = false;
      }
      function updateProgressingCursorForBack() {
        //console.log("Timer tick!");

        if (__statusDisableMouseClickEvent) return;
        if (timePressed <= pressHoldDuration) {
          //animation of cursor
          if (__statusBackCircleEnable) {
            var perSize = timePressed * (100 / pressHoldDuration);

            //console.log( 'ms: ' + timePressed + ' | per: ' + perSize );

            TweenMax.set(backCircleID, {
              drawSVG: perSize
            });
          }
        } else {
          //Hide circle of back
          if (__statusBackCircleEnable) {
            backCircleHide();
          }

          //Scene Reset
          sceneReset();

          //Close all sections
          shotCloseAbout();
          shotCloseContact();
          shotCloseWorks();

          //update circle of back status
          __statusBackCircleEnable = false;
        }
      }

      //Initialize circle of back
      function backCircleReset() {
        $cursor.addClass('is-backbtn');
        $(loaderCircleID).parent().addClass('is-disabled');
        $(backCircleID).parent().removeClass('is-disabled');
        $(backArrowID).addClass('is-active').removeClass('is-down');
        TweenMax.set(backCircleID, {
          drawSVG: "0%"
        });
        TweenMax.to($cursor, 0.5, {
          scale: 1.5
        });
      }

      //Hide circle of back
      function backCircleHide() {
        $cursor.removeClass('is-backbtn');
        $(loaderCircleID).parent().removeClass('is-disabled');
        $(backCircleID).parent().addClass('is-disabled');
        $(backArrowID).removeClass('is-active').addClass('is-down');
        TweenMax.to($cursor, 0.5, {
          scale: 1
        });
      }

      // Navigation
      //-------------------------------------	
      var navEnterEvent = function navEnterEvent() {
        // Disable any MOUSE CLICK completely
        disableMouseClickEvent();

        //navigation
        menuToggle('open');

        //Ball of Navigation Control
        ballOfNavControl('close', -1);

        //hide brand
        $(brandID).removeClass('scene-end').addClass('scene-start');

        //hide navigation
        $(navID).removeClass('scene-end').addClass('scene-start');
      };
      var navTimeline = new TimelineMax();
      $(navID + ' > a').on('pointerenter', function (e) {
        var bars = $(this).find('.app-topnav__bars');
        bars.removeAttr('style');
        navTimeline.add('start').staggerTo(bars, 0.35, {
          x: '35px',
          opacity: 0.2,
          ease: Power4.easeOut
        }, 0.04, 'start').staggerTo(bars, 0.2, {
          x: '-40px'
        }, 0.02, "+=0.01");
        $cursor.addClass('is-hover');
      }).on('pointerleave', function (e) {
        $cursor.removeClass('is-hover');
        var bars = $(this).find('.app-topnav__bars');
        navTimeline.add('end').staggerTo(bars, 0.2, {
          x: '0px',
          opacity: 1,
          ease: Power4.easeOut
        }, 0.02, "+=0.01");
      }).on('click', function () {
        if (!$(navID).hasClass('scene-start')) {
          navEnterEvent();
        }
      });
      $(navID).on('pointermove', function (e) {
        var move = 20;
        var moveX = e.offsetX / this.offsetWidth * (move * 2) - move;
        var moveY = e.offsetY / this.offsetHeight * (move * 2) - move;
        this.style.transform = "translate(".concat(moveX, "px, ").concat(moveY, "px)");
      }).on('pointerleave', function (e) {
        this.style.transform = '';
      });

      // Social Links
      //-------------------------------------	
      $('.app-social-links > a').on('pointerenter', function (e) {
        $cursor.addClass('is-hover');
      }).on('pointerleave', function (e) {
        $cursor.removeClass('is-hover');
      });

      // Loader Process
      //-------------------------------------	
      // Detect if video.load is successful or not 
      var videos = [mainConfig.aboutTextures[0], mainConfig.aboutTextures[1]];
      var videosTotal = 0;
      var videosLoaded = 0;
      videosTotal = videos.length;
      console.log('videosTotal: ' + videosTotal + ', videosLoaded: ' + videosLoaded);

      // 3d Models
      var targetObjTotal = mainConfig.models.length;

      // Loading progress event
      var loadedPercent = 0;
      var imgTotal = 0;

      //
      $('body').waitForImages().progress(function (loaded, count, success) {
        imgTotal = count;
        var per = parseInt(loaded / (count - (1 - videosTotal - targetObjTotal)) * 100);
        if ($('img').length <= 1) {
          per = 100;
        }
        if (isNaN(per)) per = 100;
        loadedPercent = per;
        $(loaderProgressID + ' span').text(per);

        //animation classes for loader
        for (var i = 1; i < 10 - targetObjTotal + 1; i++) {
          if (per < i * (10 - targetObjTotal + 1)) $('body').addClass('loaded' + i);
        }

        // Reset circle of loader progress
        loaderCircleReset();

        // Initialize circle of loader progress
        loaderCircleProgress(per);
        console.log('▶▶▶▶▶ Total downloaded ◀◀◀◀◀◀ ( ' + per + '%  ----- ["images"] )');
      }).done(function () {
        //Event after loading is complete
        console.log('loadedPercent: ' + loadedPercent + ', imageTotal: ' + imgTotal);

        // Initialize Main Scene
        mainSceneInit(loadedPercent, imgTotal);
      });

      /*
       * Initialize the main scene
       *
       * @return {Void}
       */
      function init() {
        //==================================
        //==================================
        //camera
        fieldOfView = 60;
        aspectRatio = windowWidth / windowHeight;
        nearPlane = 1; // the camera won't "see" any object placed in front of this plane
        farPlane = 10000; // the camera wont't see any object placed further than this plane 
        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.set(0, 0, 100);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // convert the field of view to radians
        var ang = fieldOfView / 2 * Math.PI / 180;
        // calculate the max y position seen by the camera related to the maxBallsZ position, I start by calculating the y limit because fielOfView is a vertical field of view. I then calculate the x Limit
        yLimit = (camera.position.z + maxBallsZ) * Math.tan(ang); // this is a formula I found, don't ask me why it works, it just does :) 
        // Calculate the max x position seen by the camera related to the y Limit position
        xLimit = yLimit * camera.aspect;

        // Fit plane to screen
        dist = 1000;
        vFOV = THREE.Math.degToRad(camera.fov); // convert vertical fov to radians
        visibleHeight = 2 * Math.tan(vFOV / 2) * dist; // visible height
        visibleWidth = visibleHeight * camera.aspect; // visible width   

        //console.log( 'visibleWidth:' + visibleWidth + ', visibleHeight: ' + visibleHeight + ', xLimit: ' + xLimit + ', yLimit: ' + yLimit );

        //==================================
        //==================================
        //Scene
        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(backgroundBg, 0.0025, 250); // Used to cover the light plane

        //==================================
        //==================================
        //Lights of main scene

        //for scene loaded
        lights[0] = new THREE.PointLight(0x000000, 5, 0);
        lights[0].position.set(0, 200, 50);
        scene.add(lights[0]);
        lights[2] = new THREE.PointLight(0x000000, 10, 0);
        lights[2].position.set(100, 200, -1100);
        scene.add(lights[2]);

        // for loading
        var lightOneColor = 0x1b6cff,
          lightOneIntensity = 2,
          lightOneDistance = 800,
          lightOneAngle = getRadian(25),
          lightOnePenumbra = 1,
          lightOneDecay = 1;
        lights[1] = new THREE.SpotLight(lightOneColor, lightOneIntensity, lightOneDistance, lightOneAngle, lightOnePenumbra, lightOneDecay);
        lights[1].position.set(5, -5, 130); // Setting the y-axis bond angle is critical

        lights[1].castShadow = true;
        lights[1].shadow.mapSize.width = 1024;
        lights[1].shadow.mapSize.height = 1024;
        lights[1].shadow.camera.near = 0.5;
        lights[1].shadow.camera.far = 31;
        scene.add(lights[1]);

        // for scene ready
        lights[3] = new THREE.PointLight(0x000000, 13, 0);
        lights[3].position.set(0, 20, 700);
        scene.add(lights[3]);
        lights[3].origData = {
          x: lights[3].position.x,
          y: lights[3].position.y,
          z: lights[3].position.z
        };

        // for works
        lights[4] = new THREE.DirectionalLight(0xffffff, 10);
        lights[4].position.set(0, 2000, 1000);
        lights[4].visible = false;
        scene.add(lights[4]);
        var lightWorksColor = new THREE.Color().setHSL(0, 0, 0);
        TweenMax.to(lights[4].color, 1, {
          r: lightWorksColor.r,
          g: lightWorksColor.g,
          b: lightWorksColor.b,
          onComplate: function onComplate() {
            lights[4].visible = true;
          }
        });

        //==================================
        //==================================
        //Dynamic light
        lightMove = new THREE.PointLight(0x000000, 15, 0);
        lightMove.position.set(0, 0, 600);
        scene.add(lightMove);
        lightMove.origData = {
          x: lightMove.position.x,
          y: lightMove.position.y,
          z: lightMove.position.z
        };

        //==================================
        //==================================
        //Light from scene ready

        // Light plane  
        sceneReadyForLightPlane = new THREE.Mesh(new THREE.CircleGeometry(1000, 32), new THREE.MeshPhongMaterial({
          emissive: backgroundBg
        }));
        sceneReadyForLightPlane.receiveShadow = true;
        sceneReadyForLightPlane.position.set(0, -32, 5);
        sceneReadyForLightPlane.rotation.x = getRadian(-95);
        scene.add(sceneReadyForLightPlane);
        sceneReadyForLightPlane.position.y = -yLimit * 10;

        // Spot Light
        var spotLightColor = 0xffffff,
          spotLightIntensity = 2,
          spotLightDistance = 200,
          spotLightAngle = getRadian(35),
          spotLightPenumbra = 1,
          spotLightDecay = 1;
        sceneReadyForSpotLight = new THREE.SpotLight(spotLightColor, spotLightIntensity, spotLightDistance, spotLightAngle, spotLightPenumbra, spotLightDecay);
        sceneReadyForSpotLight.position.set(5, 162, 5); // Setting the y-axis bond angle is critical

        sceneReadyForSpotLight.castShadow = true;
        sceneReadyForSpotLight.shadow.mapSize.width = 1024;
        sceneReadyForSpotLight.shadow.mapSize.height = 1024;
        sceneReadyForSpotLight.shadow.camera.near = 0.5;
        sceneReadyForSpotLight.shadow.camera.far = 31;
        scene.add(sceneReadyForSpotLight);

        /*
        const spotLightHelper = new THREE.SpotLightHelper( sceneReadyForSpotLight );
        scene.add( spotLightHelper ); 
        */

        // Ambient Light
        sceneReadyForAmbientLight = new THREE.AmbientLight(0xffffff, 0.05);
        scene.add(sceneReadyForAmbientLight);

        //==================================
        //==================================

        //WebGL Renderer		
        renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById(rendererCanvasID),
          //canvas
          alpha: true,
          antialias: true
        });
        renderer.setSize(windowWidth, windowHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        //==================================
        //==================================
        //add blur effect
        hBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader);
        hBlur.enabled = false; // Disable blur
        hBlur.uniforms.h.value = 0.05;
        vBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);
        vBlur.enabled = false; // Disable blur
        vBlur.uniforms.v.value = 1 / windowWidth;

        //add color effect
        colorEffect = new THREE.ShaderPass(THREE.BrightnessContrastShader);
        colorEffect.enabled = true;
        colorEffect.uniforms.contrast.value = 1.2;

        //-----
        var renderPass = new THREE.RenderPass(scene, camera);
        var effectCopy = new THREE.ShaderPass(THREE.CopyShader);
        effectCopy.renderToScreen = true;
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(renderPass);
        composer.addPass(hBlur);
        composer.addPass(vBlur);
        composer.addPass(colorEffect);
        composer.addPass(effectCopy);

        //==================================
        //==================================
        // Initialize Scrolling Content
        scrollingTextInit();

        //==================================
        //==================================
        // Root Background
        // The element used to hide the z-axis transformation, such as navigation.
        rootBG();

        //==================================
        //==================================
        // Text Animations
        animeForText(true, true); //init

        //==================================
        //==================================
        // Scene Animations
        animeForScene(true);

        //==================================
        //==================================
        // menu background 
        generateMenuBGGrid();

        //==================================
        //==================================
        // Loader
        generateLoader();

        //==================================
        //==================================
        // Generate flying ball
        generateBall('sphere', maxBallsZ, 'ball-fly');

        //==================================
        //==================================
        // Generate pinprick ball
        generateBall('sphere', 80, 'ball-pinprick');

        //==================================
        //==================================
        // Generate ball of navigation
        generateBall('sphere', menuTotal, 'ball-nav');

        //==================================
        //==================================
        //Create Primary Menu Text
        generateMenuText();

        //==================================
        //==================================
        // Initialize About Sprites
        spritesInitForAbout();

        //==================================
        //==================================
        // Initialize Work Sprites
        spritesInitForWork();

        //==================================
        //==================================
        // Initialize Work Detail Sprites
        spritesInitForWorkDetail();

        //==================================
        //==================================
        // Fires when the window changes
        window.addEventListener('resize', onWindowResize, false);
        document.getElementById(rendererCanvasID).addEventListener('pointermove', onDocumentMouseMove, false);
        document.getElementById(rendererCanvasID).addEventListener('pointerdown', onDocumentMouseDown, false);
        document.getElementById(rendererCanvasID).addEventListener('pointerup', onDocumentMouseUp, false);

        //=================
        // for works
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      }

      /*
       * Render the main scene
       *
       * @return {Void}
       */
      function render() {
        requestAnimationFrame(render);
        var delta = clock.getDelta();
        time += delta;

        //---
        // 
        // To set a background color.

        renderer.setClearColor(backgroundBg);

        //---
        // 
        // Update new position
        var rY = 2 * mouseX / window.innerWidth;
        var rX = 2 * mouseY / window.innerHeight;
        targetX = mouseX * .002;
        targetY = mouseY * .002;
        if (targetX < -0.1) targetX = -0.1;
        if (targetX > 0.1) targetX = 0.1;
        if (targetY > 0.3) targetY = 0.3;
        if (targetY < -0.3) targetY = -0.3;
        angle += 0.01 * (targetX - angle);
        height += 0.01 * (targetY - height);
        var x = Math.sin(angle * 3.5) * 35;
        var z = -Math.cos(angle * 3.5) * 35;
        var y = 80 * height + 3.5;

        //---
        // 
        // Animation of Line
        lineMat.uniforms.time.value += delta * 1.5;

        //---
        // 
        // Animation of menu background 
        menuBGGridMat.uniforms.time.value = time;

        //---
        // 
        // Animation of Primary Menu Texts
        if (menuTextFillContainer.children.length == 3 && menuTextStrokeContainer.children.length == 3) {
          menuTextFillContainer.children[0].rotation.y = rY * 0.2;
          menuTextStrokeContainer.children[0].rotation.y = rY * 0.2;
          menuTextFillContainer.children[1].rotation.y = -rY * 0.3;
          menuTextStrokeContainer.children[1].rotation.y = -rY * 0.3;
          menuTextFillContainer.children[2].rotation.y = rY * 0.4;
          menuTextStrokeContainer.children[2].rotation.y = rY * 0.4;
        }

        //---
        // 
        // Animation of 3d modal cave
        if (__statusSceneMove) {
          modalObjMainCave.rotation.y += targetX * delta * 0.5;
        }

        //---
        // 
        // Animation of 3d modal brand
        modalObjSubBrand.rotation.y += delta * getRandomFloat(0.03, 0.8);

        //---
        // 
        // Animation of 3d modal stone
        modalObjSubStone.rotation.y += delta * -0.21;

        //---
        // 
        // Animation of Ball of navigation
        if (ballOfNavGroup) {
          navBallAtoms[0].rotation.y += delta * getRandomFloat(0.3, 0.8);
          navBallAtoms[0].rotation.x += delta * getRandomFloat(0.5, 1.4);
          navBallAtoms[1].rotation.y += delta * getRandomFloat(1, 2.5);
          navBallAtoms[1].rotation.x += delta * getRandomFloat(0.5, 0.9);
          navBallAtoms[2].rotation.y += delta * getRandomFloat(0.2, 0.6);
          navBallAtoms[2].rotation.x += delta * getRandomFloat(0.5, 0.8);
        }

        //---
        // 
        // Animation of About
        if (aboutLine) {
          aboutLine.rotation.x += delta * 0.2;
          aboutLine.rotation.y += delta * 0.1;
        }

        //---
        // 
        // Animation of root background
        if (skyBox) {
          skyBox.rotation.x += 0.0005;
        }

        //---
        // 
        // Animation of about sprites 
        if (aboutContainer) {
          aboutContainer.geometry.vertices.forEach(function (el, index) {
            el.normalize().multiplyScalar(0.15 * simplex.noise3D(el.x * 0.4 + Date.now() * 0.0001, el.y * 0.4, el.z * 0.4) + 1);
          });
          aboutContainer.geometry.computeVertexNormals();
          aboutContainer.geometry.normalsNeedUpdate = true;
          aboutContainer.geometry.verticesNeedUpdate = true;
        }

        //---
        // 
        // Animation of cover of line
        if (coverLine) {
          // Finding position of an object relative to a parent
          var objPosWorld = coverLineTempTargetReference.getWorldPosition(new THREE.Vector3());
          var positions = coverLine.geometry.attributes.position.array;
          LineSegmentsGeometryPositions(coverLine, [positions[0], positions[1], positions[2], objPosWorld.x, objPosWorld.y, objPosWorld.z]);

          //
          var positions2 = coverLine2.geometry.attributes.position.array;
          LineSegmentsGeometryPositions(coverLine2, [positions2[0], positions2[1], positions2[2], objPosWorld.x, objPosWorld.y, objPosWorld.z]);
        }

        //---
        // 
        // Animation of cover
        if (coverContainer) {
          coverContainer.children.forEach(function (child) {
            child.rotation.y += 0.005;
          });
        }

        //---
        // 
        // Animation of stone of works  
        modalObjSubStoneForWorks.children.forEach(function (child) {
          if (child.name.includes('nucleus__workmain-')) {
            child.rotation.x += child.rotationSpeed;
          }
        });
        modalObjSubStoneForWorks.children.forEach(function (child) {
          if (child.name.includes('nucleus__worktitle-')) {
            if (__statusWorksSpritesMove) {
              child.rotation.y += 0.01;
            } else {
              child.rotation.y += 0.001;
            }
          }
        });
        if (__statusWorksSpritesMove) {
          modalObjSubStoneForWorks.rotation.z += 0.01;
        } else {
          modalObjSubStoneForWorks.rotation.z += 0.001;
        }
        intersects_works = raycaster.intersectObjects(modalObjSubStoneForWorks.children, true);
        if (intersects_works.length > 0) {
          if (INTERSECTED_WORKS != intersects_works[0].object) {
            if (!intersects_works[0].object.name.includes('nucleus__worktitle-')) {
              var _target = intersects_works[0].object.parent.parent.parent.parent;
              if (_target !== null) {
                console.log('onPointerMove: ', _target.name);
                INTERSECTED_WORKS = intersects_works[0].object;

                //hover effect
                TweenMax.to(_target.scale, .3, {
                  x: 180,
                  y: 180,
                  z: 180
                });

                //cursor interaction
                $cursor.addClass('is-hover');

                //cover interaction
                var _objCover = scene.getObjectByName('nucleus__workcover-' + _target.targetid);
                coverContainer.children.forEach(function (child) {
                  child.visible = false;
                });
                _objCover.visible = true;
                coverLineTempTargetReference = _target;
                coverLine.visible = true;
                coverLine2.visible = true;

                //description interaction
                var screenData = nestedObjectToScreenXYZAndWH(_target, camera, renderer.domElement.width, renderer.domElement.height);
                var _item = document.querySelector("#app-workdesc__nucleus-".concat(_target.targetid - 1));
                _item.style.top = screenData.position.y + 'px';
                _item.style.left = screenData.position.x + 'px';
                _item.style.transform = 'translate(' + screenData.width / 2 + 'px, ' + screenData.height / 2 + 'px)';
                [].slice.call(document.querySelectorAll('#app-screen-detail__works .app-tooltip')).forEach(function (el) {
                  el.classList.remove('is-hover');
                });
                _item.classList.add('is-hover');
              }
            }
          }
        } else {
          if (INTERSECTED_WORKS) {
            var _target2 = INTERSECTED_WORKS.parent.parent.parent.parent;
            if (_target2 !== null) {
              //hover effect
              TweenMax.to(_target2.scale, .3, {
                x: _target2.origData.sx,
                y: _target2.origData.sy,
                z: _target2.origData.sz
              });

              //cursor interaction
              $cursor.removeClass('is-hover');

              //cover interaction
              coverContainer.children.forEach(function (child) {
                child.visible = false;
              });
              coverLine.visible = false;
              coverLine2.visible = false;

              //description interaction
              [].slice.call(document.querySelectorAll('#app-screen-detail__works .app-tooltip')).forEach(function (el) {
                el.classList.remove('is-hover');
              });
            }
          }

          //by setting current intersection object to "nothing"
          INTERSECTED_WORKS = null;
        }

        //---
        // 
        // Animation of audio wave line
        if (__statusAudioAnimEnable) {
          audioPoints.forEach(function (el, index) {
            audioPlane.geometry.vertices[index].y = 2.5 + Math.sin((time + el.initValue) * el.speed) * el.amplitude;
            // thus we can assign the data from the `audioPoints` array to their Y-coordinates to form the graph
          });
          audioPlane.geometry.verticesNeedUpdate = true; // the most important thing when you change coordiantes of vertices
          audioLine.geometry.verticesNeedUpdate = true; // the most important thing when you change coordiantes of vertices                    
        }

        //---
        // 
        //Animation of Balls
        if (__statusBallsMove) {
          flyingBallAtoms.forEach(function (el, index) {
            el.position.x += -5 * el.speed * .2;
            if (el.position.x < -xLimit - 80) {
              // check if the particle is out of the field of view

              //remove a mesh completely from the scene
              //el.position.x = el.position.origData.x;
              el.position.x = xLimit / 2;
            }
          });
        } else {
          flyingBallAtoms.forEach(function (el, index) {
            el.rotation.y += 0.001;
          });
        }

        //--
        pinprickBallAtoms.forEach(function (el, index) {
          el.position.x += -5 * el.speed * .2;
          if (el.position.x < -xLimit - 80) {
            // check if the particle is out of the field of view

            //remove a mesh completely from the scene
            //el.position.x = el.position.origData.x;
            el.position.x = xLimit / 2;
          }
        });

        //---
        // 
        // Animation of Loader
        if (__statusLoaderParticleSystemMove) {
          loaderParticleSystem.forEach(function (el, index) {
            el.rotation.z += el.speed * 0.2 * delta;
          });
        }

        //---
        // 
        // Animation of Tetrahedron particle
        if (__statusTetrahedronParticleMove) {
          tetrahedronParticleGroup.children.forEach(function (el, index) {
            el.rotation.x += 0.01;
            el.rotation.y += 0.02;

            //
            el.position.y += -3 * el.speed * .2;
            if (el.position.y < -tetrahedronParticleDefaultY - 80) {
              // check if the particle is out of the field of view

              //remove a mesh completely from the scene
              //el.position.x = el.position.origData.x;
              el.position.y = tetrahedronParticleDefaultY + yLimit / 2;
            }
          });
        }

        //---
        // 
        //Move camera from navigation objects
        raycaster.setFromCamera(mouseVector, camera);

        //Add collision elements from the stage to the sensing object
        collisionElements = navBallAtoms.concat(menuTextFillContainer.children).concat(menuTextStrokeContainer.children);
        if (audioPoints.length > 0) collisionElements = collisionElements.concat(audioPlane);
        intersects = raycaster.intersectObjects(collisionElements);
        if (intersects.length > 0) {
          if (INTERSECTED != intersects[0].object && __statusLoaderRemoveEnd) {
            INTERSECTED = intersects[0].object;

            //console.log( INTERSECTED.name );

            //--- cursor interaction
            $cursor.addClass('is-hover');

            //++++++++++++++++++++++++++++++++++++++
            //++++++++++++++++++++++++++++++++++++++
            //each item of Ball of Navigation from scene
            if (INTERSECTED.name.indexOf('nucleus__menuball-') >= 0) {
              //--- change object material color and styles
              if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
              INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
              INTERSECTED.material.emissive.setHex(0xff0000);
              INTERSECTED.material.wireframe = true;
              switch (INTERSECTED.name) {
                //--- Works
                case 'nucleus__menuball-0':
                  navHoverEventWorks();
                  break;

                //--- About
                case 'nucleus__menuball-1':
                  navHoverEventAbout();
                  break;

                //--- Contact
                case 'nucleus__menuball-2':
                  navHoverEventContact();
                  break;
              } //end switch   
            } //end intersects

            //++++++++++++++++++++++++++++++++++++++
            //++++++++++++++++++++++++++++++++++++++
            //each item of primary 3D navigation from scene
            if (INTERSECTED.name.indexOf('nucleus__menu-') >= 0 && $('.app-topnav__wrapper').hasClass('scene-start') && !$('body').hasClass('primarymenu-active') && $('.app-topnav__wrapper').hasClass('scene-start')) {
              //Display Primary Menu Texts (Fill color)
              if (INTERSECTED.name == 'nucleus__menu-work') TweenMax.to(uniformsTxtFill_1.uAlpha, .5, {
                value: 1,
                ease: Power2.easeOut
              });
              if (INTERSECTED.name == 'nucleus__menu-about') TweenMax.to(uniformsTxtFill_2.uAlpha, .5, {
                value: 1,
                ease: Power2.easeOut
              });
              if (INTERSECTED.name == 'nucleus__menu-contact') TweenMax.to(uniformsTxtFill_3.uAlpha, .5, {
                value: 1,
                ease: Power2.easeOut
              });
            }
            if (INTERSECTED.name.indexOf('nucleus__menu-') >= 0 && ($('body').hasClass('primarymenu-active') || !$('.app-topnav__wrapper').hasClass('scene-start'))) {
              //--- cursor interaction
              $cursor.removeClass('is-hover');
            }
          }
        } else {
          if (INTERSECTED) {
            //---  cursor interaction
            $cursor.removeClass('is-hover');

            //++++++++++++++++++++++++++++++++++++++
            //++++++++++++++++++++++++++++++++++++++
            //each item of Ball of Navigation from scene
            if (INTERSECTED.name.indexOf('nucleus__menuball-') >= 0) {
              //--- restore previous intersection object (if it exists) to its original color
              INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
              INTERSECTED.material.wireframe = false;
            }

            //++++++++++++++++++++++++++++++++++++++
            //++++++++++++++++++++++++++++++++++++++
            //each item of primary 3D navigation from scene
            if (INTERSECTED.name.indexOf('nucleus__menu-') >= 0 && $('.app-topnav__wrapper').hasClass('scene-start') && !$('body').hasClass('primarymenu-active') && $('.app-topnav__wrapper').hasClass('scene-start')) {
              //Display Primary Menu Texts (Fill color)
              if (INTERSECTED.name == 'nucleus__menu-work') TweenMax.to(uniformsTxtFill_1.uAlpha, .5, {
                value: 0,
                ease: Power2.easeOut
              });
              if (INTERSECTED.name == 'nucleus__menu-about') TweenMax.to(uniformsTxtFill_2.uAlpha, .5, {
                value: 0,
                ease: Power2.easeOut
              });
              if (INTERSECTED.name == 'nucleus__menu-contact') TweenMax.to(uniformsTxtFill_3.uAlpha, .5, {
                value: 0,
                ease: Power2.easeOut
              });
            }

            //++++++++++++++++++++++++++++++++++++++
            //++++++++++++++++++++++++++++++++++++++  
            //--- Ball of Navigation interaction
            TweenMax.to([navBallLineAtoms[0].scale, navBallLineAtoms[1].scale, navBallLineAtoms[2].scale], .2, {
              x: 1.5,
              y: 1.5,
              z: 1.5
            });

            //---  Balls Reset
            if (!__statusBallsRestore && __statusLoaderRemoveStart) {
              //ballsReset();   
            }
          }

          //by setting current intersection object to "nothing"
          INTERSECTED = null;
        }

        //---
        // 
        //Update blur
        composer.render();
      }

      /*
       * Window Resize Event
       *
       * @return {Void}
       */
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      /*
       * Mouse Events
       *
       * @return {Void}
       */
      function onDocumentMouseMove(e) {
        //---
        //cursor position
        var _mx, _my;
        var touches = e.touches;
        if (touches && touches.length) {
          _mx = touches[0].clientX;
          _my = touches[0].clientY;
        } else {
          _mx = e.clientX;
          _my = e.clientY;
        }

        //---
        //   
        mouseX = _mx - windowHalfX;
        mouseY = _my - windowHalfY;

        //---
        mouseVector.x = _mx / window.innerWidth * 2 - 1;
        mouseVector.y = -(_my / window.innerHeight) * 2 + 1;

        // project mouse position to world coodinates
        Number.prototype.map = function (in_min, in_max, out_min, out_max) {
          return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        };
        var x = mouseVector.x.map(-1, 1, -windowHalfX, windowHalfX);
        var y = mouseVector.y.map(-1, 1, -windowHalfY, windowHalfY);

        //---
        // update light position
        if (__statusLightMove && lightMove) {
          lightMove.position.x = x;
          lightMove.position.y = y;
        }

        //---
        // update about sprites
        TweenMax.to(aboutContainer.position, 0.5, {
          z: Math.sqrt(x) - 120
        });
      }
      function onDocumentMouseDown(e) {
        e.preventDefault();

        //---
        //cursor position
        var _mx, _my;
        var touches = e.touches;
        if (touches && touches.length) {
          _mx = touches[0].clientX;
          _my = touches[0].clientY;
        } else {
          _mx = e.clientX;
          _my = e.clientY;
        }

        //---
        //                 
        mouseX = _mx - windowHalfX;
        mouseY = _my - windowHalfY;

        //---
        // 
        //Move camera from navigation objects

        if (!__statusSceneClickEnable) return false;
        mouseVector.x = _mx / window.innerWidth * 2 - 1;
        mouseVector.y = -(_my / window.innerHeight) * 2 + 1;

        //Mouse interactions
        raycaster.setFromCamera(mouseVector, camera);

        //Add collision elements from the stage to the sensing object
        collisionElements = navBallAtoms.concat(audioPlane).concat(menuTextFillContainer.children).concat(menuTextStrokeContainer.children);
        intersects = raycaster.intersectObjects(collisionElements);

        //++++++++++++++++++++++++++++++++++++++
        //++++++++++++++++++++++++++++++++++++++
        //play & stop audio
        if (intersects.length > 0 && intersects[0].object.name == 'nucleus__audio-controller') {
          console.log('--- [audio controller] --- : ' + intersects[0].object.name);
          $(soundBgSwitchID).toggleClass('is-switched');
          if (!$(soundBgSwitchID).hasClass('is-switched')) {
            soundBg.setVolume(0.5);
          } else {
            soundBg.setVolume(0);
          }
        }

        //++++++++++++++++++++++++++++++++++++++
        //++++++++++++++++++++++++++++++++++++++
        //each item of Ball of Navigation from scene

        if (intersects.length > 0 && intersects[0].object.name.indexOf('nucleus__menuball-') >= 0) {
          console.log('--- [Ball of Navigation] --- : ' + intersects[0].object.name);
          navEnterEvent();
        } //end intersects

        //++++++++++++++++++++++++++++++++++++++
        //++++++++++++++++++++++++++++++++++++++
        //each item of primary 3D navigation from scene
        if (intersects.length > 0 && intersects[0].object.name.indexOf('nucleus__menu-') >= 0 && $('.app-topnav__wrapper').hasClass('scene-start') && !$('body').hasClass('primarymenu-active')) {
          console.log('--- [primary 3D navigation] --- : ' + intersects[0].object.name);

          //--- click events here
          if (js_typeof(intersects[0]) != ( true ? "undefined" : 0)) {
            var obj = intersects[0].object;
            switch (intersects[0].object.name) {
              //--- Works
              case 'nucleus__menu-work':
                //change ball of navigation's object position
                destinationPosOfBallNav = navBallAtoms[0].origData;

                //disable scene move
                __statusSceneMove = false;

                //action
                shotWorks();

                // setTimeout( function() {
                // 	workDetailControl( 'open' );
                // }, 10000 );

                // setTimeout( function() {
                // 	workDetailControl( 'close' );
                // }, 15000 );					

                // setTimeout( function() {
                // 	shotCloseWorks();
                // }, 20000 );

                //navigation
                menuToggle('close-onlynav');

                //active body class
                $('body').addClass('primarymenu-active');
                break;

              //--- About
              case 'nucleus__menu-about':
                //change ball of navigation's object position
                destinationPosOfBallNav = navBallAtoms[1].origData;

                //disable scene move
                __statusSceneMove = false;

                //action
                shotAbout();

                // setTimeout( function() {
                // 	shotCloseAbout();
                // }, 10000 );                

                //navigation
                menuToggle('close-onlynav');

                //active body class
                $('body').addClass('primarymenu-active');
                break;

              //--- Contact
              case 'nucleus__menu-contact':
                //change ball of navigation's object position
                destinationPosOfBallNav = navBallAtoms[2].origData;

                //disable scene move
                __statusSceneMove = false;

                //action
                shotContact();

                // setTimeout( function() {
                // 	shotCloseContact();
                // }, 10000 );

                //navigation
                menuToggle('close-onlynav');

                //active body class
                $('body').addClass('primarymenu-active');
                break;
            } //end switch     

            //--- update matrix in order to change camera position
            obj.updateMatrix();
          }

          //--- change camera position
          if (destinationPosOfBallNav != null) {
            TweenMax.to(camera.position, 2, {
              x: destinationPosOfBallNav.x,
              y: destinationPosOfBallNav.y,
              z: destinationPosOfBallNav.z + 100,
              onUpdate: function onUpdate() {
                //update camera
                camera.up.set(0, 1, 0);
                camera.updateProjectionMatrix();
              }
            });
          }
        } //end intersects
      }
      function onDocumentMouseUp(e) {
        e.preventDefault();

        //---
        //cursor position
        var _mx, _my;
        var touches = e.touches;
        if (touches && touches.length) {
          _mx = touches[0].clientX;
          _my = touches[0].clientY;
        } else {
          _mx = e.clientX;
          _my = e.clientY;
        }

        //---
        //
        mouseX = _mx - windowHalfX;
        mouseY = _my - windowHalfY;

        //---
        // 
        mouseVector.x = _mx / window.innerWidth * 2 - 1;
        mouseVector.y = -(_my / window.innerHeight) * 2 + 1;
      }
      function onPointerMove(e) {
        //--- for works
        intersects_works = raycaster.intersectObjects(modalObjSubStoneForWorks.children, true);

        //hover status
        if (intersects_works.length > 0) {
          __statusWorksSpritesMove = false;
        } else {
          __statusWorksSpritesMove = true;
        }
      }
      function onPointerUp(e) {
        e.preventDefault();
        if (__statusSceneClickEnable) {
          if (intersects_works.length > 0) {
            if (!intersects_works[0].object.name.includes('nucleus__worktitle-')) {
              var _target = intersects_works[0].object.parent.parent.parent.parent;
              console.log('onPointerUp: ', _target.name);
              window.open(_target.href, "_blank");
            }
          }
        }
      }

      /*
       * Navigation Hover Event for Works
       *
       * @return {Void}
       */
      function navHoverEventWorks() {
        //---
        // 
        //get elements from scene
        var _ballPosAtoms = [],
          _ballScaleAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
          _ballScaleAtoms.push(el.scale);
        });

        //---
        // 
        //Hover effect for navigation item
        TweenMax.to(navBallLineAtoms[0].scale, .2, {
          x: 3,
          y: 3,
          z: 3
        });

        /*
        //---
        // ucleus__menuball-0':
        //Animation of Balls ---- helix
        __statusBallsMove = false;
        if ( __statusBallsAnimEnable ) {
            TweenMax.to( _ballPosAtoms, 1.5, {
                x:  function(index, target) {
                         const pitchSegments = _ballPosAtoms.length,
                              radius = ( ( index % 5 ) * 30 ) - xLimit/5,
                              angle = 2 * Math.PI / pitchSegments * index;
                         const offset = 10;
                         return radius * Math.cos(angle) - offset;
                    },
                y:  function(index, target) {
                         const pitchSegments = _ballPosAtoms.length,
                              radius = ( ( index % 5 ) * 30 ) - xLimit/5,
                              angle = 2 * Math.PI / pitchSegments * index;
                         const offset = -90;
                         return radius * Math.sin(angle) - offset;
                    },
                z: function(index, target) {
                         const offset = xLimit/3 + 70;
                         return ( Math.floor( index / 25 ) ) * 10 - offset;
                    },
                ease: Power1.easeOut
            });     
              TweenMax.to( _ballScaleAtoms, 1.5, {
                x:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sx
                    },
                y:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sy
                    },
                z:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sz
                    },
                repeat: -1, 
                yoyo: true 
            });   
          }
        */
      }

      /*
       * Navigation Hover Event for About
       *
       * @return {Void}
       */
      function navHoverEventAbout() {
        //---
        // 
        //get elements from scene
        var _ballPosAtoms = [],
          _ballScaleAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
          _ballScaleAtoms.push(el.scale);
        });

        //---
        // 
        //Hover effect for navigation item
        TweenMax.to(navBallLineAtoms[1].scale, .2, {
          x: 2,
          y: 2,
          z: 2
        });

        /*
                      //---
        //          
        //Animation of Balls ---- grid
        __statusBallsMove = false;
         const _column = 5,
              _row = 5;      
         if ( __statusBallsAnimEnable ) {
            TweenMax.to( _ballPosAtoms, 1.5, {
                x:  function(index, target) {
                         const _dis = 30;
                        const offset = 60;
                         return ( ( index % _column ) * _dis ) - offset;
                    },
                y:  function(index, target) {
                         const _dis = 30;
                        const offset = -150;
                         return ( - ( Math.floor( index / _row ) % _column ) * _dis ) - offset;
                    },
                z: function(index, target) {
                         const _dis = 10;
                        const offset = 150;
                         return ( Math.floor( index / 25 ) ) * _dis - offset;
                    },
                ease: Power1.easeOut
            });  
        */

        /*
         //Animation of Balls ---- butterfly
        __statusBallsMove = false;
        TweenMax.to( _ballPosAtoms, 1.5, {
            x:  function(index, target) {
                     const radius = ( ( index % 5 ) * 30 ) - xLimit/5,
                          pitchSegments = _ballPosAtoms.length,
                          pitch = Math.PI * 2 * index / pitchSegments,
                          elevationSegments = pitchSegments/2,
                          elevation = Math.PI  * ((index / elevationSegments)-0.5);
                     const offset = 100;
                     return (Math.cos(pitch) * Math.cos(elevation)) * radius - offset;
                },
            y:  function(index, target) {
                     const radius = ( ( index % 5 ) * 30 ) - xLimit/5,
                          pitchSegments = _ballPosAtoms.length,
                          pitch = Math.PI * 2 * index / pitchSegments,
                          elevationSegments = pitchSegments/2,
                          elevation = Math.PI  * ((index / elevationSegments)-0.5);
                     const offset = 0;
                      return Math.sin(elevation) * radius - offset;
                },
            z: function(index, target) {
                     const radius = xLimit/5,
                          pitchSegments = _ballPosAtoms.length,
                          pitch = Math.PI * 2 * index / pitchSegments,
                          elevationSegments = pitchSegments/2,
                          elevation = Math.PI  * ((index / elevationSegments)-0.5);
                     const offset = 100;
                     return (Math.sin(pitch) * Math.cos(elevation)) * radius - offset;
                },
               ease: Power1.easeOut
         });     
        */

        /*
        //Animation of Balls ---- plant
        __statusBallsMove = false;
        TweenMax.to( _ballPosAtoms, 1.5, {
            x:  function(index, target) {
                     const offset = 200;
                    return Math.floor( Math.floor(xLimit/5 / 40) ) * 40 - offset;
                },
            y:  function(index, target) {
                     const radius = ( ( index % 5 ) * 30 ) - xLimit/5,
                          pitchSegments = _ballPosAtoms.length,
                          pitch = Math.PI * 2 * index / pitchSegments,
                          elevationSegments = pitchSegments/2,
                          elevation = Math.PI  * ((index / elevationSegments)-0.5);
                     vconstr offset = 0;
                      return Math.sin(elevation) * radius - offset;
                },
            z: function(index, target) {
                     return ( Math.floor( index / 25 ) ) * 10 - xLimit/3 - 10;
                },
            ease: Power1.easeOut
         });    
         */

        /*
        } 
        */
      }

      /*
       * Navigation Hover Event for Contact
       *
       * @return {Void}
       */
      function navHoverEventContact() {
        //---
        // 
        //get elements from scene
        var _ballPosAtoms = [],
          _ballScaleAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
          _ballScaleAtoms.push(el.scale);
        });

        //---
        // 
        //Hover effect for navigation item
        TweenMax.to(navBallLineAtoms[2].scale, .2, {
          x: 2,
          y: 2,
          z: 2
        });

        /*
                      //---
        // 
        //Animation of Balls ---- sphere
        __statusBallsMove = false;
        if ( __statusBallsAnimEnable ) {
            TweenMax.to( _ballPosAtoms, 1.5, {
                x:  function(index, target) {
                         const radius = 50,
                              pitchSegments = _ballPosAtoms.length,
                              phi = Math.acos( -1 + ( 2 * index ) / pitchSegments ),
                              theta = Math.sqrt( pitchSegments * Math.PI ) * phi;
                         const offset = 10;
                          return radius * Math.cos( theta ) * Math.sin( phi ) - offset;
                    },
                y:  function(index, target) {
                         const radius = 50,
                              pitchSegments = _ballPosAtoms.length,
                              phi = Math.acos( -1 + ( 2 * index ) / pitchSegments ),
                              theta = Math.sqrt( pitchSegments * Math.PI ) * phi;
                          const offset = -70;
                         return radius * Math.sin( theta ) * Math.sin( phi ) - offset;
                    },
                z: function(index, target) {
                         const radius = 50,
                              pitchSegments = _ballPosAtoms.length,
                              phi = Math.acos( -1 + ( 2 * index ) / pitchSegments ),
                              theta = Math.sqrt( pitchSegments * Math.PI ) * phi;
                         const offset = 45;
                         return radius * Math.cos( phi ) - offset;
                    },
                ease: Power1.easeOut
               });     
             TweenMax.to( _ballScaleAtoms, 1.5, {
                x:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sx
                    },
                y:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sy
                    },
                z:  function(index, target) {
                        return flyingBallAtoms[index].speed * flyingBallAtoms[index].origData.sz
                    },
                repeat: -1, 
                yoyo: true 
            });          
        } 
        
        */
      }

      /*
       * Navigation Click Event for Works
       *
       * @return {Void}
       */
      function shotWorks() {
        console.log('%c Works', 'color: green;');

        //---
        // 
        //get original position of a single Ball of Navigation
        var _navWorkPos = navBallAtoms[0].origData;

        //---
        // 
        //Display Primary Menu Texts (Fill color)
        TweenMax.to([uniformsTxtFill_1.uAlpha, uniformsTxtFill_2.uAlpha, uniformsTxtFill_3.uAlpha], .5, {
          value: 0,
          ease: Power2.easeOut
        });

        //---
        //
        //Turn off some lights 
        TweenMax.to([lights[3].position, lightMove.position], 1.2, {
          z: -300
        });

        //---
        // 		
        //Circle of back
        setTimeout(function () {
          //update circle of back status
          __statusBackCircleEnable = true;

          //Initialize circle of back
          backCircleReset();
        }, 2500);

        /*
        //---
        // 
        // works sprites  
        const _diffX = ( aspectRatio > 2.5 ) ? 40 : 25;
                      //
        workLine.newPos = {
            x: _navWorkPos.x + xLimit * 0.16,
            y: _navWorkPos.y + yLimit * 0.12,
            z: _navWorkPos.z + 29     
        }             
          TweenMax.set(workLine.position, {
            x: workLine.newPos.x,
            y: workLine.newPos.y,
            z: workLine.newPos.z
        });    
         TweenMax.to(workLine.scale, 1.2, {
            delay: 2.7,
            x: 4.5,
            y: 4.5,
            z: 4.5,
            ease: Power2.easeOut
        });                               
           //
        //
        TweenMax.set(workMask.position, {
            x: _navWorkPos.x - xLimit/2,
            y: _navWorkPos.y,
            z: _navWorkPos.z + 30
        });   
          TweenMax.to(uniformsWorkMask.uAlpha, 1, {
        delay: 1.5,
            value: 0.7,
            ease: Power2.easeOut
        });
         */

        //---
        // 	
        //3d modal cave animation
        setTimeout(function () {
          sceneMainCaveControl('open', null);
        }, 500);
        TweenMax.to(modalObjMainCave.position, 1.2, {
          z: '+=' + 300,
          y: '+=' + -20,
          onComplete: function onComplete() {
            TweenMax.to(this.target, 1.2, {
              delay: 0.5,
              y: yLimit * 5,
              ease: Power2.easeOut,
              onComplete: function onComplete() {
                //---
                // 
                //the content here
                TweenMax.to(modalObjSubStoneForWorks.position, 2, {
                  x: modalObjSubStoneForWorks.origData.x,
                  y: modalObjSubStoneForWorks.origData.y,
                  z: modalObjSubStoneForWorks.origData.z,
                  ease: Power2.easeOut
                });

                //---
                // 
                // works light
                var lightWorksColor = new THREE.Color().setHSL(1, 1, 1);
                TweenMax.to(lights[4].color, 1, {
                  r: lightWorksColor.r,
                  g: lightWorksColor.g,
                  b: lightWorksColor.b
                });
              }
            });
          }
        });
      }

      /*
       * Navigation Click Event for About
       *
       * @return {Void}
       */
      function shotAbout() {
        console.log('%c About', 'color: green;');

        //---
        // 
        //the content here
        TweenMax.to('#app-screen-detail__about', .5, {
          delay: 3.5,
          alpha: 1,
          onComplete: function onComplete() {
            this.target.addClass('focus');

            //---
            // 		
            //Circle of back
            //update circle of back status
            __statusBackCircleEnable = true;

            //Initialize circle of back
            backCircleReset();

            //---
            //
            // Scrolling Content
            TweenMax.to(scrollingText, 1.2, {
              css: {
                display: 'block'
              },
              alpha: 1,
              ease: Power2.easeOut
            });
          }
        });

        //---
        //
        // Scrolling Content
        $(scrollingText).addClass('scene-detail');
        scrollingTextInit();

        //---
        // 
        //get original position of a single Ball of Navigation
        var _navAboutPos = navBallAtoms[1].origData;

        //---
        // 
        //Display Primary Menu Texts (Fill color)
        TweenMax.to([uniformsTxtFill_1.uAlpha, uniformsTxtFill_2.uAlpha, uniformsTxtFill_3.uAlpha], .5, {
          value: 0,
          ease: Power2.easeOut
        });

        //---
        // 	
        //3d modal cave animation
        setTimeout(function () {
          sceneMainCaveControl('open', null);
        }, 500);
        TweenMax.to(modalObjMainCave.position, 1.2, {
          z: '+=' + 300,
          y: '+=' + -20,
          onComplete: function onComplete() {
            TweenMax.to(this.target, 1.2, {
              delay: 0.5,
              y: -yLimit / 2 - 20,
              ease: Power2.easeOut,
              onComplete: function onComplete() {
                //...
                // about sprites  
                TweenMax.set(aboutContainer.position, {
                  x: _navAboutPos.x,
                  y: _navAboutPos.y,
                  z: _navAboutPos.z - 30
                });
                TweenMax.to(uniformsAboutContainer.uAlpha, 1.5, {
                  value: 1,
                  ease: Power4.easeOut
                });
                TweenMax.to(uniformsAboutContainer.uOffset.value, 1.5, {
                  x: 0,
                  y: 0,
                  ease: Power4.easeOut
                });
              }
            });
          }
        });
      }

      /*
       * Navigation Click Event for Contact
       *
       * @return {Void}
       */
      function shotContact() {
        console.log('%c Contact', 'color: green;');

        //---
        // 
        //the content here
        TweenMax.to('#app-screen-detail__contact', .5, {
          delay: 3.5,
          alpha: 1,
          onComplete: function onComplete() {
            this.target.addClass('focus');

            //---
            // 		
            //Circle of back
            //update circle of back status
            __statusBackCircleEnable = true;

            //Initialize circle of back
            backCircleReset();

            //---
            // 	
            //Social Links
            var navMotion = new TimelineMax().to('.app-social-links', .5, {
              css: {
                display: 'block'
              }
            }).staggerTo('.app-social-links a', 0.1, {
              x: 0,
              alpha: 1
            }, 0.1, 0);
          }
        });

        //---
        // 
        //get original position of a single Ball of Navigation
        var _navContactPos = navBallAtoms[2].origData;

        //---
        // 
        //Display Primary Menu Texts (Fill color)
        TweenMax.to([uniformsTxtFill_1.uAlpha, uniformsTxtFill_2.uAlpha, uniformsTxtFill_3.uAlpha], .5, {
          value: 0,
          ease: Power2.easeOut
        });

        //---
        // 
        //get elements from scene
        var _ballDoNotMovePosAtoms = [],
          _ballDoNotMoveScaleAtoms = [];
        pinprickBallAtoms.forEach(function (el, index) {
          _ballDoNotMovePosAtoms.push(el.position);
          _ballDoNotMoveScaleAtoms.push(el.scale);
        });

        //---
        // 
        //3d modal cave animation
        TweenMax.to(modalObjMainCave.rotation, 1, {
          y: -1.3,
          ease: Power1.easeOut
        });

        //---
        // 
        // Contact plane material
        // create the video element
        var videoContact = document.createElement('video');
        videoContact.src = videos[1];
        var videoContactTexture = new THREE.VideoTexture(videoContact);
        videoContactTexture.minFilter = THREE.LinearFilter;
        videoContactTexture.magFilter = THREE.LinearFilter;
        videoContactTexture.format = THREE.RGBFormat;

        // pause the video
        videoContactTexture.image.autoplay = true;
        videoContactTexture.image.loop = true;
        videoContactTexture.image.currentTime = 0;
        videoContactTexture.image.muted = true;
        videoContactTexture.image.play();

        //
        uniformsContactCirclePlane = {
          uTexture: {
            value: videoContactTexture
          },
          uOffset: {
            //distortion strength
            value: new THREE.Vector2(-6, -5.3)
          },
          uAlpha: {
            //opacity
            value: 0
          }
        };
        var contactCirclePlaneMaterial = new THREE.ShaderMaterial({
          uniforms: uniformsContactCirclePlane,
          vertexShader: vertex_distortion,
          fragmentShader: fragment_distortion,
          transparent: true
        });

        //---
        // 
        // Circle plane
        contactCirclePlane = new THREE.Mesh(new THREE.CircleGeometry(12, 32), contactCirclePlaneMaterial);
        contactCirclePlane.receiveShadow = true;
        scene.add(contactCirclePlane);

        //---
        // 
        // Triangle plane
        uniformsContactTrianglePlane = {
          uTexture: {
            value: videoContactTexture
          },
          uOffset: {
            //distortion strength
            value: new THREE.Vector2(-6, -5.3)
          },
          uAlpha: {
            //opacity
            value: 0
          }
        };
        var contactTrianglePlaneMaterial = new THREE.ShaderMaterial({
          uniforms: uniformsContactTrianglePlane,
          vertexShader: vertex_distortion,
          fragmentShader: fragment_distortion,
          transparent: true
        });
        contactTrianglePlane = new THREE.Mesh(new THREE.CircleGeometry(7, 0), contactTrianglePlaneMaterial);
        scene.add(contactTrianglePlane);
        contactTrianglePlane.receiveShadow = true;
        scene.add(contactTrianglePlane);

        //---
        // 	
        //3d modal cave animation
        setTimeout(function () {
          sceneMainCaveControl('open', null);
        }, 500);

        //---
        // 
        //Animation of Balls ---- grid
        var _column = 5,
          _row = 5;

        //
        TweenMax.to(modalObjMainCave.position, 1, {
          //3d modal cave
          x: '+=' + -200,
          z: '+=' + 100,
          onComplete: function onComplete() {
            //...
            //Animation of Balls
            __statusBallsMove = false;
            __statusBallsRestore = true;

            //...
            //Pinprick Ball
            TweenMax.to(_ballDoNotMovePosAtoms, 0.5, {
              y: -yLimit / 3,
              x: -xLimit / 2,
              ease: Power2.easeOut
            });
            TweenMax.to(_ballDoNotMovePosAtoms, 1.5, {
              delay: .7,
              x: function x(index, target) {
                return -Math.random() * xLimit / 2;
              },
              ease: Power2.easeOut
            });
            TweenMax.to(_ballDoNotMoveScaleAtoms, 1.5, {
              delay: .7,
              x: function x(index, target) {
                var _dis = 30;
                var offset = xLimit / 3 - 350;
                return index % _column * _dis - offset;
              },
              ease: Power2.easeOut
            });

            //...
            // contact sprites  
            setTimeout(function () {
              TweenMax.set(contactCirclePlane.position, {
                x: _navContactPos.x + 20,
                y: _navContactPos.y + 8,
                z: _navContactPos.z + 50
              });
              TweenMax.set(contactTrianglePlane.position, {
                x: _navContactPos.x - 20,
                y: _navContactPos.y - 3,
                z: _navContactPos.z + 50
              });
              TweenMax.to([uniformsContactCirclePlane.uAlpha, uniformsContactTrianglePlane.uAlpha], 3, {
                delay: 0.7,
                value: 1,
                ease: Power4.easeOut
              });
              TweenMax.to([uniformsContactCirclePlane.uOffset.value, uniformsContactTrianglePlane.uOffset.value], 3, {
                delay: 0.8,
                x: 0,
                y: 0,
                ease: Power4.easeOut
              });
            }, 500);
          }
        });
      }

      /*
       * Navigation Click Reset Event for Works
       *
       * @return {Void}
       */
      function shotCloseWorks() {
        console.log('%c Works closed', 'color: orange;');

        //---
        // 
        //the content here
        TweenMax.to(modalObjSubStoneForWorks.position, 3, {
          y: 2000,
          ease: Power2.easeIn
        });

        //---
        //
        //Turn on some lights 
        TweenMax.to(lights[3].position, 1.2, {
          delay: 1,
          z: lights[3].origData.z
        });
        TweenMax.to(lightMove.position, 1.2, {
          delay: 1,
          z: lightMove.origData.z
        });

        //---
        // 
        // works light
        var lightWorksColor = new THREE.Color().setHSL(0, 0, 0);
        TweenMax.to(lights[4].color, 1, {
          r: lightWorksColor.r,
          g: lightWorksColor.g,
          b: lightWorksColor.b
        });
      }

      /*
       * Navigation Click Reset Event for About
       *
       * @return {Void}
       */
      function shotCloseAbout() {
        console.log('%c About closed', 'color: orange;');

        //---
        // 
        //the content here
        TweenMax.to('#app-screen-detail__about', .5, {
          alpha: 0,
          onComplete: function onComplete() {
            this.target.removeClass('focus');

            //Scrolling Content
            TweenMax.set(scrollingText, {
              css: {
                display: 'none'
              },
              alpha: 0,
              onComplete: function onComplete() {
                TweenMax.killTweensOf([scrollingText, scrollingTextItem]);
              }
            });
          }
        });
      }

      /*
       * Navigation Click Reset Event for Contact
       *
       * @return {Void}
       */
      function shotCloseContact() {
        console.log('%c Contact closed', 'color: orange;');

        //---
        // 
        //the content here
        TweenMax.to('#app-screen-detail__contact', .5, {
          alpha: 0,
          onComplete: function onComplete() {
            this.target.removeClass('focus');
          }
        });

        //---
        // 	
        //Social Links
        var navMotion = new TimelineMax().staggerTo('.app-social-links a', 0.1, {
          x: 5,
          alpha: 0
        }, 0.1, 0).to('.app-social-links', .5, {
          css: {
            display: 'none'
          }
        });
      }

      /*
       * Hide sprites for Works
       *
       * @return {Void}
       */
      function hideSpritesWorks() {
        TweenMax.to(uniformsWorkMask.uAlpha, .5, {
          delay: 1,
          value: 0,
          ease: Power2.easeIn
        });
        TweenMax.to(workLine.scale, 0.5, {
          x: scaleMin,
          y: scaleMin,
          z: scaleMin,
          ease: Power2.easeIn
        });
      }

      /*
       * Hide sprites for About
       *
       * @return {Void}
       */
      function hideSpritesAbout() {
        //...
        //about sprites
        if (uniformsAboutContainer) {
          TweenMax.to(uniformsAboutContainer.uAlpha, 1.5, {
            value: 0,
            ease: Power4.easeOut
          });
          TweenMax.to(uniformsAboutContainer.uOffset.value, 1.5, {
            x: -2,
            y: -1.3,
            ease: Power4.easeOut
          });
        }
      }

      /*
       *  Hide sprites for Contact
       *
       * @return {Void}
       */
      function hideSpritesContact() {
        //...
        //Circle plane & Triangle plane
        if (uniformsContactCirclePlane && uniformsContactTrianglePlane) {
          TweenMax.to([uniformsContactCirclePlane.uAlpha, uniformsContactTrianglePlane.uAlpha], 1.5, {
            value: 0,
            ease: Power4.easeOut
          });
          TweenMax.to([uniformsContactCirclePlane.uOffset.value, uniformsContactTrianglePlane.uOffset.value], 1.5, {
            x: -6,
            y: -5.3,
            ease: Power4.easeOut
          });
        }

        //...
        //Pinprick Ball
        var _ballDoNotMovePosAtoms = [],
          _ballDoNotMoveScaleAtoms = [];
        pinprickBallAtoms.forEach(function (el, index) {
          _ballDoNotMovePosAtoms.push(el.position);
          _ballDoNotMoveScaleAtoms.push(el.scale);
        });
        TweenMax.to(_ballDoNotMoveScaleAtoms, 2, {
          delay: 0.7,
          x: 500,
          ease: Power3.easeIn
        });
        TweenMax.to(_ballDoNotMovePosAtoms, 2, {
          delay: 0.7,
          x: function x(index, target) {
            return pinprickBallAtoms[index].origData.x;
          },
          y: function y(index, target) {
            return pinprickBallAtoms[index].origData.y;
          },
          onComplate: function onComplate() {
            TweenMax.to(_ballDoNotMoveScaleAtoms, 1.5, {
              delay: 0.7,
              x: scaleMin,
              ease: Power4.easeOut
            });
          },
          ease: Power3.easeIn
        });
      }

      /*
       * Scene Animation Ready
       *
       * @return {Void}
       */
      function sceneAnimeReady() {
        //---
        //    
        // Hide circle of loader
        loaderCircleHide();

        //---
        //
        //loader animation    
        TweenMax.to(loaderSurrogateRings.scale, 1.5, {
          x: 0.1,
          y: 0.1,
          z: 0.1,
          ease: Power3.easeInOut
        });

        //---
        //
        //Display light plane     
        TweenMax.to(sceneReadyForLightPlane.position, 1, {
          y: -32,
          onComplete: function onComplete() {
            //---
            //
            //Display light to object  
            var lightObjColor = lights[3].color.getHSL(lights[3]);
            TweenMax.to(lightObjColor, .5, {
              h: 1,
              s: 1,
              l: 1,
              onUpdate: function onUpdate() {
                lights[3].color.setHSL(lightObjColor.h, lightObjColor.s, lightObjColor.l);
              }
            });

            //---
            //
            //3d modal cave animation
            TweenMax.to(modalObjMainCave.position, 0.5, {
              x: 0,
              y: -15,
              z: 0.8,
              onComplete: function onComplete() {
                //---
                //
                // enter button
                var mainSceneScreenData = nestedObjectToScreenXYZAndWH(modalObjMainCave, camera, renderer.domElement.width, renderer.domElement.height);
                document.querySelector(enterBtnID).style.top = mainSceneScreenData.position.y + 40 + 'px';
                $(enterBtnID).delay(500).queue('fx', function () {
                  $(this).addClass('is-active');
                });

                //---
                //
                // brand
                $(brandID).addClass('scene-ready');

                //---
                //
                // Scrolling Content
                $(scrollingText).addClass('scene-ready');
                TweenMax.to(scrollingText, 1.2, {
                  alpha: 1,
                  ease: Power2.easeOut
                });
              }
            });
            TweenMax.to(modalObjMainCave.scale, 1.5, {
              delay: 1,
              x: 0.035,
              y: 0.035,
              z: 0.035,
              ease: Power2.easeOut
            });
            var tl = new TimelineMax();
            tl.to(modalObjMainCave.rotation, 1.5, {
              x: -3.2,
              y: 0,
              z: 0,
              onComplete: function onComplete() {
                //---
                //
                // enter button
                TweenMax.to(enterBtnID, 1.2, {
                  alpha: 1,
                  ease: Power2.easeOut
                });

                //---
                //
                // click event
                $(enterBtnID).off('click.ENTER').on('click.ENTER', function () {
                  sceneAnimeClick();
                });
              }
            }).to(modalObjMainCave.rotation, 25, {
              y: getRadian(360),
              ease: Linear.easeNone,
              repeat: -1
            });
          }
        });
      }

      /*
       * Scene Animation Click Event
       *
       * @return {Void}
       */
      function sceneAnimeClick() {
        //---
        //
        //Hide light from scene ready  
        var sceneReadyForSpotLightColor = sceneReadyForSpotLight.color.getHSL(sceneReadyForSpotLight),
          sceneReadyForAmbientLightColor = sceneReadyForAmbientLight.color.getHSL(sceneReadyForAmbientLight);
        TweenMax.to(sceneReadyForSpotLightColor, 1.2, {
          h: 0,
          s: 0,
          l: 0,
          onUpdate: function onUpdate() {
            sceneReadyForSpotLight.color.setHSL(sceneReadyForSpotLightColor.h, sceneReadyForSpotLightColor.s, sceneReadyForSpotLightColor.l);
          },
          ease: Power2.easeIn
        });
        TweenMax.to(sceneReadyForAmbientLightColor, 1.2, {
          h: 0,
          s: 0,
          l: 0,
          onUpdate: function onUpdate() {
            sceneReadyForAmbientLight.color.setHSL(sceneReadyForAmbientLightColor.h, sceneReadyForAmbientLightColor.s, sceneReadyForAmbientLightColor.l);
          },
          ease: Power2.easeIn
        });

        //---
        //
        //Hide light plane
        TweenMax.to(sceneReadyForLightPlane.scale, 1, {
          x: scaleMin,
          y: scaleMin,
          z: scaleMin,
          ease: Power2.easeIn,
          onComplete: function onComplete() {
            TweenMax.to(sceneReadyForLightPlane.position, 0.5, {
              y: -yLimit
            });

            //---
            //
            //Display Other light
            var lightZeroColor = lights[0].color.getHSL(lights[0]);
            TweenMax.to(lightZeroColor, .5, {
              h: 1,
              s: 1,
              l: 1,
              onUpdate: function onUpdate() {
                lights[0].color.setHSL(lightZeroColor.h, lightZeroColor.s, lightZeroColor.l);
              }
            });
            var lightTwoColor = lights[2].color.getHSL(lights[2]);
            TweenMax.to(lightTwoColor, .5, {
              h: 1,
              s: 1,
              l: 1,
              onUpdate: function onUpdate() {
                lights[2].color.setHSL(lightTwoColor.h, lightTwoColor.s, lightTwoColor.l);
              }
            });

            //---
            //
            //Hide light to object  
            var lightObjColor = lights[3].color.getHSL(lights[3]);
            TweenMax.to(lightObjColor, .5, {
              h: 0,
              s: 0,
              l: 0,
              onUpdate: function onUpdate() {
                lights[3].color.setHSL(lightObjColor.h, lightObjColor.s, lightObjColor.l);
              }
            });
          }
        });

        //---
        //
        //brand
        $(brandID).removeClass('scene-ready').addClass('scene-start');

        //---
        //
        //Scrolling Content
        $(scrollingText).addClass('scene-start');

        //---
        //
        //3d modal cave loaded
        TweenMax.to(modalObjMainCave.rotation, 1.2, {
          y: modalObjMainCave.loadingData.ry,
          ease: Power2.easeOut
        });

        //---
        //
        //3d modal stone loaded
        TweenMax.to(modalObjSubStone.rotation, 1.2, {
          y: modalObjSubStone.loadingData.ry,
          ease: Power2.easeOut
        });

        //---
        //
        //enter button
        TweenMax.to(enterBtnID, 1.2, {
          alpha: 0,
          onComplete: function onComplete() {
            //---
            //
            //enter button
            TweenMax.set(this.target, {
              css: {
                display: 'none'
              }
            });

            //---
            //
            //Scrolling Content
            TweenMax.set(scrollingText, {
              css: {
                display: 'none'
              }
            });

            //---
            //
            //stop all animations of ready
            TweenMax.killAll();

            //---
            //
            //enter scene beginning
            sceneAnimeStart();

            //---
            //
            // add sound
            audioForBG(); // bg sound       
            audioWaveLine(); //audio wave line  
            __statusAudioAnimEnable = true;
          }
        });
      }

      /*
       * Scene Animation Start
       *
       * @return {Void}
       */
      function sceneAnimeStart() {
        //---
        //
        //Hide 3d modal stone
        TweenMax.to(modalObjSubStone.position, 8, {
          delay: 1,
          z: -3000,
          onComplete: function onComplete() {
            modalObjMainCave.remove(modalObjSubStone);
          }
        });

        //---
        //
        //Display Dynamic light
        var lightMoveColor = lightMove.color.getHSL(lightMove);
        TweenMax.to(lightMoveColor, 3.5, {
          h: 1,
          s: 1,
          l: 1,
          onUpdate: function onUpdate() {
            lightMove.color.setHSL(lightMoveColor.h, lightMoveColor.s, lightMoveColor.l);
          }
        });

        //---
        //
        //Animation of Balls
        __statusBallsMove = true;

        //---
        //
        //loader animation    
        __statusLoaderRemoveStart = true;
        var sceneAnimDuaration = 5;
        var sceneAnimDelay = 3.2;
        TweenMax.to(loaderSurrogateRings.scale, sceneAnimDuaration, {
          x: 0.3,
          y: 0.3,
          z: 0.3,
          ease: CustomEase.create("custom", "M0,0 C0,0 0.18896,-0.00276 0.30884,0.00136 0.36737,0.00338 0.40409,0.00477 0.45896,0.01577 0.50378,0.02476 0.53639,0.03458 0.5758,0.0549 0.61295,0.07407 0.64028,0.09366 0.66908,0.12417 0.70781,0.16517 0.73204,0.19964 0.76069,0.25068 0.80038,0.32141 0.82111,0.36969 0.85057,0.44758 0.88752,0.54527 0.90538,0.60421 0.93298,0.70622 0.96361,0.81946 1,1 1,1 ")
        });
        TweenMax.to(loaderSurrogateRings.position, 4, {
          z: 120,
          ease: Power1.easeIn
        });
        TweenMax.to(loaderSurrogateRings.scale, 3.5, {
          z: 40,
          ease: Power2.easeIn
        });

        // progress counter
        var counterProgress = {
          "var": 512
        };
        TweenMax.to(counterProgress, 3, {
          "var": 0,
          onUpdate: function onUpdate() {
            $(loaderProgressCounterID).html('<em>' + Math.trunc(counterProgress["var"]) + '</em>');
          },
          onComplete: function onComplete() {
            TweenMax.to(loaderProgressCounterID, .5, {
              alpha: 0,
              onComplete: function onComplete() {
                // Remove loader
                $(loaderProgressCounterID).closest(loaderProgressID).hide();
                $(loaderHeadphone).addClass('is-hide');
              }
            });
          },
          ease: Power2.easeOut
        });

        //---
        //
        //Ball of Navigation
        var _navBallPosAtoms = [];
        navBallAtoms.forEach(function (el, index) {
          _navBallPosAtoms.push(el.position);
        });
        TweenMax.to(_navBallPosAtoms, sceneAnimDuaration - 1, {
          z: -100,
          delay: sceneAnimDelay + 1,
          onComplete: function onComplete() {
            //This state can make navigation touch effective
            __statusLoaderRemoveEnd = true;
          }
        });

        //---
        //
        //ball
        var _ballPosAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
        });
        TweenMax.to(_ballPosAtoms, sceneAnimDuaration, {
          z: -100,
          delay: sceneAnimDelay,
          ease: Power2.easeOut
        });

        //---
        //
        //3d modal cave loaded
        TweenMax.to(modalObjMainCave.scale, sceneAnimDuaration, {
          x: modalObjMainCave.loadingData.sx,
          y: modalObjMainCave.loadingData.sy,
          z: modalObjMainCave.loadingData.sz,
          ease: Power2.easeIn
        });
        TweenMax.to(modalObjMainCave.position, 2.5, {
          y: -20
        });
        TweenMax.to(modalObjMainCave.position, sceneAnimDuaration, {
          x: 0,
          y: 110,
          z: -115,
          delay: sceneAnimDelay,
          ease: Power2.easeIn
        });
        TweenMax.to(modalObjMainCave.rotation, sceneAnimDuaration, {
          x: -3.0,
          y: -0.8,
          z: 0,
          delay: sceneAnimDelay,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            // set the original position
            modalObjMainCave.origData = {
              x: modalObjMainCave.position.x,
              y: modalObjMainCave.position.y,
              z: modalObjMainCave.position.z,
              rx: modalObjMainCave.rotation.x,
              ry: modalObjMainCave.rotation.y,
              rz: modalObjMainCave.rotation.z,
              sx: modalObjMainCave.scale.x,
              sy: modalObjMainCave.scale.y,
              sz: modalObjMainCave.scale.z
            };

            //enable scene click
            __statusSceneClickEnable = true;

            //enable scene move
            __statusSceneMove = true;

            //Initialize Ball of Navigation
            ballOfNavInit();

            // Scene Animations
            animeForScene(false);

            // Text Animations
            animeForText(false, true);

            //audio wave line
            audioPlane.scale.setScalar(1);

            //brand
            $(brandID).removeClass('scene-start').addClass('scene-end');

            //navigation
            $(navID).removeClass('scene-start').addClass('scene-end');

            //Animation enables for Balls
            __statusBallsAnimEnable = true;

            //Balls Reset
            ballsReset();
          }
        });
      }

      /*
       * Initialize Main Scene
       *
      * @param  {Number} loadedPercent  - The percentage value after the page loads the image.
       * @param  {Number} imgTotal       - The total number of imags.
       * @return {Void}
       */
      function mainSceneInit(loadedPercent, imgTotal) {
        //
        //
        //
        var modelLoad = function modelLoad() {
          //---
          var objFiles = mainConfig.models;
          var objIndex = objFiles.length;
          var onObjProgress = function onObjProgress(xhr) {
            if (xhr.lengthComputable) {
              var percentComplete = xhr.loaded / xhr.total * 100;
              //console.log( Math.round(percentComplete, 2) + '% downloaded' );
            }
          };
          var onObjError = function onObjError(xhr) {};
          objFiles.forEach(function (element) {
            loaderModel.load(element, function (object) {
              var totalComplatedPercent = parseInt(loadedPercent + Math.round(100 - loadedPercent) / objIndex);

              //animation classes for loader
              $('body').addClass('loaded' + (10 - (objIndex - 1)));

              //loading percent 
              $(loaderProgressID + ' span').text(totalComplatedPercent);

              // circle of loader progress
              loaderCircleProgress(totalComplatedPercent);

              /////////////////////////////
              /////////////////////////////
              //3d main object 
              if (element.indexOf('cave-webgl.glb') >= 0) {
                //
                console.log('▶▶▶▶▶ Total downloaded ◀◀◀◀◀◀ ( ' + totalComplatedPercent + '% ----- ["3d main object", "images"] )');

                //
                var gltfMesh = object.scene;
                gltfMesh.traverse(function (child) {
                  if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial({
                      color: 0xdddddd,
                      shininess: 80,
                      wireframe: true,
                      map: loaderImage.load(mainConfig.textures[0]),
                      side: THREE.DoubleSide,
                      fog: false //Excluding objects from fog
                    });

                    // set castShadow to object
                    child.castShadow = true;
                  }
                });
                modalObjMainCave.add(gltfMesh);
                scene.add(modalObjMainCave);

                // set new size
                //--------------			
                modalObjMainCave.scale.setScalar(0.7);

                // set new position to center
                //--------------
                modalObjMainCave.position.x = 0;
                modalObjMainCave.position.y = -60;
                modalObjMainCave.position.z = -280;
                modalObjMainCave.rotation.x = -3.2, modalObjMainCave.rotation.y = 0;
                modalObjMainCave.rotation.z = 0;

                //save date using loading progress
                modalObjMainCave.loadingData = {
                  x: modalObjMainCave.position.x,
                  y: modalObjMainCave.position.y,
                  z: modalObjMainCave.position.z,
                  rx: modalObjMainCave.rotation.x,
                  ry: modalObjMainCave.rotation.y,
                  rz: modalObjMainCave.rotation.z,
                  sx: modalObjMainCave.scale.x,
                  sy: modalObjMainCave.scale.y,
                  sz: modalObjMainCave.scale.z
                };

                // set new size to hide this object
                //--------------			
                modalObjMainCave.scale.setScalar(scaleMin);

                /*
                modalObjMainCave.children[0].children.forEach((el, index) => {
                	el.material.oldColor = el.material.color;
                	el.material.color = {
                		r: 0,
                		g: 0,
                		b: 0
                	}
                	});
                */
              } //endif cave-webgl.glb

              /////////////////////////////
              /////////////////////////////
              //3d sub object 1 (brand)
              if (element.indexOf('brand.glb') >= 0) {
                //
                console.log('▶▶▶▶▶ Total downloaded ◀◀◀◀◀◀ ( ' + totalComplatedPercent + '% ----- ["3d sub object 1 (brand)", "3d main object", "images"] )');
                var _gltfMesh = object.scene;
                _gltfMesh.traverse(function (child) {
                  if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial({
                      color: 0x333333,
                      shininess: 50,
                      wireframe: true,
                      side: THREE.DoubleSide,
                      map: loaderImage.load(mainConfig.textures[6]),
                      fog: false //Excluding objects from fog
                    });

                    // set castShadow to object
                    child.castShadow = true;
                  }
                });
                modalObjSubBrand.add(_gltfMesh);
                modalObjMainCave.add(modalObjSubBrand);

                // set new size
                //--------------			
                modalObjSubBrand.scale.setScalar(30);

                // set new position to center
                //--------------
                modalObjSubBrand.position.x = 70;
                modalObjSubBrand.position.y = 60;
                modalObjSubBrand.position.z = 0;
                modalObjSubBrand.rotation.x = 3.3;
                modalObjSubBrand.rotation.y = -5.6;
                modalObjSubBrand.rotation.z = 0;
              } //endif brand.glb

              /////////////////////////////
              /////////////////////////////
              //3d sub object 2 (stone)
              if (element.indexOf('stone-anim.glb') >= 0) {
                //
                console.log('▶▶▶▶▶ Total downloaded ◀◀◀◀◀◀ ( ' + totalComplatedPercent + '% ----- ["3d sub object 2 (stone)", "3d main object", "images"] )');
                var _gltfMesh2 = object.scene;
                _gltfMesh2.traverse(function (child) {
                  if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial({
                      color: 0x333333,
                      shininess: 1,
                      wireframe: false,
                      map: loaderImage.load(mainConfig.textures[6]),
                      side: THREE.DoubleSide,
                      fog: false //Excluding objects from fog
                    });

                    // set castShadow to object
                    child.castShadow = true;
                  }
                });
                modalObjSubStone.add(_gltfMesh2);
                modalObjMainCave.add(modalObjSubStone);

                // set new size
                //--------------			
                modalObjSubStone.scale.setScalar(50);

                // set new position to center
                //--------------
                modalObjSubStone.position.x = 0;
                modalObjSubStone.position.y = 0;
                modalObjSubStone.position.z = 0;

                //save date using loading progress
                modalObjSubStone.loadingData = {
                  x: modalObjSubStone.position.x,
                  y: modalObjSubStone.position.y,
                  z: modalObjSubStone.position.z,
                  rx: modalObjSubStone.rotation.x,
                  ry: modalObjSubStone.rotation.y,
                  rz: modalObjSubStone.rotation.z,
                  sx: modalObjSubStone.scale.x,
                  sy: modalObjSubStone.scale.y,
                  sz: modalObjSubStone.scale.z
                };
              } //endif stone-anim.glb

              /////////////////////////////
              /////////////////////////////
              //3d sub object 3 (stone for works)
              if (element.indexOf('stone.glb') >= 0) {
                //
                console.log('▶▶▶▶▶ Total downloaded ◀◀◀◀◀◀ ( ' + totalComplatedPercent + '% ----- ["3d sub object 3 (stone for works)", "3d main object", "images"] )');
                fontLoader.load(mainConfig.fonts[0], function (font) {
                  var tooltipContent = '';
                  var radius = 850;
                  var angle = Math.PI * 2 / worksData.length;

                  /*
                  x= r * cosθ  
                  y= r * sinθ  
                  */

                  var gltfMesh = object.scene;
                  gltfMesh.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                      child.material = new THREE.MeshPhongMaterial({
                        color: 0xdddddd,
                        shininess: 1,
                        wireframe: false,
                        map: loaderImage.load(mainConfig.textures[6]),
                        side: THREE.DoubleSide,
                        fog: false //Excluding objects from fog
                      });

                      // set castShadow to object
                      child.castShadow = true;
                    }
                  });
                  gltfMesh.material = new THREE.ShaderMaterial({
                    uniforms: {},
                    vertexShader: vertex_glow,
                    fragmentShader: fragment_glow,
                    transparent: true,
                    wireframe: false,
                    side: THREE.DoubleSide,
                    blending: THREE.AdditiveBlending
                  });
                  gltfMesh.scale.set(150, 150, 150);

                  // set new size
                  //--------------			
                  modalObjSubStoneForWorks.scale.setScalar(0.20);

                  // set new position to center
                  //--------------
                  modalObjSubStoneForWorks.position.x = 100;
                  modalObjSubStoneForWorks.position.y = 420 + yLimit;
                  modalObjSubStoneForWorks.position.z = 0;
                  modalObjSubStoneForWorks.rotation.x = -1.6;
                  modalObjSubStoneForWorks.origData = {
                    x: modalObjSubStoneForWorks.position.x,
                    y: modalObjSubStoneForWorks.position.y,
                    z: modalObjSubStoneForWorks.position.z,
                    rx: modalObjSubStoneForWorks.rotation.x,
                    ry: modalObjSubStoneForWorks.rotation.y,
                    rz: modalObjSubStoneForWorks.rotation.z,
                    sx: modalObjSubStoneForWorks.scale.x,
                    sy: modalObjSubStoneForWorks.scale.y,
                    sz: modalObjSubStoneForWorks.scale.z
                  };
                  worksData.forEach(function (item, index) {
                    var i = index + 1;
                    // clone 
                    var newGltfMesh = gltfMesh.clone();

                    // Set a random position as a circular shape with a custom radius
                    var posx = Math.sin(i * angle) * radius;
                    var posy = Math.cos(i * angle) * radius;
                    var posz = 0; // distance to camera   

                    // add item
                    //-------------------   
                    modalObjSubStoneForWorks.add(generateWorksText(font, '+', 'nucleus__worktitle-' + i, posx, posy, posz));
                    modalObjSubStoneForWorks.add(newGltfMesh);
                    newGltfMesh.name = 'nucleus__workmain-' + i;
                    newGltfMesh.targetid = i;
                    newGltfMesh.href = item.url;
                    newGltfMesh.origData = {
                      x: newGltfMesh.position.x,
                      y: newGltfMesh.position.y,
                      z: newGltfMesh.position.z,
                      rx: newGltfMesh.rotation.x,
                      ry: newGltfMesh.rotation.y,
                      rz: newGltfMesh.rotation.z,
                      sx: newGltfMesh.scale.x,
                      sy: newGltfMesh.scale.y,
                      sz: newGltfMesh.scale.z
                    };
                    newGltfMesh.rotationSpeed = 0.006 * Math.random();
                    newGltfMesh.position.set(posx, posy, posz);
                    newGltfMesh.rotation.set(1 * Math.random(), 0, 1 * Math.random());

                    // add cover
                    //-------------------   
                    var workContainerGeometry = new THREE.TetrahedronGeometry(2, 0);
                    var workTexture = loaderImage.load(item.cover);
                    workTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
                    workTexture.generateMipmaps = false;
                    workTexture.wrapS = workTexture.wrapT = THREE.ClampToEdgeWrapping;
                    workTexture.minFilter = THREE.LinearFilter;
                    var workContainerMaterial = new THREE.MeshPhongMaterial({
                      color: 0x666666,
                      shininess: 0,
                      map: workTexture,
                      side: THREE.DoubleSide
                    });
                    var objCover = new THREE.Mesh(workContainerGeometry, workContainerMaterial);
                    objCover.name = 'nucleus__workcover-' + i;
                    //objCover.scale.setScalar(scaleMin);
                    objCover.visible = false;

                    //Positioning a 3d object in the corners of the canvas
                    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
                    var corner = new THREE.Vector2();
                    var cornerPoint = new THREE.Vector3();
                    corner.set(1, 1); // NDC of the top-right corner
                    raycaster.setFromCamera(corner, camera);
                    raycaster.ray.intersectPlane(plane, cornerPoint);
                    objCover.position.copy(cornerPoint).add(new THREE.Vector3(10, -40, -80)); // align the position of the box 

                    coverContainer.add(objCover);

                    // add tooltip
                    //-------------------   
                    tooltipContent += "<div class=\"app-tooltip\" id=\"app-workdesc__nucleus-".concat(index, "\"><h3>").concat(item.title, "</h3>").concat(item.desc, "</div>");
                  }); //end forEach()

                  if ($('#app-screen-detail__works .app-tooltip').length === 0) {
                    $('#app-tooltip__container').prepend(tooltipContent);
                  }
                  scene.add(coverContainer);
                  modalObjSubStoneForWorks.position.y = 2000;

                  // line
                  //-------------------
                  // Finding position of an object relative to a 
                  coverLineTempTargetReference = modalObjSubStoneForWorks.children[1];
                  var objPosWorld = coverLineTempTargetReference.getWorldPosition(new THREE.Vector3());
                  var obj2PosWorld = coverContainer.children[0].getWorldPosition(new THREE.Vector3());
                  var coverLineMat = new THREE.LineBasicMaterial({
                    color: 0xdddddd
                  });
                  var coverLinePoints = [];
                  coverLinePoints.push(obj2PosWorld);
                  coverLinePoints.push(objPosWorld);
                  var coverLineGeo = new THREE.BufferGeometry().setFromPoints(coverLinePoints);
                  coverLine = new THREE.Line(coverLineGeo, coverLineMat);
                  coverLine.visible = false;
                  scene.add(coverLine);
                  var coverLinePoints2 = [];
                  coverLinePoints2.push(new THREE.Vector3(obj2PosWorld.x, obj2PosWorld.y, obj2PosWorld.z + 40));
                  coverLinePoints2.push(objPosWorld);
                  var coverLineGeo2 = new THREE.BufferGeometry().setFromPoints(coverLinePoints2);
                  coverLine2 = new THREE.Line(coverLineGeo2, coverLineMat);
                  coverLine2.visible = false;
                  scene.add(coverLine2);

                  //random stones
                  //-------------------   
                  var numStones = browser.isMobile ? 30 : 120;
                  for (var i = 0; i < numStones; i++) {
                    var _x = Math.sin(i * 5) * (1000 * getRandomFloat(0.2, 2));
                    var _y = Math.cos(i * 5) * (1000 * getRandomFloat(0.2, 2));
                    var _z = Math.tan(i * 5) * (200 * getRandomFloat(0.2, 1));
                    var _geo = new THREE.TetrahedronGeometry(15, 0);
                    var _mat = new THREE.MeshPhongMaterial({
                      color: 0x666666,
                      shininess: 3,
                      wireframe: false,
                      map: loaderImage.load(mainConfig.textures[6]),
                      side: THREE.DoubleSide,
                      fog: false //Excluding objects from fog
                    });
                    var _mesh = new THREE.Mesh(_geo, _mat);
                    _mesh.position.set(_x, _y, _z);
                    _mesh.rotation.set(1 * Math.random(), 0, 1 * Math.random());
                    _mesh.scale.setScalar(1 * Math.random());
                    modalObjSubStoneForWorks.add(_mesh);
                  }
                  modalObjMainCave.add(modalObjSubStoneForWorks);
                }); //end load function
              } //endif stone.glb

              /////////////////////////////
              /////////////////////////////
              //all objects loaded completely
              if (totalComplatedPercent == 100) {
                TweenMax.to([loaderProgressID + ' span', loaderProgressID + ' strong'], 1, {
                  alpha: 0,
                  onComplete: function onComplete() {
                    // Remove loader
                    TweenMax.set(this.target, {
                      css: {
                        display: 'none'
                      }
                    });
                  }
                });

                //Scene Animation Ready
                sceneAnimeReady();
              }

              /////////////////////////////
              /////////////////////////////
              objIndex--;
            }, onObjProgress, onObjError);
          }); //end foreach objFiles.forEach
        };

        //
        //
        //
        if (loadedPercent < 100) {
          videos.forEach(function (element) {
            var _video = document.createElement('video');
            _video.src = element;
            _video.addEventListener('loadedmetadata', function (e) {
              //Video has started loading successfully
              videosLoaded++;

              //debug
              console.log('videosTotal: ' + videosTotal + ', videosLoaded: ' + videosLoaded);
              console.log('videos loaded!');
              if (videosLoaded == videosTotal) modelLoad();
            }, false);
          });
        }

        //
        //
        //
        if (videosLoaded == videosTotal) modelLoad();
      }

      /*
       * Scene Reset
       *
       * @return {Void}
       */
      function sceneReset() {
        //---Reset body class
        $('body').removeClass('primarymenu-active');

        //---Reset brand
        $(brandID).removeClass('scene-start').addClass('scene-end');

        //---Reset navigation
        $(navID).removeClass('scene-start').addClass('scene-end');

        //---Reset balls
        __statusBallsRestore = false;

        //---Reset camera
        TweenMax.to(camera.position, 2, {
          x: 0,
          y: 0,
          z: 100,
          onComplete: function onComplete() {
            //Ball of Navigation Control
            ballOfNavControl('open', null);

            //text animation reset
            $(mainTextSliderID).removeClass('is-click');
            animeForText(false, true);

            //3d modal cave animation
            TweenMax.to(modalObjMainCave.rotation, 1, {
              y: modalObjMainCave.origData.ry,
              ease: Power2.easeOut
            });
            TweenMax.to(modalObjMainCave.position, 1, {
              x: modalObjMainCave.origData.x,
              y: modalObjMainCave.origData.y,
              z: modalObjMainCave.origData.z,
              ease: Power2.easeOut
            });

            //Balls Reset
            if (!__statusBallsRestore) {
              ballsReset();
            }

            // Reset light position
            __statusLightMove = true;

            //enable scene move
            __statusSceneMove = true;
          }
        });

        //--- 
        // hide works sprites  
        hideSpritesWorks();

        //--- 
        // hide about sprites    
        hideSpritesAbout();

        //--- 
        // hide contact sprites      
        hideSpritesContact();

        //--- 
        //navigation
        menuToggle('close-all');

        //--- 
        //resume everything including tweens, delayedCalls, and timelines
        TweenMax.resumeAll();
      }

      /*
       * Balls Reset
       *
       * @return {Void}
       */
      function ballsReset() {
        //Animation of Balls
        __statusBallsMove = true;

        //
        var _ballPosAtoms = [],
          _ballScaleAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
          _ballScaleAtoms.push(el.scale);
        });
        TweenMax.to(_ballPosAtoms, 1.5, {
          y: function y(index, target) {
            return flyingBallAtoms[index].origData.y;
          },
          z: function z(index, target) {
            return flyingBallAtoms[index].origData.z;
          }
        });

        //stop a TweenMax looped with "yoyo" paramater
        TweenMax.killTweensOf(_ballScaleAtoms);

        //
        TweenMax.to(_ballScaleAtoms, 1.5, {
          x: function x(index, target) {
            return flyingBallAtoms[index].origData.sx;
          },
          y: function y(index, target) {
            return flyingBallAtoms[index].origData.sy;
          },
          z: function z(index, target) {
            return flyingBallAtoms[index].origData.sz;
          }
        });
      }

      /*
       * Initialize Ball of Navigation
       *
       * @return {Void}
       */
      function ballOfNavInit() {
        var _navBallScaleAtoms = [];
        navBallAtoms.forEach(function (el, index) {
          _navBallScaleAtoms.push(el.scale);
        });
        TweenMax.to(_navBallScaleAtoms, 1.5, {
          x: function x(index, target) {
            return navBallAtoms[index].speed * navBallAtoms[index].origData.sx;
          },
          y: function y(index, target) {
            return navBallAtoms[index].speed * navBallAtoms[index].origData.sy;
          },
          z: function z(index, target) {
            return navBallAtoms[index].speed * navBallAtoms[index].origData.sz;
          },
          repeat: -1,
          yoyo: true
        });

        //display navigation
        $('.app-menu').addClass('is-active');
      }

      /*
      * Root Background
      *
      * @return {Void}
      */
      function rootBG() {
        var skyGeometry = new THREE.SphereGeometry(60, 60, 60);
        var skyMaterial = new THREE.MeshBasicMaterial({
          color: 0x202020,
          map: loaderImage.load(mainConfig.textures[5]),
          side: THREE.DoubleSide
        });
        skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
        skyBox.position.set(0, 200, -4000);
        skyBox.scale.setScalar(35);
        skyBox.scale.x = 80;
        skyBox.scale.y = 40;
        scene.add(skyBox);
      }

      /*
       * Text Animations
       *
       * @param  {Boolean} init      - Initialize load e.
       * @param  {Boolean} loopAnim  - Looping animation.
       * @return {Void}
       */
      function animeForText(init, loopAnim) {
        var initFn = function initFn() {
          var $slides = $(mainTextDescSliderID);
          $slides.each(function (index) {
            var $this = $(this),
              textArr = [$this.find('> h2'), $this.find('> p')];
            textArr.forEach(function (el, index) {
              var titleText = new SplitText(el, {
                type: "chars"
              });
              TweenMax.set(titleText.chars, {
                y: 70,
                alpha: 0
              });
            }); // end forEach         
          });
        };

        //Initialize the text display.
        if (init) {
          initFn();
        } else {
          var $slides = $(mainTextDescSliderID);
          var currentSlide = 0;
          var textAnim = true;

          //display text wrapper
          $(mainTextSliderID).addClass('is-active');
          var nextSlide = function nextSlide() {
            textAnim = true;

            //
            if (textAnim) {
              var $this = $slides.eq(currentSlide),
                textArr = [$this.find('> h2'), $this.find('> p')];
              textAnim = false;
              textArr.forEach(function (el, index) {
                var titleText = new SplitText(el, {
                  type: "chars"
                });
                var numTitleChars = titleText.chars.length;
                var tl = new TimelineMax({
                  repeat: 0,
                  onComplete: function onComplete() {
                    //tl.pause("explode");
                  }
                });

                ////randomly change alpha of each word
                for (var i = 0; i < numTitleChars; i++) {
                  tl.from(titleText.chars[i], 1, {
                    opacity: 0,
                    webkitFilter: "blur(0)",
                    ease: Back.easeOut
                  }, Math.random() * 1);
                }

                //add explode label 2 seconds after reset animation is done
                tl.add("explode", "+=2");

                //add explode effect
                for (var _i = 0; _i < numTitleChars; _i++) {
                  tl.to(titleText.chars[_i], 0.5, {
                    delay: 1.5,
                    opacity: 0,
                    webkitFilter: "blur(5px)"
                  }, "explode+=" + Math.random() * 0.2);
                }

                /*
                tl.staggerFrom( titleText.chars, 1.5, {
                    ease: Back.easeOut,
                    y: 120,
                    alpha: 0
                }, 0.02 )
                .staggerTo( titleText.chars, 1.5, {
                    delay: 2,
                    y: -50,
                    scaleY: 1.2,
                    ease: Back.easeOut,
                    alpha: 0
                }, 0.03, "chars+=0.1" );
                */
              }); // end forEach  

              //
              if ($(mainTextSliderID).hasClass('is-click') || !loopAnim) {
                //kill only delayedCalls
                TweenMax.killAll(false, false, true, false);
                setTimeout(function () {
                  initFn();
                }, 1000);
              } else {
                TweenMax.delayedCall($(mainTextSliderID).data('tween-delay'), nextSlide);
              }
            } //endif textAnim

            //slide animation
            if (currentSlide < $slides.length - 1) {
              currentSlide++;
            } else {
              currentSlide = 0;
            }
          }; // end nextSlide()

          nextSlide();
        } //endif init
      }

      /*
       * Scene Animations
       *
       * @param  {Boolean} init  - Initialize load event.
       * @return {Void}
       */
      function animeForScene(init) {
        if (init) {
          TweenMax.set(colorEffect.uniforms.contrast, {
            value: 0
          });
          TweenMax.set(hBlur.uniforms.h, {
            value: 0
          });
        } else {
          //                    
          //                    TweenMax.to( colorEffect.uniforms.contrast, 0.2, {
          //                        value: 1.2,
          //                        delay: 2,
          //                        onComplete: function() {
          //                            TweenMax.to( this.target, 2.6, {
          //                                value: 0,
          //                                repeatDelay: 10, 
          //                                repeat: -1
          //                            });	    
          //                        }
          //                    });	   

          //                    TweenMax.to( hBlur.uniforms.h, 0.2, {
          //                        value: 0.002,
          //                        delay: 2,
          //                        onComplete: function() {
          //
          //                            TweenMax.to( this.target, 0.2, {
          //                                value: 0,
          //                                repeatDelay: 10, 
          //                                repeat: -1
          //                            });	    
          //                        }
          //                    }); 
        }
      }

      /*
       * Menu Background Animations
       *
       * @return {Void}
       */
      function animeForMenuBGNoise() {
        menuBGNoiseconf.coef = menuBGconf.noiseCoef * 0.00012;
        menuBGNoiseconf.height = menuBGconf.heightCoef;
        menuBGNoiseconf.time = Date.now() * menuBGconf.timeCoef * 0.000002;
      }

      /*
      * Initialize Scrolling Content
      *
      * @return {Void}
      */
      function scrollingTextInit() {
        var scrollingTextHeight = $(scrollingText).height();
        TweenMax.set(scrollingText, {
          scale: 0.5
        });

        //initially colorize each box and position in a row
        TweenMax.set(scrollingTextItem, {
          y: function y(i) {
            return i * 20;
          }
        });
        TweenMax.to(scrollingTextItem, 3, {
          ease: Linear.easeNone,
          y: '+=' + scrollingTextHeight,
          //move each box 500px to right
          modifiers: {
            y: function y(x) {
              return x % scrollingTextHeight; //force x value to be between 0 and 500 using modulus
            }
          },
          repeat: -1
        });
        TweenMax.set(scrollingText, {
          overflow: 'hidden'
        });
      }

      /*
      * Initialize About Sprites
      *
      * @return {Void}
      */
      function spritesInitForAbout() {
        var aboutContainerGeometry = new THREE.CircleGeometry(64, 64, 64);

        // create the video element
        var createVideoObj = function createVideoObj(url, scale, index) {
          var videoAbout = document.createElement('video');
          videoAbout.src = url;
          var videoAboutTexture = new THREE.VideoTexture(videoAbout);
          videoAboutTexture.minFilter = THREE.LinearFilter;
          videoAboutTexture.magFilter = THREE.LinearFilter;
          videoAboutTexture.format = THREE.RGBFormat;

          // pause the video
          videoAboutTexture.image.autoplay = true;
          videoAboutTexture.image.loop = true;
          videoAboutTexture.image.currentTime = 0;
          videoAboutTexture.image.muted = true;
          videoAboutTexture.image.play();
          uniformsAboutContainer = {
            uTexture: {
              value: videoAboutTexture
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(-2, -1.3)
            },
            uAlpha: {
              //opacity
              value: 0
            }
          };
          var aboutContainerMaterial = new THREE.ShaderMaterial({
            uniforms: uniformsAboutContainer,
            vertexShader: vertex_distortion,
            fragmentShader: fragment_distortion,
            transparent: true
          });
          var obj = new THREE.Mesh(aboutContainerGeometry, aboutContainerMaterial);
          for (var i = 0; i < 60; i++) {
            var col = 200 + Math.sin(i) * 5;
            obj.geometry.faces[i].color = new THREE.Color("hsl(" + Math.abs(col) + ", 100%, 50%)");
          }
          scene.add(obj);
          obj.scale.setScalar(scale);
          return obj;
        };
        aboutContainer = createVideoObj(videos[0], 30);

        // Create line
        var aboutLineGeometry = new THREE.IcosahedronGeometry(1.2, 1);
        var aboutLineMaterial = new THREE.ShaderMaterial({
          uniforms: uniformsAboutContainer,
          vertexShader: vertex_distortion,
          fragmentShader: fragment_distortion,
          transparent: true,
          wireframe: true,
          side: THREE.DoubleSide
        });
        aboutLine = new THREE.Mesh(aboutLineGeometry, aboutLineMaterial);
        aboutContainer.add(aboutLine);
      }
      ;

      /*
      * Initialize Work Sprites
      *
      * @return {Void}
      */
      function spritesInitForWork() {
        //---  Create line
        workLine = generateLine(0, 0, 0, 1.5, 0, 0, 10);
        scene.add(workLine);
        workLine.scale.setScalar(scaleMin);

        //---  add mask to scene
        uniformsWorkMask = {
          uTexture: {
            value: loaderImage.load(mainConfig.textures[6])
          },
          uOffset: {
            //distortion strength
            value: new THREE.Vector2(0, 0)
          },
          uAlpha: {
            //opacity
            value: 0
          }
        };
        var workMaskGeometry = new THREE.PlaneGeometry(xLimit * 4, yLimit * 3, 32);
        var workMaskMaterial = new THREE.ShaderMaterial({
          uniforms: uniformsWorkMask,
          vertexShader: vertex_distortion,
          fragmentShader: fragment_distortion,
          transparent: true
        });
        workMask = new THREE.Mesh(workMaskGeometry, workMaskMaterial);
        scene.add(workMask);

        //---   add mask of detail to scene
        uniformsWorkDetailMask = {
          uTexture: {
            value: loaderImage.load(mainConfig.textures[6])
          },
          uOffset: {
            //distortion strength
            value: new THREE.Vector2(0, 0)
          },
          uAlpha: {
            //opacity
            value: 0
          }
        };
        var workDetailMaskGeometry = new THREE.PlaneGeometry(xLimit * 2, yLimit * 2, 32);
        var workDetailMaskMaterial = new THREE.ShaderMaterial({
          uniforms: uniformsWorkDetailMask,
          vertexShader: vertex_distortion,
          fragmentShader: fragment_distortion,
          transparent: true
        });
        workDetailMask = new THREE.Mesh(workDetailMaskGeometry, workDetailMaskMaterial);
        workDetailMask.position.z = 50; // to cover the entire scene
        scene.add(workDetailMask);
      }

      /*
      * Initialize Work Detail Sprites
      *
      * @return {Void}
      */
      function spritesInitForWorkDetail() {
        //
        var _navWorkDetailPos = navBallAtoms[0].origData;
        var _workDetailPosDiffZ = _navWorkDetailPos.z + 70;
        tetrahedronParticleDefaultY = _navWorkDetailPos.y;

        //---
        // 
        // Tetrahedron particle
        var geometryPR = new THREE.TetrahedronGeometry(1.5, 0),
          materialPR = new THREE.MeshStandardMaterial({
            color: 0x1b6cff,
            roughness: 0.4,
            metalness: 1.0,
            map: loaderImage.load(mainConfig.textures[3]),
            side: THREE.DoubleSide
          });
        for (var i = 0; i < tetrahedronParticleTotal; i++) {
          var x = _navWorkDetailPos.x + getRandomFloat(xLimit / 2, xLimit),
            y = tetrahedronParticleDefaultY + yLimit / 2 + Math.random() * yLimit / 2,
            z = _workDetailPosDiffZ - 100 + Math.random() * 50;
          var speed = Math.random();
          var _obj = new THREE.Mesh(geometryPR, materialPR);
          _obj.position.set(x, y, z);
          _obj.position.multiplyScalar(Math.random() * 1); //Multiplies this vector by scalar s.
          _obj.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
          _obj.name = 'nucleus__tetrahedron-particles-' + i;
          _obj.speed = speed;

          // set the original position
          _obj.origData = {
            x: _obj.position.x,
            y: _obj.position.y,
            z: _obj.position.z,
            rx: _obj.rotation.x,
            ry: _obj.rotation.y,
            rz: _obj.rotation.z,
            sx: _obj.scale.x,
            sy: _obj.scale.y,
            sz: _obj.scale.z
          };
          tetrahedronParticleGroup.add(_obj);
          scene.add(tetrahedronParticleGroup);
        }

        // hide Tetrahedron particle
        //
        var _tetrahedronParticlePosAtoms = [];
        tetrahedronParticleGroup.children.forEach(function (el, index) {
          _tetrahedronParticlePosAtoms.push(el.position);
        });
        TweenMax.set(_tetrahedronParticlePosAtoms, {
          y: '-=' + yLimit * 3
        });
      }

      /*
       * Background Sound
       *
       * @return {Void}
       */
      function audioForBG() {
        // create an AudioListener and add it to the camera
        var listener = new THREE.AudioListener();
        camera.add(listener);

        // create a global audio source
        soundBg = new THREE.Audio(listener);

        // load a sound and set it as the Audio object's buffer
        var audioLoader = new THREE.AudioLoader();
        audioLoader.load(mainConfig.audios[0], function (buffer) {
          soundBg.setBuffer(buffer);
          soundBg.setLoop(true);
          soundBg.setVolume(0.6);
          soundBg.play();
        });
      }

      /*
       * Audio Wave Line 
       *
       * @return {Void}
       */
      function audioWaveLine() {
        for (var i = 0; i < audioPointCount; i++) {
          audioPoints.push({
            initValue: THREE.Math.randFloat(-1, 1),
            amplitude: THREE.Math.randFloat(1, 3),
            speed: THREE.Math.randFloat(.5, 2)
          });
        }
        generateAudioWaveGraph(audioPointCount);
      }

      /*
       * Create Particles of loading
       *
       * @return {Void}
       */
      function generateLoader() {
        // Create basic cube geometry and materials
        var LoaderGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5, 0, 0);
        var loaderMaterial = new THREE.MeshPhongMaterial({
          flatShading: true,
          //blending: THREE.AdditiveBlending,
          transparent: true,
          color: 0x0000ff
        });

        // Helper function: Builds a single ring of cubes
        var buildRing = function buildRing(currentRing) {
          var cube = [];
          var cubeSleeve = [];
          var cubeCount = 400; // Reducing cubeCount reduces number of cubes in each ring
          var cubeDist = cubeCount; // Can be used to modify distribution of cubes in each ring, try commented out line below...
          // const cubeCount = 7; const cubeDist = 26;

          for (var i = 0; i < cubeCount; i++) {
            cube[i] = new THREE.Mesh(LoaderGeometry, loaderMaterial);
            cube[i].position.y = 60;
            cube[i].scale.set(Math.random() * 1, Math.random() * 1, Math.random() * 1);
            cubeSleeve[i] = new THREE.Object3D();
            cubeSleeve[i].add(cube[i]);
            cubeSleeve[i].rotation.z = i * (360 / cubeDist) * Math.PI / 180;
            var z = Math.random() * 155; //ring width
            var speed = Math.random();
            cubeSleeve[i].position.z = z;
            cubeSleeve[i].speed = speed;

            // set the original position
            cubeSleeve[i].origData = {
              x: cubeSleeve[i].position.x,
              y: cubeSleeve[i].position.y,
              z: cubeSleeve[i].position.z,
              rx: cubeSleeve[i].rotation.x,
              ry: cubeSleeve[i].rotation.y,
              rz: cubeSleeve[i].rotation.z,
              sx: cubeSleeve[i].scale.x,
              sy: cubeSleeve[i].scale.y,
              sz: cubeSleeve[i].scale.z
            };
            loaderParticleSystem.push(cubeSleeve[i]);
            currentRing.add(cubeSleeve[i]);
          } //end for
        };

        // Create Geometry
        loaderRing = new THREE.Object3D();
        // Build and position a single ring.
        buildRing(loaderRing);
        //loaderRing.rotation.x = 90*Math.PI/180;
        //loaderRing.rotation.y = -30*Math.PI/180;
        //loaderRing.position.y = 100;
        // Position each ring instance in a circle formation
        loaderRingSleeve = new THREE.Object3D();
        loaderRingSleeve.add(loaderRing);
        loaderRingSleeve.rotation.z = 360 * Math.PI / 180;
        // Collect everything in a final object
        loaderSurrogateRings.add(loaderRingSleeve);

        // Add final parent object to scene
        scene.add(loaderSurrogateRings);
        loaderSurrogateRings.scale.setScalar(0.08);
      }

      /*
       * Batch generation of geometry ( include navigation )
       *
       * @param  {String} objectType       - String of geometry type identifier.
       * @param  {Number} numObjects       - The total number of generated objects.
                * @param  {String} type             - Build type.
       * @return {Void}
       */
      function generateBall(objectType, numObjects, type) {
        //set color
        var applyVertexColors = function applyVertexColors(g, c) {
          g.faces.forEach(function (f) {
            var n = f instanceof THREE.Face3 ? 3 : 4;
            for (var j = 0; j < n; j++) {
              f.vertexColors[j] = c;
            }
          });
        };
        for (var i = 0; i < numObjects; i++) {
          var geometry = void 0;
          if (objectType == "cube") {
            geometry = new THREE.BoxGeometry(4, 4, 4);
          } else if (objectType == "sphere") {
            if (type == 'ball-nav') geometry = new THREE.SphereGeometry(10, 32, 32);
            if (type == 'ball-fly') geometry = new THREE.IcosahedronGeometry(2, 2);
            if (type == 'ball-pinprick') geometry = new THREE.IcosahedronGeometry(2, 2);
          } else if (objectType == "poly") {
            geometry = new THREE.CylinderGeometry(3, 6, 3, 5, 1);
          }

          // give the geom's vertices a random color, to be displayed
          var color = new THREE.Color();
          color.setRGB(Math.random(), Math.random(), Math.random());
          applyVertexColors(geometry, color);

          //---
          var generateSprite = function generateSprite() {
            var canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;
            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
            gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,1)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);
            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
          };
          var defaultMaterial = void 0;
          var _geo = void 0;

          // Ball of navigation
          //----------------------------
          if (type == 'ball-nav') {
            defaultMaterial = new THREE.MeshPhongMaterial({
              color: 0xdddddd,
              shininess: 80,
              wireframe: false,
              map: generateSprite(),
              side: THREE.DoubleSide
            });
            _geo = new THREE.Mesh(geometry, defaultMaterial);
            _geo.name = 'nucleus__menuball-' + i;
            _geo.position.x = -65 * i + 65;
            if (numObjects == 0) _geo.position.y = 0;
            if (numObjects == 1) _geo.position.y = getRandomFloat(-60, 10);
            if (numObjects == 2) _geo.position.y = getRandomFloat(-60, 10);
            _geo.scale.setScalar(0.4 + Math.random() * 1);
            _geo.position.z = 350;
            scene.add(_geo);

            // set the original position
            _geo.speed = getRandomFloat(0.8, 1);
            _geo.origData = {
              x: _geo.position.x,
              y: _geo.position.y,
              z: -camera.position.z,
              rx: _geo.rotation.x,
              ry: _geo.rotation.y,
              rz: _geo.rotation.z,
              sx: _geo.scale.x,
              sy: _geo.scale.y,
              sz: _geo.scale.z
            };

            //---
            // create custom material from the shader code above
            //   that is within specially labeled script tags              

            var glowBallMaterial = new THREE.MeshBasicMaterial({
              map: loaderImage.load(mainConfig.textures[0])
            });
            var glowBall = new THREE.Mesh(geometry, glowBallMaterial);
            _geo.add(glowBall);
            glowBall.position.x = 0;
            var glowMesh = new THREE.Mesh(geometry.clone(), glowAnimMaterial);
            glowBall.add(glowMesh);

            // Create line for per menu
            var _line = generateLine(0, 0, 0, 1.5, 0, 0, 10);
            _geo.add(_line);
            navBallLineAtoms.push(_line);

            //---
            ballOfNavGroup.add(_geo);
            scene.add(ballOfNavGroup);
            ballOfNavGroup.position.y = -10;

            //---
            navBallAtoms.push(_geo);
          } //endif type

          // Flying Ball
          //----------------------------
          if (type == 'ball-fly') {
            defaultMaterial = new THREE.MeshPhongMaterial({
              color: 0x333333,
              shininess: 80,
              wireframe: false,
              map: loaderImage.load(mainConfig.textures[0]),
              side: THREE.DoubleSide
            });
            _geo = new THREE.Mesh(geometry, defaultMaterial);
            _geo.name = 'nucleus__flyingball-' + i;
            _geo.position.x = getRandomFloat(-visibleWidth / 2, visibleWidth / 2 + Math.random() * xLimit * 2);
            _geo.position.y = getRandomFloat(-Math.random() * yLimit * 2, Math.random() * yLimit * 2);
            _geo.rotation.x = Math.random() * 2 * Math.PI;
            _geo.rotation.y = Math.random() * 2 * Math.PI;
            _geo.rotation.z = Math.random() * 2 * Math.PI;
            _geo.scale.setScalar(0.25 + Math.random() * 0.3);
            scene.add(_geo);

            // set the original position
            _geo.speed = 0.5 + Math.random();
            _geo.origData = {
              x: _geo.position.x,
              y: _geo.position.y,
              z: _geo.position.z,
              rx: _geo.rotation.x,
              ry: _geo.rotation.y,
              rz: _geo.rotation.z,
              sx: _geo.scale.x,
              sy: _geo.scale.y,
              sz: _geo.scale.z
            };
            _geo.position.z = 350;

            //---
            flyingBallGroup.add(_geo);
            scene.add(flyingBallGroup);

            //---
            flyingBallAtoms.push(_geo);
          } //endif type

          // Pinprick Ball
          //----------------------------
          if (type == 'ball-pinprick') {
            defaultMaterial = new THREE.MeshPhongMaterial({
              color: 0x333333,
              shininess: 80,
              wireframe: false,
              map: loaderImage.load(mainConfig.textures[0]),
              side: THREE.DoubleSide
            });
            _geo = new THREE.Mesh(geometry, defaultMaterial);
            _geo.name = 'nucleus__pinprickball-' + i;
            _geo.position.x = -xLimit / 2;
            _geo.position.y = -yLimit * 2;
            _geo.rotation.x = Math.random() * 2 * Math.PI;
            _geo.rotation.y = Math.random() * 2 * Math.PI;
            _geo.rotation.z = Math.random() * 2 * Math.PI;
            _geo.scale.setScalar(0.25 + Math.random() * 0.5);
            _geo.scale.x = scaleMin;
            scene.add(_geo);

            // set the original position
            _geo.speed = 0.5 + Math.random();
            _geo.origData = {
              x: _geo.position.x,
              y: _geo.position.y,
              z: _geo.position.z,
              rx: _geo.rotation.x,
              ry: _geo.rotation.y,
              rz: _geo.rotation.z,
              sx: _geo.scale.x,
              sy: _geo.scale.y,
              sz: _geo.scale.z
            };
            _geo.position.z = -200;

            //---
            pinprickBallGroup.add(_geo);
            scene.add(pinprickBallGroup);

            //---
            pinprickBallAtoms.push(_geo);
          } //endif type
        } //end for
      }

      /*
       * Create Line
       *
       * @param  {Number} x       - A sprite's X Position is its location on the x (longitudinal) axis of the stage.
       * @param  {Number} y       - A sprite's Y Position is its location on the y (lateral) axis of the stage.
                * @param  {Number} z       - A sprite's Z Position is its location on the z (vertical) axis of the stage.
                * @param  {Number} s       - Size of sprite.
                * @param  {Number} rx      - x-axis rotation angle.
                * @param  {Number} ry      - y-axis rotation angle.
                * @param  {Number} w       - Width of sprite.
       * @return {THREE.Object3D}
       */
      function generateLine(x, y, z, s, rx, ry, w) {
        //
        var lineWidth = w;

        //
        var circGeom = new THREE.CircleGeometry(10, 50);
        circGeom.vertices.shift();

        //
        var lineObj = new THREE.Object3D();
        for (var i = 0; i < lineWidth; i++) {
          var displacementSpriteForLine = new THREE.LineSegments(circGeom, lineMat);
          displacementSpriteForLine.computeLineDistances();
          displacementSpriteForLine.position.set(0, 0, 0);
          displacementSpriteForLine.scale.setScalar(1 - i / 199);

          // set the original position
          displacementSpriteForLine.origData = {
            x: displacementSpriteForLine.position.x,
            y: displacementSpriteForLine.position.y,
            z: displacementSpriteForLine.position.z,
            rx: displacementSpriteForLine.rotation.x,
            ry: displacementSpriteForLine.rotation.y,
            rz: displacementSpriteForLine.rotation.z,
            sx: displacementSpriteForLine.scale.x,
            sy: displacementSpriteForLine.scale.y,
            sz: displacementSpriteForLine.scale.z
          };
          lineObj.add(displacementSpriteForLine);
          lineObj.position.set(x, y, z);
          lineObj.rotation.x = rx;
          lineObj.rotation.y = ry;
          lineObj.scale.setScalar(s);
        }
        return lineObj;
      }

      /*
       * Create Menu Background Grid
       *
       * @return {Void}
       */
      function generateMenuBGGrid() {
        menuBGGridMat = new THREE.ShaderMaterial({
          uniforms: {
            time: {
              value: 0
            },
            limits: {
              value: new THREE.Vector2(-menuBGGridLimit, menuBGGridLimit)
            },
            speed: {
              value: 18
            }
          },
          vertexShader: vertex_grid,
          fragmentShader: fragment_grid,
          vertexColors: THREE.VertexColors
        });
        var menuBGGridMoveable = [];
        for (var i = 0; i <= menuBGGridDivision; i++) {
          menuBGGridMoveable.push(1, 1, 0, 0);
        }

        //menu background          
        menuBGGrid = new THREE.GridHelper(menuBGGridLimit * 2, menuBGGridDivision, "blue", "blue");
        menuBGGrid.geometry.setAttribute('moveable', new THREE.BufferAttribute(new Uint8Array(menuBGGridMoveable), 1));
        menuBGGrid.material = menuBGGridMat;
        scene.add(menuBGGrid);
        menuBGGrid.position.set(0, 60, -30);
        //menuBGGrid.scale.setScalar( 0.1 );
        menuBGGrid.origData = {
          x: menuBGGrid.position.x,
          y: menuBGGrid.position.y,
          z: menuBGGrid.position.z,
          rx: menuBGGrid.rotation.x,
          ry: menuBGGrid.rotation.y,
          rz: menuBGGrid.rotation.z,
          sx: menuBGGrid.scale.x,
          sy: menuBGGrid.scale.y,
          sz: menuBGGrid.scale.z
        };

        //clone a grid
        menuBGGrid2 = new THREE.GridHelper(menuBGGridLimit * 2, menuBGGridDivision, "blue", "blue");
        menuBGGrid2.geometry.setAttribute('moveable', new THREE.BufferAttribute(new Uint8Array(menuBGGridMoveable), 1));
        menuBGGrid2.material = menuBGGridMat;
        scene.add(menuBGGrid2);
        menuBGGrid2.position.set(0, -60, -30);
        menuBGGrid2.origData = {
          x: menuBGGrid2.position.x,
          y: menuBGGrid2.position.y,
          z: menuBGGrid2.position.z,
          rx: menuBGGrid2.rotation.x,
          ry: menuBGGrid2.rotation.y,
          rz: menuBGGrid2.rotation.z,
          sx: menuBGGrid2.scale.x,
          sy: menuBGGrid2.scale.y,
          sz: menuBGGrid2.scale.z
        };

        //reset position
        menuBGGrid.position.z = visibleHeight * 3;
        menuBGGrid2.position.z = visibleHeight * 3;
        menuBGGrid.scale.x = scaleMin;
        menuBGGrid2.scale.x = scaleMin;
      }

      /*
       * Create Audio Wave Line
       *
                * @param  {Number} audioPointCount       - Audio point count.
       * @return {Void}
       */
      function generateAudioWaveGraph(audioPointCount) {
        var audioPlaneGeom = new THREE.PlaneGeometry(audioPointCount - 10, 1, audioPointCount - 1, 1);
        audioPlaneGeom.translate(0, .5, 0);
        audioPlane = new THREE.Mesh(audioPlaneGeom, new THREE.MeshBasicMaterial({
          color: 0xdddddd,
          wireframe: false,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0
        }));
        audioPlane.name = 'nucleus__audio-controller';
        scene.add(audioPlane);
        var audioLineGeom = new THREE.Geometry();
        for (var i = 0; i < audioPlane.geometry.parameters.widthSegments + 1; i++) {
          audioLineGeom.vertices.push(audioPlaneGeom.vertices[i]); // share the upper points of the plane
        }
        audioLine = new THREE.Line(audioLineGeom, new THREE.LineBasicMaterial({
          color: 0xdddddd,
          linewidth: 4
        }));
        audioPlane.add(audioLine);

        //Positioning a 3d object in the corners of the canvas
        var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        var corner = new THREE.Vector2();
        var cornerPoint = new THREE.Vector3();
        corner.set(1, -1); // NDC of the top-left corner
        raycaster.setFromCamera(corner, camera);
        raycaster.ray.intersectPlane(plane, cornerPoint);
        audioPlane.position.copy(cornerPoint).add(new THREE.Vector3(3, 1, -10)); // align the position of the box 

        //reset position
        audioPlane.scale.setScalar(0.001);
      }

      /*
       * Create Primary Menu Text
       *
       * @return {Void}
       */
      function generateMenuText() {
        //--- add container
        menuTextFillContainer = new THREE.Object3D();
        menuTextStrokeContainer = new THREE.Object3D();
        fontLoader.load(mainConfig.fonts[2], function (font) {
          var xMid, textFill;
          var txtColor = new THREE.Color(0xffffff);
          uniformsTxtStroke = {
            uTexture: {
              value: loaderImage.load(mainConfig.textures[7])
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(0, 0)
            },
            uAlpha: {
              //opacity
              value: 0
            }
          };
          uniformsTxtFill_1 = {
            uTexture: {
              value: loaderImage.load(mainConfig.textures[7])
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(0, 0)
            },
            uAlpha: {
              //opacity
              value: 0
            }
          };
          uniformsTxtFill_2 = {
            uTexture: {
              value: loaderImage.load(mainConfig.textures[7])
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(0, 0)
            },
            uAlpha: {
              //opacity
              value: 0
            }
          };
          uniformsTxtFill_3 = {
            uTexture: {
              value: loaderImage.load(mainConfig.textures[7])
            },
            uOffset: {
              //distortion strength
              value: new THREE.Vector2(0, 0)
            },
            uAlpha: {
              //opacity
              value: 0
            }
          };
          var txtStrokeMaterial = new THREE.ShaderMaterial({
            uniforms: uniformsTxtStroke,
            vertexShader: vertex_distortion,
            fragmentShader: fragment_distortion,
            transparent: true
          });
          var txtFillMaterial_1 = new THREE.ShaderMaterial({
            uniforms: uniformsTxtFill_1,
            vertexShader: vertex_distortion,
            fragmentShader: fragment_distortion,
            transparent: true
          });
          var txtFillMaterial_2 = new THREE.ShaderMaterial({
            uniforms: uniformsTxtFill_2,
            vertexShader: vertex_distortion,
            fragmentShader: fragment_distortion,
            transparent: true
          });
          var txtFillMaterial_3 = new THREE.ShaderMaterial({
            uniforms: uniformsTxtFill_3,
            vertexShader: vertex_distortion,
            fragmentShader: fragment_distortion,
            transparent: true
          });
          var customText = function customText(txt, posY, name) {
            var message = txt;
            var fontSize = 11;
            var shapes = font.generateShapes(message, fontSize);
            var shapesGeometry = new THREE.ShapeBufferGeometry(shapes);
            shapesGeometry.computeBoundingBox();
            xMid = -0.5 * (shapesGeometry.boundingBox.max.x - shapesGeometry.boundingBox.min.x);
            shapesGeometry.translate(xMid, 0, 0);

            // make shape ( N.B. edge view not visible )
            if (name == 'work') textFill = new THREE.Mesh(shapesGeometry, txtFillMaterial_1);
            if (name == 'about') textFill = new THREE.Mesh(shapesGeometry, txtFillMaterial_2);
            if (name == 'contact') textFill = new THREE.Mesh(shapesGeometry, txtFillMaterial_3);
            textFill.position.z = 0;
            textFill.position.y = fontSize * 1.7 * posY;
            textFill.name = 'nucleus__menu-' + name;
            menuTextFillContainer.add(textFill);
            menuTextFillContainer.position.z = -50;
            menuTextFillContainer.scale.setScalar(1.35);
            scene.add(menuTextFillContainer);

            // make line shape ( N.B. edge view remains visible )
            var holeShapes = [];
            for (var i = 0; i < shapes.length; i++) {
              var shape = shapes[i];
              if (shape.holes && shape.holes.length > 0) {
                for (var j = 0; j < shape.holes.length; j++) {
                  var hole = shape.holes[j];
                  holeShapes.push(hole);
                }
              }
            }
            shapes.push.apply(shapes, holeShapes);
            var style = THREE.SVGLoader.getStrokeStyle(0.4, txtColor.getStyle());
            var strokeText = new THREE.Group();
            for (var _i2 = 0; _i2 < shapes.length; _i2++) {
              var _shape = shapes[_i2];
              var points = _shape.getPoints();
              var pointsGeometry = THREE.SVGLoader.pointsToStroke(points, style);
              pointsGeometry.translate(xMid, 0, 0);
              var strokeMesh = new THREE.Mesh(pointsGeometry, txtStrokeMaterial);
              strokeText.add(strokeMesh);
            }
            strokeText.position.y = fontSize * 1.7 * posY;
            strokeText.name = 'nucleus__menustroke-' + name;
            menuTextStrokeContainer.add(strokeText);
            menuTextStrokeContainer.position.z = -50;
            menuTextStrokeContainer.scale.setScalar(1.35);
            scene.add(menuTextStrokeContainer);
          };
          customText('PROJECTS', 1, 'work');
          customText('ABOUT', 0, 'about');
          customText('CONTACT', -1, 'contact');
        }); //end load function
      }

      /*
      * Create Works Text
      *
      * @return {THREE.Mesh}
      */
      function generateWorksText(fontFamily, str, name, x, y, z) {
        var textGeo = new THREE.TextGeometry(str, {
          font: fontFamily,
          size: 50,
          height: 1,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 2,
          bevelOffset: 0,
          bevelSegments: 5
        });
        var textMat = new THREE.MeshPhongMaterial({
          side: THREE.DoubleSide,
          map: loaderImage.load(mainConfig.textures[7]),
          color: new THREE.Color(0xffffff)
        });
        var textMesh = new THREE.Mesh(textGeo, textMat);
        textMesh.geometry.center();
        textMesh.geometry.computeBoundingSphere();
        textMesh.name = name;
        textMesh.position.set(x + 70, y - 100, z - 100);
        textMesh.rotation.set(4.8, 0, 0);
        return textMesh;
      }

      /*
       * Menu Toggle
       *
                * @param  {String} type             - Close or open menu.
       * @return {Void}
       */
      function menuToggle(type) {
        if (type == 'open') {
          //---
          // 		
          //Circle of back
          //update circle of back status
          __statusBackCircleEnable = true;

          //Initialize circle of back
          backCircleReset();

          //---
          // 	
          //Animation of menu background 
          TweenMax.set(menuBGGrid.scale, {
            x: 1,
            onComplete: function onComplete() {
              TweenMax.to(menuBGGrid.position, 1.2, {
                z: menuBGGrid.origData.z,
                ease: Power2.easeOut
              });
            }
          });
          TweenMax.set(menuBGGrid2.scale, {
            x: 1,
            onComplete: function onComplete() {
              TweenMax.to(menuBGGrid2.position, 1.2, {
                z: menuBGGrid2.origData.z,
                ease: Power2.easeOut
              });
            }
          });

          //---
          // 	
          //3d modal cave animation
          sceneMainCaveControl('close', 'zoomIn');

          //---
          // 	
          //ball
          ballsControl('close');

          //---
          // 	
          // Text Animations
          $(mainTextSliderID).addClass('is-click'); //kill the text animation
          setTimeout(function () {
            animeForText(false, false);
          }, 1000);

          //---
          // 	
          //Display Primary Menu Texts
          TweenMax.to(uniformsTxtStroke.uAlpha, 1.5, {
            delay: 1.5,
            value: 1,
            ease: Power2.easeOut
          });

          //Reset position for Primary Menu Texts
          TweenMax.set([menuTextFillContainer.position, menuTextStrokeContainer.position], {
            z: __statusNavBallClicked ? -120 : -50
          });
        }
        if (type == 'close-all') {
          //---
          // 	
          //Hide circle of back
          backCircleHide();

          //update circle of back status
          __statusBackCircleEnable = false;

          //Ball of navigation clicked
          __statusNavBallClicked = false;

          //---
          // 	
          //Hide Primary Menu Texts
          TweenMax.to(uniformsTxtStroke.uAlpha, 0.5, {
            value: 0,
            ease: Power2.easeOut
          });

          //---
          // 	
          //Animation of menu background 
          TweenMax.to([menuBGGrid.position, menuBGGrid2.position], 1, {
            z: visibleHeight * 3,
            ease: Power2.easeIn
          });
          TweenMax.to([menuBGGrid.scale, menuBGGrid2.scale], 0.5, {
            delay: 1,
            x: scaleMin,
            onComplate: function onComplate() {
              //---
              // 	
              //ball
              ballsControl('open');

              //---
              // 	
              //Ball of Navigation Control
              ballOfNavControl('open', null);
            }
          });

          //---
          // 	
          //3d modal cave animation
          setTimeout(function () {
            sceneMainCaveControl('open', null);
          }, 300);
        }
        if (type == 'close-onlynav') {
          //---
          // 	
          // Disable any MOUSE CLICK completely
          disableMouseClickEvent();

          //---
          // 	
          //Hide circle of back
          backCircleHide();

          //update circle of back status
          __statusBackCircleEnable = false;

          //Ball of navigation clicked
          __statusNavBallClicked = false;

          //---
          // 	
          //Hide Primary Menu Texts
          TweenMax.to(uniformsTxtStroke.uAlpha, 0.5, {
            value: 0,
            ease: Power2.easeOut
          });

          //---
          // 	
          //Animation of menu background 
          TweenMax.to([menuBGGrid.position, menuBGGrid2.position], 1, {
            z: visibleHeight * 3,
            ease: Power2.easeIn
          });
          TweenMax.to([menuBGGrid.scale, menuBGGrid2.scale], 0.5, {
            delay: 1,
            x: scaleMin
          });
        }
      }

      /*
       * Ball of Navigation Control
       *
                * @param  {String} type             - Close or open nav of threejs.
       * @param  {?Number} ballIndex       - Index of target item. 
       * @return {Void}
       */
      function ballOfNavControl(type, ballIndex) {
        var _navBallPosAtoms = [];
        navBallAtoms.forEach(function (el, index) {
          _navBallPosAtoms.push(el.position);
        });

        //
        //
        if (type == 'open') {
          TweenMax.to(_navBallPosAtoms, 3, {
            z: function z(index, target) {
              return navBallAtoms[index].origData.z;
            },
            ease: Power2.easeOut
          });
        }

        //
        //
        if (type == 'close') {
          if (ballIndex != -1) {
            TweenMax.to(_navBallPosAtoms, 3, {
              z: function z(index, target) {
                if (index == ballIndex) {
                  return 200;
                } else {
                  return -3500;
                }
              },
              ease: Power3.easeInOut
            });
          } else {
            TweenMax.to(_navBallPosAtoms, 3, {
              z: -3500,
              ease: Power3.easeInOut
            });
          }
        }
      }

      /*
       * Balls Control
       *
                * @param  {String} type             - Hide or show balls.
       * @return {Void}
       */
      function ballsControl(type) {
        var _ballPosAtoms = [];
        flyingBallAtoms.forEach(function (el, index) {
          _ballPosAtoms.push(el.position);
        });
        if (type == 'open') {
          TweenMax.to(_ballPosAtoms, 1, {
            z: function z(index, target) {
              return flyingBallAtoms[index].origData.z;
            },
            ease: Power2.easeOut
          });
        }
        if (type == 'close') {
          TweenMax.to(_ballPosAtoms, 1, {
            z: -1200,
            ease: Power2.easeOut
          });
        }
      }

      /*
       * Main Cave Control
       *
                * @param  {String} type             - Zoom in or zoom out scene.
                * @param  {String} zoom             - Animation scaling
       * @return {Void}
       */
      function sceneMainCaveControl(type, zoom) {
        if (type == 'open') {
          TweenMax.to(modalObjMainCave.position, 1, {
            z: modalObjMainCave.origData.z,
            ease: Power2.easeOut
          });
        }
        if (type == 'close') {
          if (zoom == 'zoomIn') {
            TweenMax.to(modalObjMainCave.position, 2, {
              delay: 0.7,
              z: -1200,
              ease: Power2.easeOut
            });
          }
          if (zoom == 'zoomOut') {
            TweenMax.to(modalObjMainCave.position, 2, {
              delay: 0.7,
              z: 1200,
              ease: Power2.easeOut
            });
          }
        }
      }

      /*
       * The work detail elements
       *
       * @param  {String} type             - Display or hide the work detail elements.
      * @return {Void}
       */
      function workDetailControl(type) {
        //
        var _tetrahedronParticlePosAtoms = [];
        tetrahedronParticleGroup.children.forEach(function (el, index) {
          _tetrahedronParticlePosAtoms.push(el.position);
        });

        //
        if (type == 'open') {
          //
          var _navWorkDetailPos = navBallAtoms[0].origData;
          var _workDetailPosDiffZ = _navWorkDetailPos.z + 70;

          //---
          // 
          // work detail mask
          TweenMax.to(workDetailMask.position, 1, {
            z: _workDetailPosDiffZ,
            ease: Power2.easeOut
          });
          TweenMax.to(uniformsWorkDetailMask.uAlpha, 1, {
            value: 1,
            ease: Power2.easeOut,
            onComplete: function onComplete() {
              //
              __statusTetrahedronParticleMove = true;
            }
          });

          //---
          // 
          //Grid background for work detail
          TweenMax.set(menuBGGrid.scale, {
            x: 0.32,
            z: 0.42,
            onComplete: function onComplete() {
              TweenMax.to(menuBGGrid.position, 2, {
                z: _workDetailPosDiffZ + 1,
                ease: Power2.easeOut
              });
              TweenMax.to(menuBGGrid.rotation, 2, {
                x: getRadian(90),
                ease: Power2.easeOut
              });
            }
          });
        } else {
          //
          __statusTetrahedronParticleMove = false;

          //---
          // 
          // Tetrahedron particle

          TweenMax.to(_tetrahedronParticlePosAtoms, 2.5, {
            y: '-=' + yLimit * 2,
            ease: Power2.easeIn,
            onComplete: function onComplete() {
              //---
              // 
              // work detail mask
              TweenMax.to(uniformsWorkDetailMask.uAlpha, 1, {
                value: 0,
                ease: Power2.easeOut
              });

              //---
              // 
              //Grid background for work detail
              TweenMax.to(menuBGGrid.position, 2, {
                z: visibleHeight * 3,
                ease: Power2.easeIn,
                onComplete: function onComplete() {
                  TweenMax.set(menuBGGrid.scale, {
                    x: scaleMin
                  });
                }
              });
              TweenMax.to(menuBGGrid.rotation, 2, {
                x: menuBGGrid.origData.rx,
                ease: Power2.easeIn
              });
            }
          });
        }
      }

      /*
       * Get Object Coordinate, Width and Height From Screen
       * Note: No data may be acquired without delay !!
       *
      * @param  {THREE.Mesh} obj                           - Mesh object.
       * @param  {THREE.PerspectiveCamera} camera           - Mesh object.
      * @param  {Number} rendererWidth                     - Width of renderer.
       * @param  {Number} rendererHeight                    - Height of renderer.
       * @return {JSON}
       */
      /* @usage: 
         const screenPos = nestedObjectToScreenXYZAndWH( displacementSprite , camera, renderer.domElement.width, renderer.domElement.height );
        */
      function nestedObjectToScreenXYZAndWH(obj, camera, rendererWidth, rendererHeight) {
        var vector = new THREE.Vector3();
        vector.setFromMatrixPosition(obj.matrixWorld);
        var widthHalf = rendererWidth / 2;
        var heightHalf = rendererHeight / 2;
        var aspect = rendererHeight / rendererWidth;
        vector.project(camera);
        vector.x = vector.x * widthHalf + widthHalf;
        vector.y = -(vector.y * heightHalf) + heightHalf;

        //compute bounding box after
        var boxInfo = new THREE.Box3().setFromObject(obj).getSize(new THREE.Vector3());

        //Change it to fit the width and height of the stage based on the current value
        var ratioFixedNum = 7;

        //correction
        return {
          position: vector,
          width: (boxInfo.x * ratioFixedNum * aspect).toFixed(2),
          height: (boxInfo.y * ratioFixedNum * aspect).toFixed(2)
        };
      }

      /*
       * Convert 2D mouse coordinates to 3D
       *
      * @param  {Number} clientX                            - The horizontal coordinate within the viewport
       * @param  {Number} clientY                            - The vertical coordinate within the viewport
       * @param  {THREE.PerspectiveCamera} camera           - Mesh object.
      * @param  {Number} rendererWidth                     - Width of renderer.
       * @param  {Number} rendererHeight                    - Height of renderer.
       * @return {JSON}
       */
      /* @usage: 
         const projecMousePos = projectMousePosToXYPlane( clientX, clientY, camera, renderer.domElement.width, renderer.domElement.height );
        */
      function projectMousePosToXYPlane(clientX, clientY, camera, rendererWidth, rendererHeight) {
        var vPos = new THREE.Vector3();
        var vDir = new THREE.Vector3();
        var vProjectedMousePos = new THREE.Vector3();
        vPos.set(-1.0 + 2.0 * clientX / rendererWidth, -1.0 + 2.0 * clientY / rendererHeight, 0.5).unproject(camera);

        // Calculate a unit vector from the camera to the projected position
        vDir.copy(vPos).sub(camera.position).normalize();

        // Project onto z=0
        var flDistance = -camera.position.z / vDir.z;
        vProjectedMousePos.copy(camera.position).add(vDir.multiplyScalar(flDistance));
        return vProjectedMousePos;
      }

      /*
       * Generate random number between two numbers
       *
       * @return {Number}
       */
      function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }

      /*
       * Returns the degree from radian.
       *
       * @return {Number} rad - Value of radian.
       * @return {Number}
       * @usage: 
       
         angle = rad / ( Math.PI / 180 )  = rad * ( 180/Math.PI );
       */

      function getDegree(rad) {
        return rad / Math.PI * 180;
      }

      /*
       * Returns the radian degree .
       *
       * @return {Number} deg - Value of degree.
       * @return {Number}
       * @usage: 
          
          rad = Math.PI / 180 * 30 ;
       */
      function getRadian(deg) {
        return deg * Math.PI / 180;
      }

      /*
       * Convert three.js scene rotation to polar coordinates
       *
       * @return {Number} deg - Value of degree.
       * @return {Number}
       * @usage: 
       
          x = r * cos（θ）
          y = r * sin（θ）  
       */
      function getPolarCoord(x, y, z) {
        var nx = Math.cos(x) * Math.cos(y) * z,
          nz = Math.cos(x) * Math.sin(y) * z,
          ny = Math.sin(x) * z;
        return new THREE.Vector3(nx, ny, nz);
      }

      /*
      * Updates to LineGeometry
      *
      */
      function LineSegmentsGeometryPositions(obj, array) {
        var lineSegments;
        if (array instanceof Float32Array) {
          lineSegments = array;
        } else if (Array.isArray(array)) {
          lineSegments = new Float32Array(array);
        }
        var pos = obj.geometry.getAttribute('position');
        pos.array = lineSegments;
        pos.needsUpdate = true; // required
      }

      // 
      //-------------------------------------	
      return {
        init: init,
        render: render,
        getRendererCanvasID: function getRendererCanvasID() {
          return rendererCanvasID;
        },
        getScene: function getScene() {
          return scene;
        },
        getCamera: function getCamera() {
          return camera;
        }
      };
    }();

    // 
    MainStage.init();
    MainStage.render();
  };
  module.MAIN.pageLoaded = function () {};
  module.components.documentReady.push(module.MAIN.documentReady);
  module.components.pageLoaded.push(module.MAIN.pageLoaded);
  return /*#__PURE__*/js_createClass(function MAIN() {
    js_classCallCheck(this, MAIN);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/AJAX-push/js/index.js
function AJAX_push_js_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, AJAX_push_js_toPropertyKey(o.key), o); } }
function AJAX_push_js_createClass(e, r, t) { return r && AJAX_push_js_defineProperties(e.prototype, r), t && AJAX_push_js_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function AJAX_push_js_toPropertyKey(t) { var i = AJAX_push_js_toPrimitive(t, "string"); return "symbol" == AJAX_push_js_typeof(i) ? i : i + ""; }
function AJAX_push_js_toPrimitive(t, r) { if ("object" != AJAX_push_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != AJAX_push_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function AJAX_push_js_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function AJAX_push_js_typeof(o) { "@babel/helpers - typeof"; return AJAX_push_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AJAX_push_js_typeof(o); }
/* 
 *************************************
 * <!-- Ajax Push Content  -->
 *************************************
 */



var AJAX_PUSH_CONTENT = function (module, $, window, document) {
  if (window.AJAX_PUSH_CONTENT === null) return false;
  module.AJAX_PUSH_CONTENT = module.AJAX_PUSH_CONTENT || {};
  module.AJAX_PUSH_CONTENT.version = '0.1.0custom';
  module.AJAX_PUSH_CONTENT.documentReady = function ($) {
    //const AJAXPageLinks = '[data-ajax-push-content],[data-primary-pagination],[data-cat-id],[data-tag-id],[data-archive-id],[data-author-id],[data-temp-id],[data-id],[data-homepage]';
    var AJAXPageLinks = '[data-ajax-push-content],[data-primary-pagination],[data-cat-id],[data-tag-id],[data-archive-id],[data-author-id],[data-temp-id],[data-id],[data-homepage]';
    var sources = []; //all images from pages
    var timeClockInit; //Added timer to prevent page loading errors for a long time

    /* Need to set it as a global variable for history */
    var ajaxConfig = {
        "container": "#app-ajax-popwin-page-container",
        "target": "#app-ajax-page-container",
        "loading": "<div class=\"my-loader\"><span class=\"app-loader-spinner\"></span></div>",
        "method": "GET"
      },
      thisPageTitle = document.title;
    var docURL = window.location.href;
    var loadedProgress = 0;
    TweenMax.set(['#app-ajax-popwin-page-mask', '#app-ajax-popwin-page-mask--list'], {
      opacity: 0
    });
    var loadingAnim = function loadingAnim(per) {
      console.log('detail progress: ' + per);
    };
    var removeAnim = function removeAnim(callback) {
      //
      callback();
    };
    var loadingStatus = function loadingStatus(type) {
      if (type == 'hide') {
        TweenMax.to('.app-detail-transitionMask', 0.3, {
          delay: 1,
          css: {
            opacity: 0,
            display: 'none'
          }
        });

        //
        TweenMax.to(['#app-ajax-popwin-page-mask', '#app-ajax-popwin-page-mask--list'], 0.5, {
          opacity: 1
        });
      }
      if (type == 'show') {
        TweenMax.to('.app-detail-transitionMask', 0.3, {
          css: {
            opacity: 1,
            display: 'block'
          }
        });
      }
    };

    //Click event
    $(document).off('click.AJAX_PUSH_CONTENT').on('click.AJAX_PUSH_CONTENT', AJAXPageLinks, function (event) {
      event.preventDefault();

      // Locks the page
      // !!! The delay is increased to prevent screen flickering 
      // caused by locked scroll bars
      setTimeout(function () {
        //$.scrollLock( true );

        //Add class for body
        //When scrollLock is used, scrollTop value will change
        //$( 'body' ).addClass( 'scrollLock' );
      }, 500);

      //
      TweenMax.set(['#app-ajax-popwin-page-mask', '#app-ajax-popwin-page-mask--list'], {
        opacity: 0
      });
      var $this = $(this);
      var curURL = $this.attr('href'),
        config = $this.data('ajax-push-content'),
        popwin = $(this).hasClass('app-popwin') ? true : false,
        popwinList = $(this).hasClass('app-popwin--list') ? true : false;
      loadedProgress = 0;
      if (AJAX_push_js_typeof(config) == ( true ? "undefined" : 0)) {
        config = ajaxConfig;
      }

      //The currently URL of link
      if (AJAX_push_js_typeof(curURL) === ( true ? "undefined" : 0)) {
        curURL = $this.closest('a').attr('href');
      }

      //Prevent multiple request on click
      if ($this.data('request-running')) {
        return;
      }
      $this.data('request-running', true);

      // Modify the URL without reloading the page
      if (history.pushState) {
        history.pushState(null, null, curURL);
      } else {
        location.hash = curURL;
      }

      //Click on this link element using an AJAX request
      pushAction($(config.container), config.target, config.loading, curURL, config.method, $this, popwin, popwinList);
      return false;
    });

    //Detect URL change & Fire click event
    window.addEventListener('popstate', function (e) {
      var eleTarget = null,
        goURL = location.href;
      $(AJAXPageLinks).each(function () {
        //don't use $( this ).attr( 'href' )
        if (this.href === location.href) {
          eleTarget = this;
          goURL = this.href;
        }
      });

      //Empty content that does not exist
      if (eleTarget == null) {
        $(AJAXPageLinks).each(function () {
          var curConfig = $(this).data('ajax-push-content');
          if (AJAX_push_js_typeof(curConfig) != ( true ? "undefined" : 0)) {
            removeAnim(function () {
              //remove content, mask and container
              $(curConfig.container).html('');

              // popwin content area
              $('#app-ajax-popwin-page-container,.app-close-btn__wrapper').removeClass('is-active');
              $('#app-ajax-popwin-page-container,.app-close-btn__wrapper,#app-ajax-popwin-page-mask').removeClass('is-active is-loaded');

              // popwin posts list area
              $('#app-ajax-popwin-page-container--list, .app-close-btn__wrapper--list').removeClass('is-active');
              $('#app-ajax-popwin-page-container,.app-close-btn__wrapper--list,#app-ajax-popwin-page-mask--list').removeClass('is-loaded');
            });
          }
        });
      }

      //Push new content to target container
      var backConfig = $(eleTarget).data('ajax-push-content'),
        popwinBack = $(eleTarget).hasClass('app-popwin') ? true : false,
        popwinBackList = $(eleTarget).hasClass('app-popwin--list') ? true : false;
      if (AJAX_push_js_typeof(backConfig) != ( true ? "undefined" : 0)) {
        pushAction($(backConfig.container), backConfig.target, backConfig.loading, goURL, backConfig.method, $(eleTarget), popwinBack, popwinBackList);
      }

      // Output history button
      //console.log(  $( eleTarget ).data( 'ajax-push-content' ) );
    });

    /*
     * Move Animation
     *
     * @param  {Object} container       - The target container to which the content will be added.
     * @param  {String|Boolean} target  - The instance ID or class name returned from the callback data. If it is "false", the push content is empty.
     * @param  {String} loading         - Content of loading area.
     * @param  {String} url             - The target URL via AJAX. 
     * @param  {String} method          - The HTTP method to use for the request (e.g. "POST", "GET", "PUT")
     * @param  {Object|Boolean} btn     - Current trigger button. Avoid button events if "false".
           * @param  {Boolean} popwin         - Display content in the pop window.
           * @param  {Boolean} popwinList     - Display posts list in the pop window.
     * @return {Void}
     */
    function pushAction(container, target, loading, url, method, btn, popwin, popwinList) {
      if (container.length == 0) return false;
      if (AJAX_push_js_typeof(method) === ( true ? "undefined" : 0) || method == '') {
        method = 'POST';
      }
      $.ajax({
        timeout: 15000,
        url: url,
        method: method,
        dataType: 'html',
        data: {
          action: 'load_singlepages_ajax_content'
        },
        beforeSend: function beforeSend() {
          //Loading Begin
          //---
          $('body, .uix-menu-mobile__toggle').removeClass('js-uix-menu-opened is-opened');

          //
          loadingAnim(0);
          loadingStatus('show');

          //
          if (popwin || popwinList) {
            //Show "Loader", "Mask of Loader"
            $('#app-loading').removeClass('is-active');
          }
          if (popwin) {
            // popwin content area
            $('#app-ajax-popwin-page-mask').addClass('is-active');
            if ($('#app-ajax-popwin-page-mask--list').hasClass('is-active')) {
              $('#app-ajax-popwin-page-mask--list').removeClass('is-active');
            }
          }
          if (popwinList) {
            // popwin posts list area
            $('#app-ajax-popwin-page-mask--list').addClass('is-active');
          }
          if (!popwin && !popwinList) {
            $('#app-loader-mask--in').addClass('is-active');
            setTimeout(function () {
              //Show "Loader", "Mask of Loader"
              if ($('#app-loader-mask').hasClass('is-active')) {
                $('#app-loader-mask, #app-loading').removeClass('is-active');
                $('#app-loader-mask').css({
                  'opacity': 1,
                  'display': 'block'
                });
              }
            }, 1000);
          }
        }
      }).done(function (response) {
        //A function to be called if the request succeeds
        var pushContent = !target ? '' : $(response).find(target).html();

        //Display loading image when AJAX call is in progress

        //Remove existing images
        sources = [];

        //Push all images from page
        $(response).find('img').each(function () {
          sources.push({
            "url": this.src,
            "id": 'img-' + UixGUID.create(),
            "type": 'img'
          });
        });

        //Push all videos from page
        $(response).find('.uix-video__slider > video').each(function () {
          var _src = $(this).find('source:first').attr('src');
          if (AJAX_push_js_typeof(_src) === ( true ? "undefined" : 0)) $(this).attr('src'), _readOnlyError("_src");
          sources.push({
            "url": _src,
            "id": 'video-' + UixGUID.create(),
            "type": 'video'
          });
        });

        //Execute after all images have loaded
        var per;
        var perInit = 1;
        if (sources.length == 0) {
          per = 100;

          //loading animation
          loadingAnim(per);
          loadingStatus('hide');
        } else {
          loadingAnim(0);
          loadingStatus('hide');
        }
        var loadImages = function loadImages() {
          var promises = [];
          var _loop = function _loop(i) {
            if (sources[i].type == 'img') {
              ///////////
              // IMAGE //
              ///////////   

              promises.push(new Promise(function (resolve, reject) {
                var img = new Image();
                img.crossOrigin = "anonymous";
                img.src = sources[i].url;
                img.onload = function (image) {
                  //Compatible with safari and firefox
                  if (AJAX_push_js_typeof(image.path) === ( true ? "undefined" : 0)) {
                    return resolve({
                      w: 0,
                      h: 0,
                      url: image.target.currentSrc
                    });
                  } else {
                    return resolve({
                      w: image.path[0].naturalWidth,
                      h: image.path[0].naturalHeight,
                      url: image.path[0].currentSrc
                    });
                  }
                };
              }).then(textureLoaded));
            } else {
              ///////////
              // VIDEO //
              ///////////    

              promises.push(new Promise(function (resolve, reject) {
                $('#' + sources[i].id).one('loadedmetadata', resolve);
                return resolve({
                  url: sources[i].url
                });
              }).then(textureLoaded));
            }
          };
          for (var i = 0; i < sources.length; i++) {
            _loop(i);
          }
          return Promise.all(promises);
        };
        var textureLoaded = function textureLoaded(data) {
          //console.log( data );

          var _curURL = data.url;
          var _curW = data.w;
          var _curH = data.h;

          //loading
          per = parseInt(100 * (perInit / sources.length));
          console.log('progress: ' + per + '%');
          if (isNaN(per)) per = 100;

          //loading animation
          loadedProgress = per;
          loadingAnim(per);
          loadingStatus('hide');
          var texture = null;
          perInit++;
          return per;
        };
        var func = function func() {
          ajaxSucceeds(container, pushContent, $(response).filter('title').text(), btn, popwin, popwinList);
        };

        //images loaded
        //Must be placed behind the loadImages()
        loadImages().then(function (images) {
          clearInterval(timeClockInit);
          func();
        });

        //Calculating page load time
        var timeLimit = 10,
          timeStart = new Date().getTime();

        //Prevent duplicate runs when returning to this page
        if (timeClockInit) {
          clearInterval(timeClockInit);
        }
        timeClockInit = setInterval(function () {
          //Converting milliseconds to minutes and seconds
          var _time = (new Date().getTime() - timeStart) / 1000;
          if (_time >= timeLimit) {
            console.log('Page load timeout!');

            //Remove loader
            if (htmlCode.indexOf('<body') >= 0) {
              window.location.href = location.href;
            } else {
              loadingStatus('hide');
            }

            // clear loader event
            clearInterval(timeClockInit);
            func();
          }
        }, 500);
      }).fail(function (jqXHR, textStatus, errorThrown) {
        window.location.href = url;
      });
    }

    /*
     * A function to be called if the request succeeds
     *
     * @param  {String} container    - The target container to which the content will be added.
     * @param  {String} content      - The data returned from the server
     * @param  {String} title        - The title of a requested page.
     * @param  {Object} btn          - Current trigger button.
           * @param  {Boolean} popwin      - Display content in the pop window.
           * @param  {Boolean} popwinList  - Display posts list in the pop window.
     * @return {Void}
     */
    function ajaxSucceeds(container, content, title, btn, popwin, popwinList) {
      console.log('loadedProgress: ' + loadedProgress);
      if (loadedProgress < 100) return false;

      //
      var contentRenderer = function contentRenderer() {
        //Hide "Loader", "Mask of Loader"
        if (!popwin && !popwinList) {
          if (!$('#app-loader-mask').hasClass('is-active')) {
            $('#app-loader-mask').addClass('is-active');
          }
        }
        if (!$('#app-loading').hasClass('is-active')) {
          $('#app-loading').addClass('is-active');
        }

        //loading animation
        if (popwin) {
          // popwin content area
          $('#app-ajax-popwin-page-container, .app-close-btn__wrapper').addClass('is-active');
          $('#app-ajax-popwin-page-container,.app-close-btn__wrapper,#app-ajax-popwin-page-mask').addClass('is-loaded');
        }
        if (popwinList) {
          // popwin posts list area
          $('#app-ajax-popwin-page-container--list, .app-close-btn__wrapper--list').addClass('is-active');
          $('#app-ajax-popwin-page-container,.app-close-btn__wrapper--list,#app-ajax-popwin-page-mask--list').addClass('is-loaded');
        }

        //---- The data returned from the server
        container.html(content).promise().done(function () {
          //set background transparent
          $('#app-ajax-popwin-page-container').addClass('app-none-bg').find('#uix-maincontent').addClass('app-none-bg').find('.app-work-detail__wrapper').parent('section').addClass('app-none-bg');

          // Apply some asynchronism scripts
          //$( document ).UixApplyAsyncScripts();

          //Change the page title
          //                    if ( title ) {
          //                        document.title = title;
          //                    }

          //Prevent multiple request on click
          if (btn) {
            btn.data('request-running', false);
          }
        });
      };

      //Loading End
      if (popwin || popwinList) {
        contentRenderer();
      } else {
        TweenMax.set('#app-loader-mask--in', {
          delay: 2,
          css: {
            opacity: 0,
            display: 'none'
          },
          onComplete: function onComplete() {
            $(this.target).removeClass('is-active').css({
              'opacity': 1,
              'display': 'block'
            });
            contentRenderer();
          }
        });
      }
    }

    //--------
    $(document).off('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN').on('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN', '.app-close-btn__wrapper.is-loaded', function () {
      var $this = $(this);

      //
      removeAnim(function () {
        // Unlocks the page
        //$.scrollLock( false );

        //Remove class for body
        //When scrollLock is used, scrollTop value will change
        //$( 'body' ).removeClass( 'scrollLock' );	

        var goURL;
        $this.prev('#app-ajax-popwin-page-container').removeClass('is-active is-loaded');
        $this.prev('#app-ajax-popwin-page-container').prev('#app-ajax-popwin-page-mask').removeClass('is-active is-loaded');
        $this.removeClass('is-active is-loaded');

        //set background transparent
        $this.prev('#app-ajax-popwin-page-container').removeClass('app-none-bg').find('#uix-maincontent').removeClass('app-none-bg').find('.app-work-detail__wrapper').parent('section').removeClass('app-none-bg');
        if ($('#app-ajax-popwin-page-container--list').hasClass('is-active')) {
          goURL = $('.app-popwin--list').attr('href');
          $('#app-ajax-popwin-page-mask--list').addClass('is-active is-loaded');
        } else {
          goURL = docURL;
        }
        history.pushState(null, null, goURL);
      });
    });
    $(document).off('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_LIST').on('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_LIST', '.app-close-btn__wrapper--list.is-loaded', function () {
      var $this = $(this);

      //
      removeAnim(function () {
        $this.prev('#app-ajax-popwin-page-container--list').removeClass('is-active is-loaded');
        $this.prev('#app-ajax-popwin-page-container--list').prev('#app-ajax-popwin-page-mask--list').removeClass('is-active is-loaded');
        $this.removeClass('is-active is-loaded');
        history.pushState(null, null, docURL);
      });
    });

    //--------
    $(document).off('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_MASKTRIGGER').on('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_MASKTRIGGER', '#app-ajax-popwin-page-mask.is-loaded', function () {
      var $this = $(this);

      //
      removeAnim(function () {
        // Unlocks the page
        //$.scrollLock( false );

        //Remove class for body
        //When scrollLock is used, scrollTop value will change
        //$( 'body' ).removeClass( 'scrollLock' );	

        var goURL;
        $this.next('#app-ajax-popwin-page-container').removeClass('is-active is-loaded');
        $this.next('#app-ajax-popwin-page-container').next('.app-close-btn__wrapper').removeClass('is-active is-loaded');
        $this.removeClass('is-active is-loaded');

        //set background transparent
        $this.next('#app-ajax-popwin-page-container').removeClass('app-none-bg').find('#uix-maincontent').removeClass('app-none-bg').find('.app-work-detail__wrapper').parent('section').removeClass('app-none-bg');
        if ($('#app-ajax-popwin-page-container--list').hasClass('is-active')) {
          goURL = $('.app-popwin--list').attr('href');
          $('#app-ajax-popwin-page-mask--list').addClass('is-active is-loaded');
        } else {
          goURL = docURL;
        }
        history.pushState(null, null, goURL);
      });
    });
    $(document).off('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_LIST_MASKTRIGGER').on('click.AJAX_PUSH_CONTENT__CLOSE_POPWIN_LIST_MASKTRIGGER', '#app-ajax-popwin-page-mask--list.is-loaded', function () {
      var $this = $(this);

      //
      removeAnim(function () {
        $this.next('#app-ajax-popwin-page-container--list').removeClass('is-active is-loaded');
        $this.next('#app-ajax-popwin-page-container--list').next('.app-close-btn__wrapper--list').removeClass('is-active is-loaded');
        $this.removeClass('is-active is-loaded');
        history.pushState(null, null, docURL);
      });
    });
  };
  module.components.documentReady.push(module.AJAX_PUSH_CONTENT.documentReady);
  return /*#__PURE__*/AJAX_push_js_createClass(function AJAX_PUSH_CONTENT() {
    AJAX_push_js_classCallCheck(this, AJAX_PUSH_CONTENT);
    this.module = module;
  });
}(UixModuleInstance, jQuery, window, document);
;// CONCATENATED MODULE: ./src/components/ES6/_app-load.js
/*
 * Common website functions, Can be called separately in HTML pages or custom JavaScript.
 *    
 */




/*
 * Import modules from components
 *    
 */
/******/
/******/
/* base */






/******/
/******/
/* pages */


;// CONCATENATED MODULE: ./src/index.ts
/*
 * Import modules from components of ES6
 * 
 *        
 */

})();

/******/ })()
;
//# sourceMappingURL=js/uix-kit.js.map