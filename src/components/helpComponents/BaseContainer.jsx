
// базовый коннтейнер увиверсального размера
const BaseContainer = ({children}) => {
  return (
    <div className="pageContent min-h-1000 flex justify-center items-center md:mx-10">
    {children}
    </div>
  );
}

export default BaseContainer;