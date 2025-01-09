import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            {/* <h4 className="card-title mb-3">
                Settings
            </h4> */}
            {/* <div className="card">
                <div className="card-body"> */}
            <ul className="settings-menu">
                <li className={router.pathname == "/settings" ? "active" : ""}>
                    <Link href="/settings">
                        <a>
                            <i className="bi bi-chevron-right"></i> Profile
                        </a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/application" ? "active" : ""
                    }
                >
                    <Link href="/application">
                        <a>
                            <i className="bi bi-chevron-right"></i> Preference
                        </a>
                    </Link>
                </li>
                <li className={router.pathname == "/security" ? "active" : ""}>
                    <Link href="/security">
                        <a>
                            <i className="bi bi-chevron-right"></i> Security
                        </a>
                    </Link>
                </li>
                <li className={router.pathname == "/log" ? "active" : ""}>
                    <Link href="/log">
                        <a>
                            <i className="bi bi-chevron-right"></i> Log
                        </a>
                    </Link>
                </li>
                {/* <li
                            className={
                                router.pathname == "/payment"
                                    ? "active"
                                    : ""
                            }
                        >
                            <Link href="/payment">
                                <a><i className="bi bi-chevron-right"></i> Payment METHod</a>
                            </Link>
                        </li> */}
                {/* <li
                            className={
                                router.pathname == "/apis" ? "active" : ""
                            }
                        >
                            <Link href="/apis">
                                <a><i className="bi bi-chevron-right"></i> API</a>
                            </Link>
                        </li> */}
            </ul>
            {/* </div>
            </div> */}
        </>
    );
}
export default SettingsMenu;
