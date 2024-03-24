
// базовый коннтейнер увиверсального размера
const BaseContainer = ({children}) => {
  // md:mx-10
  return (
    <div className="pageContent min-h-1000 flex justify-center items-center ">
    {children}
    </div>
  );
}

export default BaseContainer;