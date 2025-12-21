<script>
  let { data } = $props();
  import logo from "$lib/assets/RedDirtLogo.png";
  console.log(data.posts.posts);
</script>

<div id="home-page-wrapper">
  <section class="logo">
    <img alt="Red Dirt Poetry logo" src={logo} />
  </section>

  <section id="about">
    <p>
      Red Dirt Poetry is a grassroots organization dedicated to uplifting
      Oklahoma poets through education, community, and creative expression.
      Founded in the 1990s, it has grown and evolved alongside the state’s
      literary scene, collaborating with Literati Press and championing local
      voices. With a passion for raw, honest storytelling, Red Dirt Poetry
      creates a welcoming space where artists can share their truths, refine
      their craft, and leave a lasting impact on their communities.
    </p>
  </section>
  <section id="events">
    <h2>Hang Out With Poets</h2>
    <ul class="event-placeholder">
      <li id="open-mic">
        Open Mic
        <p>Every Wednesday @ Literati Press at 7pm!</p>
      </li>
      <li id="edits">
        Edits
        <p>Every first Saturday of the month @ Second Story Books at 1pm!</p>
      </li>
      <li id="writes">
        Writes
        <p>Every third Tuesday of the month @ Literati Press at 7pm!</p>
      </li>
      <li id="reads">
        Reads
        <p>Every 4th Saturday of the month @ The Floating Bookshop at 1pm!</p>
      </li>
    </ul>
  </section>
  <section id="instagram">
    <h2>Latest Grams</h2>
    {#each data.posts.posts as post}
      <div class="ig-post" style={`background-image: url(${post.mediaUrl})`}>
        <a alt="go to instagram post" href={post.permalink} target="_blank"></a>
      </div>
    {/each}
  </section>
</div>

<style>
  #home-page-wrapper {
    margin: 0 auto;
    max-width: 805px;

    section {
      border-top: dashed;
      padding: 4rem 0;
    }

    section img {
      padding-bottom: 4rem;
    }
  }

  section#instagram {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    h2 {
      flex-basis: 100%;
    }

    .ig-post {
      position: relative;
      flex-grow: 1;
      min-height: 30vh;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      &:hover {
        flex-grow: 1.5;
        transition: flex-grow 0.5s;
        cursor: pointer;
        border: red 2px;
      }
    }

    .ig-post:not(:last-child) {
      margin-right: 1rem;
    }
  }
</style>
