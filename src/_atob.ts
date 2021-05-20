import { no_dom } from '@ctx-core/dom'
export function _atob() {
	return (
		typeof no_dom
		? require('atob-lite')
		: window.atob
	)
}
