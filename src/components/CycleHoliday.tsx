import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, theDay] = useState<string>("🎆");
    const [name, namer] = useState<string>("Independence Day");
    const alpha = ["🍇", "🎄", "🎃", "🎆", "🎊"];
    const time = ["🎊", "🍇", "🎆", "🎃", "🎄"];

    function byYear(): void {
        theDay(
            time[
                (time.findIndex((day: string): boolean => day === holiday) +
                    1) %
                    5
            ]
        );
    }

    function byName(): void {
        theDay(
            alpha[
                (alpha.findIndex((day: string): boolean => day === holiday) +
                    1) %
                    5
            ]
        );
    }

    return (
        <div>
            <Button onClick={byName}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
            <span>
                Holiday: (.*)/i
                {holiday === "🍇" ? (
                    <p>Anthesteria</p>
                ) : holiday === "🎄" ? (
                    <p>Christmas</p>
                ) : holiday === "🎃" ? (
                    <p>Halloween</p>
                ) : holiday === "🎆" ? (
                    <p>Independence Day</p>
                ) : holiday === "🎊" ? (
                    <p>New Years Day</p>
                ) : (
                    <></>
                )}
            </span>
        </div>
    );
}
