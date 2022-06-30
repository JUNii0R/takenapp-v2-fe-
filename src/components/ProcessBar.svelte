<script>

  import { timer, timerInterval } from "@src/stores/timer.js";
</script>

<div class="top-container" style="width:{($timer / $timerInterval) * 100}%">
  <div class="full-bar" />
  <div class="progress-bar" />
</div>

<style>
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
</style>