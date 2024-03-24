import { Button } from "../ui/button";
import menubar3 from '../../assets/menubar/menubar3.svg';
import { useNavigate } from "react-router-dom";


const SelectGrown = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full">
            <div className="textInstructions flex flex-col items-center justify-center">
                <p className="mt-3 text-gray-500 text-sm">Настройка учетной записи</p>
                <img className="m-[17px]" src={menubar3} loading="lazy" alt="setting up issuance" />
                {/* <img className="m-[17px]" loading="lazy" alt="setting up issuance" /> */}
                <h1 className="mb-[7px] text-3xl font-bold">Список позиций моей компании</h1>
                <h4 className="text-gray-500">Помогут экономить время при поиске тендеров</h4>
                <div className="buttonContainer w-[800px] flex justify-between m-3">
                    <Button onClick={() => navigate('/addItemsList')} className=''>Назад</Button>
                    <Button className=''>Показать мои рекомендации</Button>
                </div>
            </div>
            <div>AddItemsList</div>
        </div>
    )
}

export default SelectGrown;
