import { useEffect,useState } from "react";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useNavigate, useParams } from "react-router-dom";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Q from "./q";
import { API } from "./api";
export default function Question() {

  const [data,setdata] = useState(null);
  const [page, setPage] = useState(1)
  const [sortby,setSortby] = useState('/score');
  const [number, setNumber] = useState(0)
  const { id } = useParams(); 
  console.log(id);

  let navigate = useNavigate();
  const to = async (id) => {
    let path = `/${id}`;
    navigate(path);
  };

  useEffect(() => {
    hljs.highlightAll();
  });

  function newq(){
    fetch(`${API}/user`).then((res) =>
        res.json().then((dat) => {
          console.log(dat)
          if (dat===false){to('login')}
          else {to('new_question')}
        })
    );
  }

  useEffect(() => {
    console.log(sortby)
    fetch(id?`${API}/${encodeURIComponent(id.trim())}/${page}${sortby}/question`:`${API}${sortby}/question/${page}`).then((res) =>
        res.json().then((data) => {
            console.log(data);
            setdata(data)
        })
    );
  }, 
  [page,sortby]
  );

useEffect(() => {
    fetch(id?`${API}/${encodeURIComponent(id.trim())}/question/number`:`${API}/question/number`).then((res) =>
        res.json().then((data) => {
            console.log(data);
            setNumber(parseInt(data))
        })
    );
}, []); 

    return (
      <>
        <body style={{"font-weight":"600 !important"}}>

          <div class="row">
            <div class="page_title p-1 d-flex justify-content-center">
              {id?`${id}`:"Questions"}
            </div>
            <div class ="col-12 px-4 d-flex justify-content-end">
              <button type="button" class="btn btn-success ask_btn"  onClick={()=>newq()}>
                <a class=" ask_btn">Ask question</a>
              </button>
            </div>
            <div class="col-12 px-3">
              <div class="dropdown d-flex justify-content-center col-12 px-4 ">
                <button  class="sorting_box btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sorting
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>setSortby('/time')}>Newest</a></li>
                  <li><a class="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>setSortby('/score')}>Score</a></li>
                </ul>
              </div>
            </div>
            {data?  Object.entries(data).map(([key,value])=>
            <><Q value={value}/></>
            )
            :<></>}
          </div>
          <div class="pagination d-flex justify-content-center" >
            <PaginationControl
              page={page}
              between={3}
              total={number?number:0}
              limit={3}
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