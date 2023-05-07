import React, { useState, useEffect } from "react";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { API } from "./api";
export default function Tag() {
    
    const [tags,setTags] = useState([])
    const [page, setPage] = useState(1)
    const [number, setNumber] = useState(0)
    const [data, setdata] = useState(null);
    
    useEffect(() => {
        fetch(`${API}/tag/list`).then((res) =>
            res.json().then((data) => {
                const p = Object.values(data)
                const q = JSON.stringify(p)
                const s = JSON.parse(q)
                setTags(s)
              })
              );
            }, []); 

    let navigate = useNavigate();
    const to = async (id) => {
      let path = `/${id}`;
      navigate(path);
    };

    useEffect(() => {
        fetch(`${API}/tag/6/${page}`).then((res) =>
            res.json().then((data) => {
                console.log(data);
                setdata(data)
            })
        );
    }, [page]);

    useEffect(() => {
        fetch(`${API}/tag/number`).then((res) =>
            res.json().then((data) => {
                console.log(data);
                setNumber(parseInt(data))
            })
        );
    }, []);  

    return (
        <>
            <body>
                <div class="page_title p-1 d-flex justify-content-center">
                    Tags 
                </div>
                <div class="p-2 d-flex justify-content-center" style={{"color":"6e6e73 !important", "font-size":"xx-large;"}}>
                    A tag is a label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                </div>
                <div class="d-flex justify-content-center">
                    <div class="col-7 px-3 py-2">
                        <div style={{ "border-radius":"7px"}}>
                        {tags?
                            <Select
                                options={tags}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={newcontent=>{to(`tag/${newcontent.value}`)}}
                            />:<></>}  
                        </div>
                    </div>
                </div>    
                <div class="container">
                    <div class="row px-4">
                        {data?
                            Object.entries(data).map(([key,value])=>
                        <div class="tag_col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 p-2">
                            <div class="tag_box_tag p-3" onClick={()=>{to(`tag/${encodeURIComponent(value[1].trim())}`)}}>
                                <div class="tag_title" style={{"font-family": "'Roboto Mono', monospace"}}>
                                    <div >{value[1]}</div> 
                                    <a href="{{ url_for('display_question', tag=post) }}"/>
                                </div>
                                <div class="tag_body" style={{" color": "rgb(88, 88, 88)"}} > 
                                    {value[1]} is a multi-paradigm, dynamically typed, multi-purpose programming language.
                                </div>
                                <div class="tag_questions d-flex justify-content-end ">
                                    {value[0]} questions
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
                            limit={6}
                            changePage={(page) => {
                            setPage(page); 
                            console.log(page)
                            }}
                            ellipsis={1}
                        />
                    </div>
                </div>
            </body>
        </>
    );
}