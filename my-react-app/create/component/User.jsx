import React, { useState } from 'react';
import axios from 'axios';


function User() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/submit/', { name, email });

            if (response.status === 200) {
                console.log('User created successfully waswasa');
                window.location.href = '/testsubmit/';

            }
            else {
                console.error('Error creating user');
            }
        } catch (error) {
            if (error.response.status === 500){
                alert("Email Already Exist");
            }
            else{
                console.error(error);
            }
            
        }
    };

    return (
        <form class="w-full max-w-sm" onSubmit={handleSubmit}>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe"
                        value={name} // Bind the value to the state
                        onChange={(e) => setName(e.target.value)} // Update the state on input change
                        name="name" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Password
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="janedoe@yahoo.com"
                        value={email} // Bind the value to the state
                        onChange={(e) => setEmail(e.target.value)} // Update the state on input change
                        name="email" />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    );
}

export default User;