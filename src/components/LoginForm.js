// import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { login } from "../store/actions/Auth";

// const LoginForm = () => {
//     const baca_dispatch = useDispatch()
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const submit = (e) => {
//         e.preventDefault()
//         const userData = {
//             email,
//             password
//         }
//         baca_dispatch(login(userData))
//     }

//     return (
//         <div>
//             <form onSubmit={submit}>
//                 <input
//                     type="email"
//                     value={email}
//                     name="email"
//                     placeholder="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     value={password}
//                     name="password"
//                     placeholder="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }

// export default LoginForm;