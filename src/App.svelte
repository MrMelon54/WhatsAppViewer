<script lang="ts">
  import ChatViewer from "./chat-viewer/ChatViewer.svelte";
  import type { ChatData } from "./data/ChatData";

  let currentChat: ChatData;
</script>

<main class="container">
  {#if currentChat}
    <ChatViewer chat={currentChat} />
  {/if}
</main>

<style>
</style>
