import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
    photo: "",
    collectionName: "",
    description: "",
    royalties: "",
    size: "",
    price: "",
};

const UploadItemSchema = Yup.object().shape({
    photo: Yup.string().required("Image required"),
    collectionName: Yup.string().required("Item Name is required"),
    description: Yup.string().required("aaDescriptiona is required"),
    royalties: Yup.string().required("Royalties is required"),
    size: Yup.string().required("Size is required"),
    price: Yup.string().required("Price is required"),
});

function UploadItem() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={UploadItemSchema}
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
                                        width="75"
                                        height="75"
                                        alt=""
                                    />
                                    <div className="media-body">
                                        {/* <h4 className="mb-0">Jannatul Maowa</h4> */}
                                        <p className="mb-2">
                                            Max file size is 20mb
                                        </p>
                                        <Field
                                            name="photo"
                                            type="file"
                                            className={

                                                (errors.photo && touched.photo
                                                    ? " is-invalid"
                                                    : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="photo"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">

                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Collection Name</label>
                                <Field
                                    name="collectionName"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.collectionName && touched.collectionName
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="collectionName"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Description</label>
                                <Field
                                    name="description"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.description && touched.description
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
                            <div className="col-12 mb-3">
                                <label className="form-label">Royalties</label>
                                <Field
                                    name="royalties"
                                    type="text"
                                    className={
                                        "form-control" +
                                        (errors.royalties && touched.royalties
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                <ErrorMessage
                                    name="royalties"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
                                className="btn btn-primary mr-2 w-100"
                            >
                                Create Collection
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export default UploadItem;
