<script>
  let posts, description, excerpt, time, url, title;
</script>

<header class="press-head">
  <h1>Press</h1>
  {description}
</header>
<section class="press-main postfeed">
  {#each posts as post}
    <div class="press-table-row">
      <a class="card-link" href={{ url }}>
        <h2 class="card-title">{title}</h2>
      </a>

      <p>{excerpt}</p>

      <p class="time">{time}</p>
    </div>
  {/each}
</section>

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

        p {
          font-size: var(--h5);
          flex-basis: 30%;
          overflow: hidden;
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
