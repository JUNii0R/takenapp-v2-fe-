<script>
  // -------------------------------------------------------------------- Imports

  import MenuBar from "@src/components/SideMenuBar.svelte";
  // import AddTaskForm from "@src/components/AddTaskForm.svelte";

  import TaskListTable from "@src/components/TaskListTable.svelte";
  import { numSelected } from "@src/helpers/Tasklist.js";

  
  import EditPopup from "@src/components/EditPopup.svelte";
  import AddPopup from "@src/components/AddPopup.svelte";
  import { visible_edit, visible_add } from "@src/helpers/Popup.js";


  // ------------------------------------------------------------------ Variables



  // ------------------------------------------------------------------ Functions
$: console.log($visible_edit, $visible_add);

</script>

<div class="outer-grid">
  <MenuBar active="Task List" />
  <div class="content-grid">
    <div class="row-top">
      {$numSelected}
    </div>
      <div class="table-container">
        {#if $visible_edit === true}
          <EditPopup />
        {:else if $visible_add === true}
          <AddPopup />
        {/if}
          <TaskListTable />
      </div>
  </div>
</div>

<style>
  /* -------------------------------------------------------------- START GRID */

  .outer-grid {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: min-content auto;
  }

  .content-grid {
    background-color: var(--white-darker);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: minmax(80px, 17vh) 1fr;
  }
  
  .row-top {
    height: auto;
  }

  .table-container {
    overflow-y: scroll;
    overflow-x: hidden;
    margin-right: 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: var(--white-darkest);
  }
  
  /* ---------------------------------------------------------------- END GRID */



  /* Width */
  ::-webkit-scrollbar {
    margin: 1px;
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--purple);
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--purple);
  }

  /* ----------------------------------------------------------------- POPUP */

</style>