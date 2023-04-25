import React, { useContext, useEffect, useRef, useState } from 'react'
import contextvalue from '../context/notes/noteContext'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom'

const Notes = ({ showAlert }) => {

  const navigate = useNavigate()
  const context = useContext(contextvalue);
  const { notes, getNotes, editNote } = context;

  const [newNote, setnewNote] = useState({
    title: "", description: "", tag: "", _id: ""
  })

  const ref = useRef(null)
  const refclose = useRef(null)

  // const autologout=()=>{
  //     setTimeout(() => {
  //       localStorage.removeItem('token')
  //       navigate('/login')
  //     }, 10000);
  // }
  useEffect(() => {

    if (localStorage.getItem('token')) {
      getNotes()
      // autologout();
    }
    else {
      navigate('/login')
    }

    // eslint-disable-next-line
  }, [])

  const updateNote = (currNote) => {
    ref.current.click()
    setnewNote(currNote)
  }

  const handleclick = (e) => {
    refclose.current.click();
    editNote(newNote._id, newNote.title, newNote.description, newNote.tag)
    showAlert("Note Updated Sucessfully", 'success')
  }

  const onChange = (e) => {
    setnewNote({ ...newNote, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Addnote showAlert={showAlert} />

      <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ "display": "none" }}>
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

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
                    value={newNote.title}
                    required
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
                    value={newNote.description}
                    required
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
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button"  onClick={handleclick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2 className="container d-flex justify-content-center">Your Note</h2>
        <div className="container d-flex my-3 justify-content-center">
          {notes.length === 0 && 'No Notes to display.'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} showAlert={showAlert} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes