import { Login } from '../../../UseCases/users/login/index.ts';

const loginUsecase = new Login();

await loginUsecase.execute({ email: 'test@qmail.com', password: 'password' });