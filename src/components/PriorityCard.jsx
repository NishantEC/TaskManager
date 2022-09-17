import React,{ useState } from 'react'

import TaskCard from './TaskCard'
import UpdateTask from './UpdateTask'
import FetchTasks from './fetchTasks'






function PriorityCard(props) {
    let tasks = FetchTasks();
 
    let pLevel = props.level
    const [Index, setIndex] = useState(0)
    const [IsUpdating, setIsUpdating] = useState(false)
    function getIndex(val, Bool){
      
      setIndex(val);
      setIsUpdating(Bool);
      
    }
    function cancelUpdate(){
      setIsUpdating(false)

    }

  return (
    <>
           {IsUpdating &&  <UpdateTask  {...tasks.filter(task => task.id === Index)} cancelUpdating={cancelUpdate}/>}
    
    <div className="priority-card">
        <div className="pc-header"> Priority level: {pLevel}</div>
        {tasks.filter(item=> item.priority===pLevel).map(item =>{
            return(
                <TaskCard {...item} key={item.id} editID= {getIndex}/>
            )
        })}
    </div>
    </>
  )
}

export default PriorityCard