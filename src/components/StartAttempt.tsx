import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [prog, setProg] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function adder(): void {
        setAttempts(attempts + 1);
    }

    function starter(): void {
        setAttempts(attempts - 1);
        setProg(true);
    }

    function stopper(): void {
        setProg(false);
    }

    return (
        <div>
            <Button disabled={prog || attempts <= 0} onClick={starter}>
                Start Quiz
            </Button>
            <Button disabled={!prog} onClick={stopper}>
                Stop Quiz
            </Button>
            <Button disabled={prog} onClick={adder}>
                Mulligan
            </Button>
            Attempts: {attempts}
        </div>
    );
}
