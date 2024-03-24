import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/arrowRight.svg";

const Inception = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            <div className="textInstructions flex flex-col items-center justify-center">
                <p className="mt-3 text-gray-500 text-sm">Настройка учетной записи</p>
                <h1 className="mt-[75px] mb-[6px] text-3xl font-bold">Начало</h1>
                <h4 className="text-gray-500">Помогут экономить время при поиске тендеров</h4>
                <div className="buttonContainer w-[800px] flex justify-end m-3">
                    <Button onClick={() => navigate('/selectRegions')}><div><p>Выберите регион деятельности</p><img src={arrowRight} alt="next" /></div></Button>
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

export default Inception;