import { useState, useEffect } from "react";
import Axios from 'axios';
import NewPost from "./components/Post";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [listOfPosts, setListofPosts] = useState([]);
  const [like, setLike] = useState(0);

  const updateLikes = (id, like) => {
    const newLike = like + 1;

    Axios.put("http://localhost:4000/addLike", {newLike: newLike, id: id}).then(() => {
      setListofPosts(listOfPosts.map((val) => {
        return val._id === id ? {_id: id, name: val.name, postDescription: val.postDescription, like: newLike} : val
      }))
    });
  };

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
        {openModal && <NewPost closeModal={setOpenModal} postsList = {[listOfPosts, setListofPosts]} likeCount = {[like, setLike]}/>}
      <div className="posts" >
        {listOfPosts.map((val, index) => {
          return <div className="stickyNotes" key= {val._id}>  
            {console.log(val._id)}
            <p>{val.postDescription}</p>
            <h3>-{val.name}</h3>
            <div className="stickyNoteFooter">
            <span>{val.like}</span>
            <ThumbUpIcon className="thumbsUp" color="default" fontSize="small" 
            onClick= {() => {updateLikes(val._id, val.like)}}/>
            </div>
          </div>
      })}
      </div>
    </div>
  );
}

export default App;
