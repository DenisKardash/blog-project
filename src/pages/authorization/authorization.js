import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
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

// 1. схема проверки (для двух форм login & password )
const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнен Пароль. Допускаются буквы, цифры и знаки № %')
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	margin: 20px;
	// font-weight: bold;

	&:hover {
		color: darkorange;
	}
`;

const AuthorizationContainer = ({ className }) => {
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
		},
		resolver: yupResolver(authFormSchema),
	});

	// локальный стейт для обработки ошибки с сервера
	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	// примем сюда наши --- {...register('login')},  {...register('password')} ---
	// res - ответ с сервера
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Request failed: \n - ${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};

	// ошибки для разметки (errors - ошибки валидации)
	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
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
				<Button type="submit" disabled={!!formError} height="35px">
					Авторизоваться
				</Button>
				<StyledLink to="/register">Регистрация</StyledLink>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
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
