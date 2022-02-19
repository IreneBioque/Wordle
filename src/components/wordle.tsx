
import { useEffect, useState } from 'react';
import RowCompleted from './rowCompleted';
import RowEmpty from './rowEmpty';
import { GameStatus } from './types';
import { useWindow } from '../hooks/useWindow';
import RowCurrent from './row-current';
import { getWordOfTheDay, isValidWord } from '../services/request';
import styles from "./wordle.module.scss"
import Keyboard from './keyboard';
import Modal from './modal';
export default function Wordle() {
    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
    const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ñ",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
    ];
     function onKeyPressed(key: string) {
    if (gameStatus !== GameStatus.Playing) {
      return;
    }

    if (key === "BACKSPACE" && currentWord.length > 0) {
        onDelete();
      return;
    }

    if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
    onEnter(key)
      return;
    }

    if (currentWord.length >= 5) return;

    // ingresar la letra al estado
    if (keys.includes(key)) {
   onInput(key)
      return;
    }
  }
    function onInput(letter: string) {
        const newWord = currentWord + letter;
        setCurrentWord(newWord);
    } 
    function onDelete() {
        const newWord = currentWord.slice(0, -1);
        setCurrentWord(newWord);
    } 
     async function onEnter(letter: string) {
        // el usuario gana
        if (currentWord === wordOfTheDay) {
            setCompletedWords([...completedWords, currentWord])
            setGameStatus(GameStatus.Won);
            return;
        }
        // el usuario pierde
          if (turn === 6) {
            setCompletedWords([...completedWords, currentWord])
            setGameStatus(GameStatus.Lost);
            return;
        }
        // validación de que existe la palabra

     const validWord = await isValidWord(currentWord);

    if (currentWord.length === 5 && !validWord) {
      alert("Not a valid word");
      return;
    }


        setCompletedWords([...completedWords, currentWord]);
        setTurn(turn + 1);
        setCurrentWord("");
    }
    function handleKeyDown(event: KeyboardEvent) {
        const key = event.key.toUpperCase();
        if (gameStatus !== GameStatus.Playing) {
            return;
        }

    onKeyPressed(key);
  }
    useWindow("keydown", handleKeyDown);
    useEffect(() => {
        setWordOfTheDay(getWordOfTheDay());
    }, []);
  return (
    <>
      <h1 className={styles.title}>WORDL<span  className={styles.span}>E</span></h1>
        <div className={styles.main}>
            {
                gameStatus === GameStatus.Won ? (
          <Modal
          type="won"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : gameStatus === GameStatus.Lost ? (
        <Modal
          type="lost"
          completedWords={completedWords}
          solution={wordOfTheDay}
        />
      ) : null
      }
                    
        <div className={styles.mainContainer}>
            {
                completedWords.map((word, i) => (
                    <RowCompleted word={word} solution={wordOfTheDay} key={i}/>
                ))
            }
            {
                gameStatus === GameStatus.Playing ? (
                    <RowCurrent word={currentWord}/>
                ) : null
            }
            {
                Array.from(Array(6 - turn)).map((_, i) => (
                    <RowEmpty key={i}/>
                ))
            }  
            
            </div>
            <Keyboard keys={keys} onKeyPressed={onKeyPressed} />
      </div>
      </>
    )
}