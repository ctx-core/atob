import { atob } from './atob.js'
export function atob_Uint32Array_(b64:string) {
	const str = atob(b64)
	const { length } = str
	let atob_Uint32Array = new Uint32Array(length)
	for (let i = 0; i < length; i++) {
		atob_Uint32Array[i] = str.charCodeAt(i)
	}
	return atob_Uint32Array
}
export {
	atob_Uint32Array_ as _atob_Uint32Array,
	atob_Uint32Array_ as _Uint32Array__atob,
}
