import React, { useState } from "react";
import FetchList from './usersListfetch'

export default function UpdateTask(task) {
    const usersList = FetchList();
    const users = Object.values(usersList);


    const [NewTask, setNewTask] = useState(task[0])
    function clearUpdating(e){
        task.cancelUpdating(false)
    }
    function updateTask(e) {
        var myHeaders = new Headers();
        myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

        var formdata = new FormData();
        formdata.append("message", NewTask.message);
        formdata.append("due_date", NewTask.due_date);
        formdata.append("priority", NewTask.priority);
        formdata.append("assigned_to", NewTask.assigned_to);
        formdata.append("taskid", NewTask.id);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
        };

        fetch("https://devza.com/tests/tasks/update", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            task.cancelUpdating(false)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setNewTask({ ...NewTask, [name]: value })
    }
    return (
        <div className="ct-wrapper ut-wrapper">
            <div className="create-task">
                <p className="top-text">update</p>
                <p className="bottom-text">Task</p>
            </div>
            <div className="form-wrapper">
                <input type="text" name='message' value={NewTask.message} className="task-title" placeholder="Task Title" onChange={handleChange} />
                <div className="form-wrapper-2">
                    <input type="text" className="due-date" name="due_date" value={NewTask.due_date} placeholder="Due Date" onChange={handleChange} />
                    <select className="priority-level" value={NewTask.priority} name="priority" onChange={handleChange}>
                        <option value="" selected hidden>
                            Priority Level
                        </option>
                        <option value="1">Average</option>
                        <option value="2">Medium</option>

                        <option value="3">High</option>
                    </select>
                    <select className="assign-to" value={NewTask.assigned_to} name="assigned_to" onChange={handleChange}>
                        <option value="assign to" selected hidden>
                            Assign To
                        </option>
                        {users.map((user) => {
                            return (
                                <option value={user.id} key={user.id}>
                                    {user.name}{" "}
                                </option>
                            );
                        })}
                    </select>
                    <div className="update-btns">
                        <button onClick={(e) => updateTask(e)} className="create-btn">Update</button>
                        <button onClick={(e) => clearUpdating(e)} className="create-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
