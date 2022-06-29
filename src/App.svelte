<script>
// --------------------------------------------------------------------------------------------------------- Imports

    import { Router, Route } from "svelte-routing";

    import Timer from "./routes/Timer.svelte";
    import Tasklist from "./routes/TaskList.svelte";
    import Settings from "./routes/Settings.svelte";
    import Profile from "./routes/Profile.svelte";
    import Login from "./routes/Login.svelte";
    import TestPage from "./routes/TestPage.svelte";

	export let url = "";

// --------------------------------------------------------------------------------------------------------- Variables

</script>

<Router url="{url}">
	<Route path="/"><Timer /></Route>
	<Route path="Timer" component="{Timer}" />
	<Route path="Tasklist" component="{Tasklist}" />
	<Route path="Settings" component="{Settings}" />
	<Route path="Profile" component="{Profile}" />
	<Route path="Login" component="{Login}" />
	<Route path="TestPage" component="{TestPage}" />
</Router>


<style>
	@import '@src/theme/global.css';
	@import '@src/theme/imports.css';
	@import '@src/theme/reset.css';
</style>

