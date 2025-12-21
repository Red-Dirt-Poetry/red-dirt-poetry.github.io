<script>
  import "../app.css";
  import AppHeader from "$lib/components/AppHeader.component.svelte";

  let { children } = $props();
</script>

<svelte:head></svelte:head>

<div class="page-wrapper">
  <AppHeader />
  {@render children()}
</div>
