<script>
  import { siteLang } from "$lib/assets/rdp.lang";
  import EditsLogo from "$lib/assets/EditsLogo.png";
  import NytPickle from "$lib/assets/nyt_openMic_pickle.jpg";
  import WritesLogo from "$lib/assets/WritesLogo.png";
  import ReadsSchedule from "$lib/assets/ReadsSched_2025B.png";
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
    <enhanced:img class="event-img" src={NytPickle} />
    <div class="description-card-text">
      <h3>Open Mic</h3>
      <p>
        {siteLang.events.openMic}
      </p>
    </div>
  </div>
  <div class="regular-event-description" id="reads">
    <enhanced:img class="event-img" src={ReadsSchedule} />
    <div class="description-card-text">
      <h3>Reads</h3>
      <p>
        {siteLang.events.reads}
      </p>
    </div>
  </div>

  <div class="regular-event-description" id="writes">
    <enhanced:img class="event-img" src={WritesLogo} />
    <div class="description-card-text">
      <h3>Writes</h3>
      <p>
        {siteLang.events.writes}
      </p>
    </div>
  </div>

  <div class="regular-event-description" id="edits">
    <enhanced:img class="event-img" src={EditsLogo} />
    <div class="description-card-text">
      <h3>Edits</h3>
      <p>
        {siteLang.events.edits}
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
      width: 500px;
      height: 100%;
    }
    img.event-img:first-child {
      max-height: 500px;
      object-fit: cover;
      object-position: 50% top;
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
        width: 500px;
      }
    }
    .events-main iframe {
      width: 100%;
    }
  }
</style>
