<script>
  // -------------------------------------------------------------------- Imports
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { addTask } from "@src/helpers/tasks";
  import {
    timerStarted,
    startTimer,
    pauseTimer,
  } from "@src/stores/timer.js";
  // ------------------------------------------------------------------ Variables

  let taskTitle = "";
  let taskDescription = "";
  let taskStatus = "ongoing";

</script>

<div class="login-box">
  <form
    on:submit|preventDefault={async () => {
      await addTask({ taskTitle, taskDescription, taskStatus });
      dispatch("taskAdded", { taskTitle, taskDescription, taskStatus });
      taskTitle = "";
      taskDescription = "";
    }}
  >
    <div class="user-box">
        <label class="input">
            <input bind:value={taskTitle} class="input__field" type="text" placeholder=" " />
            <span class="input__label">Title</span>
        </label>
    </div>
    <div class="user-box">
        <label class="input">
            <input bind:value={taskDescription} class="input__field" type="text" placeholder=" " />
            <span class="input__label">Description</span>
        </label>
    </div>
      <input type="submit" class="prim-btn"
      on:click={() => {
        if ($timerStarted) {
          pauseTimer();
        } else {
          startTimer();
        }
      }} value={$timerStarted ? "Stop" : "Start"} >
  </form>
</div>

<style>
  .login-box {
    height: 100%;
    background-color: red;
  } 
  div.user-box {
    font-size: 23px;
    font-family: "Noto Sans", sans-serif;
    margin: 40px 20px;
  }
  /* select {
    margin: 0 20px;
    padding: 3px;
    width: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  } */

  ::-webkit-input-placeholder {
    text-align: center;
    color: var(--black);
  }

  :-moz-placeholder {
    text-align: center;
    color: var(--black);
  }

.input {
  position: relative;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 4px;
}

.input__label {
  font-family: "Noto Sans", sans-serif;
  color: var(--black);
  outline: none !important;
  position: absolute;
  top: 0;
  left: 0;
  padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * .5);
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  transition: transform 120ms ease-in;
}
.input__field {
  font-family: "Lato", sans-serif;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  font-weight: 600;
  color: var(--black);
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
  background: transparent;
}
.input__field:focus {
    background: transparent;
    outline: none;
}
.input__field:not(:-moz-placeholder-shown) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: lightslategray;
}
.input__field:not(:-ms-input-placeholder) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: lightslategray;
}
.input__field:focus + .input__label, .input__field:not(:placeholder-shown) + .input__label {
  transform: translate(0.20rem, -65%) scale(0.8);
  color: lightslategray;
}
</style>
