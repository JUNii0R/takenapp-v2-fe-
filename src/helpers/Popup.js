import ValueStore from "@hkd-base/classes/ValueStore.js";


export const visible_edit = new ValueStore(false);  // true
export const visible_add = new ValueStore(false);  // true
export const taskData = new ValueStore(false);  // true


export async function openPopup(data) {
  if (visible_edit.get() === false) {
    visible_edit.set(true);
  }
  visible_edit.set(true);
  const keyID = data.task._key
  const title = data.task.title
  const description = data.task.description
  const status = data.task.status
  const taskInfo = { keyID, title, description, status }
  taskData.set(taskInfo);
}

export async function closePopup() {
  visible_edit.set(false);
  visible_add.set(false);
}

export async function openAddPopup() {
  if (visible_add.get() === false) {
    visible_add.set(true);
  }
  visible_add.set(true);
}

