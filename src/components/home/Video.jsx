import styles from './video.module.css'
import videoPrincipal from '@/assets/video/ascensor.mp4'

const Video = () => {
  return (
    <section className={`${styles.video}`}>
      <div className={`${styles.overlay}`}></div>
      <video
        playsInline='playsinline'
        autoPlay='autoplay'
        muted='muted'
        loop='loop'
      >
        <source src={videoPrincipal} type='video/mp4' />
      </video>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className={`col-md-12 ${styles.content}`}>
            <h1 data-aos='fade-up' className='bebas'>
              Tecnología <br />
              en <span>Ascenso</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video
