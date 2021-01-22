const validation = ({isAuth, values, errors}) => {
    const rules = {
        email: (errors, values) => {
            if (!values.email) {
                errors.email = "Нам очень нужна Ваша почта";
            }else if(!/[0-9A-Za-z.+\-%_]+@[0-9a-zA-z]{2,15}\.[a-z-A-Z]{2,8}/i.test(values.email)) {
                errors.email = "Какая-то она у Вас неправильная";
            }
        },
        username: (errors, values) => {
            if (!values.username){
                errors.username = "Давайте всё-таки познакомимся";
            }
        },
        password: (errors, values) => {
            if(!values.password){
                errors.password = isAuth ? "Введите пароль" : "Придумайте пароль";
            }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})/i.test(values.password)){
                errors.password = isAuth ? "Неверный пароль" : "Ваш пароль легко взломать! Подумайте ещё";
            }
        },
        repeat: (errors, values) => {
            if (values.repeat !== values.password || values.repeat === ""){
                errors.repeat = "Пароли не совпадают";
            }
        }
    };
    Object.keys(values).forEach(
        key => rules[key] && rules[key](errors, values)
    )
}
export default validation;
