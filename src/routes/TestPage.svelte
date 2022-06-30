<script>
  // -------------------------------------------------------------------- Imports

  import SideMenuBar from "@src/components/SideMenuBar.svelte";
  import AddTaskForm from "@src/components/AddTaskForm.svelte";

  // ------------------------------------------------------------------ Variables

</script>

<div class="outer-grid">
  <SideMenuBar active="TestPage" />
  <div class="content-grid">
<!-- Start Testing Content  -->

<div class="testdiv">
  <p class="testp">test12345</p>
</div>

<!-- End Testing Content -->
  </div>
</div>


<style> 
.outer-grid{width:100vw;height:100vh;display:grid;grid-template-columns:min-content auto;}
.content-grid{background: white;}
/* Start Testing Content Styling */

.testp {
  font-family: "font-full-727571", times new roman;
}

@font-face {
  font-family: "font-full-727571";
	src: url("https://cdn.abcdinamo.com/fonts/static/Diatype-Extra/Diatype-Semi-Mono-Condensed/ABCDiatypeSemi-MonoCondensed-ThinItalic.woff2");
}
</style> 