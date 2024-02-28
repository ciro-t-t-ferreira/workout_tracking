import { useEffect, useState} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'

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
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>   
        )
    }
    
export default Home