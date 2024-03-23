import { create } from "zustand";
import axios from "axios";

export const useXlsStore = create(() => ({
  
  sendXlsData: async (xlsData, url) => {
    try {
      const response = await axios.post(url, xlsData, {
        headers: {
          'Content-Type': 'application/vnd.ms-excel',
        },
      });
      
      if (response.status === 200) {
        console.log('Данные успешно отправлены.');
      } else {
        console.error('Произошла ошибка при отправке данных.');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error.message);
    }
  },
}));
