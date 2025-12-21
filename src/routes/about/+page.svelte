<script>
  import { siteLang } from "$lib/assets/rdp.lang";
</script>

<div id="about-page-wrapper" class="page-wrapper">
  <header class="about-head">
    <h1>About Us</h1>
    <div>
      {#each siteLang.about.paragraphs as p}
        <p class="intro-paragraphs">{p}</p>
      {/each}
    </div>
  </header>

  <div class="main-content"></div>
  <section id="board">
    <h2>Meet the Board</h2>
    <div class="boardie"></div>
    <div class="boardie"></div>
    <div class="boardie"></div>
    <div class="boardie"></div>
    <div class="boardie"></div>
    <div class="boardie"></div>
    <div class="boardie"></div>
  </section>
</div>

<style lang="css">
  #about-page-wrapper {
    .about-head {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }
    .intro-paragraphs {
      margin-bottom: 3rem;
      max-width: 75vw;
      &:last-child {
        font-weight: bold;
      }
    }
    section#board {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2rem;

      .boardie {
        background-color: yellowgreen;
        height: 200px;
        width: 200px;
        border: solid black 1px;

        flex-basis: 30%;
      }

      h2 {
        flex-basis: 100%;
        text-align: center;
        margin: 0;
      }
    }
  }

  @media (max-width: 750px) {
    #about-page-wrapper {
      section#board {
        .boardie {
          flex-basis: 45%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    #about-page-wrapper {
      section#board {
        .boardie {
          flex-basis: 100%;
        }
      }
    }
  }
</style>
