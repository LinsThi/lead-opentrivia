import Yup from '~/utils/yup';

export const validationSchema = Yup.object().shape({
  usernameClient: Yup.string().required().label('Usuário'),
  emailClient: Yup.string().email().required().label('E-mail'),
  birthdayClient: Yup.string().required().label('Data de nascimento'),
  genderClient: Yup.string().required().label('Gênero'),
  passwordClient: Yup.string().required().min(6).label('Senha'),
  newPasswordClient: Yup.string().required().min(6).label('Nova Senha'),
});
