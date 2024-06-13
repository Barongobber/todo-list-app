import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from '../features/todos/todosThunks';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { items: todos } = state.todos;
    const { token } = state.auth;
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos(token));
  }, [dispatch, token]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await dispatch(addTodo({ title: newTodo }));
    setNewTodo('');
  };

  return (
    <div className="container mx-auto">
        <div className="row px-5 py-2">
            <div className="flex justify-between items-center">
            <h3 className="text-dark">Todo List</h3>
            <div className="hidden sm:inline-block">
                <form id="import_form" encType="multipart/form-data">
                    <Button variant="contained" LinkComponent={Link} to={"/create-todo"}>Create Todo List</Button>
                </form>
            </div>
            </div>
        </div>
        <div className="card-header py-3">
            <p className="text-primary font-bold m-0">Todo-List Info</p>
        </div>
        <div class="shadow-lg rounded-lg overflow-hidden mx-0">
            <table class="w-full table-fixed">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Title</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Reminder Time</th>
                        <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    { todos.map((todo) => {
                        const {
                            title,
                            reminder,
                            is_sent: isSent
                        } = todo;

                        const status = isSent ? (<span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Sent</span>) :
                            (<span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Not Send</span>);

                        return (
                            <tr>
                                <td class="py-4 px-6 border-b border-gray-200">{title}</td>
                                <td class="py-4 px-6 border-b border-gray-200 truncate">{reminder}</td>
                                <td class="py-4 px-6 border-b border-gray-200">
                                    {status}
                                </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Dashboard;
