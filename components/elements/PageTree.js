import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Link from "next/link";
const PageTree = ({ openClass, handleRemove }) => {
    return (
        <>
            <div className={openClass ? "pagetree-wrapper section-padding open" : "pagetree-wrapper section-padding"}>
                <button onClick={handleRemove}> remove </button>

                <PerfectScrollbar>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">


                                <nav class="pagetree-nav">
                                    <ul>
                                        <li>
                                            <Link href="#"><a>Front</a></Link>
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Explore</a></Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><a>Collection</a></Link>
                                                            <ul>
                                                                <li>
                                                                    <Link href="#"><a>Html</a></Link>
                                                                    <ul>
                                                                        <li>
                                                                            <Link href="#"><a>Css</a></Link>
                                                                            <ul>
                                                                                <li>
                                                                                    <Link href="#"><a>Jquery</a></Link>
                                                                                    <ul>
                                                                                        <li>
                                                                                            <Link href="#"><a>Jquery</a></Link>
                                                                                        </li>
                                                                                        <li>
                                                                                            <Link href="#"><a>Jquery</a></Link>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <Link href="#"><a>Profile</a></Link>
                                                            <ul>
                                                                <li>
                                                                    <Link href="#"><a>Image</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"><a>Image</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"><a>Image</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"><a>Image</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><a>Blog</a></Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><a>Category</a></Link>
                                                            <ul>
                                                                <li>
                                                                    <Link href="#"><a>Code</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#"><a>Graph</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><a>About</a></Link>
                                                    <ul>
                                                        <li>
                                                            <Link href="#"><a>Vcard</a></Link>

                                                        </li>
                                                        <li>
                                                            <Link href="#"><a>Map</a></Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    );
};

export default PageTree;