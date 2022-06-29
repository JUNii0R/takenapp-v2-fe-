import ValueStore from "@hkd-base/classes/ValueStore.js";

export let loadingData = true;

export const Tasklist = new ValueStore([]);
export const numSelected = new ValueStore(0);


export async function getTasklist() {
  const url = new URL(`http://${location.hostname}:3333/api/task/list`);
  const response = await fetch(url);

  const responseJSON = await response.json();
  Tasklist.set(responseJSON.tasks);
  return Tasklist;
}

export async function loadingTasklist() {
  console.log("Getting Tasks...");

  await getTasklist();
  console.log("Done!");
}

export async function reloadTasklist() {
    await getTasklist();
}


export function triggerTasklistStore() {
  Tasklist.set(Tasklist.get());
}


export const onSelectAll = (event) => {
  console.log("onSelectAll");
  const _Tasklist = Tasklist.get();
  if (event.target.checked) {
    for (let j = 0; j < _Tasklist.length; j++) {
      const task = _Tasklist[j];
      task.checked = true;
    }
    numSelected.set(_Tasklist.length);
  } else {
    for (let j = 0; j < _Tasklist.length; j++) {
      const task = _Tasklist[j];
      task.checked = false;
    }
    numSelected.set(0);
  }
  Tasklist.set(_Tasklist);
};

export const countChecked = (event) => {
  const _Tasklist = Tasklist.get();
  let temp = 0;
  for (const task of _Tasklist) {
    if (task.checked) {
      temp = temp + 1;
    }
  }
  numSelected.set(temp);
};

  // loadingTasklist();
  // closePopup();