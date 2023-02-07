<script lang="ts">
  import type { ChatData } from "src/data/ChatData";
  import type { UserData, UserId } from "src/data/UserData";
  import bgChatTileDark from "../assets/bg-chat-tile-dark.png";
  export let chat: ChatData;
  let users: Map<UserId, UserData> = new Map();
  $: users = genUserMap(chat);

  function genUserMap(chat: ChatData): Map<UserId, UserData> {
    let z = new Map();
    chat.users.forEach((x) => {
      z[x.id] = x;
    });
    return z;
  }
</script>

<div>Chat Viewer</div>
<div id="messages">
  {#each chat.messages as msg (msg.timestamp)}
    <div>{msg.content} - {msg.timestamp} - {users[msg.user].name}</div>
  {/each}
</div>
