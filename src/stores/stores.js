import { create } from "zustand";

export const useStore = create((set) => ({
  email: '',
  isLoggined: false,
  setEmail : () => {
    console.log('данные сохранены!!!');
    set((state) => ({email: state.email, isLoggined: true}))
  },
  deleteEmail: () => set({email: '', isLoggined: false})
}))


// import axios from "axios";

// export const useXlsStore = create(() => ({
  
//   sendXlsData: async (xlsData, url) => {
//     try {
//       const response = await axios.post(url, xlsData, {
//         headers: {
//           'Content-Type': 'application/vnd.ms-excel',
//         },
//       });
      
//       if (response.status === 200) {
//         console.log('Данные успешно отправлены.');
//       } else {
//         console.error('Произошла ошибка при отправке данных.');
//       }
//     } catch (error) {
//       console.error('Произошла ошибка:', error.message);
//     }
//   },
// }));
