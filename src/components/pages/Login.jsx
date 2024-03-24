import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it



  return (<div className="size-full grid place-content-center h-screen bg-greyblue">
    <div className="mainContainer flex flex-col items-center rounded-[15px] w-[428.82px] h-[400px] bg-greyform">
      <h1 className="text-greylight flex justify-center text-2xl mt-[30px] mb-[15px]">Вход</h1>
      <hr className="mb-[16px]" />
      <form className="flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="123123"> */}
        {/* register your input into the hook by invoking the "register" function */}
        <p className="text-greylight text-[13px]">Почта</p>
        <input className="mb-[16px] text-[13px] p-[6px] rounded-[27px]" type="text" placeholder="Укажите свою почту"  {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <p className="text-greylight text-[13px]">Пароль</p>
        <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="text" placeholder="Введите пароль" {...register("exampleRequired", { required: true })} />
        <p className="text-[13px] text-greylight">Забыли пароль?</p>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      {/* </div> */}
        {/* <input type="submit" /> */}
        <Button className="mt-[32px] bg-lightblue hover:text-blue-200 rounded-[27px]" type="submit">Войти</Button>
      </form>
      <div className="mt-[32px] flex flex-row justify-center">
      <p className="text-greylight pr-1">Нет аккаунта? </p>
      <Link to="/login" className={`text-white-600 text-lightblue hover:text-blue-600 ${location.pathname === '/selectGrown' ? 'text-red-600' : ''}`}>
      Зарегистрироваться
      </Link>
      </div>
    </div>
  </div>)
}

export default Login;