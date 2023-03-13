import React, { useState } from "react";
import { Button, TabPane } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    const [abb, setAbb] = useState<string>("Short Answer");
    function change(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
            setAbb("Multiple Choice");
        } else if (type === "multiple_choice_question") {
            setType("short_answer_question");
            setAbb("Short Answer");
        }
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button> {abb}
        </div>
    );
}
