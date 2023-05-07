import JoditEditor from "jodit-react";
import { useState,useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { API } from "./api";
export default function Profile() {
  const [content,setContent] = useState('');
  const editor = useRef(null);
  let navigate = useNavigate();
  const to = async (id) => {
    let path = `/${id}`;
    navigate(path);
  };

  const [text,setText] = useState(true)
  const [date,setDate] = useState('')
  const [detail,setDetail] = useState([])
  function edit_save(props) {
    const isDisabled = props.isDisabled;
    return (
      <>
        { isDisabled ? "Edit description" : "Save" }
      </>
    );
  }  

  function about(){
    fetch(`${API}/user/aboutme`, {
        method: 'POST',
        body: JSON.stringify({
          'About' : content
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
        .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
      }).catch(error => console.error('Error:', error)); 
  }

  function logout(){
    to('login')
    fetch(`${API}/logout`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
        })
        .then(function(response){ 
        return response.json()})
        .then(function(data)
        {console.log(data)
      }).catch(error => console.error('Error:', error)); 
  }

  useEffect(() => {
    fetch(`${API}/user`).then((res) =>
        res.json().then((data) => {
          console.log(data)
          if (data===false){to('login')}
          setDate(data['date'])
          setDetail(data['detail'])
          setContent(data['detail'][2])
          console.log(detail);
        })
    );
  },[]);  

  return (
    <>
      <body>
        
        <div class="d-flex flex-column justify-content-center mt-3">

          <div class="row user_pp_profile d-flex justify-content-center ">
            <div class="d-flex justify-content-center" >
              {detail&&detail[9]?
                <img src={detail[9]} width="200px" style={{"border-radius":"50%"}}></img>:
                <svg xmlns="http://www.w3.org/2000/svg" width="200px" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              }
            </div>
          </div>

          <div class="row d-flex justify-content-center mt-3">

            <div class="username d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3" >
                <span class="input-group-text profile_span" id="basic-addon1">Username</span>
                <input type="text" disabled class="form-control input_profile"  value={detail?detail[1]:""} aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>
            </div>

            <div class="user ID d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3">
                <span class="input-group-text profile_span" id="basic-addon1">User ID</span>
                <input type="text" disabled class="form-control input_profile" value={detail?detail[0]:""} aria-label="User ID" aria-describedby="basic-addon1"></input>
              </div>
            </div>

            <div class="joindate d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3">
                <span class="input-group-text profile_span" id="basic-addon1">Join Date</span>
                <input type="text" disabled class="form-control input_profile" value={detail?detail[3]:""} aria-label="User ID" aria-describedby="basic-addon1"></input>
              </div>
            </div>

            <div class="Reputation d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3">
                <span class="input-group-text profile_span" id="basic-addon1">Reputation</span>
                <input type="text" disabled class="form-control input_profile" value={detail?detail[6]:""} aria-label="Reputation" aria-describedby="basic-addon1"></input>
              </div>
            </div>

            <div class="Up Vote d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3">
                <span class="input-group-text profile_span" id="basic-addon1">Up Vote</span>
                <input type="text" disabled class="form-control input_profile" value={detail?detail[7]:""} aria-label="Up Vote" aria-describedby="basic-addon1"></input>
              </div>
            </div>

            <div class="Down Vote d-flex justify-content-center col-5" style={{"font-size": "35px"}}>
              <div class="input-group mb-3">
                  <span class="input-group-text profile_span" id="basic-addon1">Down Vote</span>
                  <input type="text" disabled class="form-control input_profile" value={detail?detail[8]:""} aria-label="Down Vote" aria-describedby="basic-addon1"></input>
              </div>
            </div>

          </div>

          <hr/>

          <div class="aboutme_row row d-flex justify-content-center">
            <div class="col-9 mb-3">
              <div class="d-flex justify-content-start ">
                <span class="d-flex justify-content-center input-group-text profile_span">About me</span>
                <div class="q_title">
                  <JoditEditor
                    config={{readonly:text}}
                    ref={editor}
                    value={content}
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newcontent=>{}}
                    disabled={text}
                    />
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-success" onClick={()=>{about();setText(Text => !Text)}}>
              {edit_save({isDisabled:text})}
            </button>
          </div>

          <hr/>

          <div class="settings_row row">
            <div class="d-flex flex-column justify-content-center"> 
              <div class="d-flex justify-content-center mb-3">
                <button type="button" class="btn btn-outline-danger" onClick={()=>logout()}>Logout</button>
              </div>
            </div>
          </div>

        </div>

      </body>
    </>
  )
}