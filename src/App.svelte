<script lang="ts">
  import ChatViewer from "./chat-viewer/ChatViewer.svelte";
  import type { ChatData } from "./data/ChatData";
  import type { UserId } from "./data/UserData";

  let currentChat: ChatData;
  currentChat = {
    messages: [{ content: "Hello world!", timestamp: new Date(), user: <UserId>1 }],
    users: [
      { id: <UserId>1, name: "Sean" },
      { id: <UserId>2, name: "Steph" },
    ],
  };
</script>

<main class="container">
  {#if currentChat}
    <ChatViewer chat={currentChat} />
  {/if}
</main>

<style>
</style>
