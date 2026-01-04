<script>
  let { data } = $props();
  import logo from "$lib/assets/RedDirtLogo.png";
  import OpenMicPng from "$lib/assets/OpenMic.png";
  import EditsPng from "$lib/assets/Edits.png";
  import WritesPng from "$lib/assets/Writes.png";
  import ReadsPng from "$lib/assets/Reads.png";
</script>

<div id="home-page-wrapper">
  <section class="logo">
    <enhanced:img alt="Red Dirt Poetry logo" src={logo} />
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
    <ul class="events-banners">
      <li id="open-mic">
        <enhanced:img src={OpenMicPng}></enhanced:img>
      </li>
      <li id="edits">
        <enhanced:img src={EditsPng}></enhanced:img>
      </li>

      <li id="writes">
        <enhanced:img src={WritesPng}></enhanced:img>
      </li>
      <li id="reads">
        <enhanced:img src={ReadsPng}></enhanced:img>
      </li>
    </ul>
  </section>
  <section id="instagram">
    <h2>Latest Grams</h2>
    {#each data.posts.posts as post}
      <a class="ig-post" href={post.permalink} target="_blank">
        <enhanced:img alt={post.caption} src={post.mediaUrl} />
      </a>
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

  section#instagram,
  .events-banners {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    h2 {
      flex-basis: 100%;
    }

    li {
      width: 20%;
    }

    .ig-post {
      width: 30%;
      position: relative;
      flex-grow: 1;

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

  @media (max-width: 750px) {
    .events-banners,
    section#instagram {
      display: block;

      [class*="ig-"] {
        display: block;
        margin: 1rem 0;
      }

      li {
        width: 100%;
        img {
          margin: 0 auto;
        }
      }
    }
  }
</style>
