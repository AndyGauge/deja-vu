<script>
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { categories } from '$lib/index-data.js';
  import { md } from '$lib/md.js';

  const titleToNum = new Map(flat.map((s) => [s.title, s.num]));

  function refsFor(refs) {
    return refs
      .map((t) => ({ title: t, num: titleToNum.get(t) }))
      .filter((r) => r.num)
      .sort((a, b) => a.num.localeCompare(b.num));
  }
</script>

<main class="topics">
  <header>
    <a href="{base}/" class="mark vt-title">Déjà Vu</a>
    <nav class="breadcrumbs">
      <a href="{base}/contents">Contents</a>
      <span class="sep">·</span>
      <span class="current">Index</span>
    </nav>
  </header>

  <div class="intro">
    <h1>Index</h1>
    <p class="hint">Every person, work, case, program, and concept named in the book — with the page each lands on.</p>
  </div>

  <section class="categories">
    {#each categories as cat}
      <article class="category">
        <h2>{cat.category}</h2>
        <ul>
          {#each cat.entries as entry}
            {@const refs = refsFor(entry.refs)}
            {#if refs.length > 0}
              <li>
                <span class="entry-name">{@html md(entry.name)}</span>
                <span class="entry-refs">
                  {#each refs as r, i}
                    <a href="{base}/{r.num}" title={r.title}>{r.num}</a>{#if i < refs.length - 1},&nbsp;{/if}
                  {/each}
                </span>
              </li>
            {:else if entry.refs.length === 0}
              <li class="see">
                <span class="entry-name">{entry.name}</span>
              </li>
            {/if}
          {/each}
        </ul>
      </article>
    {/each}
  </section>
</main>

<style>
  .topics {
    height: 100vh;
    padding: 3vw 5vw 6vw;
    overflow-y: auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    border-bottom: 1px solid var(--rule);
    padding-bottom: 1rem;
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--ink);
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  .breadcrumbs a {
    color: var(--muted);
    border-bottom: 1px solid transparent;
    transition: border-color 180ms ease, color 180ms ease;
  }

  .breadcrumbs a:hover {
    color: var(--ink);
    border-color: var(--muted);
  }

  .breadcrumbs .current { color: var(--ink); }
  .breadcrumbs .sep { color: var(--rule); }

  .intro {
    padding: 4vw 0 3vw;
    max-width: 700px;
  }

  h1 {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 200;
    font-size: clamp(4rem, 9vw, 9rem);
    letter-spacing: -0.03em;
    line-height: 0.95;
    color: var(--ink);
  }

  .hint {
    margin-top: 1.2rem;
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    color: var(--muted);
    max-width: 40ch;
    line-height: 1.45;
  }

  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 4vw 5vw;
    margin-top: 2vw;
  }

  .category h2 {
    font-family: var(--sans);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--accent);
    margin-bottom: 1.5rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--rule);
  }

  ul { list-style: none; }

  li {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    align-items: baseline;
    padding: 0.45rem 0;
    border-bottom: 1px dotted var(--rule);
  }

  li.see {
    font-style: italic;
    color: var(--muted);
  }

  .entry-name {
    font-family: var(--serif);
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.3;
    color: var(--ink);
  }

  .entry-name :global(em) {
    font-style: italic;
  }

  .entry-refs {
    font-family: var(--sans);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    display: flex;
    gap: 0.1rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .entry-refs a {
    color: var(--muted);
    padding: 0.1rem 0.35rem;
    border-radius: 2px;
    transition: background 160ms ease, color 160ms ease;
  }

  .entry-refs a:hover {
    background: var(--accent);
    color: var(--bg);
  }
</style>
