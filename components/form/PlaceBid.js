import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    bidPrice: "",
    acceptTerms: false,
};

const PlaceBidSchema = Yup.object().shape({
    bidPrice: Yup.string().required("This field is required."),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

function PlaceBid() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={PlaceBidSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">Price</label>
                                <div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <img
                                                src="/images/svg/ETH.svg"
                                                alt=""
                                                width="10"
                                                className="me-2"
                                            />
                                            <strong>ETH</strong>
                                        </span>
                                        <Field
                                            name="bidPrice"
                                            type="text"
                                            className={
                                                "form-control" +
                                                (errors.bidPrice &&
                                                touched.bidPrice
                                                    ? " is-invalid"
                                                    : "")
                                            }
                                        />
                                       
                                        <span className="input-group-text">
                                            $136305.78
                                        </span>
                                        <ErrorMessage
                                    name="bidPrice"
                                    component="div"
                                    className="invalid-feedback"
                                />
                                    </div>
                                </div>

                                
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <Field
                                        type="checkbox"
                                        name="acceptTerms"
                                        className={
                                            "form-check-input " +
                                            (errors.acceptTerms &&
                                            touched.acceptTerms
                                                ? " is-invalid"
                                                : "")
                                        }
                                    />
                                    <label className="form-check-label">
                                        I agree to Neflex's
                                        <a href="#" className="text-primary">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="#"
                                            className="text-primary"
                                        ></a>
                                        .
                                    </label>
                                    <ErrorMessage
                                        name="acceptTerms"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 text-center ">
                            <button
                                type="submit"
                                className="btn btn-primary me-3"
                            >
                                Place a bid
                            </button>
                            <button
                                className="btn btn-outline-primary"
                            >
                                Convert WETH
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default PlaceBid;
