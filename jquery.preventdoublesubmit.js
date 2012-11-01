;(function ( $, window, undefined ) {
  var pluginName = 'preventDoubleSubmit',
      document = window.document,
      defaults = {
      };

  function Plugin( formelement, options ) {
    this.formelement = formelement;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
    $(this.formelement).submit(function () {
        console.log($(this).valid());
        if ($(this).valid()) {
            $(':submit', this).attr('disabled', 'disabled');
        }
    });
  };

  $.fn[pluginName] = function ( formelement, options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));