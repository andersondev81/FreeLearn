// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import ReviewCard from "./ReviewCard"

const Testimonial = () => {
  return (
    <div className="lg:px-12 px-4 mt-16  bg-bgShade py-16" id="testimonials">
      <div className="mb-20">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Opinião dos nossos alunos
        </h2>
      </div>

      {/* reviews */}
      <div>
        <ReviewCard />
      </div>
    </div>
  )
}

export default Testimonial
