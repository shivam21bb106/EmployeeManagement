import React from "react";
import Header from "../Common/Header";
import TaskListNumbers from "../Common/TaskListNumbers";
import TaskList from "../TaskList/TaskList";


const Employee = () => {





    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    )
}
export default Employee