<script>

// -------------------------------------------------------------------- Imports
  
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import MenuBar from "@src/components/SideMenuBar.svelte";
  import AddTaskForm from "@src/components/AddTaskForm.svelte";
  import ProcessBar from "@src/components/ProcessBar.svelte";

// ---------------------------------------------------------------- Variables

</script>

<!------------------------------------------------------------------------------------------------------------------- HTML -->

<div class="body">
  <ProcessBar />
  <div class="outerGrid">
    <div class="menuBar">
      <MenuBar active="Timer" />
    </div>
    <div class="content">
      <AddTaskForm/>
    </div>
  </div>
</div>

<!------------------------------------------------------------------------------------------------------------------ Styling -->

<style>
  .body {
    display: grid;
    grid-template-rows: min-content 1fr;
  }
  .outerGrid {
    width: 100% !important;
    height: 100% !important;
    display: flex;
  }
  .content {
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    text-align: left;
  }
</style>