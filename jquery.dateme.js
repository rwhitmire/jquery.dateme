/*!
 * jquery.dateme v1.0.0
 * https://github.com/rwhitmire/jquery.dateme
 *
 * Copyright 2015 Ryan Whitmire
 * Released under the MIT license
 */

(function($){

  var getISODate = function(str) {
    var date = new Date(str);
    if(date == 'Invalid Date') { return ''; }
    return date.toISOString();
  };

  var getLocaleDate = function(str) {
    var date = new Date(str);
    if(date == 'Invalid Date') { return str; }
    return date.toLocaleString();
  };

  var init = function(index, el) {
    var $el = $(el);
    var name = $el.attr('name');

    $el.val(getLocaleDate($el.val()));

    var $hidden = $('<input>')
      .attr('type', 'hidden')
      .attr('name', name)
      .val(getISODate($el.val()));

    $el.attr('name', name);

    $el.before($hidden);

    $el.on('change', function(e) {
      $hidden.val(getISODate(e.target.value));
    });
  };

  $.fn.dateme = function() {
    this.each(init);
    return this;
  };

}(jQuery));
