import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleHandlear = () => {
  signInWithPopup(auth, provider)
    .then((res) =>
      Swal.fire({
        title: "Good job!",
        text: "You are login/signIn successfully",
        icon: "success",
      })
    )
    .catch((err) => console.log(err));
};

export default googleHandlear;
