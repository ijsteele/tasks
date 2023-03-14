import React, { useState } from "react";
import { Button } from "react-bootstrap";

//const [dhValue, setDhValue] = useState<number>(10);

interface dhValueProps {
    dh: () => void;
}

function Doubler({ dh }: dhValueProps): JSX.Element {
    return <Button onClick={dh}>Double</Button>;
}

function Halver({ dh }: dhValueProps): JSX.Element {
    return <Button onClick={dh}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, byTwo] = useState<number>(10);
    const doIt = (num: number) => byTwo(dhValue * num);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dh={() => doIt(2)}></Doubler>
            <Halver dh={() => doIt(0.5)}></Halver>
        </div>
    );
}
