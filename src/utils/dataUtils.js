import accesorios from '@/data/accesorios.json'
import accesoriosSection from '@/data/accesorios-section.json'
import images from '@/data/carrusel-empresa.json'
import cabinas from '@/data/carrusel-home-cabinas.json'

export const getAccesorios = key => accesorios[key]
export const getAccesoriosSection = key => accesoriosSection[key]
export const getImgCarruselEmpresa = key => images[key]
export const getCabinas = key => cabinas[key]

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu mensaje'
  }
  return errors
}

export const getLink = link => {
  var linkToAttribute = '#'

  switch (link) {
    case 'whatsapp':
      linkToAttribute = import.meta.env.VITE_LINK_TO_WHATSAPP
      break
    case 'mail':
      linkToAttribute = import.meta.env.VITE_MAILTO
      break
    case 'address':
      linkToAttribute = import.meta.env.VITE_ADDRESS
      break

    default:
      linkToAttribute = '#'
  }
  return linkToAttribute
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
