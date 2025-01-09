import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    photo: "",
    itemName: "",
    description: "",
    editionSize: "",
    size: "",
    price: "",
};

const CreateCollectionSchema = Yup.object().shape({
    photo: Yup.string().required("Image required"),
    itemName: Yup.string().required("Item Name is required"),
    description: Yup.string().required("aaDescriptiona is required"),
    editionSize: Yup.string().required("editionSize is required"),
    size: Yup.string().required("Size is required"),
    price: Yup.string().required("Price is required"),
});

function CreateCollection() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={CreateCollectionSchema}
                onSubmit={(fields) => {
                    alert(
                        "SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4)
                    );
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="d-flex align-items-center mb-3">
                                    <img
                                        className="me-3 rounded-circle me-0 me-sm-3"
                                        src="images/items/1.jpg"
                                        width="55"
                                        height="55"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        {/* <h4 className="mb-0">Jannatul Maowa</h4> */}
                                        <h5 className="mb-0">
                                            Max file size is 20mb
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <Field
                                    name="photo"
                                    type="file"
                                    className={
                                        errors.photo && touched.photo
                                            ? " is-invalid"
                                            : ""
                                    }
                                />
                                <ErrorMessage
                                    name="photo"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Name</label>
                                <Field
                                    name="itemName"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.itemName && touched.itemName
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="itemName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <Field
                                    name="description"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.description &&
                                        touched.description
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            {/* <div className="col-12 mb-3">
                                <label className="form-label">Edition Size</label>
                                <Field
                                    name="editionSize"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.editionSize && touched.editionSize
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="editionSize"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div> */}
                            <div className="col-6 mb-3">
                                <label className="form-label">
                                    Edition Size
                                </label>
                                <Field
                                    name="size"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.size && touched.size
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="size"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-6 mb-3">
                                <label className="form-label">Amount</label>
                                <Field
                                    name="price"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.price && touched.price
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="price"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-6">
                                <div className="text-start">
                                    <h6>Mint Fee</h6>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-end">
                                    <h6> = 0.0254 XRP</h6>
                                </div>
                            </div>
                        </div>

                        <div className="toc-collection mt-4">
                            <ul>
                                <li className="text-dark mb-2">By clicking "Create NFT"</li>
                                <li>  <small>                                  
                                    - You agree our
                                    <a>
                                        Terms of service and Privacy Policy
                                    </a>
                                    </small>
                                </li>
                                <li>
                                    - <small className="text-muted">
                                    Your Declate that everything you have
                                    uploaded is orginal artwork. Any
                                    plagirazation is not allowed and will be
                                    subject to removal
                                    </small>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-5">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2 w-100"
                            >
                                Create NFT
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default CreateCollection;
