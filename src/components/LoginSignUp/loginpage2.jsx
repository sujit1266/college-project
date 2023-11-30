import "./login.css";


const Loginpage = () => {
     return (
          <div className="login-main">
               <div class="animation">
                    <div class="center-div">
                         <h1>Login</h1>
                         <div class="input-container">
                              <div class="input1">
                                   <i class="fa-solid fa-user"></i>
                                   <input class="text1 inputText" type="text" placeholder="Username" autocomplete="off"></input>
                              </div>
                              <div class="input2">
                                   <i class="fa-solid fa-unlock"></i>
                                   <input class="text2 inputText" type="password" placeholder="password" autocomplete="off"></input>
                                   <i id="icon2" class="fa-solid fa-eye-slash"></i>
                              </div>
                              <button><b>Submit</b></button>
                         </div>
                         <div class="link">
                              <a id="a1" href="">Forgot password</a>
                              <a id="a2" href="">SignUp</a>
                         </div>

                    </div>
               </div>
          </div>
     )
}

export default Loginpage;