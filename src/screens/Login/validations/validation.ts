import Yup from '~/utils/yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Usuário'),
  password: Yup.string().required().min(6).label('Senha'),
});
