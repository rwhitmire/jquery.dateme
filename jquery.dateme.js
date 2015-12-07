/*!
 * jquery.dateme v1.0.0
 * https://github.com/rwhitmire/jquery.dateme
 *
 * Copyright 2015 Ryan Whitmire
 * Released under the MIT license
 */

(function($){

  var settings = {
    format: function(date) {
      return date.toLocaleString();
    }
  };

  var getISODate = function(str) {
    var date = new Date(str);
    if(date == 'Invalid Date') { return ''; }
    return date.toISOString();
  };

  var getLocaleDate = function(str) {
    var date = new Date(str);
    if(date == 'Invalid Date') { return str; }
    return settings.format(date);
  };

  var init = function(index, el) {
    var $el = $(el);
    var name = $el.attr('name');

    $el.val(getLocaleDate($el.val()));

    var $hidden = $('<input>')
      .attr('type', 'hidden')
      .attr('name', name)
      .val(getISODate($el.val()));

    $el.before($hidden);

    $el.on('change', function(e) {
      $hidden.val(getISODate(e.target.value));
    });
  };

  $.fn.dateme = function(opts) {
    $.extend(settings, opts);
    this.each(init);
    return this;
  };

}(jQuery));
