// AboutSection.jsx
import './AboutSection.css'

const AboutSection = ({
  title,
  subtitle,
  description,
  bgColor = 'var(--primary-color)',
}) => {
  return (
    <section className='about-section'>
      {/* Franja azul de fondo */}
      <div
        className='about-section__background'
        style={{ backgroundColor: bgColor }}
      ></div>

      {/* Card superpuesta */}
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='about-section__card' data-aos='fade-up'>
              <h2 className='about-section__title'>{title}</h2>

              {subtitle && (
                <p className='about-section__subtitle'>{subtitle}</p>
              )}

              {description && (
                <p className='about-section__description'>{description}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
