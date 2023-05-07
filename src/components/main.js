export default function Main() {
  return (
    <>
      <body class="main_fonts px-5 ">

        <div class="d-flex flex-row row man_row d-flex justify-content-center">
          <div class="d-flex flex-column justify-content-start me-4 col-xl-4 col-lg-4 col-md-7 col-sm-9 col-12 main_row mt-3">
            <div class="row mx-3 col-12 d-flex justify-content-center">
              <div class="main_lines p-4 ">
                <inst1><inst>Problem ?</inst> Not able to find the solution ?</inst1>
              </div>
            </div>
            <div class="row  mx-3 col-12 mt-1 d-flex justify-content-center">
              <div class="main_lines p-4 ">
                <inst1>Are you spending too much <inst>time</inst> on other websites trying to find <inst>solution ?</inst></inst1>
              </div>
            </div>
            <div class="row  mx-3 col-12 mt-1 d-flex justify-content-center">
              <div class="main_lines p-4 mb-3">
                <inst1>To cope with these type of problems here we comewith </inst1>
                <center>
                  <div class="navbar-brand ps-2 d-flex justify-content-center">askQ.com</div>
                </center>
              </div>
            </div>
          </div>
          <div id="carouselExampleDark" class="carousel carousel-dark slide  d-felx justify-content-center col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 " data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner col-12">
              <div class="carousel-item active" data-bs-interval="5000">
                <>
                  <div class="col-12 d-flex justify-content-center py-2 px-4">
                    <div class="question_box_main p-3">

                      <div class="container">
                        <div class="row mx-lg-n5">
                          <div class="vav col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 d-flex justify-content-center" >26 votes</div>
                        </div>
                      </div>

                      <hr />

                      <a class="question" style={{ "font-size": "larger", "font-weight": "bold", "cursor": "pointer" }} href="/question/90">
                        Good branching and merging tutorials for TortoiseSVN?
                      </a>
                      <div class="answer" style={{ " font-size": "larger", "color": "rgb(88, 88, 88);" }}>

                        <div dangerouslySetInnerHTML={{ __html: String.raw`<p>Are there any really good tutorials explaining <a href="http://svnbook.red-bean.com/en/1.8/svn.branchmerge.html" rel="nofollow">branching and merging</a> with Apache Subversion? </p><p>All the better if it's specific to TortoiseSVN client.</p>` }} />
                      </div>

                      <div class="row py-2 d-flex flex-row ">
                        <div class="d-flex flex-row flex-wrap justify-content-start px-2" style={{ "row-gap": "15px", "column-gap": "4px" }}>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"svn"}`} style={{ "zIndex": "99" }}>
                              svn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"tortoisesvn"}`} style={{ "zIndex": "99" }}>
                              tortoisesvn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"branch"}`} style={{ "zIndex": "99" }}>
                              branch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div class="carousel-item" data-bs-interval="5000">
                <>
                  <div class="col-12 d-flex justify-content-center py-2 px-4">
                    <div class="question_box_main p-3">
                      <div class="container">
                        <div class="row mx-lg-n5">
                          <div class="vav col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 d-flex justify-content-center" >21 votes</div>
                        </div>
                      </div>

                      <hr />

                      <a class="question" style={{ "font-size": "larger", "font-weight": "bold", "cursor": "pointer" }} href="/question/120">
                        ASP.NET Site Maps
                      </a>

                      <div class="answer" style={{ " font-size": "larger", "color": "rgb(88, 88, 88);" }}>
                        <div dangerouslySetInnerHTML={{ __html: String.raw`<p>Has anyone got experience creating <strong>SQL-based ASP.NET</strong> site-map providers?</p><p>I've got the default XML file <code>web.sitemap</code> working properly with my Menu and <strong>SiteMapPath</strong> controls, but I'll need a way for the users of my site to create and modify pages dynamically.</p><p>I need to tie page viewing permissions into the standard <code>ASP.NET</code> membership system as well.</p>` }} />
                      </div>
                      <div class="row py-2 d-flex flex-row ">
                        <div class="d-flex flex-row flex-wrap justify-content-start px-2" style={{ "row-gap": "15px", "column-gap": "4px" }}>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"svn"}`} style={{ "zIndex": "99" }}>
                              svn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"tortoisesvn"}`} style={{ "zIndex": "99" }}>
                              tortoisesvn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"branch"}`} style={{ "zIndex": "99" }}>
                              branch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div class="carousel-item" data-bs-interval="5000">
                <>
                  <div class="col-12 d-flex justify-content-center py-2 px-4">
                    <div class="question_box_main p-3">
                      <div class="container">
                        <div class="row mx-lg-n5">
                          <div class="vav col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 d-flex justify-content-center" >28 votes</div>
                        </div>
                      </div>

                      <hr />

                      <a class="question" style={{ "font-size": "larger", "font-weight": "bold", "cursor": "pointer" }} href={`/question/930`}>
                        How do I connect to a database and loop over a recordset in C#?
                      </a>

                      <div class="answer" style={{ " font-size": "larger", "color": "rgb(88, 88, 88);" }}>
                        <div dangerouslySetInnerHTML={{ __html: String.raw`"<p>What's the simplest way to connect and query a database for a set of records in C#?</p>"` }} />
                      </div>
                      <div class="row py-2 d-flex flex-row">
                        <div class="d-flex flex-wrap justify-content-start px-2" style={{ "row-gap": "15px", "column-gap": "4px" }}>
                          <div class=" justify-content-start ">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"svn"}`} style={{ "zIndex": "99" }}>
                              svn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"tortoisesvn"}`} style={{ "zIndex": "99" }}>
                              tortoisesvn
                            </a>
                          </div>
                          <div class="  justify-content-start">
                            <a class="num_button py-2 my-5 px-3" href={`/tag/${"branch"}`} style={{ "zIndex": "99" }}>
                              branch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </body>
    </>
  );
}