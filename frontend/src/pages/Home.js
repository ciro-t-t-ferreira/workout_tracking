import { useEffect, useState} from 'react'

function Home(){

    const [workouts, setWorkouts] = useState(null) 

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts') //the localhost part is put as a
                // proxy in ../package.json
            const json = await response.json()

            if (response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkout();


    }, []); //the idea of the second empty argument is to run the function only once
    

    return (
        <div className="home">
            {workouts && workouts.map((workout) => (
                <p key={workout._id}>{workout.title}</p>
            ))}
        </div>   
        )
    }
    
export default Home