angular.module('utoo')
.service('Layout', function Layout ($rootScope){

	var switchValue = false;	
	
	function changeValue() {
		switchValue = !switchValue;
		console.log(switchValue);
	}

	function getSwitchValue () {
		return switchValue;
	}
		$rootScope.switch = switchValue;


	return {
		getSwitchValue: getSwitchValue,
		changeValue: changeValue
	};
})