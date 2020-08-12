/**
 * atob helper functions
 * @module @ctx-core/atob/lib
 */
export function _Uint32Array__atob(b64) {
	const __ = atob(b64)
	const { length } = __
	let Uint32Array__atob = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		Uint32Array__atob[i] = __.charCodeAt(i)
	}
	return Uint32Array__atob
}
export function _atob() {
	return (
		typeof window === 'undefined'
		? require('atob-lite')
		: window.atob
	)
}
export function atob(val:any) {
	return _atob()(val)
}
