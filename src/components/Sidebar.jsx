import React from 'react'

function Sidebar({selectedTab,setSelectedTab}) {


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
            <button  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"> <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> <span className="fs-4">Sidebar</span> </button> <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item"  onClick={()=>{setSelectedTab("Home")}}>
                    <button  className={`nav-link ${selectedTab === "Home" ? "active" : "text-white" }`} aria-current="page"
                    > <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#home"></use></svg>
                        Home
                    </button>
                </li>
                <li onClick={()=>{setSelectedTab("CreatePost")}}>
                    <button  className={`nav-link ${selectedTab === "CreatePost" ? "active" : "text-white"}`}> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#speedometer2"
                  ></use></svg>
                        CreatePost
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
