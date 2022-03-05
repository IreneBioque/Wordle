import styles from "./keyboard.module.scss";
import { RiDeleteBack2Line } from "react-icons/ri";
import { KeyStatus } from "./types";
interface KeyboardKey {
  value: string;
  status: KeyStatus;
}

interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
  keysStates: KeyboardKey[];
}

export default function Keyboard({
  keys,
  onKeyPressed,
  keysStates,
}: KeyboardProps) {
  function handleInput(e: any) {
    onKeyPressed(e.target.textContent);
  }

  function handleEnter(e: any) {
    onKeyPressed("ENTER");
  }

  function handleDelete(e: any) {
    onKeyPressed("BACKSPACE");
  }

  return (
    <div className={styles.keyboardContainer}>
      <div className={styles.keyboardRow}>
        {Array.from(Array(10)).map((_, i) => (
          <button
            key={i}
            className={
              keysStates[i].status === "correct"
                ? styles.correct_key
                : keysStates[i].status === "present"
                ? styles.present_key
                : keysStates[i].status === "absent"
                ? styles.absent
                : styles.unknown
            }
            onClick={handleInput}
          >
            {keys[i]}
          </button>
        ))}
      </div>
      <div className={styles.keyboardRow}>
        {Array.from(Array(10)).map((_, i) => (
          <button
            key={i + 10}
            className={
              keysStates[i + 10].status === "correct"
                ? styles.correct_key
                : keysStates[i + 10].status === "present"
                ? styles.present_key
                : keysStates[i + 10].status === "absent"
                ? styles.absent
                : styles.unknown
            }
            onClick={handleInput}
          >
            {keys[i + 10]}
          </button>
        ))}
      </div>
      <div className={styles.keyboardRow}>
        <button className={styles.enterKey} onClick={handleEnter}>
          ENTER
        </button>
        {Array.from(Array(7)).map((_, i) => (
          <button
            key={i + 20}
            className={
              keysStates[i + 20].status === "correct"
                ? styles.correct_key
                : keysStates[i + 20].status === "present"
                ? styles.present_key
                : keysStates[i + 20].status === "absent"
                ? styles.absent
                : styles.unknown
            }
            onClick={handleInput}
          >
            {keys[i + 20]}
          </button>
        ))}

        <button className={styles.deleteKey} onClick={handleDelete}>
          <RiDeleteBack2Line />
        </button>
      </div>
    </div>
  );
}
