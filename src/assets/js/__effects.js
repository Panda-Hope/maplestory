/*!
 * COMMON EFFECTS JS
 * CREATE TIME 2016.6.1 19:33
 */

if (typeof jQuery === 'undefined') {
  throw new Error('The Common JavaScript requires jQuery');
}

    
/*  ===========================
 *   COLLAPSING EFFECTS PULGIN
 *   ========================== */
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
             var $target = $this.closest($this.attr('data-target'));
         }else {
             var $target = $this.closest('li');
         }
         
         if (e) {
             e.preventDefault();
         }
         
         if (Collapsing.prototype.checkActives($target) !== 'closeSelf') {
              $target.addClass('active'); 
         }    
     };
     
     Collapsing.prototype.checkActives = function(_relatedElem) {
        var $parent = $(_relatedElem).closest('ul');
        var $actives = $parent.find('li.active');
        var isClose = _relatedElem.hasClass('active');

        if ($actives.length > 0) {
          $actives.removeClass('active');

          if (isClose) {
              return 'closeSelf';
          }else {
              return 'closeAll';
          }
        }else {
          return false;
        }
     };

     // COLLAPSING PLUGIN DATA-API 
     
     $(document).on('click.effects.collapsing.data-api', selector, Collapsing.prototype.toggle);
}(jQuery);


/* ======================
 *  TABS  EFFECTS PLUGIN 
 * ====================== */
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
        
        // if (e) {
        //     e.preventDefault();
        // }
        
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

/* ========================
 * FORM SIMULATION PLUGIN
 * ========================*/
+function($) {
    'use strict';
     
    // SIMULATION PLUGIN DEFINITION 
    // =======================
    var   formApi = '[data-simulation="form"]',
          inputTypeApi = '[data-type]',
          checkAllApi = '[data-type="checkall"]';
    
    var Simulation = function() {};
    
    Simulation.AUTHOR = 'Hope';
    Simulation.VERSION = '1.0.1';
    Simulation.CREATE_TIME = '2016-7-27';
    Simulation.UPDATE_TIME = '2016-8-18';
    
    Simulation.prototype.checkbox = function(_self) {
        var insteadTarget = _self.attr('data-instead');
        
        if (!insteadTarget) {
            Simulation.prototype.errorReporting(100);
        }
        
        var checkboxs = _self.find('[type="checkbox"]');
        var $insteadEle = _self.find(insteadTarget);
        
        if (checkboxs.attr('disabled') || checkboxs.attr('readonly')) {
          return false;
        }

        if (checkboxs.prop('checked')) {
            checkboxs.prop('checked', false);
            
            checkboxs.prop('checked') ? Simulation.prototype.errorReporting(101) : ($insteadEle.hasClass('active') ? $insteadEle.removeClass('active') : '');
            
        }else {
            checkboxs.prop('checked', 'chekced');
            
            checkboxs.prop('checked') ? ($insteadEle.hasClass('active') ? '' : $insteadEle.addClass('active')) : Simulation.prototype.errorReporting(101);
        }
    };
    
    Simulation.prototype.checkboxForceChange = function(_self, status) {
        var insteadTarget = _self.attr('data-instead');
        
        if (!insteadTarget) {
            Simulation.prototype.errorReporting(100);
        }
        
        var checkboxs = _self.find('[type="checkbox"]');
        var $insteadEle = _self.find(insteadTarget);
        
        if (checkboxs.attr('disabled') || checkboxs.attr('readonly')) {
          return false;
        }
        
        if (!status) {
            checkboxs.prop('checked', false);
            
            checkboxs.prop('checked') ? Simulation.prototype.errorReporting(101) : ($insteadEle.hasClass('active') ? $insteadEle.removeClass('active') : '');
            
        }else {
            checkboxs.prop('checked', 'chekced');
            
            checkboxs.prop('checked') ? ($insteadEle.hasClass('active') ? '' : $insteadEle.addClass('active')) : Simulation.prototype.errorReporting(101);
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
    
    
    Simulation.prototype.radio = function(_self) {
        if (_self.prop('checked')) {
          return false;
        }

        var $container = _self.closest('table');
        var $insteadEles = $container.find('[data-type="radio"]');

        $insteadEles.each(function() {
            var $this = $(this);
            var radio = $this.find('[type="radio"]');

            radio.prop('checked', false);

            radio.prop('checked') ? Simulation.prototype.errorReporting(101) : $this.find(_self.attr('data-instead')).removeClass('active');
        });

        _self.find('[type="radio"]').prop('checked', 'checked');
        _self.find('[type="radio"]').prop('checked') && _self.find(_self.attr('data-instead')).addClass('active');
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
    
    $(document)
    .on('click.form.simulation.data-api', inputTypeApi, Simulation.prototype.typeJudge)
    .on('click.form.simulation.data-api', checkAllApi, Simulation.prototype.checkboxAll);
}(jQuery);


/* =======================
 *  SCROLL EFFECTS PLUGIN
 * ======================= */
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
 
 
/* ================================
 *    HTML OPERATION EFFECTS PLUGIN
 * ================================ */

+function($) {
    'use strict';
    
    var htmlOperationApi = '[data-effecs="html-operation"]';
    var contentCodeApi = 'data-content-code';
    var addApi = '[data-operation="add"]';
    var removeApi = '[data-operation="remove"]';
    
    var HtmlOperation = function() {};
    var num = 2;
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
        
        num++;
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
                    <td><input  id="order_'+num+'" type="text" name="order" class="form-control"></td>\n\
                    <td><input id="name_'+num+'" type="text" name="name" class="form-control"></td>\n\
                    <td><input id="orgname_'+num+'" type="text" name="orgname" class="form-control"></td>\n\
                    <td><input id="tel_mobile_'+num+'" type="text" name="tel" class="form-control"></td>\n\
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
