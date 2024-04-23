import { storage } from "../firebase";
import imageCompression from "browser-image-compression";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//generate random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const upload = async (image, storageRef, setUrl, setLoading) => {
  if (!image) {
    alert("Please upload a file first!");
    return;
  }
  setLoading(true);
  // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
  const uploadTask = uploadBytesResumable(storageRef, image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const percent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (err) => {
      setLoading(false);
      console.log(err);
    },
    () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setUrl(url);
        setLoading(false);
      });
    }
  );
};

const compressImage = async (imageFile, storageRef, setUrl, setLoading) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
  };
  let compressedFile;
  if (imageFile?.type?.includes("pdf")) {
    setImage(imageFile);
    return;
  }
  try {
    compressedFile = await imageCompression(imageFile, options);
    alert("compression done", compressedFile.size / 1024 / 1024);
    upload(imageFile, storageRef, setUrl, setLoading);
  } catch (error) {
    alert(error);
  }
};

const useUploadImage = async (uploadFolder, image, setUrl, setLoading) => {
  const storageRef = ref(
    storage,
    `/${uploadFolder}/${image?.name}${getRandomInt(10000000000)}`
  );
  compressImage(image, storageRef, setUrl, setLoading);
};
export default useUploadImage;
