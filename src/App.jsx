import { useState } from 'react'

import FetchList from './components/usersListfetch'
import {CreateTask}  from './components/CreateTask'
import PriorityCard from './components/PriorityCard'







const priorityLevels=["1","2","3"]



function App() {
  const [count, setCount] = useState(0)
  const usersList = FetchList();
  return (
    <>
        
        <CreateTask {...usersList} />
        
        <div className='priority-cards-wrapper' >
        {priorityLevels.map((priorityLevel,id) => {
          return(<PriorityCard level={priorityLevel} key={id}/>)
        })}
        </div>
    </>
  )
}

export default App
