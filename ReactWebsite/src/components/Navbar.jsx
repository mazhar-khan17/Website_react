// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { CgMenu, CgCloseR } from "react-icons/cg";
// import { useAuth0 } from "@auth0/auth0-react";


// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

//   const Nav = styled.nav`
//     .navbar-list {
//       display: flex;
//       gap: 4.8rem;

//       li {
//         list-style: none;

//         .navbar-link {
//           &:link,
//           &:visited {
//             display: inline-block;
//             text-decoration: none;
//             font-size: 1.8rem;
//             text-transform: uppercase;
//             color: ${({ theme }) => theme.colors.black};
//             transition: color 0.3s linear;
//           }

//           &:hover,
//           &:active {
//             color: ${({ theme }) => theme.colors.helper};
//           }
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;

//       .close-outline {
//         display: none;
//       }
//     }

//     .mobile-navbar-btn[name="close-outline"] {
//       display: none;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       /* hide the original nav menu  */
//       .navbar-list {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-content: center;
//         flex-direction: column;
//         text-align: center;

//         transform: translateX(100%);

//         visibility: hidden;
//         opacity: 0;

//         li {
//           .navbar-link {
//             &:link,
//             &:visited {
//               font-size: 4.2rem;
//             }

//             &:hover,
//             &:active {
//               color: ${({ theme }) => theme.colors.helper};
//             }
//           }
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 3%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .active .navbar-list {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={openMenu ? "menuIcon active" : "menuIcon"}>
//         <ul className="navbar-list">
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/about">
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/service">
//               Services
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navbar-link"
//               onClick={() => setOpenMenu(false)}
//               to="/contact">
//               Contact
//             </NavLink>
//           </li>
//           {
//             isAuthenticated ? (
//             <li>
//               <button
//             onClick={() => logout({ returnTo: window.location.origin})}>
//               Log Out
//             </button>
//             </li>
//             ) : (
//           <li>
//              <button onClick={() => loginWithRedirect()}>Log In</button>
//           </li>

//             )
//           }

//         </ul>
//         {/* //nav icon */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setOpenMenu(true)}
//           />
//           <CgCloseR
//             name="close-outline"
//             className="close-outline mobile-nav-icon"
//             onClick={() => setOpenMenu(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

// export default Navbar;






```jsx
<button
  className="auth-btn"
  onClick={() => loginWithRedirect()}
>
  Log In
</button>
```

Aur `Nav` ke andar CSS me ye add karo:

```css
.auth-btn {
  border: none;
  outline: none;
  padding: 1rem 2.4rem;
  border-radius: 50px;

  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: #fff;
  background: linear-gradient(135deg, #667eea, #764ba2);

  cursor: pointer;

  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);

  transition: all 0.3s ease;
}

.auth-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(102, 126, 234, 0.45);
  background: linear-gradient(135deg, #764ba2, #667eea);
}

.auth-btn:active {
  transform: translateY(-1px);
}
```
