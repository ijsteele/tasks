import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const numAttempts = parseInt(attempts) || 0;
    const [requested, setRequested] = useState<string>("0");
    const numReq = parseInt(requested) || 0;

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateAttempts}
                />
            </Form.Group>
            <div>Attempts: {attempts}</div>
            <Button
                disabled={numAttempts <= 0}
                onClick={() => setAttempts((numAttempts - 1).toString())}
            >
                Use
            </Button>
            <Button
                onClick={() => setAttempts((numAttempts + numReq).toString())}
            >
                Gain
            </Button>
        </div>
    );
}
