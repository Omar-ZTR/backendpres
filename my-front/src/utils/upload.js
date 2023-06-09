import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "preserv");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/ingomr/image/upload", data );
    console.log(res.data);
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
