import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "cyan",
    "magenta"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<number>(0);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        const i = COLORS.indexOf(event.target.value);
        setColor(i);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {COLORS.map((clr: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        value={clr}
                        label={clr}
                        key={clr}
                        onChange={updateColor}
                        checked={clr === COLORS[color]}
                    />
                ))}
            </Form.Group>
            <br></br>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: COLORS[color] }}
                >
                    {COLORS[color]}
                </span>
                .
            </div>
        </div>
    );
}
/**
 * <Form.Check //1
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check //2
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check //3
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check //4
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check //5
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check //6
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <Form.Check //7
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="magenta"
                value="magenta"
                checked={color === "magenta"}
            />
            <Form.Check //8
                inline
                type="radio"
                name="response"
                onChange={(e) => setColor(e.target.value)}
                label="white"
                value="white"
                checked={color === "white"}
            />
 */
