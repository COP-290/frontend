import JoditEditor from "jodit-react";
import { useRef, useState, useEffect, useMemo } from "react";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { API } from "./api";
export default function New_ques() {

  const [tags, setTags] = useState([])
  const [taglist, setTaglist] = useState([])
  const [title, setTitle] = useState([])
  const [content, setContent] = useState('');

  let navigate = useNavigate();
  const to = async (id) => {
    let path = `/${id}`;
    navigate(path);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    api(title, content, taglist)

  }

  function api(Title, Body, Tags) {
    console.log(Title, Body, Tags)
    fetch(`${API}/ask/question`, {
      method: 'POST',
      body: JSON.stringify({
        'Body': Body,
        'Title': Title,
        'Tag': Tags
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data); to(`question/${data}`)
      }).catch(error => console.error('Error:', error));

  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "title") { setTitle(value); }


  }

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

  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  // console.log(colourOptions)
  const editor = useRef(null);
  return (
    <>
      <body>
        <div class="row">
          <div class="page_title p-1 d-flex justify-content-center">
            Ask any Questions
          </div>
        </div>
        <form class="row mx-5 my-4" onSubmit={onSubmit}>
          <div class="title col-12" style={{ "font-size": "35px" }}>
            <div class="mb-3  d-flex flex-row" >
              <span class="d-flex justify-content-center input-group-text new_question_span" id="basic-addon1">Title</span>
              <input required type="text" class="form-control q_title" placeholder="Enter title.." aria-label="Title" aria-describedby="basic-addon1" id="title" onChange={(e) => handleInputChange(e)} ></input>
            </div>
          </div>
          <div class="tag col-12 d-flex flex-row mb-3" style={{ "zIndex": "99" }}>
            <span class="d-flex justify-content-center input-group-text new_question_span" id="basic-addon1">Tag</span>
            <div class="q_title">
              {tags ? <Select
                isMulti
                options={tags}
                required
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={newcontent => { console.log(newcontent); setTaglist(newcontent) }}
              />:<></>}
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="d-flex justify-content-start ">
              <span class="d-flex justify-content-center input-group-text new_question_span">Body</span>
              <div class="q_title">
                <JoditEditor
                  ref={editor}
                  value={content}
                  onBlur={newContent => setContent(newContent)}
                  onChange={newcontent => { }}
                />
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center ">
            <div class="col-4 d-flex justify-content-center column-gap-1">
              <div class="px-1">
                <button type="submit" class="p-1 btn btn-outline-primary">Submit</button>
              </div>
              <div class="px-1">
                <button type="button" class="p-1 btn btn-outline-danger">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </body>
    </>
  );
}