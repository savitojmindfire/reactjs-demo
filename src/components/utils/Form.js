import React from "react";
import "./form.css";

import Input from "./Input";
const Form = ({ closeModal, onSubmit }) => {
  const sender_ref = React.useRef(null);
  const subject_ref = React.useRef(null);
  const email_type_ref = React.useRef(null);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        makeData({ sender_ref, subject_ref, email_type_ref })
          .then((data) => {
            onSubmit(data);
          })
          .then(closeModal);
      }}
    >
      <Input placeholder="sender" input_ref={sender_ref} />
      <Input placeholder="subject" input_ref={subject_ref} />
      <Input placeholder="email type" input_ref={email_type_ref} />

      <button type="submit">submit</button>
    </form>
  );
};

const makeData = ({ sender_ref, subject_ref, email_type_ref }) => {
  return Promise.resolve({
    sender: sender_ref.current.value || "Dummy sender",
    subject: subject_ref.current.value || "Dummy subject",
    email_type: email_type_ref.current.value || "Dummy email type",
  });
};

export default Form;
