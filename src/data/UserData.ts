declare const validUserId: unique symbol;

export type UserId = number & {
  [validUserId]: true;
};

export interface UserData {
  id: UserId;
}
