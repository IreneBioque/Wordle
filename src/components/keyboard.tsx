import styles from "./keyboard.module.scss";
import {RiDeleteBack2Line} from "react-icons/ri";
interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
}

export default function Keyboard({ keys, onKeyPressed }: KeyboardProps) {
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
        <button key={i} className={styles.key} onClick={handleInput}>
          {keys[i]}
        </button>
      ))}
      </div>
            <div className={styles.keyboardRow}>
      {Array.from(Array(9)).map((_, i) => (
        <button key={i + 10} className={styles.key} onClick={handleInput}>
          {keys[i + 10]}
        </button>
      ))}
        </div>
      <div className={styles.keyboardRow}>
              <button className={styles.enterKey} onClick={handleEnter}>
        ENTER
        </button>
      {Array.from(Array(8)).map((_, i) => (
        <button key={i + 19} className={styles.key} onClick={handleInput}>
          {keys[i + 19]}
        </button>
      ))}
  
        <button className={styles.deleteKey} onClick={handleDelete}>
          <RiDeleteBack2Line/>
        </button>
        </div>
    </div>
  );
}