export type BoxStatus = "absent" | "present" | "correct" | "empty" | "edit";
export type KeyStatus = "absent" | "present" | "correct" | "unknown";

export const enum GameStatus {
    Playing,
    Won, 
    Lost
}