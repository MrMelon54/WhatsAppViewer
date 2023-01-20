import type { UserId } from "./UserData";

export interface MessageData {
  Content: string;
  Timestamp: Date;
  User: UserId;
}
