import { useState } from 'react';

const ContextMenu = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert('Пожалуйста, выберите файл для загрузки');
      return;
    }

    // Здесь вы можете добавить код для загрузки файла на сервер
    console.log('Файл успешно загружен:', file);
  };

  return (
    <div>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Загрузить файл</button>
    </div>
  );
};

export default ContextMenu;
