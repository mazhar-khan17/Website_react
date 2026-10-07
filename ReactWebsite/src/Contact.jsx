import React from "react";
import styled from "styled-components";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          .input-group {
            position: relative;

            svg {
              position: absolute;
              top: 50%;
              left: 15px;
              transform: translateY(-50%);
              color: #777;
              font-size: 1.2rem;
            }

            input,
            textarea {
              width: 100%;
              padding: 1rem 1.5rem 1rem 3rem; /* left padding for icon */
              border-radius: 0.7rem;
              border: 1px solid #ccc;
              outline: none;
              font-size: 1rem;
              background: #f9f9f9;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
              transition: all 0.3s ease;

              &:focus {
                border: 1px solid ${({ theme }) => theme.colors.btn};
                box-shadow: 0 0 8px ${({ theme }) => theme.colors.btn};
                background: #fff;
              }
            }

            textarea {
              resize: none;
              min-height: 120px;
            }
          }

          input[type="submit"] {
            background: linear-gradient(
              135deg,
              ${({ theme }) => theme.colors.btn},
              #6a11cb
            );
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 1rem 2rem;
            border: none;
            border-radius: 0.7rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;

            &:hover {
              transform: translateY(-3px) scale(1.05);
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            }

            &:active {
              transform: translateY(0) scale(0.98);
              box-shadow: none;
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvgwrwpz"
            method="POST"
            className="contact-inputs">
            
            {/* Username */}
            <div className="input-group">
              <FaUser />
              <input
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>

            {/* Message */}
            <div className="input-group">
              <FaRegCommentDots />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Write your message..."
                autoComplete="off"
                required></textarea>
            </div>

            {/* Submit Button */}
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
