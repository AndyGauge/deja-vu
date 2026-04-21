<script>
  import { onMount, onDestroy } from 'svelte';

  let { term } = $props();

  let containerEl = $state();
  let currentTerm = $state(null);

  function mount(t) {
    if (!containerEl) return;
    containerEl.innerHTML = '';
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
    s.setAttribute('data-theme', 'light');
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

<div class="giscus-wrap">
  <div class="giscus-label">Responses</div>
  <div bind:this={containerEl}></div>
</div>

<style>
  .giscus-wrap {
    grid-column: 2;
    margin-top: 2.4rem;
    padding-top: 1.6rem;
    border-top: 1px solid rgba(20, 17, 13, 0.12);
  }
  .giscus-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(20, 17, 13, 0.55);
    margin-bottom: 1rem;
  }
  @media (max-width: 720px) {
    .giscus-wrap { grid-column: 1; }
  }
</style>
