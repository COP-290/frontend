import { useEffect, useState } from "react";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { API } from "./api";
export default function Search() {

  const [data, setdata] = useState(null);
  const [page, setPage] = useState(1)
  const [number, setNumber] = useState(0)
  const [taglist, setTaglist] = useState({})
  const [loading, setLoading] = useState(true)
  const location = useLocation();
  console.log(loading);

  let navigate = useNavigate();
  const to = async (id) => {
    let path = `/${id}`;
    navigate(path);
  };

  useEffect(() => {
    hljs.highlightAll();
  });

  useEffect(() => {
    fetch(`${API}/question/number`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setNumber(parseInt(data))
      })
    );
  }, []);

  async function callml() {
    await fetch(`${API}/ml/${page}/${location.state.query}`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setTaglist(data['lst'])
        setdata(data['q'])
      })
    );
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true);
    callml()
  }, [location.state.query, page]);

  return (
    <>
      <body style={{ "font-weight": "600 !important" }}>
        <div class="row">
          <div class="search_title p-1 d-flex justify-content-center">
            <inst5>Search Results for : <inst4>"{location.state.query}"</inst4></inst5>
          </div>
          {loading ? <center class="py-5"><img src="https://i.stack.imgur.com/hzk6C.gif" /></center> :
            <>
              <div class="row py-2 d-flex flex-row justify-content-center">
                {data === 'false' ? "No Results! Please try a longer search query" : "Tags Matched:"}
                <div class="d-flex flex-row flex-wrap justify-content-center px-2 pt-3" style={{ "row-gap": "15px", "column-gap": "4px" }}>
                  {taglist ? Object.entries(taglist).map(([key, val]) =>
                    <div class="  justify-content-start">
                      <a class="num_button_search py-2 my-5 px-3" style={{ "border": "2px solid black !important", "zIndex": "99" }} href={`/tag/${val}`}>
                        {val}
                      </a>
                    </div>
                  )
                    : <></>}
                </div>
              </div>
              <div class="col-12 px-4 d-flex justify-content-end">
                <button type="button" class="btn btn-success ask_btn">
                  <a class=" ask_btn" href="/new_question">Ask question</a>
                </button>
              </div>
              {(data != "false") ? Object.entries(data).map(([key, value]) =>
                <div class="col-12 d-flex justify-content-end py-2 px-4">
                  <div class="question_box p-3">
                    <div class="container">
                      <div class="row mx-lg-n5">
                        <div class="vav col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 d-flex justify-content-center" >{value[0][3]} votes</div>
                      </div>
                    </div>
                    <hr />
                    <a class="question" style={{ "font-size": "larger", "font-weight": "bold", "cursor": "pointer" }} onClick={() => { to(`question/${value[0][0]}`) }}>
                      {value[0][4]}
                    </a>
                    <div class="answer" style={{ " font-size": "larger", "color": "rgb(88, 88, 88);" }}>
                      <div dangerouslySetInnerHTML={{ __html: value[0][5] }} />
                    </div>
                    <div class="row py-2 d-flex flex-row ">
                      <div class="d-flex flex-row flex-wrap justify-content-start px-2" style={{ "row-gap": "15px", "column-gap": "4px" }}>
                        {value[1] ? Object.entries(value[1]).map(([key, val]) =>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${val}`} style={{ "zIndex": "99" }}>
                              {val}
                            </a>
                          </div>
                        )
                          : <></>}
                      </div>
                    </div>
                    <div class="col-12 user_ppp d-flex justify-content-end">
                      <div class="d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                      </div>
                    </div>
                    <div class="col-12 user_ppp d-flex justify-content-end pt-2">
                      <div class="d-flex justify-content-center">
                        <div style={{ "color": "#6e6e73" }}>
                          {value[0][2]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
                : <></>}
              {data === 'false' ? <></> :
                <div class="pagination d-flex justify-content-center" >
                  <PaginationControl
                    page={page}
                    between={3}
                    total={number ? number : 0}
                    limit={3}
                    changePage={(page) => {
                      setPage(page);
                      console.log(page)
                    }}
                    ellipsis={1}
                  />
                </div>}
            </>}
        </div>
      </body>
    </>
  );
}