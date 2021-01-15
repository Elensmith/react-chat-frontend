// import React from "react";

function FormValidator() {
  // const [errors, setErrors] = React.useState({
  //   nameError: false,
  //   emailError: false,
  //   avatarError: false,
  //   passwordError: false
  // });
  


  function InputValidation(inputs) {
    // let name = inputs.name;
    // let valid = true;
    // inputs.map((input) => {
      console.log(inputs, inputs.name, inputs.email);
    // });
    // if(inputs.name && !input.validity.valid) {
    //   console.log("errrrrr");
    // }
  }

  return { InputValidation };
  
}


export default FormValidator;