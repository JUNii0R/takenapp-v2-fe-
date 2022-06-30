<script>
  // -------------------------------------------------------------------- Imports
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { addTask } from "@src/helpers/tasks";

  import {
    timerStarted,
    setTimer,
    startTimer,
    pauseTimer,
    timer
  } from "@src/stores/timer.js";

  import { sec2time } from "../js/utils.js";

  // ------------------------------------------------------------------ Variables

  let titleInput = "";
  let descriptionInput = "";

  let titleError = false;


  $: display = sec2time($timer);


</script>

<div class="wrapper">
  <form class="authBoxExpanded authBox theme-dark ">
    <div class="centeringWrapper">
      <div class="mainLoginContainer marginTop90">
       
        <div class="header">
          <h3
            class="heading-xl-medium defaultColor title marginBottom8"
            data-text-variant="heading-xl/medium">
            {display} 
          </h3>
          <h5 class="marginTop20 colorStandard size14 h5 title defaultMarginh5">left</h5>
        </div>
        <div class="block marginTop90">
          <div class="marginBottom20">
            <h5
              class:error={titleError === true}
              class="colorStandard size14 h5 title defaultMarginh5">
              Title
              {#if titleError === true}
                <span class="errorMessage">
                  <span class="errorSeperator"> - </span>
                  This field is required
                </span>
              {/if}
            </h5>
            <div class="input-2g input">
              <div class="inputWrapper">
                <input bind:value={titleInput} class="inputDefault input inputField" name="code" type="text" placeholder="" aria-label="Authenticatie Code" autocomplete="off" maxlength="999" spellcheck="false" aria-labelledby="uid_10" />
              </div>
            </div>
          </div>
          <div>
            <h5 class="colorStandard size14 h5 title defaultMarginh5" id="uid_12">
              Description
            </h5>
            <div class="inputWrapper">
              <input bind:value={descriptionInput} class="inputDefault input inputField" name="password" type="text" aria-label="Wachtwoord" autocomplete="off" maxlength="999" spellcheck="false" aria-labelledby="uid_12" />
            </div>
          </div>
          <button type="button" class="marginTop20 marginBottom8 button lookFilled colorBrand sizeLarge halfWidth grow"
              on:click={() => {
                setTimer(25 * 60, true);
                titleInput = ""; 
                descriptionInput = "";
              }}>
            <div class="contents">Reset</div>
          </button>
          <button type="button" class="marginTop20 marginBottom8 button lookFilled colorBrand sizeLarge halfWidth grow" 
            on:click={() => { 
              if ($timerStarted) {
                pauseTimer();
              } else {
                startTimer();
              }
            }}>
          <div class="contents">{$timerStarted ? "Stop" : "Start"}</div>
        </button>
        </div>
      </div>
    </div>
  </form>
</div>

<style>

  /* -=-=- */
  .authBoxExpanded {
    width: 100% !important;
  }
  .authBox {
    margin: 0;
    padding: 32px;
    font-size: 18px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .theme-dark.authBox {
    color: #72767d;
    background: #36393f;
  }
  /* -=-=- */
  .centeringWrapper {
    width: 100%;
    text-align: center;
  }
  /* -=-=- */
  .mainLoginContainer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    width: auto;
  }


  /* -=-=- */
  .header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }

  .title {
    font-weight: 600;
  }

  .inputField {
    border: none;
    background-color: transparent;
  }
  .inputDefault {
    padding: 10px;
    height: 40px;
  }
  .input {
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: #dcddde;
    background-color: #202225;
    border: none;
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }
  .input-2g {
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    border-radius: 3px;
    color: #dcddde;
    background-color: #202225;
    border: none;
    -webkit-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }

  .button {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: none;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 2px 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .lookFilled.colorBrand {
    color: #fff;
    background-color: var(--brand-experiment);
  }

  .heading-xl-medium {
    font-family: var(--font-display);
    font-size: 95px;
    line-height: 30px;
  }

  .marginBottom8 {
    margin-bottom: 8px;
  }
  .marginBottom20 {
    margin-bottom: 20px;
  }
  .marginTop90 {
    margin-top: 90px;
  }
  .marginTop20 {
    margin-top: 20px;
  }
  .halfWidth {
    width: 50% !important;
  }

  .sizeLarge {
    width: 130px;
    height: 44px;
    min-width: 130px;
    min-height: 44px;
  }

  .grow {
    width: auto;
  }
  .lookFilled {
    -webkit-transition: background-color 0.17s ease, color 0.17s ease;
    transition: background-color 0.17s ease, color 0.17s ease;
  }
  ::placeholder,
  button,
  input {
    font-family: var(--font-primary);
    text-rendering: optimizeLegibility;
  }
  ::-webkit-input-placeholder,
  button,
  input {
    font-family: var(--font-primary);
    text-rendering: optimizeLegibility;
  }
  button {
    font-family: var(--font-primary);
    font-weight: 500;
    border: 0;
    cursor: pointer;
  }
  input:focus,
  button:focus {
    outline: none;
  }
  .block {
    width: 100%;
    text-align: left;
  }
  .defaultMarginh5 {
    margin-bottom: 8px;
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 486px) {
    .wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
  span {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  .error {
    color: var(--text-danger);
  }
  .errorMessage {
    font-size: 12px;
    font-weight: 600;
    font-style: italic;
    text-transform: none;
  }

</style>
