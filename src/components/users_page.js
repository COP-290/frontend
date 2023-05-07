import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default function User() {
    const [data,setdata] = useState('/score');
    const [page, setPage] = useState(1)
    const [number, setNumber] = useState(3100)
    useEffect(() => {
        fetch(`/users/${page}`).then((res) =>
            res.json().then((data) => {
                setdata(data)
            })
        );
    }, [page]);
    let navigate = useNavigate();
    const to = async (id) => {
      let path = `/${id}`;
      navigate(path);    
    }
    return(
        <>
            <body>
                <div class="page_title p-1 d-flex justify-content-center mt-3">
                    Users 
                </div>

                <div class="row user_row d-flex flex row m-3">
                    {data?
                    Object.entries(data).map(([key,value])=>
                        <div class="tag_col col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center" onClick={()=>to(`user/${value[0]}`)}>
                            <div class="user_box p-3">
                                <div class="user_pic d-flex justify-content-center" style={{"font-family": "'Roboto Mono', monospace"}}>
                                    <div>
                                        {value[9]?<img src={value[9]} width="60" height="60" style={{"border-radius":"50%"}}></img>:
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>}
                                    </div> 
                                </div>
                                <div class="username d-flex justify-content-center" style={{" color": "rgb(88, 88, 88)"}} > 
                                    {value[1]}
                                </div>
                                <div class="user_reputation d-flex justify-content-center ">
                                    {value[6]}
                                </div>
                            </div>
                        </div>     
                    ):<></>}
                </div>
                
                <div class="pagination mt-2 col-12 d-flex justify-content-center" >
                    <PaginationControl
                        page={page}
                        between={3}
                        total={number?number:0}
                        limit={30}
                        changePage={(page) => {
                        setPage(page); 
                        console.log(page)
                        }}
                        ellipsis={1}
                    />
                </div>     
            </body>
        </>
    );
}