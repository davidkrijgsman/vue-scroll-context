# vue-scroll-context
Vue directive that passes some positioning context to a callback

### Usage
Import the directive and register it in your component
```
import { directive } from 'vue-scroll-context';
export default {
	name: 'Example',
	directives: {
		scrollContext: directive,
	}
}
```
Add the now registered `v-scroll-context` directive (or whatever you have called it) to your element and pass it a `callback` (required). You can also provide `params` to be passed into the callback.
You can also pass in the `throttle` value which will be passed to [lodash.trottle](https://www.npmjs.com/package/lodash.throttle).

```
<figure v-scroll-context="{ callback: scrollCallback, params: { multiplier: 0.05 }, throttle: 30 }">
    <img ... />
</figure>
```

### Callback
The callback gets passed the element, the calculated context and the params you passed into the directive.
The context consists of
  - `rect` which is the result of `getBoundingClientRect()`
  - `amountRevealed` which is the numbers of pixels the element is in view

You can use it to create a parallax effect, for example:
```
export default {
	name: 'Example',
	methods: {
		scrollCallback(el, ctx, params) {
			el.style.transform = `translateY(-${ctx.amountRevealed * params.multiplier}px)`;
		},
	},
};
```

### License
MIT