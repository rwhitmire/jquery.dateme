# jquery.dateme

Convert user intput datetimes to UTC prior to posting to the server

[download](https://raw.githubusercontent.com/rwhitmire/jquery.dateme/master/jquery.dateme.js)

## How it works

You have a form that accepts a user entered date and you are working from the Eastern timezone.

``` html
<input type="text" id="date" name="date" value="1/1/2015">
```

Initialize the plugin

``` javascript
$('#date').dateme();
```

A hidden input as added to the form and the name attribute is swapped.

```html
<input type="hidden" name="date" value="2015-01-01T05:00:00.000Z">
<input type="text" id="date" name="date-dateme" value="1/1/2015">
```

Date values will now be posted to your server in ISO format UTC!
