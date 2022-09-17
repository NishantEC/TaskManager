import React,{useState,useEffect} from 'react'




export default function FetchList(){
  const [UserList, setUserList] = useState([]);

var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
  useEffect(() => {

      fetch("https://devza.com/tests/tasks/listusers", requestOptions)
      .then(response => response.json())
      .then(result => setUserList(result.users))
      .catch(error => console.log('error', error));
  }, []);

return UserList
}