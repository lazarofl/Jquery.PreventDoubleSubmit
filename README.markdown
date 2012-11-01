#Jquery.PreventDoubleSubmit
###JQuery plugin to prevent double submit in html forms that use jquery.validate, including .Net MVC 3 unobstrusive validate.

#How to use?
Add the referente to plugin

```html
    <script src="jquery.preventdoublesubmit.js" type="text/javascript"></script>
```

Initialize plugin
```html

<script type="text/javascript">
    $(function () {
    	//all forms
    	$('form').preventDoubleSubmit();    	
    });
</script>
```