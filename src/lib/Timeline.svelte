<script>
  import { flat, YEAR_MIN, YEAR_MAX } from './outline.js';

  let { currentNum } = $props();

  const RANGE = YEAR_MAX - YEAR_MIN;
  const decades = [1900, 1920, 1940, 1960, 1980, 2000, 2020];

  function x(year) {
    return ((year - YEAR_MIN) / RANGE) * 100;
  }

  let current = $derived(flat.find((s) => s.num === currentNum));
</script>

<div class="timeline" role="img" aria-label="Chronological position in book">
  <div class="axis"></div>

  {#each decades as d}
    <div class="tick" style:left="{x(d)}%">
      <span class="decade-label">{String(d).slice(2)}</span>
    </div>
  {/each}

  {#each flat as s (s.num)}
    <div
      class="dot"
      class:active={s.num === currentNum}
      style:left="{x(s.year)}%"
      title="{s.num} · {s.title} · {s.year}"
    ></div>
  {/each}

  {#if current}
    <div class="year-flag" style:left="{x(current.year)}%">
      <span class="year">{current.year}</span>
    </div>
  {/if}
</div>

<style>
  .timeline {
    position: relative;
    width: 100%;
    height: 44px;
    margin-top: 1rem;
  }

  .axis {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--rule);
    transform: translateY(-50%);
  }

  .tick {
    position: absolute;
    top: 50%;
    width: 1px;
    height: 10px;
    background: var(--rule);
    transform: translate(-50%, -50%);
  }

  .decade-label {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--sans);
    font-size: 0.55rem;
    color: var(--muted);
    letter-spacing: 0.2em;
    white-space: nowrap;
  }

  .dot {
    position: absolute;
    top: 50%;
    width: 4px;
    height: 4px;
    background: var(--muted);
    opacity: 0.35;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 220ms ease, height 220ms ease, background 220ms ease, opacity 220ms ease;
    pointer-events: none;
  }

  .dot.active {
    width: 11px;
    height: 11px;
    background: var(--accent);
    opacity: 1;
    box-shadow: 0 0 0 4px rgba(178, 58, 40, 0.15);
  }

  .year-flag {
    position: absolute;
    top: 50%;
    transform: translate(-50%, calc(-100% - 10px));
    pointer-events: none;
  }

  .year {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.95rem;
    color: var(--accent);
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  @media (max-width: 720px) {
    .decade-label { font-size: 0.5rem; }
    .dot { width: 3px; height: 3px; }
    .dot.active { width: 9px; height: 9px; }
  }
</style>
