<script>
  // -------------------------------------------------------------------- Imports

  import MenuBar from "@src/components/SideMenuBar.svelte";
  // import AddTaskForm from "@src/components/AddTaskForm.svelte";

  import TaskListTable from "@src/components/TaskListTable.svelte";
  import EditPopup from "@src/components/EditPopup.svelte";
  import AddPopup from "@src/components/AddPopup.svelte";
  import ProcessBar from "@src/components/ProcessBar.svelte";
  
  import { numSelected } from "@src/helpers/Tasklist.js";
  import { visible_edit, visible_add } from "@src/helpers/Popup.js";
  

  // ------------------------------------------------------------------ Variables



  // ------------------------------------------------------------------ Functions
$: console.log($visible_edit, $visible_add);

</script>
<div class="body">
  <ProcessBar />
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
</div>


<style>
  .body {
    display: grid;
    grid-template-rows: min-content 1fr;
  }

  /* -------------------------------------------------------------- START GRID */

  .outer-grid {
    width: 100vw;
    display: grid;
    grid-template-columns: min-content 1fr;
  }

  .content-grid {
    background-color: var(--white-darker);
    width: 100%;
    height: calc(100vh - 15px);
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