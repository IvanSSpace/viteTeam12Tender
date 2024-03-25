import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { useStore } from "@/stores/stores";

const Signup = () => {
  const navigate = useNavigate();
  const {setEmail} = useStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    localStorage.getItem('email', data.email);
        // тут заносим значение в zustand isLoggined localStorage
        localStorage.setItem('email', data.email);
        setEmail(data.email)
        navigate('/inseption')
    // тут редиректим пользователся на страницу inseption (потом будем иметь задержку если пользователь зарегенстрирован)
    
  }

  const password = watch("password", "");
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (<div className="size-full grid place-content-center h-screen bg-greyblue">
    <div className="mainContainer flex flex-col items-center rounded-[15px] w-[428.82px] h-[400px] bg-greyform">
      <h1 className="text-greylight flex justify-center text-2xl mt-[30px] mb-[15px]">Регистрация</h1>
      <hr className="mb-[16px]" />
      <form className="flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>

      <p className="text-greylight text-[13px]">Почта</p>
          <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text"
          placeholder="Введите пароль" {...register("email", { required: 'Это поле обязательное', pattern : {
            value: emailRegex,
            message: "Почта напасана с ошибкой"
          } })} />
          {errors.email && <span className="text-red-400 text-[12px]">{errors.email.message}</span>}

          <p className="mt-[16px] text-greylight text-[13px]">Пароль</p>
        <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text"
          placeholder="Введите пароль" {...register("password", { required: 'Это поле обязательное', minLength: { value: 6, message: 'минимальная длина пароля 6 символов' } })} />
        {errors.password && <span className="text-red-400 text-[12px]">{errors.password.message}</span>}


        <p className="mt-[16px] text-greylight text-[13px]">Повторите пароль</p>
        <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text"
          placeholder="Введите пароль" {...register("resPassword", { required: 'Это поле обязательное', minLength: { value: 6, message: 'минимальная длина пароля 6 символов' },
          validate: (value) => value === password || "Пароли должны совпадать" })} />
        {errors.resPassword && <span className="text-red-400 text-[12px]">{errors.resPassword.message}</span>}


        <Button className="mt-[32px] bg-lightblue hover:text-blue-200 hover:bg-blue-600 rounded-[27px]" type="submit">Войти</Button>
      </form>
    </div>
  </div>)
}

export default Signup;