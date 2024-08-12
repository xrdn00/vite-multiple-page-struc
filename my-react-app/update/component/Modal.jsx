
import './modal.css'
import { useState } from 'react';
import axios from 'axios';

function Modal({ isOpen, closeModal, user }) {
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    
    const handleUpdate = async () => {
        if (user) {
            try {
                const response = await axios.put(`http://localhost:3000/updateUser/`, {
                    id: user.id,
                    name,
                    email
                });

                if (response.status === 200) {
                    alert('User updated successfully');
                    closeModal();
                } else {
                    alert('Error updating user');
                }
            } catch (error) {
                alert('Error updating user');
            }
        }
    };


    return (
        <div id="modal" className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <br />
                {user ? (
                    <>
                        <p>Selected User ID: {user.id}</p>
                        <input
                            type="text"
                            name = "name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={user.name}
                            
                        />
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={user.email}
                            
                        />
                        <br />
                        <button onClick={handleUpdate}>Update</button>
                    </>
                ) : (
                    <p>No user selected</p>
                )}
            </div>
        </div>

    );

}

export default Modal;