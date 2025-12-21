<script>
  import { siteLang } from "$lib/assets/rdp.lang";
</script>

<header class="events-page-header">
  <h1>Hang Out</h1>
</header>

<section class="events-main">
  <div class="regular-events-header">
    {#each siteLang.events.intro.paragraphs as p}
      <p>{p}</p>
    {/each}
  </div>

  <div class="regular-event-description" id="open-mic">
    <img class="event-img" />
    <div class="description-card-text">
      <h3>Open Mic</h3>
      <p>
        {siteLang.events.openMic}
      </p>
    </div>
  </div>

  <div class="regular-event-description" id="edits">
    <img class="event-img" />
    <div class="description-card-text">
      <h3>Edits</h3>
      <p>
        {siteLang.events.edits}
      </p>
    </div>
  </div>

  <div class="regular-event-description" id="writes">
    <img class="event-img" />
    <div class="description-card-text">
      <h3>Writes</h3>
      <p>
        {siteLang.events.writes}
      </p>
    </div>
  </div>

  <div class="regular-event-description" id="reads">
    <img class="event-img" />
    <div class="description-card-text">
      <h3>Reads</h3>
      <p>
        {siteLang.events.reads}
      </p>
    </div>
  </div>

  <iframe
    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=cmVkZGlydHBvZXRyeUBnbWFpbC5jb20&color=%23F4511E"
    style="border:solid 1px #777"
    width="400"
    height="600"
    frameborder="0"
    scrolling="no"
  ></iframe>
</section>

<style>
  #events-page-wrapper {
    display: grid;
    grid-template-rows: 1fr 0.85fr auto 3rem;
    gap: 8rem;
    align-items: start;
  }

  header.events-page-header {
    grid-row: 1;
    text-align: center;

    .featured-event {
      border: dotted 3px gold;
      padding: 8rem;
      display: flex;
      flex-wrap: nowrap;
      max-height: 60vh;
      justify-content: space-around;
      align-items: center;

      .featured-event-img-container {
        flex-basis: 45%;

        #featured-event-img {
          border: solid black 2px;
          box-shadow: 24px 24px 4px 2px rgba(0, 0, 255, 0.2);
        }
      }

      p {
        flex-basis: 45%;
        font-size: var(--h5) !important;
        text-wrap: pretty;
        line-height: 1.5;
        font-family: var(--font-serif);
      }
    }
  }

  section.events-main {
    grid-row: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }

  .events-main .regular-events-header {
    display: grid;
    grid-template-columns: subgrid;
    width: 100%;
    grid-column: 1 / span 4;
    margin-bottom: 4rem;

    h2 {
      text-align: center;
    }

    p {
      text-align: left;
      margin-top: 2rem;
      grid-column: 2 / span 2;
    }
  }

  .events-main .regular-event-description {
    grid-column: span 4;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;

    .description-card-text,
    .event-img {
      flex-basis: 45%;
    }

    img.event-img {
      background-color: lavender;
      border: solid;
      height: 200px !important;
      width: 500px;
    }
  }

  #open-mic,
  #writes {
    .description-card-text {
      order: 1;
    }

    .event-img {
      order: 2;
    }
  }

  #edits,
  #reads {
    .description-card-text {
      order: 2;
    }

    .event-img {
      order: 1;
    }
  }

  .events-main iframe {
    width: 100%;
    margin-top: 10rem;
    grid-column: 1 / span 4;
  }

  @media (max-width: 800px) {
    #events-page-wrapper {
      display: block;
      max-width: 500px;

      h2 {
        text-align: left;
        margin-bottom: 3rem;
        font-size: calc(var(--h2) / var(--type-scale));
      }
    }

    header.events-page-header {
      text-align: left;
      margin-bottom: 4rem;

      .featured-event {
        display: block;
        max-height: unset;

        .featured-event-img-container {
          margin-bottom: 4rem;
        }
      }
    }

    section.post-feed {
      display: block;
      max-height: unset;

      article.card {
        border: solid 1px black;
        padding: 4rem;
        margin-bottom: 4rem;

        .card-content {
          h3 {
            font-size: var(--h4) !important;
            margin: 0;
          }
        }
      }
    }
    section.events-main {
      display: block;
    }

    .events-main .regular-event-description {
      display: block;
      margin-bottom: 4rem;
      .description-card-text,
      .event-img {
        display: block;
        margin-bottom: 2rem;
      }

      .event-img {
        height: 100px !important;
        width: 500px;
      }
    }
    .events-main iframe {
      width: 100%;
    }
  }
</style>
