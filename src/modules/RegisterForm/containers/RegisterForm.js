import {withFormik} from "formik";
import RegisterFormComponent from "../components/RegisterFormComponent";
import validation from "../../../utils/validations"
export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: ()=> ({
        email: "",
        password: "",
        username: "",
        repeat: "",
    }),
    validate: values => {
        const errors = {};
        validation({isAuth: true, values, errors})
        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        console.log(values);
    },
    displayName: "RegisterForm",
})(RegisterFormComponent);
