import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import MyImage from '../assets/askq.jpeg'

export default function Navbar() {
  const [quer,setQuer] = useState(null);
  const [image,setImage] = useState('');
  let navigate = useNavigate();
  const to = async (id) => {
    let path = `/${id}`;
    navigate(path);
  };

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "quer"){setQuer(value);}
    console.log(quer)   
} 

  function searc(){
      let path = `/search`;
      navigate(path,{state:{query:quer}});
  }

  const onSubmit = async (event) => {
    // prevent redirect
    event.preventDefault();
    searc();
  }

    function redirect(){
      fetch('/checkuser').then((res) =>
          res.json().then((data) => {
              console.log(data);
              if(data===true){
                to('profile')
              }
              else{
                to('signup')
              }
          })
      );
    }

    useEffect(() => {

      fetch('/user').then((res) =>
      res.json().then((dat) => {
        if (dat){setImage(dat['detail'][9])}
      })
    );
  }, 
    []
  );
  return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid ms-3 d-flex justify-content-between" >
              <a class="navbar-brand site_icon ps-5"  href="/" style={{"fontSize":"50px"}}>
                <img src={MyImage} height="50px"></img>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item d-flex justify-content-center">
                    <a class="nav-link px-2 mx-1 d-flex justify-content-center" aria-current="page" href="/about">About</a>
                  </li>
                  <li class="nav-item ms-3 d-flex justify-content-center">
                    <a class="nav-link px-2 mx-1 d-flex justify-content-center" href="/tag">Tags</a>
                  </li>
                  <li class="nav-item mx-3 d-flex justify-content-center">
                    <a class="nav-link px-2 mx-1 d-flex justify-content-center" href="/question">Questions</a>
                  </li>
                  <li class="nav-item mx-1 d-flex justify-content-center">
                    <a class="nav-link px-2 mx-1 d-flex justify-content-center" href="/user">Users</a>
                  </li>
                </ul> 
                <form onSubmit={onSubmit} class="d-flex mx-2 mb-3">
                  <input id="quer" class="form-control nav_search_box mt-3 me-2" type="search" placeholder="Search..." aria-label="Search" onChange={(e) => handleInputChange(e)}></input>
                  <button class="btn btn-success mt-3" >Search</button>
                </form>
                <div class="col-xl-1 col-lg-1 col-md-12 user_ppp d-flex justify-content-center " >
                  <div class="d-flex justify-content-center" >
                    {image?<img src={image} onClick={()=>{redirect()}}  width='50' height='50' style={{"border-radius":"50%","cursor":"pointer"}}></img>:                  
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" onClick={()=>{redirect()}} >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>}
                  </div>
                </div>
              </div>
            </div>
        </nav>
      </>
  );
}