// -------------------------------------------------------------------- Imports

import ValueStore from "@hkd-base/classes/ValueStore.js";

// ------------------------------------------------------------------ Variables

export const previousURL = new ValueStore("/");  // 

export function setPreviousUrl(newUrl) {
    if (!newUrl) {
        newUrl = location.pathname;
    }
    previousURL.set(newUrl);
}