// -------------------------------------------------------------------- Imports

import ValueStore from "@hkd-base/classes/ValueStore.js";

import { startTimer } from "@src/stores/timer.js";

// ------------------------------------------------------------------ Variables


let url = "http://localhost:8888/Timer";


export const startTaskInfo = new ValueStore();  // 
export const updateTaskInfo = new ValueStore();  // 

export function startTask(data) {
    if (startTaskInfo) {
        startTaskInfo.set('');
    }
    let keyID = data.task._key;
    let title = data.task.title;
    let description = data.task.description;
    let status = data.task.status;
    let taskData = { keyID, title, description, status }
    startTaskInfo.set(taskData);
    startTimer();
}