import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label={mode ? "Edit Mode" : "Normal Mode"}
                checked={mode}
                onChange={updateMode}
            />
            <div>
                {!mode ? (
                    <span>
                        {name} is{isStudent ? " " : " not "}a student
                    </span>
                ) : (
                    <div>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
