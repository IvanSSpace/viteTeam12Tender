import { Button } from "../ui/button";

const SelectRegions = () => {
    return (
        <div className="w-full">
            <div className="textInstructions flex flex-col items-center justify-center">
                <p className="text-gray-500 text-sm">Настройка учетной записи</p>
                <p>Будущий контроллер для отслеживания процессов</p>
                <h1 className="text-3xl font-bold">Мои регионы</h1>
                <h4 className="text-gray-500">Помогут экономить время при поиске тендеров</h4>
            </div>
            <div className="buttonContainer flex justify-between m-3">
                <Button className=''>Назад</Button>
                <Button className=''>Выбрать отрасли</Button>
            </div>
            <div>AddItemsList</div>
        </div>
    )
}

export default SelectRegions;