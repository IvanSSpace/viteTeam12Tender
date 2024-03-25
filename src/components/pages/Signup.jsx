import { useForm } from "react-hook-form"
import { Button } from "../ui/button"

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('тут будет отправка на бек: ', data)
  }

  console.log(watch("example"))



  return (<div className="size-full grid place-content-center h-screen bg-greyblue">
    <div className="mainContainer flex flex-col items-center rounded-[15px] w-[428.82px] h-[400px] bg-greyform">
      <h1 className="text-greylight flex justify-center text-2xl mt-[30px] mb-[15px]">Регистрация</h1>
      <hr className="mb-[16px]" />
      <form className="flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>

        <p className="text-greylight text-[13px]">Почта</p>
        <input className="mb-[16px] text-[13px] p-[6px] rounded-[27px]" type="email" placeholder="Укажите свою почту"  {...register("example")} />

        <p className="text-greylight text-[13px]">Пароль</p>
        <input className="mb-[16px] text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="password" placeholder="Придумайте пароль" {...register("exampleRequired", { required: true })} />

        <p className="text-greylight text-[13px]">Подтвердите пароль</p>
        <input className="text-[13px] scroll-pr-96 p-[6px] rounded-[27px]" type="password" placeholder="Повторите пароль" {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <Button className="mt-[32px] bg-lightblue hover:text-blue-200 rounded-[27px]" type="submit">Войти</Button>
      </form>
    </div>
  </div>)
}

export default Signup;