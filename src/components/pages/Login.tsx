import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../api/login';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Spinner from '../spiners/Spinner';
import { toast } from 'react-toastify';

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Некорректный адрес электронной почты')
        .required('Это обязательное поле'),
      password: Yup.string()
        .min(6, 'Минимальное количество символов 6')
        .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .required('Это обязательное поле'),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const data = await login(values.email, values.password);
        console.log(data);
        toast.success('Вход выполнен успешно');
      } catch (error) {
        toast.error('Ошибка при входе. Пожалуйста, проверьте ваши данные и попробуйте снова.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      {isLoading && <Spinner />}
      <form onSubmit={formik.handleSubmit}>
        <h1>Войдите в свой профиль</h1>
        <div>
          <label htmlFor="email" className={`input-container ${formik.touched.email && formik.errors.email ? 'has-error' : ''}`}>
            <FaEnvelope className="input-icon" />
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Электронная Почта'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className='error-message'>{formik.errors.email}</div>
          ) : null}

          <label htmlFor='password' className={`input-container ${formik.touched.password && formik.errors.password ? 'has-error' : ''}`}>
            <FaLock className="input-icon" />
            <input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Пароль'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <button
              type='button'
              className='password-toggle'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye className='input-icon' /> : <FaEyeSlash className='input-icon' />}
            </button>
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div className='error-message'>{formik.errors.password}</div>
          ) : null}

          <div className='link-container'>
            <a href='#'>Забыли пароль?</a>
          </div>
        </div>

        <button
          type='submit'
          disabled={!formik.isValid || !formik.dirty || isLoading}
          className='button'
        >
          Войти
        </button>
        <div className='link-container'>
          <a href='#'>Зарегистрироваться</a>
        </div>
      </form>
    </div>
  );
};

export default Login;