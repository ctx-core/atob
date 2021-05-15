import { atob } from './atob'
export function _atob_Uint32Array(b64:string) {
	const __ = atob(b64)
	const { length } = __
	let atob_Uint32Array = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		atob_Uint32Array[i] = __.charCodeAt(i)
	}
	return atob_Uint32Array
}
export {
	_atob_Uint32Array as _Uint32Array__atob
}
