import React,{useState,useEffect} from 'react'




export default function FetchTasks(){
  const [TasksList, setTasksList] = useState([]);

var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
  useEffect(() => {
    const getTasksList = () =>{
        fetch("https://devza.com/tests/tasks/list", requestOptions)
        .then(response => response.json())
        .then(result => setTasksList(result.tasks))
        .catch(error => console.log('error', error));
    }
getTasksList();

  }, [TasksList])


return TasksList
}