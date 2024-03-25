import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useStore } from "@/stores/stores"

const Login = () => {
const { setEmail } = useStore();
const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // тут будет отправка на бек и получение токена
    localStorage.setItem('email', data.email);
    setEmail(data.email)
    navigate('/inseption')
    // тут заносим значение в zustand isLoggined и localStorage
    // тут редиректим пользователся на страницу inseption (потом будем иметь задержку если пользователь зарегенстрирован)

  }

  // console.log(watch("example")) // watch input value by passing the name of it

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (<div className="size-full grid place-content-center h-screen bg-greyblue">
    <div className="mainContainer flex flex-col items-center rounded-[15px] w-[428.82px] h-[400px] bg-greyform">
      <h1 className="text-greylight flex justify-center text-2xl mt-[30px] mb-[15px]">Вход</h1>
      <hr className="mb-[16px]" />

      <form className="flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>

          <p className="text-greylight text-[13px]">Почта</p>
          <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text"
          placeholder="Введите пароль" {...register("email", { required: 'Это поле обязательное', minLength: { value: 10, message: 'минимальная длина пароля 10 символов' }, pattern : {
            value: emailRegex,
            message: "Почта напасана с ошибкой"
          } })} />
          {errors.email && <span className="text-red-400 text-[12px]">{errors.email.message}</span>}

        <p className="mt-[16px] text-greylight text-[13px]">Пароль</p>
        <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text"
          placeholder="Введите пароль" {...register("password", { required: 'Это поле обязательное', minLength: { value: 10, message: 'минимальная длина пароля 10 символов' } })} />
        <p className="text-[13px] text-greylight">Забыли пароль?</p>
        {errors.password && <span className="text-red-400 text-[12px]">{errors.password.message}</span>}

        <Button className="mt-[32px] bg-lightblue hover:text-blue-200 hover:bg-blue-600 rounded-[27px]">Войти</Button>

      </form>
      <div className="mt-[32px] flex flex-row justify-center">
        <p className="text-greylight pr-1">Нет аккаунта? </p>
        <Link to="/signup" className={`text-white-600 text-lightblue hover:text-blue-600 ${location.pathname === '/selectGrown' ? 'text-red-600' : ''}`}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  </div>)
}

export default Login;