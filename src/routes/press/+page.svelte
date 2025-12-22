<script>
  import { siteLang } from "$lib/assets/rdp.lang";
  let posts, description, excerpt, time, url, title;
</script>

<div id="press-page-wrapper">
  <header class="press-head">
    <h1>Press</h1>
    {description}
  </header>
  <section class="press-main postfeed">
    {#each siteLang.press.links as post}
      <div class="press-table-row">
        <a class="card-link" href={post.link}>
          <h2 class="card-title">{post.source}</h2>
        </a>
        <p class="article-slug">{post.slug}</p>

        <p class="time">{post.date}</p>
      </div>
    {/each}
  </section>
</div>

<style>
  #press-page-wrapper {
    header {
      h1 {
        text-align: center;
      }
    }

    section.press-main {
      .press-table-row {
        padding: 1rem 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px;

        h2.card-title {
          margin: 0;
          font-size: var(--h4);
          flex-basis: 45%;
        }

        time {
          flex-basis: 10%;
        }
      }
    }
  }

  @media (max-width: 750px) {
    #press-page-wrapper {
      header {
        h1 {
          text-align: left;
        }
      }

      section.press-main {
        .press-table-row {
          padding: 1rem 0;
          display: block;

          h2.card-title {
            margin: 0 0 1rem 0;
            font-size: var(--h4);
          }

          p {
            font-size: var(--h5);
            margin: 0 0 1rem 0;
          }
        }
      }
    }
  }
</style>
