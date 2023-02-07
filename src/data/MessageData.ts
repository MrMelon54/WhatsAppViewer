import type { UserId } from "./UserData";

export interface MessageData {
  content: string;
  timestamp: Date;
  user: UserId;
}
