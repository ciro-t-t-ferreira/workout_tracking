import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm';

function Home(){

    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') //the localhost part is put as a
                // proxy in ../package.json
            const json = await response.json()

            if (response.ok){
                dispatch( {type: "SET_WORKOUTS" , payload: json})
            }
        }

        fetchWorkouts();


    }, [dispatch]); 
    

    return (
        <div className="home">
            <div className='workout'>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <div className='workout'>
                <WorkoutForm />
            </div>
        </div>   
        )
}
    
export default Home