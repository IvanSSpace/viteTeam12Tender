// import BaseContainer from "../baseContainer/BaseContainer";

import { useForm } from "react-hook-form";


const PageOne = () => {
const { register, handleSubmit, formState: {errors} } = useForm();

const onSubmit = (data) => {
  // alert(`Your name ${data.name}`)
  console.log(`Your name ${data.name}`);
};

  return (
    <div className="bg-red-300">
      <h1>Контент главной страницы</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', 
        {required: 'пожалуйста заполните поле',
        minLength: {value: 10, message: 'минимальное число символов 10'}
        })} />
        {errors.name && <div className="bg-blue-600">{errors.name.message}</div>}
        {/* {errors.name && <div className="bg-blue-600">{errors.name.minLength}</div>} */}
        <div>
        <button>Send</button>
        </div>
      </form>
    </div>
  )
}

export default PageOne;