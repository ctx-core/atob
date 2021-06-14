import { no_dom } from '@ctx-core/dom';
export function atob_() {
    return (typeof no_dom
        ? require('atob-lite')
        : window.atob);
}
export { atob_ as _atob, };
//# sourceMappingURL=src/atob_.js.map