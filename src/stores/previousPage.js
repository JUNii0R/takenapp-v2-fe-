// -------------------------------------------------------------------- Imports

import ValueStore from "@hkd-base/classes/ValueStore.js";

// ------------------------------------------------------------------ Variables

export const previousURL = new ValueStore();  // 

export function getURL(data) {
    if (previousURL) {
        previousURL.set('');
    }
    previousURL.set(data);
}