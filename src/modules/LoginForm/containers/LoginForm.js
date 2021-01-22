import {withFormik} from "formik";
import LoginFormComponent from "../components/LoginFormComponent";
import validation from "../../../utils/validations"
export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: ()=> ({
      email: "",
      password: "",
    }),
    validate: values => {
        const errors = {};
        validation({isAuth: true, values, errors})
        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000)
    },
    displayName: "LoginFormComponent",
})(LoginFormComponent);
