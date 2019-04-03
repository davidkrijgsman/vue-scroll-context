import _throttle from 'lodash.throttle';

import { getContext } from './util';

function directive(el, binding) {
	if (binding.value && binding.value.callback) {
		// get params
		const {
			callback,
			params = {},
			throttle = 20
		} = binding.value;
		// on scroll callback
		const handleScroll = _throttle(() => {
			window.requestAnimationFrame(() => {
				// execute callback with context and params
				callback(el, getContext(el), params);
			});
		}, throttle);
		// add scroll listener
		window.addEventListener('scroll', handleScroll);
	}
}

function install(Vue) {
	if (window.CSS && window.CSS.supports && window.CSS.supports('--dummy-var', 0)) {
		Vue.directive('scroll-context', {
			bind: directive,
		});
	}
}

export { directive };

export default install;
