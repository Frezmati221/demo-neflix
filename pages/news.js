// import ThemeSwitch from "../components/elements/DarkLight";

import Link from 'next/link';
import LayoutFront from "../components/layout/LayoutFront";

function News() {
    return (
        <>
            <LayoutFront
                headTitle="News"
                pageTitle="News"
                pageTitleSub={"Neflex News page"}
                pageClass={"front"}
                parent={"Home"}
                child={"News"}
            >

                <div class="blog bg-white section-padding">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6">
                                <div class="section-title text-center">
                                    <h2>News</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="blog-grid">
                                    <div class="card">
                                        <img class="img-fluid rounded " src="/images/blog/1.jpg" alt="" />
                                        <div class="card-body">
                                            <Link href="/news-details">
                                                <a>
                                                <h4 class="card-title">Why does Litecoin need MimbleWimble?</h4>
                                            </a></Link>
                                            <Link href="/news-details"><a>Read More</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="blog-grid">
                                    <div class="card">
                                        <img class="img-fluid rounded " src="/images/blog/2.jpg" alt="" />
                                        <div class="card-body">
                                            <Link href="/news-details"><a>
                                                <h4 class="card-title">How to securely store wallet seeds?</h4>
                                            </a></Link>
                                            <Link href="/news-details"><a>Read More</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12">
                                <div class="blog-grid">
                                    <div class="card">
                                        <img class="img-fluid rounded " src="/images/blog/3.jpg" alt="" />
                                        <div class="card-body">
                                            <Link href="/news-details">
                                                <a>
                                                    <h4 class="card-title">Exclusive Interview With Of Litecoin</h4>
                                                </a></Link>
                                            <Link href="/news-details"><a>Read More</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
}
export default News;
