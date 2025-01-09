// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";

function Item() {
    return (
        <>
            <LayoutFront
                headTitle="Item Details"
                pageTitle="Item Details"
                pageTitleSub={"Neflex Item Details page"}
                pageClass={"front"}
                parent={"Home"}
                child={"Item Details"}
            >
                <div className="item-single section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-9">
                                <div className="nft-details">
                                    <div className="card-body">
                                        <div className="row justify-content-between">
                                            <div className="col-md-6">
                                                <img
                                                    src="/images/items/14.jpg"
                                                    className="img-fluid rounded my-5"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="col-md-5">
                                                <div className="nft-details-content">
                                                    <div className="nft-collector">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <img
                                                                src="/images/avatar/1.jpg"
                                                                alt=""
                                                                className="me-2 rounded-circle"
                                                                width="30"
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="mb-0">
                                                                    John Abraham
                                                                    <span className="circle bg-success"></span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2 className="mb-3">
                                                        Brighten LQ #4321
                                                    </h2>
                                                    <div className="nft-creator">
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src="/images/avatar/5.jpg"
                                                                alt=""
                                                                className="me-2 rounded-circle"
                                                                width={40}
                                                            />
                                                            <div className="flex-grow-1">
                                                                <h5 className="mb-0">
                                                                    John Abraham
                                                                    <i className="bi bi-check-circle-fill text-success ms-2"></i>
                                                                </h5>
                                                                <span>
                                                                    Author
                                                                    Royalties
                                                                    15%
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="mb-3">
                                                    Lorem ipsum dolor, sit amet
                                                    consectetur adipisicing
                                                    elit. ETH, unde. Unde,
                                                    doloremque ipsam? Nesciunt
                                                    dolorem nisi quae nostrum
                                                    veniam quasi illum, iusto
                                                    tempore nihil, natus
                                                    perspiciatis? Sed
                                                </p>
                                                <div className="d-flex justify-content-between mt-4 mb-4">
                                                    <div className="text-start">
                                                        <p className="mb-2">
                                                            Lowest Market Price
                                                        </p>
                                                        <h3 className="mb-2">
                                                            25 ETH
                                                        </h3>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-2">
                                                            Edition Size
                                                        </p>
                                                        <h3 className="mb-2">
                                                            1
                                                        </h3>
                                                    </div>
                                                </div>
                                                <h4 className="card-title mb-3">
                                                    Latest Bids
                                                </h4>

                                                <div className="my-3">
                                                    <form>
                                                        <select className="form-control">
                                                            <option value="value">
                                                                Select Serial
                                                                Number
                                                            </option>
                                                            <option value="value">
                                                                Option One
                                                            </option>
                                                            <option value="value">
                                                                Option Two
                                                            </option>
                                                            <option value="value">
                                                                Option Three
                                                            </option>
                                                        </select>
                                                    </form>
                                                </div>

                                                <div className="pt-3">
                                                    <a
                                                        href=""
                                                        className="btn btn-dark w-100 my-2"
                                                    >
                                                        Make Offer
                                                    </a>
                                                    <a
                                                        href=""
                                                        className="btn btn-primary w-100 my-2"
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="history-table section-padding bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="history-tab">
                                    <div className="tab-link">
                                        <a href="#" className="active">
                                            Global History
                                        </a>
                                        <a href="#">Item History</a>
                                        <a href="#">Bid History</a>
                                        <a href="#">Properties </a>
                                    </div>
                                </div>
                                <div className="card mb-5">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Buyer</th>
                                                        <th>Type</th>
                                                        <th>Price</th>
                                                        <th>Serial</th>
                                                        <th>Date/Time</th>
                                                        <th>TX</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Mealady</td>
                                                        <td> BUY OFFER</td>
                                                        <td>3,500 XUSDC</td>
                                                        <td> #1</td>
                                                        <td>
                                                            {" "}
                                                            Feb 03, 2022, 11:15
                                                            AM PST
                                                        </td>
                                                        <td>Link</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mealady</td>
                                                        <td> BUY OFFER</td>
                                                        <td>3,500 XUSDC</td>
                                                        <td> #1</td>
                                                        <td>
                                                            {" "}
                                                            Feb 03, 2022, 11:15
                                                            AM PST
                                                        </td>
                                                        <td>Link</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
export default Item;
