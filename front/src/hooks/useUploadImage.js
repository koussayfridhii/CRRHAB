import { storage } from "../firebase";
import imageCompression from "browser-image-compression";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Générer un entier aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const upload = async (file, storageRef) => {
  if (!file) {
    throw new Error("Veuillez d'abord télécharger un fichier !");
  }

  return new Promise((resolve, reject) => {
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Mises à jour de progression
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        reject(err); // Rejet en cas d'erreur
      },
      () => {
        // URL de téléchargement
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            resolve(url); // Résoudre avec l'URL de téléchargement
          })
          .catch(reject); // Rejet en cas d'erreur
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
    console.log("Compression terminée", compressedFile.size / 1024 / 1024);
    return upload(compressedFile, storageRef);
  } catch (error) {
    throw new Error("La compression de l'image a échoué : " + error.message);
  }
};

const useUploadImage = async (uploadFolder, file) => {
  const storageRef = ref(
    storage,
    `/${uploadFolder}/${file?.name}${getRandomInt(10000000000)}`
  );

  try {
    return await compressImage(file, storageRef); // Attendre la fin du téléchargement
  } catch (error) {
    throw error; // Propager toutes les erreurs
  }
};

export default useUploadImage;
