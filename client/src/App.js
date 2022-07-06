import { useState, useEffect } from "react";
import Axios from 'axios';
import NewPost from "./components/Post";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [listOfPosts, setListofPosts] = useState([]);
  const [like, setLike] = useState(0);
  const [newPostId, setNewPostId] = useState("");

  const updateLikes = (id, like) => {
    const newLike = like + 1;

    Axios.put("http://localhost:4000/addLike", {newLike: newLike, id: id}).then(() => {
      setListofPosts(listOfPosts.map((val) => {
        return val._id === id ? {_id: id, name: val.name, postDescription: val.postDescription, like: newLike} : val
      }))
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`).then(() => {
      setListofPosts(
        listOfPosts.filter((val) => {
          return val._id !== id;
        })
      )
    })
  }

  useEffect(() => {
    Axios.get("http://localhost:4000/read", {
    }).then((response)=> {
      setListofPosts(response.data)
      console.log(response.data)
    })
    .catch(() => {
      console.error()
    });
}, []);

    return (
        <div className="App">
          <h1>Anonymity</h1>
          <div>
            <button 
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}>
              New Post</button>
          </div>
        {openModal && <NewPost closeModal={setOpenModal} postsList = {[listOfPosts, setListofPosts]} likeCount = {[like, setLike]} newPostId = {setNewPostId}/>}
      <div className="posts" >
        {listOfPosts.map((val, index) => {
          return <div className="stickyNotes" key= {val._id}>  
            {console.log(val._id)}
            <p>{val.postDescription}</p>
            <h3>-{val.name}</h3>
            <div className="stickyNoteFooter">
            {/* display trash button to delete users current post only by tracking id*/}
            {val._id === newPostId && <DeleteIcon className="actions" onClick= {() => {deletePost(val._id)}}/>}
            <div>
              <span>{val.like}</span>
              <ThumbUpIcon className="actions" color="default" fontSize="small" 
              onClick= {() => {updateLikes(val._id, val.like)}}/>
            </div>
            </div>
          </div>
      })}
      </div>
    </div>
  );
}

export default App;
