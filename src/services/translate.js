import axios from "axios";

const API_KEY = "AIzaSyDW4gj98s_w6L1dPiF-xOTbJpbnrS-1KuU";
//API lequachtien123@gmail.com
export async function translateText(text, targetLang) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang,
      format: "text",
    });

    if (response.data && response.data.data && response.data.data.translations) {
      return response.data.data.translations[0].translatedText;
    } else {
      console.error("API không trả về dữ liệu hợp lệ:", response.data);
      return text;
    }
  } catch (error) {
    console.error("Lỗi khi gọi Google Translate API:", error.response?.data || error.message);
    return text;
  }
}
