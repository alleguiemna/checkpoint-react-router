import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({handleAdd}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);
  const [dateDeSortie, setDateDeSortie] = useState(2021);
  const handleSubmit = (e) =>{
      e.preventDefault()
      const newMovie={
            id:Math.random(),
            title,
            description,
            posterUrl:url,
            rating,
            dateDeSortie,
      }
      if(title && description && url && rating && dateDeSortie){
        handleAdd(newMovie)
        setTitle("")
        setUrl("")
        setRating()
        setDescription("")
        setDateDeSortie()
        handleClose()
      }
      else{
          alert("find all the fields")
      }
  };
  return (
    <div
      style={{
        backgroundColor: "#111611",
        paddingLeft: "270px",
        paddingBottom: "20px",
        paddingTop: "40px",
      }}
    >
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Tilte:
            <input
              type="text"
              className="form-control"
              placeholder="Enter title movie"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="Enter description movie"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
            Image:
            <input
              type="url"
              className="form-control"
              placeholder="Enter movie poster "
              onChange={e => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="Enter movie title"
              onChange={e => setRating(e.target.value)}
              value={rating}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="Enter movie date"
              onChange={e => setDateDeSortie(e.target.value)}
              value={dateDeSortie}
            />
            <Button variant="secondary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
