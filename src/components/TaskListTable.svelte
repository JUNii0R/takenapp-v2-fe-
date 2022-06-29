<script>
  // -------------------------------------------------------------------- Imports
  import { navigate } from "svelte-routing";

  import { deleteTask, deleteSelectedTasks } from "@src/helpers/tasks.js";

  import { startTask } from "@src/stores/task.js";

  import {
    Tasklist,
    numSelected,
    reloadTasklist,
    countChecked,
    onSelectAll,
    loadingTasklist,
  } from "@src/helpers/Tasklist.js";

  import { closePopup, openPopup } from "@src/helpers/Popup.js";
  // ------------------------------------------------------------------ Variables

  let userStatus = "default";

  let loadingData = false;

  // ------------------------------------------------------------------ Functions

  async function gettingTasks() {
    closePopup();
    loadingData = true;
    await loadingTasklist();
    loadingData = false;
  }

  gettingTasks();
</script>

<table class="table-content">
  <!-- <thead>
    <tr>
      <th><i class="fa fa-tasks"></i>&nbsp;Tasklist</th>
      <th>
        <label for="" style="margin:0;padding:0;">
          <input
            type="checkbox"
            checked={$numSelected === $Tasklist.length}
            on:change={onSelectAll}
          />
          {#if $numSelected > 0}
            <svg
              on:click={async () => {
                await deleteSelectedTasks( $Tasklist );
                reloadTasklist();
              }}
              style="color:red;"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
              ><circle cx="12" cy="12" r="10" /><line
                x1="8"
                y1="12"
                x2="16"
                y2="12"
              /></svg
            >
          {/if}
        </label>
      </th>
    </tr>
  </thead> -->
  <!-- {#if Tasklist.length <= 0}
    <div
      style="font-family: 'Noto Sans', sans-serif;
                font-size: 30px; margin-top: 15%;text-align:center;width: 100%;"
    >
      <p>ADD A NEW TASK!</p>
    </div>
    {/if} -->
  <tbody>
    <div class="row d-flex justify-content-center container">
      <div class="col-md-8">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div
              class="card-header-title font-size-lg text-capitalize font-weight-normal"
            >
              <i class="fa-solid fa-filter" />&nbsp;<italic>Filter</italic>
            </div>
          </div>
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style="position: static;" class="ps ps--active-y">
                <div class="ps-content">
                  <!-- {#each $Tasklist as task, i} -->
                    <ul class=" list-group list-group-flush">
                      <!-- for each -->
                      <li class="list-group-item">
                        <!-- {#if task.priority === 1}
                          <div class="todo-indicator bg-danger" />
                        {:else if task.priority === 2}
                          <div class="todo-indicator bg-warning" />
                        {:else}
                          <div class="todo-indicator bg-primary" />
                        {/if} -->
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left mr-2">
                              <div class="custom-checkbox custom-control">
                                <input
                                  class="custom-control-input"
                                  id="exampleCustomCheckbox12"
                                  type="checkbox"
                                /><label
                                  class="custom-control-label"
                                  for="exampleCustomCheckbox12">&nbsp;</label
                                >
                              </div>
                            </div>
                            <div class="widget-content-left">
                              <div class="widget-heading">
                                <!-- {task.title} -->
                                <!-- <div class="badge badge-danger ml-2">Rejected</div> -->
                              </div>
                              <div class="widget-subheading">
                                <!-- <i>{task.description}</i> -->
                              </div>
                            </div>
                            <div class="widget-content-right">
                              <button
                                class="border-0 btn-transition btn btn-outline-success"
                              >
                                <i class="fa fa-check" /></button
                              >
                              <button
                                class="border-0 btn-transition btn btn-outline-danger"
                                on:click={async () => {
                                  await deleteTask({ task });
                                  reloadTasklist();
                                }}
                              >
                                <i class="fa fa-trash" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <!-- end for each -->

                      <!-- <div
          class:taskDone={task.status === "done"}
          class:hideDeleted={task._deleted === true}
          class:checked={task.checked}
          class="taskRow"
          id="taskRow">

        <span class="priority">|</span>
            <input
            class="checkbox"
            type="checkbox"
            bind:checked={$Tasklist[i].checked}
            on:change={countChecked}
          />
          <svg
            on:click={async () => {
              await deleteTask({ task });
              reloadTasklist();
            }}
            style="color:red;"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
            ><circle cx="12" cy="12" r="10" /><line
              x1="8"
              y1="12"
              x2="16"
              y2="12"
            /></svg>

            <div class="task-data">
              <span class="task-title">{task.title}</span>
              <br />
              <span class="task-description">{task.description}</span>
            </div>

          <td>
            {#if task.status !== "ongoing" && task.status !== "done"}
              <span>Undefined</span>
            {:else}
              {task.status}
            {/if}
          </td>
          <td>
            <img
              on:click={() => {
                openPopup({ task });
              }}
              alt="edit"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACUklEQVRIidWUT0iTcRjHP89cb855kMIi6RK4FRgEbf1PELNArIxYhw4GXUwPjQoq6FBRF09BBaldgoSSQZCHKNSakXWodQl3EDd2CDwUvHnQqa+4p8u2XnVz0zrk9/K+78PzfL7P8/u9vx+sdcnfAupuh51Tm7d2qNAkSthd6rwydH7bzD8xOBPSkoQZ7wE9awv3T1icjAU9swDOTLQmFDVcv9bfRWkB3bIQpcORNm+tPeLrjqxLmLFnQEDgh6KXQB4AxyoMOoDLAI5MQZlp3EH12lI4CA5dDBet6AUC6YxgpM37HJWL6e/GTG52AlVaEBCHHPrSWv0p37LUhKKGmEYItBlQQFT14Z6uGKD3FUB0IJOfnQChCqAQ3GUaIaAZ5Sea2o/KIEKlor0Km4A35Ybz6lKDAqp7kih1mUZfFo7UR9q3f5YSuZGeBJTXExan7H+RMw9vgQ7c++6anJ3pA47+gVeP+DtjO3U+9QpBgCF1uAOxYNWsvbYogznXzItccNB3CJXAkFWWPP7tnCe5uLbgEu19HPciNAKTy8N3TeWqLziBplIN6de3kfbqEV/36A5UB4BK0OHp+bkT0Tzw4gyEehRQcfu7xl6iHAHKUd5b7umm5eBFGaDUASDaYIv2W+7kafuy+DvHPiKaWnzii9nkePoZRnVQHTL49YInviRLOJjraitoEGnz7Cuiibwq+qCtAQNlHMDXHT+8UsjuR6O1doZd2T0QoUfhumjqg79rbDXNIvA0r0Fyg3WzzDQy13bVisjKuAg9yY3WrVV19l/rN9+t7rSVju7FAAAAAElFTkSuQmCC"
            />
            <span
              on:click={async () => {
                await startTask({ task });
                navigate("/Timer");
              }}>Start</span
            >
            -<i class="fa-solid fa-file-pen"></i>-
          </td>
        </div> -->
                    </ul>
                  <!-- {/each} -->
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button><button
              class="btn btn-primary">Add Task</button
            >
          </div>
        </div>
      </div>
    </div>
  </tbody>
</table>

{#if $numSelected > 0}
  <div class="selected-items">
    <label for="selected"><span>{$numSelected}</span></label>
  </div>
{/if}

<style>
  .table-content {
    background-color: yellow;
    padding-left: 20px;
    padding-right: 20px;
    width: 100vw;
    border-collapse: separate;
    border-spacing: 0 0;
  }

  .card {
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
      0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
      0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
      0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    border-width: 0;
    transition: all 0.2s;
  }

  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  .card-header {
    width: 100%;
    border-bottom-width: 1px;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0.625rem;
    height: 3.5rem;
    background-color: #fff;
  }
  .widget-subheading {
    color: #858a8e;
    font-size: 10px;
  }

  .card-header.card-header-tab .card-header-title {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .scroll-area-sm {
    height: 288px;
    overflow-x: hidden;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .todo-indicator {
    position: absolute;
    width: 4px;
    height: 60%;
    border-radius: 0.3rem;
    left: 0.625rem;
    top: 20%;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .bg-warning {
    background-color: #f7b924 !important;
  }

  .widget-content {
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }

  .widget-content .widget-content-wrapper {
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
  }

  .widget-content .widget-content-right {
    margin-left: auto;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s,
      box-shadow 0.15s;
  }

  .btn-outline-success {
    color: #3ac47d;
    border-color: #3ac47d;
  }

  .btn-outline-success:hover {
    color: #fff;
    background-color: #3ac47d;
    border-color: #3ac47d;
  }

  .btn-outline-success:hover {
    color: #fff;
    background-color: #3ac47d;
    border-color: #3ac47d;
  }
  .btn-primary {
    color: #fff;
    background-color: #3f6ad8;
    border-color: #3f6ad8;
  }
  .btn {
    position: relative;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s,
      box-shadow 0.15s;
    outline: none !important;
  }

  .card-footer {
    background-color: #fff;
  }

  .selected-items {
    font-family: "Noto Sans", sans-serif;
    border-radius: 15px;
    position: fixed;
    /* font-size: 30px;  */
  }
</style>
