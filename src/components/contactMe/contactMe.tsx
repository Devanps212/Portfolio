import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from 'yup'
import { formValidation } from "../../interfaces/contactUs";





const ContactMe = () => {


    const initialValues : formValidation = {
        name: "",
        email: "",
        message: ""
    }
    
    const validationSchema = yup.object({
        name: yup.string().required('Give a valid name').matches(/^[A-Za-z]+$/, "No digits allowed"),
        email: yup.string().required('Submit a valid email'),
        message: yup.string().required('Message is required'),
    })

    const handleSubmit = (values: formValidation)=>{
        console.log(values)
    }

    return (
      <>
        <div className="container-fluid">
          <h3 className="text-center mt-5">Contact Me</h3>
          <div className="border border-secondary p-5 m-5 rounded" style={{background: "linear-gradient(190deg, rgba(0,0,0,0.8) 0%, rgba(14,34,113,0.6) 48%, rgba(0,0,0,0.8) 100%)"}}>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
                <Form className="row g-4">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                        Enter Your Name
                        </label>
                        <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        required
                        />
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                        Enter Email
                        </label>
                        <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="email id"
                        required
                        />
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className="form-label">
                        Enter Your Message
                        </label>
                        <Field
                        as="textarea"
                        className="form-control"
                        id="message"
                        rows={5}
                        name="message"
                        placeholder="Enter your message..."
                        required
                        />
                        <ErrorMessage name="message" component="div" className="text-danger"/>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-4 py-2">
                        Send Message
                        </button>
                    </div>
                </Form>
            </Formik>
          </div>
        </div>
      </>
    );
  };
  
  export default ContactMe;
  