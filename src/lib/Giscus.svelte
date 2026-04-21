<script>
  import { onMount, onDestroy } from 'svelte';
  import { base } from '$app/paths';

  let { term } = $props();

  let containerEl = $state();
  let currentTerm = $state(null);

  function mount(t) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
    const themeUrl = `${window.location.origin}${base}/giscus.css`;
    const s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.setAttribute('data-repo', 'AndyGauge/deja-vu');
    s.setAttribute('data-repo-id', 'R_kgDOSIJEPw');
    s.setAttribute('data-category', 'General');
    s.setAttribute('data-category-id', 'DIC_kwDOSIJEP84C7YIq');
    s.setAttribute('data-mapping', 'specific');
    s.setAttribute('data-term', t);
    s.setAttribute('data-strict', '1');
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', themeUrl);
    s.setAttribute('data-lang', 'en');
    s.setAttribute('data-loading', 'lazy');
    s.crossOrigin = 'anonymous';
    s.async = true;
    containerEl.appendChild(s);
  }

  onMount(() => {
    currentTerm = term;
    mount(term);
  });

  $effect(() => {
    if (term !== currentTerm && containerEl) {
      currentTerm = term;
      mount(term);
    }
  });

  onDestroy(() => {
    if (containerEl) containerEl.innerHTML = '';
  });
</script>

<aside class="giscus-wrap">
  <div class="giscus-label">Responses</div>
  <div class="giscus-frame" bind:this={containerEl}></div>
</aside>

<style>
  .giscus-wrap {
    grid-column: 2;
    max-width: 60ch;
    margin-top: 2.4rem;
    padding-top: 1.2rem;
    padding-left: 1.3rem;
    border-top: 1px solid var(--ink, #14110d);
  }
  .giscus-label {
    font-family: var(--sans, 'Inter', sans-serif);
    font-size: 0.62rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--ink, #14110d);
    margin-bottom: 1rem;
  }
  .giscus-frame :global(.giscus) {
    width: 100%;
  }
  .giscus-frame :global(.giscus-frame) {
    width: 100%;
  }
  @media (max-width: 720px) {
    .giscus-wrap {
      grid-column: 1;
      max-width: none;
      padding-left: 1rem;
    }
  }
</style>
