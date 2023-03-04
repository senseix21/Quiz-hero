import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQ from './QuizQ';

const Quiz = () => {
    const subject = useLoaderData().data;
    const quizs = subject.questions;

    const [score, setScore] = useState(0);

    const handleAnswer = (correct) => {
        if (correct) {
            setScore(score + 1);
        }
    };
    console.log(quizs);





    return (
        <div>
            <div className="quiz-header lg:flex items-center justify-around bg-green-800 text-white lg:mx-40 p-5  rounded-lg">
                <img className='w-60 h-60' src={subject.logo} alt="" />
                <div>
                    <h2 className='text-4xl font-semibold'>{subject.name}</h2>
                    <button className='bg-green-200 text-black font-semibold p-2 m-4 mb-3 rounded-lg'> Start Quiz</button>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold  '>Quiz Hero</h2>
                    <p className=' bg-green-200 text-black font-semibold p-2 m-4 mb-3 rounded-lg'>Score: {score}</p>
                </div>
            </div>
            <div className='quiz-div '>
                {
                    quizs.map(quiz =>
                        <QuizQ key={quiz.id} quiz={quiz} onAnswer={handleAnswer} ></QuizQ>
                    )
                }

                {/* <button className='p-2 m-3 bg-green-800 text-white rounded-md'>Submit Answer</button> */}

            </div>



        </div>
    );
};

export default Quiz;