import * as yup from "yup";

export const SignUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu phải có từ 8 tới 16 kí tự")
    .max(16, "Mật khẩu phải có từ 8 tới 16 kí tự"),
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Z ]*$/, "Họ tên phải là chữ"),
});