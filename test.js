var $fixture;

var createFixture = function() {
  $fixture = $('<div>');
  $('body').append($fixture);
};

var destroyFixture = function() {
  $fixture.remove();
};

QUnit.module('jquery.datetime', {
  beforeEach: function() {
    createFixture();
  },

  afterEach: function() {
    destroyFixture();
  }
});

QUnit.test('initialize', function(assert) {
  var $input = $('<input>');
  $fixture.append($input);
  var $el = $input.dateme();
  assert.equal($el, $input);
});

QUnit.test('add hidden input', function(assert) {
  var $input = $('<input>');
  $fixture.append($input);
  $input.dateme();
  assert.equal($('[type=hidden]').length, 1);
});

QUnit.test('hidden input name', function(assert) {
  var $input = $('<input type="text" name="foo">');
  $fixture.append($input);
  $input.dateme();
  assert.equal($('[name=foo][type=hidden]').length, 1);
  assert.equal($('[name=foo-dateme][type=text]').length, 1);
});

QUnit.test('initialized value', function(assert) {
  var date = new Date('2000-01-01');
  var $input = $('<input id="date" name="date">').val(date.toLocaleString());
  $fixture.append($input);
  $input.dateme();
  assert.equal($('[name=date]').val(), date.toISOString());
});

QUnit.test('change event', function(assert) {
  var date = new Date();
  var $input = $('<input id="date" name="date">').val(date.toLocaleString());
  $fixture.append($input);
  $input.dateme();

  var newDate = new Date('2000-01-01');
  $input.val(newDate.toLocaleString());
  $input.trigger('change');

  assert.equal($('[name=date]').val(), newDate.toISOString());
});

QUnit.test('handle invalid date', function(assert) {
  var $input = $('<input id="date" name="date">').val('rubbish');
  $fixture.append($input);
  $input.dateme();
  assert.equal($('[name=date]').val(), '');
});
