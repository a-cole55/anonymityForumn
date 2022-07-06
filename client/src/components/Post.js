import { useState } from "react";
import Axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

export default function NewPost({ closeModal, postsList, likeCount, newPostId}){
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const like = likeCount[0]

    function handleChange(event){
      setDescription(event.target.value)
    }

    const clearInput = (e) => {
        e.preventDefault();
        // empty inputs
        setName("");
        setDescription("")
    };


    const addPost = async () => {
        
      await Axios.post("http://localhost:4000/addPost", {
        name: name, 
        description: description,
        like: like,
      }).then((response)=> {
        postsList[1]([...postsList[0], { _id: response.data._id, name: name, postDescription: description, like: like}]);
        newPostId(response.data._id)
      })
      .catch(() => {
        console.error()
      });
      await closeModal();
    };

    return(
        <div className="modalBG">
        <div className="modalContainer">
        <div className="closeBtn">
            <CloseIcon  className="CloseIcon" onClick={() => closeModal(false)}/>
        </div>
        <div className="header">
            <h2 className="title">Create Post</h2>
        </div>
        <div className="addPost">
          <textarea className="description"
            type= "text"
            value={description}
            placeholder="Write your text here" 
            onChange={handleChange}
            />
          <input 
            type= "text" 
            value={name}
            placeholder="Screen Name **Not Required**" 
            onChange={(event) => {
              setName(event.target.value);
            }}
            />
      </div>
      <div className="buttons">
        <button type="submit" disabled={Boolean(!description)} onClick={addPost}>Submit</button>
        <button type="button" onClick={clearInput}>Clear</button>
      </div>
    </div>
    </div>
    )
}