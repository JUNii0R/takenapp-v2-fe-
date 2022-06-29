<script>

// -------------------------------------------------------------------- Imports
  
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import MenuBar from "@src/components/SideMenuBar.svelte";
  import {
    timer,
    timerStarted,
    startTimer,
    pauseTimer,
    timerInterval,
  } from "@src/stores/timer.js";

  import { sec2time } from "../js/utils.js";
  import AddTaskForm from "@src/components/AddTaskForm.svelte";

// ---------------------------------------------------------------- Variables

  let topContainerElem;
  let displayTimeElem;
  let topBarElem;

  let displayTimeStyle = "";
  
  $: display = sec2time($timer);

  // $: {
  //   if ($timer) {
  //     if (topContainerElem && displayTimeElem) {

  //       let { right: topBarRight } = topBarElem.getBoundingClientRect();
             
  //       let { right: outerRight,
  //             width: topContWidth } = topContainerElem.getBoundingClientRect();
          
  //       let { width: innerWidth } = displayTimeElem.getBoundingClientRect();

        // console.log("topbarright - ",topBarRight);

        // let rightOffset = topBarRight - outerRight;

        // let offset = rightOffset;

        // if (rightOffset > innerWidth / 2) {
        //   rightOffset = innerWidth / 2;
        //   offset = rightOffset;
        // }

        // if (topContWidth < innerWidth / 2) {
        //   offset = offset + innerWidth / 2 - topContWidth ;
        // }
        // if (leftOffset < innerWidth / 2) {
        //   leftOffset = innerWidth;
        //   offset = leftOffset;
        // }


        // displayTimeStyle = `margin-right: -${offset}px;`;

        // console.log("inner", innerRight);
        // console.log("outer", outerRight);
        // console.log("display style", displayTimeStyle);
        // console.log("R-offset", rightOffset);
  //     }
  //   }
  // }
</script>

<!------------------------------------------------------------------------------------------------------------------- HTML -->

<div class="body">
  <div bind:this={topContainerElem} class="top-container" style="width:{($timer / $timerInterval) * 100}%">
    <div class="full-bar" />
    <div class="progress-bar">
      <!-- <div class="display-timer">
        {display}
      </div> -->
    </div>
  </div>
  <div class="outer-grid">
    <MenuBar active="Timer" />
    <div class="inner-grid">
      <div class="content">
        <div class="container">
          <AddTaskForm/>
        </div>
      </div>
    </div>
  </div>
</div>

<!------------------------------------------------------------------------------------------------------------------ Styling -->

<style>
  .body {
    display: grid;
    grid-template-rows: min-content 1fr;
  }
  .outer-grid {
    width: 100vw;
    display: grid;
    grid-template-columns: min-content 1fr;
  }

  .top-container {
    height: 15px;
  }
  .full-bar{ 
    z-index: -1;
    position: fixed;
    height: 15px;
    width: 100vw;
    background-color: var(--black-darker);
  }
  .progress-bar {
    height: 15px;
    background: linear-gradient(90deg, #7BF2E9, #B65EBA 100%);
  }
  .inner-grid {
    width: calc(100vw - 25vw);  
    height: calc(100vh - 15px);
    max-height: calc(100vh - 15px);
    display: grid;
    grid-template-rows: min-content 1fr;
  }

  .content {
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    text-align: left;
  }

  @media (max-width: 768px) {
    .inner-grid {
      grid-template-rows: minmax(100vw, 30vw) 1fr;
    }
  }
</style>