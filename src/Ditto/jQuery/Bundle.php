<?php
namespace Ditto\jQuery;
use Ditto\Core\Engine;

class Bundle extends \Ditto\Core\Bundle {
	protected $bundle_name = 'jQuery';
	protected $bundle_type = 'JavaScript Library';

	private $dependencies = array(
		'accordion' => array(
			'core',
			'widget'
		),
		'autocomplete' => array(
			'core',
			'widget',
			'position',
			'menu'
		),
		'button' => array(
			'core',
			'widget'
		),
		'accordion' => array(
			'core',
			'widget'
		),
		'dialog' => array(
			'core',
			'widget',
			'mouse',
			'position',
			'draggable',
			'resizable'
		),
		'accordion' => array(
			'widget'
		),
		'menu' => array(
			'core',
			'widget',
			'position'
		),
		'progressbar' => array(
			'core',
			'widget'
		),
		'slider' => array(
			'core',
			'widget',
			'mouse'
		),
		'spinner' => array(
			'core',
			'widget',
			'button'
		),
		'tabs' => array(
			'core',
			'widget'
		),
		'tooltips' => array(
			'core',
			'position'
		),
		'draggable' => array(
			'core',
			'widget',
			'mouse'
		),
		'droppable' => array(
			'core',
			'widget',
			'mouse',
			'draggable'
		),
		'resizable' => array(
			'core',
			'widget',
			'mouse'
		),
		'selectable' => array(
			'core',
			'widget',
			'mouse'
		),
		'sortable' => array(
			'core',
			'widget',
			'mouse'
		),
		'effect-blind' => array(
			'effect'
		),
		'effect-bounce' => array(
			'effect'
		),
		'effect-clip' => array(
			'effect'
		),
		'effect-drop' => array(
			'effect'
		),
		'effect-explode' => array(
			'effect'
		),
		'effect-fade' => array(
			'effect'
		),
		'effect-fold' => array(
			'effect'
		),
		'effect-highlight' => array(
			'effect'
		),
		'effect-pulsate' => array(
			'effect'
		),
		'effect-scale' => array(
			'effect'
		),
		'effect-shake' => array(
			'effect'
		),
		'effect-slide' => array(
			'effect'
		),
		'effect-transfer' => array(
			'effect'
		)
	);
	private $loaded = array();
	private $theme = 'smoothness';

	public function construct() { }

	private function loadDependencies($module) {
		if (isset($this->dependencies[$module])) {
			foreach ($this->dependencies[$module] as $dependency) {
				$result = array_search($dependency, $this->loaded);
				if ($result === false)
					array_push($this->loaded, $dependency);
			}
		}
		return $this;
	}

	public function version($version) {
		if (Engine::getEnvironment() == 1)
			$pathAffix = '';
		else $pathAffix = 'min.';
		if (file_exists(
			self::$root_abs ."jquery-{$version}.{$pathAffix}js"
		))
			Engine::addGlobalScript(
				self::$root ."jquery-{$version}.{$pathAffix}js"
			);
		else trigger_error("Ditto\jQuery cannot load jQuery of version $version, as the corresponding file does not exist, or is incorrectly named.");

		return $this;
	}

	public function setTheme($theme) {
		if (file_exists(
			self::$root_abs ."ui/themes/$theme/jquery-ui-1.10.0.css"
		)) $this->theme = $theme;
	}

	public function ui(array $modules, $version = null) {
		if (empty($version))
			$version = '1102';
		if (Engine::getEnvironment() == 1)
			$pathAffix = '';
		else $pathAffix = 'min.';

		Engine::addGlobalStyle(
			self::$root . "ui/themes/{$this->theme}/jquery-ui-1.10.0.$pathAffixcss"
		);

		foreach ($modules as $module) {
			$this->loadDependencies($module);
			array_push($this->loaded, $module);
		}
		foreach ($this->loaded as $module) {
			$path = "ui/{$version}/jquery.ui.{$module}.{$pathAffix}js";
			if (file_exists(self::$root_abs . $path))
				Engine::addGlobalScript(self::$root . $path);
			else trigger_error("Ditto\jQuery cannot load $module jQuery UI module, as the corresponding file does not exist, or is incorrectly named.{$path}");
		}
		return $this;
	}

	public function plugins(array $plugins) {
		foreach ($plugins as $plugin) {
			if (file_exists(
				self::$root_abs ."plugins/jquery.{$plugin}.js"
			))
				Engine::addGlobalScript(
					self::$root ."plugins/jquery.{$plugin}.js"
				);
			else trigger_error("Ditto\jQuery cannot load $plugin jQuery plugin, as the corresponding file does not exist, or is incorrectly named.");
		}

		return $this;
	}

	public function migrate($version = null) {
		if (is_null($version)) $version = '121';

		if (Engine::getEnvironment() == 1)
			$pathAffix = '';
		else $pathAffix = 'min.';
		
		if (file_exists(
			self::$root_abs ."migrate/jquery-migrate-{$version}.{$pathAffix}js"
		))
			Engine::addGlobalScript(
				self::$root ."migrate/jquery-migrate-{$version}.{$pathAffix}js"
			);
		else trigger_error("Ditto\jQuery cannot load version $version of jQuery migrate, as the corresponding file does not exist, or is incorrectly named.");

		return $this;
	}
}