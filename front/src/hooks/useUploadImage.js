import { storage } from "../firebase";
import imageCompression from "browser-image-compression";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Generate random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const upload = async (image, storageRef) => {
  if (!image) {
    throw new Error("Please upload a file first!");
  }

  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress updates
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        reject(err); // Reject on error
      },
      () => {
        // Download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            resolve(url); // Resolve with download URL
          })
          .catch(reject); // Reject on error
      }
    );
  });
};

const compressImage = async (imageFile, storageRef) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
  };

  if (imageFile?.type?.includes("pdf")) {
    return upload(imageFile, storageRef);
  }

  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log("Compression done", compressedFile.size / 1024 / 1024);
    return upload(compressedFile, storageRef);
  } catch (error) {
    throw new Error("Image compression failed: " + error.message);
  }
};

const useUploadImage = async (uploadFolder, image) => {
  const storageRef = ref(
    storage,
    `/${uploadFolder}/${image?.name}${getRandomInt(10000000000)}`
  );

  try {
    return await compressImage(image, storageRef); // Await upload completion
  } catch (error) {
    throw error; // Propagate any errors
  }
};

export default useUploadImage;
