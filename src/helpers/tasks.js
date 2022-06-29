import { expectNotEmptyString, expectString } from "@hkd-base/helpers/expect.js";

import { triggerTasklistStore } from "@src/helpers/Tasklist.js";

// ------------------------------------------------------------------ Functions

/**
 * Add a task
 * - Sends task to Back-end
 * @param {string} opt.taskTitle - Title of the task 
 * @param {string} opt.taskDescription - Description of the task 
 * @param {string} opt.taskStatus - Status of the task ( "done" | "ongoing" )
 */ 
export async function addTask(
  {
    taskTitle, 
    taskDescription, 
    taskStatus}) 
  {

    expectNotEmptyString(taskTitle, 'Invalid Parameter(taskTitle)');
    expectString(taskDescription, 'Invalid Parameter(taskDescription)');
    expectNotEmptyString(taskStatus, 'Invalid Parameter(taskStatus)');

    // console.log(taskStatus);
    const url = new URL(`http://${location.hostname}:3333/api/task/add`);
    const title = taskTitle;
    const description = taskDescription;
    const status = taskStatus;
    let taskData = {title, description, status};
    // console.log(taskData);
      
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
  
    const headers = new Headers(
      [
        [ "accept", "application/json" ],
        [ "content-type", "application/json" ]
        // [ "x-session-id", _sessionId ]
      ] );
  
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
  
    // console.log( 123, Array.from( headers.entries() ) );
  
    const init = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers,
      body: JSON.stringify( taskData )
    };
  
    const request = new Request( url, init );
  
    const response = await fetch( request );
}

export async function deleteTask({
    task,
    _sessionId
    }) {
    task._deleted = true;
    triggerTasklistStore();

    const url = new URL(`http://${location.hostname}:3333/api/task/delete`);
    const keyID = task._key;
      
    // // @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
  
    const headers = new Headers(
      [
        [ "accept", "application/json" ],
        [ "content-type", "application/json" ],
        [ "x-session-id", _sessionId ]
      ] );
  
    // // @see https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
  
    // // console.log( 123, Array.from( headers.entries() ) );
  
    const init = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers,
      body: JSON.stringify( { keyID } )
    };

    // return;
      const request = new Request( url, init );

      const response = await fetch( request );
      console.log(response);
  
}


export async function deleteSelectedTasks({
    tasklist,
    }) {
      for(const task of tasklist) {
        if (task.checked) {
            await deleteTask({ task });
        }
      }  
    }
  
export async function updateTask({ taskKey, taskTitle, taskDesc, taskStatus }) {
    const keyID = taskKey;
    const title = taskTitle;
    const description = taskDesc;
    const status = taskStatus;

    expectNotEmptyString(keyID, 'Invalid Parameter(keyID)');
    expectNotEmptyString(title, 'Invalid Parameter(title)');
    expectString(description, 'Invalid Parameter(description)');
    expectNotEmptyString(status, 'Invalid Parameter(status)');

    const url = new URL(`http://${location.hostname}:3333/api/task/update`);

    let taskData = {keyID, title, description, status};
    // console.log(taskData);
      
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Headers
  
    const headers = new Headers(
      [
        [ "accept", "application/json" ],
        [ "content-type", "application/json" ]
        // [ "x-session-id", _sessionId ]
      ] );
  
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
  
    // console.log( 123, Array.from( headers.entries() ) );
  
    const init = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers,
      body: JSON.stringify( taskData )
    };
    const request = new Request( url, init );
  
    const response = await fetch( request );
    console.log(response);

  }