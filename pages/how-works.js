
import LayoutFront from "../components/layout/LayoutFront";

function About() {
    return (
        <>
            <LayoutFront
                headTitle="How Works"
                pageClass={"front"}
                pageTitle="How Works"
                pageTitleSub={"Neflex How Works page"}
                parent={"Home"}
                child={"How Works"}
            >

                <div className="terms_condition section-padding">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="terms_condition-content">
                                    <div className="how-work-content">
                                        <h3>Frequently Asked Questions </h3>
                                        <p>Neflex is an instant cryptocurrency exchange that allows you to exchange crypto
                                            fast and buy it with a bank card. The service provides the best crypto-to-crypto
                                            rates and supports over 140 cryptocurrencies available for exchange
                                        </p>
                                    </div>


                                    <div className="how-work-content">
                                        <h3>How does Neflex work? </h3>
                                        <p>
                                            Neflex’s trading algorithm is integrated into the largest cryptocurrency exchange
                                            platforms, including Binance, Poloniex, Bittrex, etc. In the span of milliseconds,
                                            Neflex makes bids and asks on the platforms, then selects and suggests the best
                                            available rate and displays the estimated rate on our site. The rates remain
                                            approximate until the transaction is actually made on the blockchain, which is why
                                            the exchange rate at the time of a transaction may differ slightly from the
                                            estimated rate that you see when you begin a transaction. To learn more about the
                                            process, see this <a href="#">article</a>
                                        </p>
                                    </div>


                                    <div className="how-work-content">
                                        <h3>Why should I trust you? </h3>
                                        <p>Neflex is one of the most prominent instant cryptocurrency exchanges that has
                                            gained the trust of more than 2M users from all over the world. The service provides
                                            safe and fast transactions without revealing users identities. We provide the best
                                            possible rates by comparing a wide range of reliable trading platforms and work with
                                            a list of 140+ cryptocurrencies that is constantly increasing.</p>
                                        <ul>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>No deposit storage. </p>
                                            </li>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>Instant exchange. </p>
                                            </li>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>Each account is protected with 2-factor authentication and an HTTPS protocol.
                                                </p>
                                            </li>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>More than 2 million satisfied users.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Does Neflex fix rates? </h3>
                                        <p>Neflex mobile app does! Mobile app users will no longer be affected by the risks
                                            associated with crypto market fluctuations. Soon, the fixed-rate exchanges will also
                                            be implemented on the web version. To lock the current exchange rate, the user needs
                                            to click on the lock icon, which will result in them getting the exact same amount
                                            of crypto as is displayed on the screen. The rate is fixed for 15 minutes, which
                                            should be more than enough to carry out the exchange.


                                        </p>
                                        <p> Alternatively, Neflex offers our lowest fee of 0.25% for all crypto-to-crypto
                                            exchanges made at a floating rate.</p>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>No warranties : </h3>
                                        <p>Elaenia is provided “as is” without any representations or warranties. Elaenia.com
                                            makes no representations or warranties in relation to this website or the
                                            information and materials provided on this website.</p>
                                        <p>Elaenia.com does not warrant that:</p>

                                        <ul>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>The website will be constantly available, or available at all moving forward.
                                                </p>
                                            </li>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>The information on this website is complete, true, or non-misleading.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Privacy : </h3>
                                        <p>For details about our privacy policy, please refer to the privacy policy section.</p>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Unenforceable provisions : </h3>
                                        <p>If any provision of this website disclaimer is, or is found to be, unenforceable
                                            under applicable law, that will not affect the enforceability of the other
                                            provisions of this website disclaimer.</p>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Links : </h3>
                                        <p>Responsibility for the content of external links (to web pages of third parties) lies
                                            solely with the operators of the linked pages.</p>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Modifications: </h3>
                                        <p>Elaenia.com may revise these terms of use for its website at any time without notice.
                                            By using this web site you are agreeing to be bound by the then current version of
                                            these terms of service.</p>
                                    </div>

                                    <div className="how-work-content">
                                        <h3>Breaches of these terms and conditions: </h3>
                                        <ul>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>Elaenia.com reserves the rights under these terms and conditions to take
                                                    action if you breach these terms and conditions in any way. </p>
                                            </li>
                                            <li>
                                                <i className="bi bi-circle-fill"></i>
                                                <p>Elaenia.com may take such action as seems appropriate to deal with the
                                                    breach, including suspending your access to the website, suspending your
                                                    earnings made trough Elaenia.com,prohibiting you from accessing the
                                                    website, or bringing court proceedings against you.</p>
                                            </li>
                                        </ul>
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
export default About;
