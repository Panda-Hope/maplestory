/*!
 * COMMON EFFECTS JS
 * CREATE TIME 2016.6.1 19:33
 */

if (typeof jQuery === 'undefined') {
  throw new Error('The Common JavaScript requires jQuery');
}

    
/*  =====================
 *   COLLAPSING EFFECTS PULGIN
 *   ===================== */
+function($) {
     'use strict';
     
     // COLLAPSING PLUGIN DEFINITION
     //  =======================
     
     var selector = '[data-effects="collapsing"]';
     
     var Collapsing = function Collpasing() {};
     
     Collapsing.VERSION = '1.0.3';
     Collapsing.AUTHOR = 'Hope';
     Collapsing.CREATE_TIME = '2016-6-3 10:19';
     Collapsing.UPDATE_TIME = '2016-8-8';
     
     Collapsing.prototype.toggle = function toggle(e) {         
         var $this = $(this);
         
         if ($this.attr('data-target')) {
             var classes = $this.attr('data-target');
             
             var classArray= classes.split(' ');

             if (classArray.length == 1) {
                 var $target = $(classes);
             }else if (classArray.length == 2) {
                 var parent = classArray[0];
                 var sub = classArray[1];
                 
                 var $target = $this.closest(parent).find(sub);
                 
             } 
         }else {
             var $target = $this.closest('li');
         }
         
         if (e) {
             e.preventDefault();
         }
         
         $target.toggleClass('active');
     };
     
     // COLLAPSING PLUGIN DATA-API 
     
     $(document).on('click.effects.collapsing.data-api', selector, Collapsing.prototype.toggle);
}(jQuery);


/* ================
 *  TABS  EFFECTS PLUGIN 
 * ================ */
+function($) {
    'use strict';
    
    // TABS PLUGIN DEFINITON 
    // =================
    
    var navTabApi = '[data-effects="tabs"]',
          subTabsApi = navTabApi + ' >';
    
    var Tabs = function() {};
    
    Tabs.AUTHOR = 'Hope';
    Tabs.VERSION = '1.0.0';
    Tabs.CREATE_TIME = '2016-7-26';
    
    Tabs.prototype.switching = function(e) {
        var $tabOptions = $(subTabsApi);
        var $self = $(this);
        
        if (e) {
            e.preventDefault();
        }
        
        return $self.hasClass('active') ? false : Tabs.prototype.activate($self);       
    };
    
    Tabs.prototype.activate = function($self) {
        // switch the nav tab
        var $navTab = $(navTabApi);
        
        $navTab.find('.active').removeClass('active');
        
        $self.addClass('active');
        
        // activate the tab content
        var tabTargetsElements = $navTab.attr('data-target');
        
        if (!tabTargetsElements) {
            throw new Error('The Tab Plugin Needs A Target Tab Content, Please Set The Target First');
        }
        
        var $tabTargets = $(tabTargetsElements);      
        var key = $self.index();
        
        $tabTargets.each(function() {
            var $this = $(this);
            
            !$this.hasClass('active') || $this.removeClass('active'); 
        });
        
        $($tabTargets[key]).addClass('active');
    };
    
    // TABS DATA-API
    // ===========
    
    $(document).on('click.effects.tabs.data-api', subTabsApi, Tabs.prototype.switching);
    
}(jQuery)

/* ======================
 * FORM SIMULATION PLUGIN
 * =================== === */
+function($) {
    'use strict';
     
    // SIMULATION PLUGIN DEFINITION 
    // =======================
    var formApi = '[data-simulation="form"]',
          inputTypeApi = '[data-type]',
          checkAllApi = '[data-type="checkall"]';
    
    var Simulation = function() {};
    
    Simulation.AUTHOR = 'Hope';
    Simulation.VERSION = '1.0.0';
    Simulation.CREATE_TIME = '2016-7-27';
    
    Simulation.prototype.checkbox = function(_self) {
        var insteadTarget = _self.attr('data-instead');
        
        if (!insteadTarget) {
            Simulation.prototype.errorReporting(100);
        }
        
        var checkboxs = _self.find('[type="checkbox"]');
        var $insteadEle = _self.find(insteadTarget);
        
        if (checkboxs.attr('checked') == 'checked') {
            checkboxs.attr('checked', false);
            
            checkboxs.attr('checked') == 'checked' ? Simulation.prototype.errorReporting(101) : ($insteadEle.hasClass('active') ? $insteadEle.removeClass('active') : '');
            
        }else {
            checkboxs.attr('checked', 'chekced');
            
            checkboxs.attr('checked') == 'checked' ? ($insteadEle.hasClass('active') ? '' : $insteadEle.addClass('active')) : Simulation.prototype.errorReporting(101);
        }
    };
    
    Simulation.prototype.checkboxForceChange = function(_self, status) {
        var insteadTarget = _self.attr('data-instead');
        
        if (!insteadTarget) {
            Simulation.prototype.errorReporting(100);
        }
        
        var checkboxs = _self.find('[type="checkbox"]');
        var $insteadEle = _self.find(insteadTarget);
        
        if (!status) {
            checkboxs.attr('checked', false);
            
            checkboxs.attr('checked') == 'checked' ? Simulation.prototype.errorReporting(101) : ($insteadEle.hasClass('active') ? $insteadEle.removeClass('active') : '');
            
        }else {
            checkboxs.attr('checked', 'chekced');
            
            checkboxs.attr('checked') == 'checked' ? ($insteadEle.hasClass('active') ? '' : $insteadEle.addClass('active')) : Simulation.prototype.errorReporting(101);
        }
    };
    
    Simulation.prototype.checkboxAll = function(e) {
        var _self = $(this);
        var targetClass = _self.attr('data-target');
        
        if (!targetClass) {
            Simulation.prototype.errorReporting(99);
        }
        
        if (e) {
            e.preventDefault();
        }
        
        var isChecked = _self.attr('data-checked') == 'true' ? true : false;
        var $target = $(targetClass);
        var $checkboxLists = $target.find(inputTypeApi);
        var $insteadEle = _self.find(_self.attr('data-instead'));
        
        if (isChecked) {
            $insteadEle.hasClass('active') ? $insteadEle.removeClass('active') : '';
            
            $checkboxLists.each(function() {
                var _current = $(this);
                
                Simulation.prototype.checkboxForceChange(_current, false);
                
            });
            
            _self.attr('data-checked', 'false');
        }else {
            $insteadEle.hasClass('active') ?  '' : $insteadEle.addClass('active');
            
            $checkboxLists.each(function() {
                var _current = $(this);
                
                Simulation.prototype.checkboxForceChange(_current, true);   
            });
            
            _self.attr('data-checked', 'true');
        }

    };
    
    
    Simulation.prototype.radio = function() {
        //  add waittting......
    };
    
    Simulation.prototype.input = function() {
        //  add waittting......
    };
    
    Simulation.prototype.select = function() {
        //  add waittting......
    };
    
    Simulation.prototype.errorReporting = function(errorCode) {
        var errorText = '';
        
        switch (errorCode) {
          case 99:
                errorText = 'you need set a target first ！！！';
                break;
            case 100:
                errorText = 'the simulation form plugin needs you set a instead element first to instead the original input element !!!';
                break;
            case 101: 
                errorText = 'sorry a uncaught error happend, please refresh the page and try agagin';
                break;
            default: 
                errorText = 'sorry a error happend';
                break;
        }
        
        throw new Error(errorText);
    };
    
    Simulation.prototype.typeJudge = function() {
        var _self = $(this);
        var inputType = _self.attr('data-type');
        
        switch (inputType) {
            case 'checkbox':
                Simulation.prototype.checkbox(_self);
                break;
            case 'radio':
                Simulation.prototype.radio(_self);
                break;
        }    
    };
    
    // FORM SIMULATION PLUGIN DATA-API
    // ===========================
    
    $(document).on('click.form.simulation.data-api', inputTypeApi, Simulation.prototype.typeJudge);
    $(document).on('click.form.simulation.data-api', checkAllApi, Simulation.prototype.checkboxAll);
}(jQuery);


/* ===================
 *  SCROLL EFFECTS PLUGIN
 * =================== */
 +function($) {
     'use strict';
     
     // SCROLL PLUGIN DEFINITION
     // ===================
     
     var scrollPoint = '[data-effects="scroll-top"]';
     
     var Scroll = function() {};
     
     Scroll.AUTHOR = 'Hope';
     Scroll.VERSION = '1.0';
     Scroll.UPDATE_TIME = '2016-6-3 11:46';
     
     Scroll.prototype.scrollToTop = function(e) {
         var $body = $(document.body);
         var $scrollTop = $body.scrollTop;
         
         if (e) {
             e.preventDefault();
         }
         
         var time = 0;
         
         if ($scrollTop < 200) {
             time = 100;
         }else {
             time = 400;
         }
         
         $body.animate({scrollTop: 0}, time, 'linear');
     };
     
     // SCROLL DATA-API
     
     $(document).on('click.effects.scroll.data-api', scrollPoint, Scroll.prototype.scrollToTop);
 }(jQuery);
 
 
 /*
  *  INPUT CONTROL EFFECTS NOT TO OBJECT
  *  Author: Hope;
  *  CreateTime: 2016-7-28  临时添加JS方案 ，为了向后兼容请勿删除
  */
+function($) {
    'use strict';
    
    var addEleApi = '[data-input="add-file"]';
    var removeAPi = '[data-input="remove-file"]';
    
    function add(e) {
        var _self = $(this);
        
        var insertText = '<div class="form-group has-feedback special">\n\
        <input class="form-control normal-size" type="file">\n\
        <a href="" class="form-control-feedback remove-file" data-input="remove-file">\n\
        <span title="添加选项" class="glyphicon glyphicon-minus"></span></a>\n\
        </div>';
        
        if (e) {
            e.preventDefault();
        }
        
        var target = _self.closest('.form-group'); 
        
        target .before(insertText);
        
    };
    
    function remove(e) {
        
        var _self = $(this);
        var target = _self.closest('.form-group');
        
        if (e) {
            e.preventDefault();
        }
        
        target.remove();
    };
    
    $(document).on('click', addEleApi, add);
    $(document).on('click', removeAPi, remove);
}(jQuery);

/* ==========================
 *    HTML OPERATION EFFECTS PLUGIN
 * =========================== */

+function($) {
    'use strict';
    
    var htmlOperationApi = '[data-effecs="html-operation"]';
    var contentCodeApi = 'data-content-code';
    var addApi = '[data-operation="add"]';
    var removeApi = '[data-operation="remove"]';
    
    var HtmlOperation = function() {};
    
    HtmlOperation.AUTHOR = 'Hope';
    HtmlOperation.CREATE_TIME = '2016-8-4';
    HtmlOperation.VERSION = '1.0.0';
    
    HtmlOperation.prototype.init = function() {
        var $htmlOperationEle = $(htmlOperationApi);
        
        if ($htmlOperationEle.length < 1) {
            return false;
        }
      
        $(document).on('click', addApi, HtmlOperation.prototype.addContent);
        $(document).on('click', removeApi, HtmlOperation.prototype.removeContent);
    };
    
    HtmlOperation.prototype.addContent = function(e) {
        var $htmlOperationEle = $(htmlOperationApi);
        
        // check is exists contentcode
        try {
            var contentCode = $htmlOperationEle.attr(contentCodeApi);
            
            if (!contentCode) {
                throw new Error('The HMTL Operation Plugin Need A ContentCode First, Plase Refer To This Plugin\'s SelectCode Method And Then Select A ContentCode.');
            }
        } catch (error) {
           console.warn(error.message); 
           
           return false;
        }
        
        var insertContent = HtmlOperation.prototype.selectContent(contentCode);
        
        if (e) {
            e.preventDefault();
        }
        
        var insertTargetApi = $htmlOperationEle.attr('data-insert-target');
        var _self = $(this);
        
        var insertTarget =  insertTargetApi ? $(insertTargetApi) :  _self.closest(htmlOperationApi);
                
        insertTarget.append(insertContent);
    };
    
    HtmlOperation.prototype.removeContent = function(e) {
        var _self = $(this);
        var targetApi = _self.attr('data-target');
        
        if (!targetApi) {
            throw new Error('Remove Button Need A Target First');
        }
        
        var target = (_self.siblings(targetApi).length > 0) ? _self.siblings(targetApi) : _self.closest(targetApi);

        if (e) {
            e.preventDefault();
        }
        
        target.remove();
    };
    
    HtmlOperation.prototype.selectContent = function(contentCode) {
        var insertContent = "";
        
        switch (contentCode) {
            case "100":     
                insertContent='<tr>\n\
                    <td><input type="text" class="form-control"></td>\n\
                    <td><input type="text" class="form-control"></td>\n\
                    <td><input type="text" class="form-control"></td>\n\
                    <td><input type="text" class="form-control"></td>\n\
                    <td><a href="#" title="添加" class="operation-option" data-operation="add"><span class="glyphicon glyphicon-plus"></span></a><a href="#" title="删除" class="operation-option" data-operation="remove" data-target="tr"><span class="glyphicon glyphicon-minus"></span></a></td>\n\
                    </tr>';

                break;    
        }
        
        return insertContent;
    } 
        
    // BIND HTML OPERATION PLUGIN REGISTER GLOBAL 
    // ===================================
    var htmlOperation =  new HtmlOperation();
    
    htmlOperation.init();
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);