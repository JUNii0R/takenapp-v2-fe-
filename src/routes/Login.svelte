<script>
  //
  import { navigate } from "svelte-routing";

  import BackgroundBlob from "@src/components/BackgroundBlob.svelte";
  import { previousURL } from "@src/stores/previousPage.js";
  
  
  let authError = true;
  let authInput;
  
$: {
  if (authInput === "") {
    authError = true;
  } else {
    authError = false;
  }
}
  let passError = false;
  let passInput;

$: {
  if (passInput === "") {
    passError = true;
  } else {
    passError = false;
  }
}

</script>

<BackgroundBlob />

<div class="wrapper">
  <form class="authBoxExpanded authBox theme-dark">
    <div class="centeringWrapper">
      <div class="mainLoginContainer">
        <button
          type="button"
          class="goBackButton linkButton button lookLink lowSaturationUnderline colorPrimary sizeMin grow"
          on:click={() => {
            navigate($previousURL);
          }}
        >
          <div class="contents">
            <div class="content">
              <svg
                class="caret"
                aria-hidden="false"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                ><g fill="none" fill-rule="evenodd"
                  ><polygon
                    fill="currentColor"
                    fill-rule="nonzero"
                    points="18.35 4.35 16 2 6 12 16 22 18.35 19.65 10.717 12"
                  /><polygon points="0 0 24 0 24 24 0 24" /></g
                ></svg
              >
              <div
                class="defaultColor text-md-normal"
                data-text-variant="text-md/normal"
                style="color: #dcddde"
              >
                Terug
              </div>
            </div>
          </div>
        </button>
        <div class="header">
          <h3
            class="heading-xl-medium defaultColor title marginBottom8"
            data-text-variant="heading-xl/medium">
            Welkom terug!
          </h3>
          <div
            class="text-md-normal"
            data-text-variant="text-md/normal"
            style="color: #b9bbbe;"
          >
            We zijn erg blij om je weer te zien!
          </div>
        </div>
        <div class="block marginTop20">
          <div class="marginBottom20">
            <h5
              class:error={authError === true}
              class="colorStandard size14 h5 title defaultMarginh5"
            >
              Authenticatie Code
              {#if authError === true}
                <span class="errorMessage">
                  <span class="errorSeperator"> - </span>
                  This field is required
                </span>
              {/if}
            </h5>
            <div class="input-2g input">
              <div class="inputWrapper">
                <input bind:value={authInput} class="inputDefault input inputField" name="code" type="text" placeholder="" aria-label="Authenticatie Code" autocomplete="off" maxlength="999" spellcheck="false" aria-labelledby="uid_10" />
              </div>
            </div>
          </div>
          <div>
            <h5 class:error={passError === true} class="colorStandard size14 h5 title defaultMarginh5" id="uid_12">
              Wachtwoord
              {#if passError === true}
                <span class="errorMessage">
                  <span class="errorSeperator"> - </span>
                  This field is required
                </span>
              {/if}
            </h5>
            <div class="inputWrapper">
              <input bind:value={passInput} class="inputDefault input inputField" name="password" type="password" aria-label="Wachtwoord" autocomplete="off" maxlength="999" spellcheck="false" aria-labelledby="uid_12" />
            </div>
          </div>
          <button
            type="button"
            class="marginBottom20 marginTop4 linkButton button lookLink lowSaturationUnderline colorLink sizeMin grow">
            <div class="contents">Wachtwoord vergeten?</div>
          </button>
          <button
            type="submit"
            class="marginBottom8 button lookFilled colorBrand sizeLarge fullWidth grow">
            <div class="contents">Inloggen</div>
          </button>
          <div class="marginTop4">
            <span class="needAccount"> Heb je een account nodig? </span>
            <button
              type="button"
              class="smallRegisterLink linkButton button lookLink lowSaturationUnderline colorLink sizeMin grow">
              <div class="contents">Registreren</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

<style>
  /* -=-=- */
  .authBoxExpanded {
    width: 784px !important;
  }
  .authBox {
    width: 480px;
    padding: 32px;
    font-size: 18px;
    border-radius: 5px;
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
  .goBackButton {
    background-color: transparent;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: auto;
  }

  .goBackButton .content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .goBackButton .caret {
    margin: 0 4px 1px 0;
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
  .smallRegisterLink {
    display: inline-block !important;
    margin-left: 4px !important;
    margin-bottom: 0 !important;
    padding: 0 !important;
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
  .lookLink .contents {
    margin: 0 auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .lookLink.colorLink {
    color: hsl(197, calc(var(--saturation-factor, 1) * 100%), 47.8%);
  }
  .lookFilled.colorBrand {
    color: #fff;
    background-color: var(--brand-experiment);
  }

  .needAccount {
    font-size: 14px;
    line-height: 16px;
  }
  .heading-xl-medium {
    font-family: var(--font-display);
    font-size: 25px;
    line-height: 30px;
  }

  .marginBottom8 {
    margin-bottom: 8px;
  }
  .marginBottom20 {
    margin-bottom: 20px;
  }
  .marginTop20 {
    margin-top: 20px;
  }
  .marginTop4 {
    margin-top: 4px;
  }
  .fullWidth {
    width: 100% !important;
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
  .sizeMin {
    display: inline;
    width: auto;
    height: auto;
    padding: 2px 4px;
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
  .linkButton {
    display: block;
    padding-left: 0;
    padding-right: 0;
  }

  .wrapper {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 486px) {
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      /* min-height: 580px; */
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
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
