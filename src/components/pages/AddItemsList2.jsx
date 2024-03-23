import menubar2 from "../../assets/menubar/menubar2.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { useState } from "react";

const AddItemsList = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="w-full">
      <div className="textInstructions flex flex-col items-center justify-center">
        <p className="mt-3 text-gray-500 text-sm">Настройка учетной записи</p>
        <img className="m-[17px] " src={menubar2} alt="setting up issuance" />
        <h1 className="mb-[7px] text-3xl font-bold">Список позиций моей компании</h1>
        <h4 className="text-gray-500">Помогут экономить время при поиске тендеров</h4>
        <div className="buttonContainer w-[800px] flex justify-between m-3">
          <Button className=''>Назад</Button>
          <Button className=''>Выбрать отрасли</Button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Добавьте список ваших позиций</h1>
        <p className="w-[400px] mt-4 text-[18px]">Для того, чтобы добавить позицию, вы можете нажать на кнопку ниже и загрузить файл или заполнить в ручном формате СТЕ</p>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[160px] w-[440px] bg-gray-500 items-center justify-center rounded-md border border-dashed text-sm">
            Фаил не выбран
          </ContextMenuTrigger>
        </ContextMenu>
        <Label htmlFor="file1">Загрузить фаил</Label>
        <Input id="file1" type="file" onChange={handleFileChange} />
        {selectedFile && (
          <p>Selected File: {selectedFile.name}</p>
        )}
      </div>
    </div>
  )
}

export default AddItemsList;