// import { useRef, useEffect, useState } from "react";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const regis = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     setValidName(result);
//   }, [user]);

//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     setValidPwd(result);
//     const match = pwd === matchPwd;
//     setValidMatch(match);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd, matchPwd]);
//   return (
//     <section>
//       <p
//         ref={errRef}
//         className={errMsg ? "errmsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>
//       <h1>Register</h1>
//       <form>
//         <label htmlFor="username">
//           UserName:
//           <span className={validName ? "valid" : "hide"}>true</span>
//           <span className={validName || !user ? "hide" : "invalid"}>false</span>
//         </label>
//         <input
//           type="text"
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUSer(e.target.value)}
//           required
//           aria-invalid={validName ? "false" : "true"}
//           aria-describedby="uidnote"
//           onFocus={() => setUserFocus(true)}
//           onBlur={() => setUserFocus(false)}
//         />
//         <p
//           id="uidnote"
//           className={
//             userFocus && user && !validName ? "instructios" : "offscreen"
//           }
//         >
//           4 to 24 characters.
//           <br />
//           Must begin with a letter.
//           <br />
//           Letters, numbers, underscores, hyphens allowed.
//         </p>

//         <label htmlFor="password">
//           Password:
//           <span className={validPwd ? "valid" : "hide"}>true</span>
//           <span className={validPwd || !pwd ? "hide" : "invalid"}></span>
//         </label>
//         <input
//           type="password"
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           value={pwd}
//           required
//           aria-invalid={validPwd ? "false" : "true"}
//           aria-describedby="pwdnote"
//           onFocus={() => setPwdFocus(true)}
//           onBlur={() => setPwdFocus(false)}
//         />
//         <p
//           id="pwdnote"
//           className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
//         >
//           8 to 24 characters.
//           <br />
//           Must include uppercase and lowercase letters, anumber and aspecial
//           character.
//           <br />
//           Allowed special characters:
//           <span aria-label="exclamation mark">!</span>{" "}
//           <span aria-label="at symbol">@</span>{" "}
//           <span aria-label="dollar sign">$</span>{" "}
//           <span aria-label="percent">%</span>
//         </p>

//         <label htmlFor="confirm_pwd">
//           Confirm Password:
//           <span className={validMatch && matchPwd ? "valid" : "hide"}>
//             true
//           </span>
//           <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//             false
//           </span>
//         </label>
//         <input
//           type="password"
//           id="confirm_pwd"
//           onChange={(e) => setMatchPwd(e.target.value)}
//           value={matchPwd}
//           required
//           aria-invalid={validMatch ? "false" : "true"}
//           aria-describedby="confirmnote"
//           onFocus={() => setMatchFocus(true)}
//           onBlur={() => setMatchFocus(false)}
//         />
//         <p
//           id="confirmnote"
//           className={matchFocus && !validMatch ? "instructions" : "offscreen"}
//         >
//           Must match the first password input field.
//         </p>
//       </form>
//     </section>
//   );
// };

// export default regis;
