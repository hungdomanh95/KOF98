import * as yup from 'yup';
export const SignUpUserSchema = yup.object().shape({
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
  name: yup
    .string()
    .required("Vui lòng nhập tên đăng nhập")
    .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
});