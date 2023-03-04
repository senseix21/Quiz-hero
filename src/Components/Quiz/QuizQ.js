import React from 'react';
import QuizOption from './QuizOption';


const QuizQ = ({ quiz, onAnswer }) => {
    const { id, options, question, correctAnswer } = quiz;
    // console.log(correctanswer);
    console.log(id)


    const handleAnswer = (correctAnswer) => {
        console.log('submitted successfully..', correctAnswer); //
    }
    return (
        <div className='question bg-green-800 text-white m-3 p-3 lg:mx-40 rounded-lg text-left'>
            <h3>{question}</h3>
            <div className='grid lg:grid-cols-2 p-3 m-5 bg-green-200 text-green-800 rounded-lg mb-2'>
                {
                    options.map((option, index) => <QuizOption
                        key={index}
                        option={option}
                        correctAnswer={correctAnswer}
                        handleAnswer={() => handleAnswer(correctAnswer)}
                        onAnswer={onAnswer}
                    ></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizQ;