import React, { useState } from 'react';

const QuizOption = ({ option, correctAnswer, onAnswer }) => {
    const [selected, setSelected] = useState(false);
    const [answered, setAnswered] = useState(false);

    // console.log(key);
    const handleAnswer = () => {
        if (!answered) {
            if (correctAnswer === option) {
                onAnswer(true);
            } else {
                onAnswer(false);
            }
            setSelected(true);
            setAnswered(true);
        }

    };


    const className = selected ? (correctAnswer === option ? 'bg-green-800 text-white mr-4 mt-3 p-3 rounded-md' : 'bg-red-800 text-white mr-4 mt-3 p-3 rounded-md') : 'mt-3 p-3 bg-grey';



    return (
        <div className={className}>
            <label>
                <input onClick={handleAnswer} type="radio" name="quiz-option" value={option} />
                {option}
            </label>
        </div >
    );
};

export default QuizOption;
