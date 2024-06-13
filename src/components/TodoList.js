import React, { useState } from 'react';
import { Button, Switch, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
    const [tasks, setTasks] = useState(['', '']);
    const [title, setTitle] = useState('');
    const [reminder, setReminder] = useState('');

    const handleAddTask = () => {
        setTasks([...tasks, '']);
    };

    const handleChangeTask = (index, event) => {
        const newTasks = [...tasks];
        newTasks[index] = event.target.value;
        setTasks(newTasks);
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-gray-800">Todo-List Info</h3>
                <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.href = '/generator'}
                >
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Create Todo-List
                </Button>
            </div>
            <div className="card shadow rounded-s-md">
                <div className="card-body p-[20px]">
                    <div className="mb-5">
                        <h2 className="text-2xl">Build your Todo-List</h2>
                            <div className="flex justify-between items-center my-3">
                            <TextField
                                variant="outlined"
                                placeholder="Insert your todo list title here"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                className="mr-3 !w-1/2"
                            />
                            <TextField
                                type="datetime-local"
                                variant="outlined"
                                value={reminder}
                                onChange={(e) => setReminder(e.target.value)}
                            />
                            <div className="flex items-center ml-3">
                                <FontAwesomeIcon icon={faBell} className="text-blue-600 text-2xl mr-2" />
                                <Switch color="primary" />
                            </div>
                        </div>
                        <hr />
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">No</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Milestone/Task</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {tasks.map((task, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <TextField
                                            variant="outlined"
                                            value={task}
                                            onChange={(e) => handleChangeTask(index, e)}
                                            fullWidth
                                            />
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleAddTask}
                                className="bg-red-500"
                            >
                                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                Task Row
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
