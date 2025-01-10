import Link from "next/link";
import React, { useState } from "react";
import PageTree from "../elements/PageTree";
function HeaderLanding() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const [openClass, setOpenClass] = useState("");

  const handleOpen = () => {
    setOpenClass("open");
    document.querySelector("body").classList.add("overflow-hidden");
  };

  const handleRemove = () => {
    if (openClass === "open") {
      setOpenClass("");
    }
    document.querySelector("body").classList.remove("overflow-hidden");
  };
  return (
    <>
      <div className="header landing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="brand-logo">
                    <Link href="/">
                      <a>
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="logo-primary"
                        />
                        {/* <img src="/images/logow.png" alt="" className="logo-white" /> */}
                      </a>
                    </Link>
                  </div>
                  {/* <div className="search">
                                        <form>
                                            <span><i className="ri-search-line"></i></span>
                                            <input type="text" placeholder="Search Here" />
                                        </form>
                                    </div> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleTrueFalse}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className={
                      isToggled
                        ? "collapse navbar-collapse show"
                        : "collapse navbar-collapse"
                    }
                  >
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link href="/explore">
                          <a className="nav-link">Explore</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/how-works">
                          <a className="nav-link">How Works</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/news">
                          <a className="nav-link">News</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={handleOpen}>
                          Pages
                          <i class="bi bi-chevron-down ms-2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="signin-btn d-flex align-items-center">
                    <Link href="/connect">
                      <a className="btn btn-primary">Connect</a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageTree openClass={openClass} handleRemove={handleRemove} />
    </>
  );
}
export default HeaderLanding;
