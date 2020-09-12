import { atob } from './atob'
export function _Uint32Array__atob(b64) {
	const __ = atob(b64)
	const { length } = __
	let Uint32Array__atob = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		Uint32Array__atob[i] = __.charCodeAt(i)
	}
	return Uint32Array__atob
}
