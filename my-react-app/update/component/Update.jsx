import { useState, useEffect } from 'react';
import axios from 'axios';
import './Update.css'
import Modal from './Modal';

function Update() {

    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/users/')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    const openModal = (id, name, email) => {
        setSelectedUser({ id, name, email });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} user={selectedUser} />
            <h1>Update Users</h1>
            <ul>
                {Array.isArray(users) && users.map(user => (
                    <li key={user.id}>
                        <button onClick={() => openModal(user.id, user.name, user.email)}>{user.id} - {user.name} - {user.email}</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Update;