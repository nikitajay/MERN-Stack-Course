import { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

   const submitloginForm =async() => {
     const paylode = {
      email : email,
      pass: pass
    
     }
    const apiResponse = await axios
    .post(`${import.meta.env.VITE_API_URL}/login`, paylode)
      .then((response) => navigate("/dashboard"))
                // Logging error if the request fails
               . catch((error) => console
                    .log(error))

                    console.log(apiResponse, "api response==>");
   }


  return (
    <div className="m-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Login</Card.Title>

          <form >
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <input
              type="password"
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <br /><br />

          <button className="btn btn-success"  onChange={ submitloginForm}>
                Login
                </button>


            <br /><br />

            <p className="text-danger">
              Don't have an account?{" "}
              <a href="/register">Register</a>
            </p>

          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;