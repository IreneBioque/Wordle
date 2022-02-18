
import { useEffect, useState } from 'react';
import RowCompleted from './rowCompleted';
import RowEmpty from './rowEmpty';
import { GameStatus } from './types';
import { useWindow } from '../hooks/useWindow';

export default function Wordle() {
    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completeWord, setCompleteWord] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
    const handleKeyNow (event: KeyboardEvent) => {
        const letterttttttasdasdxcvbb
    }
    useWindow("keydown", handleKeyNow);
    useEffect(() => {
        setWordOfTheDay("break")
    })
    return (
        <div>
            <RowCompleted word="sabio" solution={wordOfTheDay} />
            <RowEmpty/>
        </div>
    )
}