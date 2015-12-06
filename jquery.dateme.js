(function($){

  var getISODate = function(str) {
    var date = new Date(str);
    if(date == 'Invalid Date') { return ''; }
    return date.toISOString();
  };

  var init = function(index, el) {
    var $el = $(el);
    var name = $el.attr('name');

    var $hidden = $('<input>')
      .attr('type', 'hidden')
      .attr('name', name)
      .val(getISODate($el.val()));

    $el
      .attr('name', name + '-dateme');

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
