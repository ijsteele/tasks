import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, rollLeft] = useState<number>(1);
    const [right, rollRight] = useState<number>(6);

    return (
        <div>
            <Button onClick={() => rollLeft(d6)}>Roll Left</Button>
            <span data-testid="left-die">{left} </span>
            <Button onClick={() => rollRight(d6)}>Roll Right</Button>
            <span data-testid="right-die">{right}</span>
            <span>
                {left + right === 2 ? (
                    <p>Lose</p>
                ) : left === right ? (
                    <p>Win</p>
                ) : (
                    <></>
                )}
            </span>
        </div>
    );
}
