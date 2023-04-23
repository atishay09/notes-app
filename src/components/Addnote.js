import React, { useContext , useState } from 'react'
import contextvalue from '../context/notes/noteContext'


const Addnote = ({showAlert}) => {
    const [newNote, setnewNote] = useState({
        title:"",description:"",tag:""
    })
    const context = useContext(contextvalue);
    const {addNote} = context;

    const handleclick = (e)=>{
        e.preventDefault();
        addNote(newNote.title,newNote.description,newNote.tag)
        showAlert("Note Added Sucessfully",'success')
        setnewNote({title:"",description:"",tag:""})
    }

    const onChange = (e)=>{
        setnewNote({...newNote,[e.target.name]:e.target.value})
    }

  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength = {5}
              required
              value={newNote.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength = {5}
              required
              value={newNote.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={newNote.tag}
            />
          </div>
          
          <button disabled= {newNote.title.length<5 || newNote.description.length<5} type="submit" onClick={handleclick} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default Addnote;
