import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
export default function Q(v){

    const [user,setUser] = useState([]);

    const {value} = v;
    // console.log(value)
    let navigate = useNavigate();
    const to = async (id) => {
      let path = `/${id}`;
      navigate(path);
    }

    useEffect(() => {
        fetch(`/user/${value[0][1]}`).then((res) =>
            res.json().then((data) => {
            //   console.log(data)
              setUser(data[1])
              console.log(data[1]);
            })
        );
      },[value]);  

  return ( 
    <>
      <>
        <div class="col-12 d-flex justify-content-end py-2 px-4">
          <div class="question_box p-3">
              <div class="container">
                <div class="row mx-lg-n5">
                  <div class="vav col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 d-flex justify-content-center" >{value[0][3]} votes</div>
                </div>
              </div>
              <hr/>
              <a class="question" style={{"font-size": "larger", "font-weight": "bold","cursor":"pointer"}}  onClick={()=>{to(`question/${value[0][0]}`)}}>
                {value[0][4]}
              </a>
              <div class="answer" style={{" font-size": "larger","color": "rgb(88, 88, 88);" }}> 
                  <div dangerouslySetInnerHTML={{__html:value[0][5]}} />
              </div>
              <div class="row py-2 d-flex flex-row ">
                <div class="d-flex flex-row flex-wrap justify-content-start px-2" style={{"row-gap": "15px","column-gap":"4px"}}>
                  {value[1]?  Object.entries(value[1]).map(([key,val])=>
                    <div class="  justify-content-start">

                      <a class="num_button py-2 my-5 px-3" href={`/tag/${val}`} style={{"zIndex":"99"}}>
                        {val}
                      </a> 
                      </div>
                    )
                  :<></>}
                </div>
              </div>

              <div class="col-12 user_ppp d-flex justify-content-end">
                <div class="d-flex justify-content-center" >
                  {user&&user[9]?<img onClick={()=>to(`user/${user[0]}`)} src={user[9]} width="50" height="50" style={{"border-radius":"50%","cursor":"pointer"}}></img>:              
                    <svg onClick={()=>{if (user) to(`user/${user[0]}`)}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                  }
                </div>
              </div>

              <div class="col-12 user_ppp d-flex justify-content-end pt-2">
                <div class="d-flex justify-content-center">
                  <div style={{"color":"#6e6e73"}}>
                    {user?user[1]:"Anonymous"}
                  </div>
                </div>
              </div>

              <div class="col-12 user_ppp d-flex justify-content-end pt-2">
                <div class="d-flex justify-content-center">
                  <div style={{"color":"#6e6e73"}}>
                    {value[0][2]}
                  </div>
                </div>
              </div>
              
          </div>  
        </div>  
      </>
    </>
  );
}