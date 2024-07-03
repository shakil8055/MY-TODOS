import React from 'react'
import { useParams } from 'react-router-dom';


function Edit({ data, setData, title, setTitle, description, setDescription, setEditCardId }) {
    const { id } = useParams();

    const handleEditSubmit = (updatedTitle, updatedDescription) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    title: updatedTitle,
                    description: updatedDescription
                };
            }
            return item;
        });
        setData(updatedData);
        setEditCardId(null);
        resetEditForm();
    };
    return (
        <>
            
                        <div className="mb-3 ">
                            <h2 >EDIT TODO</h2>
                            <label style={{ display: 'block', marginBottom: 5 }}>Name:</label>
                            <input
                             type="text"
                             value={title}
                             placeholder="Edit title"
                             onChange={(e) => setTitle(e.target.value)}   
                             style={{ width: '100%', padding: '8px', marginBottom: 10 }}
                             />
                        </div>
                        <div className="mb-3">
                            <label style={{ display: 'block', marginBottom: 5 }}>Description:</label>
                            <input
                             type="text"  
                             value={description}
                             placeholder=" description"
                            onChange={(e) => setDescription(e.target.value)} 
                            style={{ width: '100%', padding: '8px', marginBottom: 10 }} 
                            ></input>
                        </div>
                        <button onClick={handleEditSubmit} style={{ padding: '8px', margin: '10px 0', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>Save Changes</button>
                    
        </>
    )
}

export default Edit