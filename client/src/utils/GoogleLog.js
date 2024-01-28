import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleHandlear = (register) => {
  signInWithPopup(auth, provider)
    .then((res) => {
      if (register) {
        console.log(register);
        fetch("https://student-portal-server-beta.vercel.app/users", {
          method: "POST",
          body: JSON.stringify({ email: res.user.email }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }
      Swal.fire({
        title: "Good job!",
        text: "You are login/signIn successfully",
        icon: "success",
      });
    })
    .catch((err) => console.log(err));
};

export default googleHandlear;
