import React,{useState} from "react";

export const CreateTask = (usersList) => {
  const users = Object.values(usersList);
  const [NewTask, setNewTask] = useState({
    "message":'',
    "due_date":'',
    "priority":'',
    "assigned_to":'',

  })

  function createTask(e) {
    var myHeaders = new Headers();
    myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

    var formdata = new FormData();
    formdata.append("message", NewTask.message);
    formdata.append("due_date", NewTask.due_date);
    formdata.append("priority", NewTask.priority);
    formdata.append("assigned_to", NewTask.assigned_to);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://devza.com/tests/tasks/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

function handleChange(e){
    const { name, value } = e.target;
    setNewTask({...NewTask,[name]:value})
}
  return (
    <div className="ct-wrapper">
      <div className="create-task">
        <p className="top-text">Create</p>
        <p className="bottom-text">Task</p>
      </div>
      <div className="form-wrapper">
        <input type="text" name='message' value={NewTask.message} className="task-title" placeholder="Task Title"  onChange={handleChange} />
        <div className="form-wrapper-2">
          <input type="text" className="due-date" name="due_date" value={NewTask.due_date} placeholder="Due Date" onChange={handleChange} />

          <select className="priority-level" value={NewTask.priority} name="priority" onChange={handleChange}>
            <option value="priority level" selected hidden>
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
          <button onClick={(e)=> createTask(e)} className="create-btn">CREATE</button>
        </div>
      </div>
    </div>
  );
};
