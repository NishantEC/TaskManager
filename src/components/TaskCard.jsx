import React,{useEffect} from 'react'


export default function TaskCard(item) {
    

    function deleteTask(e,index) {
        var myHeaders = new Headers();
    myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

    var formdata = new FormData();
    formdata.append("taskid", `${index}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

fetch("https://devza.com/tests/tasks/delete", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));}
    
function editTask(e,item,id){
    item.editID(id,true)
     

}

    return (
        <>
        <div className="tc-wrapper">
            <div className="top-line">
                <div className="tc-task-title"><p>{item.message}</p></div>
                <div className="tc-btns">
                    <img onClick={(e) =>editTask(e,item,item.id)}  src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" />
                    <img onClick={(e) =>deleteTask(e,item.id)}  src="https://img.icons8.com/ios-glyphs/30/000000/delete-forever.png" />
                </div>
            </div>
            <div className="bottom-line">
                <div className="assigned-user">{item.assigned_name}</div>
                <div className="tc-due-date">{item.due_date}</div>
            </div>
        </div>

        </>
    )
}
