import { Button } from "../ui/button";
import menubar1 from "../../assets/menubar/menubar1.svg"
import { useNavigate } from "react-router-dom";

const SelectRegions = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <div className="textInstructions flex flex-col items-center justify-center">
                <p className="mt-3 text-gray-500 text-sm">Настройка учетной записи</p>
                <img className="m-[17px] " src={menubar1} alt="setting up issuance" />
                <h1 className="mb-[7px] text-3xl font-bold">Список позиций моей компании</h1>
                <h4 className="text-gray-500">Помогут экономить время при поиске тендеров</h4>
                <div className="buttonContainer w-[800px] flex justify-end m-3">
                    <Button onClick={() => navigate('/addItemsList')}>Загрузить список позиций компании</Button>
                </div>
            </div>
            <div className="pageContent">
                <h1>Выберите регион деятельности</h1>
                <div className="">
                    <h1>Все регионы</h1>
                    

                </div>
            </div>
        </div>
    )
}

export default SelectRegions;