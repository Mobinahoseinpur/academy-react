
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import {Lines} from 'react-preloaders';
import SimpleReactValidator from "simple-react-validator";
import { registerUser } from "./../services/userService";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Register.module.css';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
 

const Register = ({ history }) => {
    const user = useSelector(state => state.user);

  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [nationId, setnationId] = useState("");
  const [loading, setLoading] = useState(false);

  const [Update, forceUpdate] = useState();
    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی میباشد",
                min: "کمتر از 8 کاراکتر نباید باشد",
                
                email: "ایمیل نوشته شده صحیح نمی باشد"
            },
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );

        const reset = () => {
          setFullname("");
          setPassword("");
          setEmail("");
          setNumber("");
          setBirthdate("");
          setnationId("");
         
        };
      
        const handleSubmit = async event => {
          event.preventDefault();
          // alert("Submited");
          const user = {
            fullName: fullname,
            email: email,
            password: password,
            phoneNumber: number,
            birthDate: birthdate,
            nationalId: nationId,
          };
  
          // console.log(JSON.stringify(user));
  
          try {
            if (validator.current.allValid()) {
                setLoading(true);
                
                const { status } = await registerUser(user);
                if (status === 201) {
                    //console.log(result.data)
                    toast.success("کاربر با موفقیت ساخته شد.", {
                        position: "top-right",
                        closeOnClick: true
                    });    
                    
                    setLoading(false);
                    history.push("/login");
                    reset();
                    <Redirect to="/" />
                }
            } 
            else {
                validator.current.showMessages();
                forceUpdate(1);
            }
            //history.push("/");
        } 
        catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
            setLoading(false);
            console.log(ex);
        }
    };
    //if (!isEmpty(user)) return <Redirect to="/" />;
  return ( 
  <React.Fragment>
    <div className="container">
    <div className="row ">
    
<div className={`${styles.part_left} col-lg-5 col-md-6 col-sm-12 `}>
    <div className={styles.txttitle}> ساخت حساب کاربری</div>
    {/* {loading ? (<Lines time={0.5} color="#fc03d7" customLoading={loading} />):null} */}
    <form onSubmit={handleSubmit}>
        
    <div className="mb-3">
          <label for="exampleInputEmail1" className={`${styles.txt_inp} form-label`}>نام کاربری</label>
          <input type="text"
          name="fullname"
           className={`${styles.inpinfo} form-control`} id="exampleInputEmail1"  value={fullname}    onChange={e => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor(
                                        "fullname"
                                    );
                                }}  aria-describedby="emailHelp"/>
                                 {validator.current.message(
                                "fullname",
                                fullname,
                                "required"
                            )}
        </div>


        <div className="mb-3">
          <label for="exampleInputPassword1" className={`${styles.txt_inp} form-label`}>رمز عبور</label>
          <div className={`${styles.txt_forget_pass} ${styles.forgetpass}`}> فراموشی رمز عبور</div>
          <input type="password" name="password" className={`${styles.inpinfo} form-control`} id="exampleInputPassword1"  value={password} onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}/>
                                {validator.current.message(
                                "password",
                                password,
                                "required|min:8"
                            )}
        </div>

        <div className="mb-3">
          <label for="exampleInputGmail1" className={`${styles.txt_inp} form-label`}>ایمیل </label>
          <input type="email" name="email" className={`${styles.inpinfo} form-control`} id="exampleInputGmail1"  value={email}    onChange={e => {
                                    setEmail(e.target.value);
                                    validator.current.showMessageFor("email");
                                }} aria-describedby="emailHelp"/>
                                {validator.current.message(
                                "email",
                                email,
                                "required|email"
                            )}
        </div>



        <div className="mb-3">
          <label for="exampleInputGmail1" className={`${styles.txt_inp} form-label`}>شماره تلفن </label>
          <input type="number" name="number" className={`${styles.inpinfo} form-control`} id="exampleInputGmail1"  value={number}     onChange={e => {
                                    setNumber(e.target.value);
                                    validator.current.showMessageFor(
                                        "number"
                                    );
                                }}  aria-describedby="emailHelp"/>
                                 {validator.current.message(
                                "number",
                                number,
                                "required"
                            )}
        </div>


        <div className="mb-3">
          <label for="exampleInputGmail1" className={`${styles.txt_inp} form-label`}>تاریخ تولد </label>
          <input type="birthdate" name="birthdate" className={`${styles.inpinfo} form-control`} id="exampleInputGmail1"  value={birthdate}     onChange={e => {
                                    setBirthdate(e.target.value);
                                    validator.current.showMessageFor(
                                        "birthdate"
                                    );
                                }}  aria-describedby="emailHelp"/>
                                 {validator.current.message(
                                "birthdate",
                                birthdate,
                                "required"
                            )}
        </div>


        <div className="mb-3">
          <label for="exampleInputGmail1" className={`${styles.txt_inp} form-label`}>کد ملی </label>
          <input type="nationId" name="nationId" className={`${styles.inpinfo} form-control`} id="exampleInputGmail1"  value={nationId}    onChange={e => {
                                    setnationId(e.target.value);
                                    validator.current.showMessageFor(
                                        "fullname"
                                    );
                                }}  aria-describedby="emailHelp"/>
                                 {validator.current.message(
                                "nationId",
                                nationId,
                                "required|min:10"
                            )}
        </div>
        
        
        
        <button type="submit" onSubmit={ handleSubmit} className={`${styles.btn_log} ${styles.btn_}  m-1  d-flex justify-content-center`}>
                            {" "}
                            ثبت نام {" "}
                        </button>
        <Link to="/Login"><div type="button" className={`${styles.btn_} ${styles.width_reg_btn}btn-outline-primary m-1 d-flex justify-content-center`}>{""} ورود{""}</div></Link>
      </form>
     
</div>

<div className={`${styles.part_right} col-lg-7 col-md-6 col-sm-5 d-none d-sm-block d-sm-none d-md-block`}>
    <img className={`${styles.img_main} row-cols-sm-4 `} src="../obj/illustration/mobile-testing-and-group-discussion-2080957.svg" alt=""/>
</div>
</div>
    </div>
</React.Fragment> );
}
 
export default Register;