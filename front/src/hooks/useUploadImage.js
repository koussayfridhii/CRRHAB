import { storage } from "../firebase";
import imageCompression from "browser-image-compression";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Generate a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const upload = async (file, storageRef) => {
  if (!file) {
    throw new Error("Please upload a file first!");
  }

  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, file);
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

const compressImage = async (file, storageRef) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
  };

  if (file?.type?.includes("pdf") || file?.type?.includes("word")) {
    return upload(file, storageRef);
  }

  try {
    const compressedFile = await imageCompression(file, options);
    console.log("Compression finished", compressedFile.size / 1024 / 1024);
    return upload(compressedFile, storageRef);
  } catch (error) {
    throw new Error("Image compression failed: " + error.message);
  }
};

const useUploadImage = async (uploadFolder, file) => {
  const fileName = file?.name?.split('.').slice(0, -1).join('.');
  const fileExtension = file?.name?.split('.').pop();
  const storageRef = ref(
    storage,
    `/${uploadFolder}/${fileName}${getRandomInt(10000000000)}.${fileExtension}`
  );

  try {
    return await compressImage(file, storageRef); // Wait for the upload to finish
  } catch (error) {
    throw error; // Propagate any errors
  }
};

export default useUploadImage;
