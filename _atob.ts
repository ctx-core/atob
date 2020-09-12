export function _atob() {
	return (
		typeof window === 'undefined'
		? require('atob-lite')
		: window.atob
	)
}
