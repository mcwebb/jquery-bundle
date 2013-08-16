# jQuery for Ditto
**a Ditto bundle**

You can pick and choose which version of jQuery to load.
You cans also choose to load jQuery UI and some plugins.

## Example Use
```php
Engine::load()->bundle('jQuery')
	->version(203)
	->migrate()
	->ui([
		'sortable',
		'draggable'
	])
	->plugins([
		'validate',
		'inputmask'
	]);
```

The indicated JS files and their depenencies will then be inserted into the template.