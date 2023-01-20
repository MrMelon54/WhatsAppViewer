import type { MessageData } from "./MessageData";
import type { UserData } from "./UserData";

export interface ChatData {
  messages: MessageData[];
  users: UserData[];
}
