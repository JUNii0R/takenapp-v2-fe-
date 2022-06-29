<script>
// -------------------------------------------------------------------- Imports
  import { Link } from "svelte-routing";

  import {
    timer,
    timerStarted,
    setTimer,
    timerEnded,
    stateWorking,
  } from "@src/stores/timer.js";
  import { getURL } from "@src/stores/previousPage.js";

  import { sec2time } from "../js/utils.js";
  
// ------------------------------------------------------------------ Variables
  export let active = '';

  const presets = {
    workName: "Work",
    workSeconds: .1 * 60,
    pauseName: "Rest",
    pauseSeconds: 5 * 60,
  };

  $: display = sec2time($timer);
    
  let statusTimer = '';
  let userLoggedIn = false; 

  $: {
    if ($timerStarted === true) {
      statusTimer = 'Running';
    } else {
      statusTimer = 'Stopped';
    }
  }
  
  $: {
    if ($timerEnded) {
      if (!$stateWorking) {
        console.log("timer ended, switch to work");
        setTimer(presets.workSeconds, true);
        display = sec2time($timer);
      // } else {
        // console.log("timer ended, switch to pause");
        // setTimer(presets.pauseSeconds, true);
        // display = sec2time($timer);
      }
    }
  }

</script>

<title>{active} | Pomodoro Timer</title>

  <nav class="g-SideMenuBar sidebar-navigation" >
    <div class="profile-container">
      {#if userLoggedIn === false}
        <Link to="Login">
          <li class="Profile">
            <p on:click={() => {
              getURL(window.location.href);
            }}>Login -></p>
          </li>
        </Link>
      {:else}
      <Link to="Settings">
        <li class="Settings"
          class:active={active=="Settings"}>
          <i class="fa-solid fa-gear fa-sm"></i>
        </li>
      </Link>
      <Link to="Profile">
        <li class="Profile"
          class:active={active=="Profile"}>
          <i class="fa-solid fa-user" />
        </li>
      </Link>
      {/if}
    </div>
    <div class="side-menu">

        <li>
          <span><strong>Tasks</strong></span>
        </li>

      <Link to="Timer">
        <li class="header Timer"
          class:active={active=="Timer"}>
          <i class="fa-solid fa-stopwatch" />
          <span style="margin-left: 3%;">Timer</span>
        </li>
      </Link>
      <Link to="Tasklist">
        <li class="header TaskList"
          class:active={active=="Task List"}>
          <i class="fa-solid fa-list-check" />
          <span style="margin-left: 3%;">Task List</span>
        </li>
      </Link>
        <li style="margin-top: 6vh;">
          <span><strong>Other</strong></span>
        </li>
      <Link to="TestPage">
        <li class="header TestPage"
          class:active={active=="TestPage"}>
          <i class="fa-solid fa-hammer" />
          <span style="margin-left: 3%;">Development Page</span>
        </li>
      </Link>
        <li style="margin-top: 22vh;">
          <span><strong>Status</strong></span>
          <div class="timer-status">
            <span>Timer:</span>
            {#if statusTimer === 'Running'}
              <span style="color:#39FF14;">Running</span>
            {:else}
              <span style="color:#FF3131;">Stopped</span>
            {/if}
              <br />
            {#if display === '00:00'}
              <span class="blink">{display} </span><span>left</span>
            {:else}
              <span>{display} </span><span>left</span>
            {/if}
          </div>
        </li>
    </div>
  </nav>
<!-- --------------------------------------------------------------------------------------------------------------- Styling -->

<style>
:global(g-SideMenuBar) {}

.sidebar-navigation {
  background-color: var(--white);
  font-weight: 600;
  font-family: 'Lato', sans-serif;
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding-left: 6vw;
  height: 100%;  
  padding-right: 4vw;
  width: 25vw;
  min-width: 220px !important;
}

.profile-container {
  margin: 25px 0px 25px 0px;
  border-radius: 5px;
  background-color: var(--smoke-white);
  padding: 6px;
}

.side-menu {  
  color: var(--black);
  height: 70vh;
  text-align: left;
}

.sidebar-navigation span {
  color: var(--black-darker);
}

.sidebar-navigation li.header,
.timer-status {
  background-color: var(--smoke-white);
  color: var(--black);
  margin: 4px 4px 4px 2px;
  padding: 6px;
  border-radius: 10px;
  transition: all ease-out 120ms;
}

.sidebar-navigation > div > li > span > strong{
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 25px;
}

.sidebar-navigation li.active {
  background-color: var(--purple);
  color: var(--black);
}


.blink {
  animation: blink-animation 1s steps(2, start) infinite;
  
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>