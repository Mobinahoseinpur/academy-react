
import { BrowserRouter,Route,NavLink,withRouter } from 'react-router-dom';
import React, { useState,useRef } from "react";
import { loginUser } from "./../services/userService";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Login/Login.module.css';
import SimpleReactValidator from "simple-react-validator";
import {Sugar} from 'react-preloaders';
 import Register from '../register/Register';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [Update, forceUpdate] = useState(); 

  const validator = useRef(
      new SimpleReactValidator({
          messages: {
              required: "پر کردن این فیلد الزامی میباشد",
              min: "کمتر از 8 رقم نباید باشد",
              email: "ایمیل نوشته شده صحیح نمی باشد"
          },
          element: message => <div style={{ color: "red" }}>{message}</div>
      })
  );

  const reset = () => {
      setEmail("");
      setPassword("");
  };

  const handleSubmit = async event => {
      event.preventDefault();
      const user = { email, password };

      try {
          if (validator.current.allValid()) {
              setLoading(true);
              const { status, data } = await loginUser(user);
              if (status === 200) {
                  toast.success("ورود موفقیت آمیز بود.", {
                      position: "top-right",
                      closeOnClick: true
                  });
                  localStorage.setItem("token", data.token);
                  setLoading(false);
                  history.replace("/");
                  reset();
              }
          } else {
              validator.current.showMessages();

              forceUpdate(1);
          }
      } catch (ex) {
          console.log(ex);
          setLoading(false);
          toast.error("مشکلی پیش آمده.", {
              position: "top-right",
              closeOnClick: true
          });
      }
  };

  
  return ( 
    <React.Fragment>
        {/* <BrowserRouter> */}
    <div className="container">
    <div className="row ">
    {/* {loading ? (<Sugar time={0.5} color="#fc03d7" customLoading={loading} />):null} */}
<div className={`${styles.part_left} col-lg-5 col-md-6 col-sm-12 `}>
    <div className={styles.txttitle}>ورود به حساب کاربری</div>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
          <label for="exampleInputEmail1" className={`${styles.txt_inp} form-label`}>ایمیل</label>
          <input type="text" className={`${styles.inpinfo} form-control`} id="exampleInputEmail1"  value={email}   onChange={e => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}  />
         {validator.current.message(
                                "email",
                                email,
                                "required|email"
                            )}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className={`${styles.txt_inp} form-label`}>رمز عبور</label>
          <div className={`${styles.txt_forget_pass} ${styles.forgetpass}`}> فراموشی رمز عبور</div>
          <input type="password" className={`${styles.inpinfo} form-control`} value={password} onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}  id="exampleInputPassword1" />
                                {validator.current.message(
                                "password",
                                password,
                                "required|min:5"
                            )}
        </div>
        <div className="mb-3 form-check">
           <input type="checkbox" className={styles.inp_rememberme}  id="exampleCheck1"/> 
          <label className={`${styles.txt_forget_pass} ${styles.rememberme} form-check-label`} for="exampleCheck1">مرا به خاطر بسپار</label> 
        </div>
        <button type="submit" className={`${styles.btn_log} ${styles.btn_}  m-1  d-flex justify-content-center`}>
                        {/* <NavLink to='/'> */}
                            {" "}
                            ورود {" "}
                        {/* </NavLink> */}
                        </button>
        <NavLink to='Register'><div type="button" className={`${styles.btn_} ${styles.width_reg_btn}btn-outline-primary m-1 d-flex justify-content-center`}>{""}ثبت نام {""}</div></NavLink>
      </form>
     
</div>

<div className={`${styles.part_right} col-lg-7 col-md-6 col-sm-5 d-none d-sm-block d-sm-none d-md-block`}>
    <img className={`${styles.img_main} row-cols-sm-4 `} src="obj/img/illustration/mobile-testing-and-group-discussion-2080957.svg" alt=""/>
</div>
</div>
    </div>
    {/* </BrowserRouter> */}
</React.Fragment>
   );
}
   
 
  export default withRouter(Login);