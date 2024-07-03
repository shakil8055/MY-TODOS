import React, { useState } from 'react'
import Edit from './Edit'

function Cards({ data, setData }) {
    const [editCardId, setEditCardId] = useState(null);
    const handleToggle = (id, newStatus) => {
    const index = data.findIndex(item => item.id === id)
        if (index !== -1) {
            const newData = [...data]
            newData[index].status = newStatus
            setData(newData);
        }
    }

    const handleDelete = (id) => {
        const editedIndex = data.findIndex(item => item.id === id);
        if (editedIndex !== -1) {
            data.splice(editedIndex, 1)
            setData([...data])
        }else {
            alert("Invalid Id")
        }
    }
    
    const handleEditClick = (id) => {
        setEditCardId(id);
    };




    return (

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {data.map((e, i) => (
                <div className="col mb-4" key={e.id}>
                    <div className="card" style={{ width: '18rem', fontWeight: 500, margin: 10 }}>
                        <div className="card-body" >
                            <h5 className="card-title">Name:{e.title}</h5>
                            <p className="card-text">Description: {e.description}</p>

                            <div className="btn-group">
                                Status: &nbsp;
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {e.status === 'Completed' ? 'Completed' : 'Not Completed'}
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><a className="dropdown-item" href="#" onClick={() => handleToggle(e.id, "Completed")}>Completed</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => handleToggle(e.id, "Not Completed")}>Not completed</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="d-flex justify-content-end w-auto">
                            <div >
                                <button className="btn btn-success btn-sm w-auto" type="button" onClick={() => handleEditClick(e.id)} >Edit</button>
                                <button className="btn btn-danger btn-sm w-auto" type="button" onClick={() => handleDelete(e.id)} >Delete</button>
                            </div>
                        </div>
                    </div>
                    

                    {editCardId === e.id && (
                        <Edit
                            data={data}
                            setData={setData}
                            title={e.title}
                            setTitle={(title) => {
                                const newData = [...data];
                                newData[i].title = title;
                                setData(newData);
                            }}
                            description={e.description}
                            setDescription={(description) => {
                                const newData = [...data];
                                newData[i].description = description;
                                setData(newData);
                            }}
                            setEditCardId={setEditCardId}
                            resetEditForm={() => setEditCardId(null)}
                        />
                       
                    )}

                </div>
            ))}



        </div>

    )

}

export default Cards