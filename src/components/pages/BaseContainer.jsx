
// базовый коннтейнер увиверсального размера
const BaseContainer = ({children}) => {
  return (
    <div className="pageContent bg-gray-500 min-h-1000 flex justify-center items-center">
    {children}
    </div>
  );
}

export default BaseContainer;