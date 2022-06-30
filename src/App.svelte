<script>
// --------------------------------------------------------------------------------------------------------- Imports

    import { Router, Route } from "svelte-routing";

    import Timer from "./routes/Timer.svelte";
    import Tasklist from "./routes/TaskList.svelte";
    import TestPage from "./routes/TestPage.svelte";
    import Login from "./routes/Login.svelte";
    import Settings from "./routes/Settings.svelte";
    import Profile from "./routes/Profile.svelte";

		import {
			setTimer,
			timerEnded,
			stateWorking,
  	} from "./stores/timer.js";

// --------------------------------------------------------------------------------------------------------- Variables
export let url = "";

const presets = {
	workName: "Work",
	workSeconds: 25 * 60,
	pauseName: "Rest",
	pauseSeconds: 5 * 60,
};


$: {
	if ($timerEnded) {
		if (!$stateWorking) {
			setTimer(presets.workSeconds, true);
			// display = sec2time($timer);
		}
	}
}

</script>

<Router url="{url}">
	<Route path="/"><Timer /></Route>
	<Route path="Timer" component="{Timer}" />
	<Route path="Tasklist" component="{Tasklist}" />
	<Route path="TestPage" component="{TestPage}" />
	<Route path="Login" component="{Login}" />
	<Route path="Settings" component="{Settings}" />
	<Route path="Profile" component="{Profile}" />
</Router>



<style>
	@import '@src/theme/global.css';
	@import '@src/theme/imports.css';
	@import '@src/theme/reset.css';
</style>

