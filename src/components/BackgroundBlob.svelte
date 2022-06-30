<script>
  // ------------------------------------------------------------------ Imports

  import LoginBlob from "@src/classes/LoginBlob.js";

  // ---------------------------------------------------------------- Variables

  let canvasElement;
  let blob;

  let canvasWidth;
  let canvasHeight;

  // ----------------------------------------------------------------- Reactive

  $: {
    // 
    // If canvasElement has mounted, create new blob
    // 
    if (canvasElement && !blob && canvasWidth && canvasHeight) {
      blob = new LoginBlob(canvasElement);
      blob.loop();
    }
  }

</script>

<canvas width={canvasWidth} bind:clientWidth={canvasWidth} 
height={canvasHeight} bind:clientHeight={canvasHeight} 
bind:this={canvasElement} />

<style>

canvas {
  position: fixed;
  width: 55vw;
  height: 55vw;
  margin: 0;
  padding: 0;
}

</style>