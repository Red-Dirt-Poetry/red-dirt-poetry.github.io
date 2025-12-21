
import { error } from '@sveltejs/kit';
  
  
  async function getIGPosts() {
    const url = "https://feeds.behold.so/Mv14XUg8oTXpuPsJEXNP";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      return json;
    } catch (err) {
        error(err.message);
    }
  }


export async function load({ fetch }) {
   const  posts = await getIGPosts();
    return {
        posts
    };
}


