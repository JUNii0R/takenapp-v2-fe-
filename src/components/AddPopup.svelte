<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { closePopup, taskData } from "@src/helpers/Popup.js";
  
  import { addTask } from "@src/helpers/tasks.js"
  // import { reloadTasklist } from "$src/helpers/Tasklist.js";
  
  let taskTitle = "";
  let taskDescription = "";
  let taskStatus = "ongoing";
  
  </script>
  
  <div class="container" on:click={() => {
    closePopup();
  }}>
  </div>
    <form class="form-horizontal"     on:submit|preventDefault={async () => {
          await addTask({ taskTitle, taskDescription, taskStatus });
          dispatch("taskAdded", { taskTitle, taskDescription, taskStatus });
          taskTitle = "";
          taskDescription = "";
        }}>
        <fieldset>
        
        <legend>Add Task</legend>
        
        <!-- Text input-->
        <div class="form-group">
          <label class="col-xs-2 control-label" for="Title">Title*</label>  
          <div class="col-xs-2">
          <input bind:value={taskTitle} id="Title" name="Title" type="text" placeholder="..." class="form-control input-md">
            
          </div>
        </div>
        
        <!-- Text input-->
        <div class="form-group">
          <label class="col-xs-2 control-label" for="Description">Description</label>  
          <div class="col-xs-2">
          <input bind:value={taskDescription} id="Description" name="Description" type="text" placeholder="..." class="form-control input-md">
            
          </div>
        </div>
        
        <!-- Select Basic -->
        <div class="row">
          <div class="col-sm">
            <label class="control-label" for="selectstatus">Status*</label>
            <select bind:value={taskStatus} id="selectstatus" name="selectstatus" class="form-control">
              <option value="" selected disabled hidden>Choose</option>
              <option value="ongoing">Ongoing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div class="col-3">
            <label class="control-label" for="editbutton"></label>
            <button id="editbutton" name="editbutton" class="btn">Save</button>
          </div>
          <div class="col-2">
            <label class="control-label" for="editbutton"></label>
            <button on:click={closePopup} id="editbutton" name="editbutton" class="btn btn-cancel">Cancel</button>
          </div>
        </div>
        
        </fieldset>
    </form>
  
  <style> 
  legend {
    color: var(--white);
  }

  .container {
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.8);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 100%;
    padding: 10vh 10vw;
  }
  
  form {
    position: fixed;
    top: 30vh;
    left: 36vw;
    background-color: var(--black);
    width: 50vw;
    border-radius: 40px;
    padding: 20px;
    z-index: 400 !important;
    animation: fadeIn .2s ease-in both;
  }
  @keyframes fadeIn {
    from {
      opacity: .2;
      filter: blur(5px);
      transform: translate3d(0, -1%, 0);
    }
    to {
      opacity: 1;
      filter: blur(0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .btn {
    background-color: rgba(17, 255, 96, 0.5);
  }
  .btn-cancel {
    background-color: rgba(172, 0, 0, 0.7);
  }
  .btn,
  .btn-cancel {
    color: var(--white-darker);
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    border: none !important;
    height: 54px
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
  </style>