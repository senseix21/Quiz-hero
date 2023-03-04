 // //set initial timer to 90 seconds
    // const [timer, setTimer] = useState(90);

    // //Reset the timer
    // const startTimer = () => {
    //     setTimer(90); //Reset the timer to 90 seconds
    // };

    // useEffect(() => {
    //     if (timer > 0) {
    //         const intervalId = setInterval(() => {
    //             setTimer(timer - 1); //
    //         }, 1000);
    //         return () => clearInterval(intervalId);
    //     }
    // }, [timer]);

    // //Format the timer
    // const formatTime = (seconds) => {
    //     const minutes = Math.floor(seconds / 60);
    //     const remainingSeconds = (seconds % 60);
    //     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} `;
    // };