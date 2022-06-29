<script>
    // -------------------------------------------------------------------- Imports
  
    import SideMenuBar from "@src/components/SideMenuBar.svelte";
  
    // ------------------------------------------------------------------ Variables
  
  </script>
  
  <div class="outer-grid">
    <SideMenuBar active="TestPage" />
    <div class="content-grid">
  <!-- Start Content -->
  

  
  <!-- End Content -->
    </div>
  </div>
  
  
  <style> 
  .outer-grid{width:100vw;height:100vh;display:grid;grid-template-columns:min-content auto;grid-template-rows:repeat(2,auto);}
  .content-grid{background: var(--white-darker);}
  /* Start Testing Content Styling */
  
  
  </style> 