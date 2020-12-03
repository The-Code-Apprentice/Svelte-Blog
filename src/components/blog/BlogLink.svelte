<script>
    import Tag from "../design/tag/Tag.svelte";
    export let href;
    export let title;
    export let tags;
    export let summary;
    export let date;
    let isHovered = false;
    const onMouseEnter = () => {
      isHovered = true;
    };
    const onMouseExit = () => {
      isHovered = false;
    };
  </script>
  
  <style>
    a {
      text-decoration: none;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4px;
      padding-top: 12px;
    }
    .tags {
      display: flex;
    }
    .meta {
      /* display: flex; */
      display: flex;
      align-items: center;
    }
    .date {
      font-size: 0.7em;
      margin-left: 6px;
    }
    .summary {
      font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	    font-size: 14px;
	    line-height: 1.6;
      color: #a2aabc; /* #D7DCE2 */
      width: 100%;

      margin: auto;
      padding-bottom: 12px;
      border-bottom: 1px solid  #83a0e1;
    }
    h4 {
      color: #83a0e1;
      font-family: menlo, inconsolata, monospace;

    }
    @media screen and (max-width: 992px) {
      .meta {
        display: none;
      }
      .tags {
        flex-direction: column;
      }
    }
  </style>
  
  <a {href} rel="prefetch" on:mouseover={onMouseEnter} on:mouseout={onMouseExit}>
    <div class="container">
      <h4>{title}</h4>
      <div class="meta">
        <div class="tags">
          {#each tags as tag}
            <Tag title={tag} />
          {/each}
        </div>
        <p class="date">{date}</p>
      </div>
    </div>
    <p class="summary">{summary}</p>
  </a>