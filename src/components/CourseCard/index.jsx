// Write your code here
import './index.css'
const CourseCard = props => {
  const {courseName, duration, category} = props
  return (
    <div className="course-banner">
      <div className="course-banner-info">
        <h1 className="course-banner-name">{courseName}</h1>
        <p className="course-banner-duration ">Duration: {duration}</p>
        <p className="course-banner-category">Category: {category}</p>
      </div>
    </div>
  )
}
export default CourseCard
