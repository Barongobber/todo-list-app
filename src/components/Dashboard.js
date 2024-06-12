import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo } from '../features/todos/todosThunks';

const Dashboard = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
                        <button className="btn btn-primary">
                            <i className="fa fa-plus fa-sm"></i>&nbsp;Create Todo-List
                        </button>
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
                                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
                                    <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr>
                                    <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
                                    <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                    <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                    <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                                    <td class="py-4 px-6 border-b border-gray-200 truncate">janedoe@gmail.com</td>
                                    <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                                    <td class="py-4 px-6 border-b border-gray-200">
                                        <span class="bg-red-500 text-white py-1 px-2 rounded-full text-xs">Inactive</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </div>
  );
};

export default Dashboard;
