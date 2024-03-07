import React, { forwardRef, useRef, useState } from 'react';
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';






const Contact = forwardRef((props, ref)=> {

  const [messageMail, setMessageMail] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })

  const [errors, setErrors] = useState({});


  const validation = (messageMail) => {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!messageMail.user_name.trim()) {
      errors.user_name = 'El campo no puede estar vacio'
      }else if(!regexName.test(messageMail.user_name)) {
          errors.user_name = 'El campo solo acepta letras'
      }
    if (!messageMail.user_email) errors.user_email = "El campo no puede estar vacio";
    else {
        if (!regexEmail.test(messageMail.user_email)) errors.user_email = "Email no valido";
    }
    if (!messageMail.message) errors.message = "El campo no puede estar vacio";

    return errors;
}

  
  
const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessageMail({
      ...messageMail,
      [name]:value
    })

    setErrors(validation({
      ...messageMail,
      [name] : value
  }))
  }


  
const sendEmail = (event) => {
  event.preventDefault();

  if (Object.keys(errors).length !== 0) {
    // 
    Swal.fire({
      icon: "error",
      title: "Completa los campos",
      /* showConfirmButton: false, */
      /* timer: 1500, */
      customClass: {
        popup: 'center',
      }
    });
    return;
  }
    
    emailjs
        .sendForm('service_vawq4hk', 'template_3x0mtvo', form.current, {
          publicKey: 'AzUjYPnArmDCM7E8I',
        })
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Mensaje Enviado",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'center',
              }
            });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
  );
  setMessageMail({
    user_name: '',
    user_email: '',
    message: ''
  });

  
};



  return (
    <div className={style.container} ref={ref}>
      <h3>Contacto</h3>
      <p>//Envíame un mensaje o un correo electrónico.</p>
      <form onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder='Nombre' name='user_name' value={messageMail.user_name} onChange={handleChange} />
        {errors.user_name && <p className={style.msjP}>{errors.user_name}</p>}
        <input type="email" placeholder='Correo electrónico' name='user_email' value={messageMail.user_email} onChange={handleChange} />
        {errors.user_email && <p className={style.msjP}>{errors.user_email}</p>}
        <textarea type="text" placeholder='Mensaje...' name='message' value={messageMail.message} onChange={handleChange} />
        {errors.message && <p className={style.msjP}>{errors.message}</p>}
        <button>Enviar</button>
      </form>
    </div>
  )
})

export default Contact