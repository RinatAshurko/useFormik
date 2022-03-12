import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validate = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'Обязательное поле!'
    } else if (values.name.length < 2) {
        errors.name = 'Минимум два символа для заполнения'
    }

    if(!values.email) {
        errors.email = 'Обязательно поле!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email= 'Введите корректный email'
    }

    return errors;
}

const customForm = () => {
    return (
        <Formik 
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {yup.object({
                name: yup.string()
                        .min(2, 'Обязательно 2 символа')
                        .required('Обязательное поле'),
                email: yup.string()
                          .email('Используйте корректное значение')
                          .required('Обязательное поле!')
                
            })}
            onSubmit= { values => console.log(JSON.stringify(values, null, 2))}
        >
             <Form className="form" >
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'
                    >
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as='textarea'
                />
                <label className="checkbox">
                    <Field 
                    name="terms"
                    type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}
export default customForm;