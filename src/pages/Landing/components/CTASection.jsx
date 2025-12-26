// CTASection.jsx
import './CTASection.css'

const CTASection = ({
  title,
  description,
  buttonText = 'CONTACTANOS',
  targetId = 'contact-form', // ID del elemento al que hacer scroll
}) => {
  const handleScrollToForm = e => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      // Opcional: agregar un pequeño delay y luego focus al primer input
      setTimeout(() => {
        const firstInput = targetElement.querySelector('input, textarea')
        if (firstInput) {
          firstInput.focus()
        }
      }, 800)
    }
  }

  return (
    <section className='cta-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-10 col-xl-8'>
            <div className='cta-section__content' data-aos='fade-up'>
              <h2 className='cta-section__title'>{title}</h2>

              {description && (
                <p className='cta-section__description'>{description}</p>
              )}

              <button
                className='cta-section__button'
                onClick={handleScrollToForm}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
