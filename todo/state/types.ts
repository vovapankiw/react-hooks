export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export type ActionType =
  | typeof ADD_TODO
  | typeof COMPLETE_TODO
  | typeof REMOVE_TODO;
