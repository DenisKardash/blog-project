import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { server } from '../../bff';
import { AuthFormError, Button, H2, Input } from '../../components';
import { useResetForm } from '../../hooks';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

import styled from 'styled-components';

// 1. схема проверки
const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цыфры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнен Пароль. Допускаются буквы, цыфры и знаки № %')
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Введите повтор пароля')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

const RegistrationContainer = ({ className }) => {
	// 2. Опишем саму форму с помощбю хука useForm
	// register, handleSubmit, formState: { errors }, - то что вернет  ФОРМА useForm()
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	// локальный стейт для обработки ошибки с сервера
	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			// console.log('from register', res);
			if (error) {
				setServerError(`Request failed: \n - ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};

	// ошибки для разметки (errors - ошибки валидации)
	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* {...register('login')} - так указываектся name="login" --> (...props) */}
				<Input
					type="text"
					placeholder="Логин..."
					height="35px"
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					height="35px"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Повтор пароля..."
					height="35px"
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError} height="35px">
					Зарегистрироваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	// margin-top: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;

	color: #405060;

	& > form {
		display: flex;
		flex-direction: column;
		width: 260px;
	}
`;
