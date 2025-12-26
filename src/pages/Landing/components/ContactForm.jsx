// ContactForm.jsx
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { processValues } from '@/utils/dataUtils.js'

import './ContactForm.css'

const ContactForm = () => {
  const [isSubscribed, setIsSubscribed] = useState(true)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    phone: Yup.string()
      .min(8, 'El teléfono debe tener al menos 8 dígitos')
      .required('El teléfono es requerido'),
    comments: Yup.string()
      .min(10, 'La comentarios debe tener al menos 10 caracteres')
      .required('Los comentarios son requeridos'),
  })

  const handleChange = event => {
    setIsSubscribed(event.target.checked)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      comments: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const data = await processValues(
        values,
        'form_landing',
        'Formulario Landing',
        executeRecaptcha,
        isSubscribed,
      )

      try {
        const res = await axios.post(
          import.meta.env.VITE_ROOT + 'php/process.php',
          data,
        )

        const myJson = JSON.stringify(res.data)
        const responseData = JSON.parse(myJson)

        if (responseData.success) {
          toast.success(responseData.msg_success)

          window.dataLayer.push({
            formLocation: 'form_landing',
            event: 'send_form_landing',
          })
        } else {
          responseData.errors.map(error => {
            return toast.error(error)
          })
        }
      } catch (error) {
        // Realizar acciones en caso de error
        toast.error(
          'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
        )
      }

      resetForm()
    },
  })

  return (
    <>
      <div className='contact-form' id='contact-form'>
        <div className='contact-form__header'>
          <h3 className='contact-form__title'>PRESUPUESTÁ AHORA</h3>
        </div>

        <form onSubmit={formik.handleSubmit} className='contact-form__body'>
          {/* nombre completo */}
          <div className='mb-3'>
            <input
              type='text'
              className={`form-control contact-form__input ${
                formik.touched.name && formik.errors.name ? 'is-invalid' : ''
              }`}
              id='name'
              name='name'
              placeholder='nombre'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='invalid-feedback'>{formik.errors.name}</div>
            )}
          </div>

          {/* Email y Teléfono */}
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <input
                type='email'
                className={`form-control contact-form__input ${
                  formik.touched.email && formik.errors.email
                    ? 'is-invalid'
                    : ''
                }`}
                id='email'
                name='email'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='invalid-feedback'>{formik.errors.email}</div>
              )}
            </div>

            <div className='col-md-6 mb-3'>
              <input
                type='tel'
                className={`form-control contact-form__input ${
                  formik.touched.phone && formik.errors.phone
                    ? 'is-invalid'
                    : ''
                }`}
                id='phone'
                name='phone'
                placeholder='Teléfono'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className='invalid-feedback'>{formik.errors.phone}</div>
              )}
            </div>
          </div>

          {/* comentarios */}
          <div className='mb-3'>
            <textarea
              className={`form-control contact-form__input contact-form__textarea ${
                formik.touched.comments && formik.errors.comments
                  ? 'is-invalid'
                  : ''
              }`}
              id='comments'
              name='comments'
              placeholder='consulta'
              rows='4'
              value={formik.values.comments}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.comments && formik.errors.comments && (
              <div className='invalid-feedback'>{formik.errors.comments}</div>
            )}
          </div>

          {/* Newsletter checkbox */}
          <div className='mb-4'>
            <div className='form-check contact-form__check'>
              <input
                className='form-check-input'
                type='checkbox'
                onChange={handleChange}
                checked={isSubscribed}
                name='newsletter'
                id='newsletter'
              />
              <label className='form-check-label' htmlFor='newsletter'>
                Suscribirse al Newsletter
              </label>
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            className='btn contact-form__submit transition'
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
