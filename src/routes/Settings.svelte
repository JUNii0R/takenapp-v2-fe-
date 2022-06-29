<script>
    // -------------------------------------------------------------------- Imports
  
    import SideMenuBar from "@src/components/SideMenuBar.svelte";
  
    // ------------------------------------------------------------------ Variables
  
  </script>
  
  <div class="outer-grid">
    <SideMenuBar active="TestPage" />
    <div class="content-grid">
  <!-- Start Content -->
      
  <div class="notifi-container">
    <p>Notification Settings</p>
    <label for="sound">Sound</label><br>
    <div>
      <input type="radio" id="css" name="fav_language" value="CSS">
      <label for="css">CSS</label><br>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="css">CSS</label><br>
    </div>
</div>
<div class="language-container">
  <p>Language</p>
  <select>
    <option value="english">English</option>
    <option value="dutch">Nederlands</option>
  </select>
</div>
  
  <!-- End Content -->
    </div>
  </div>
  
  
  <style> 
  .outer-grid{width:100vw;height:100vh;display:grid;grid-template-columns:min-content auto;grid-template-rows:repeat(2,auto);}
  .content-grid{background: var(--white-darker);}
  /* Start Content Styling */
  
  
  </style> 