import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const subjects = useLoaderData().data;
    // console.log(subjects);
    return (
        <div className='grid lg:grid-cols-2'>
            {
                subjects.map(subject =>
                    <div className="flex items-center justify-around lg:mx-20 my-4 p-5 bg-black text-white rounded-lg">
                        <img src={subject.logo} width={200} height={200} alt="" className="mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">{subject.name}</h2>
                            <Link to={`/quiz/${subject.id}`}><button className='bg-green-700 text-white m-2 p-2 rounded-lg '>Start Quiz</button></Link>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Home;