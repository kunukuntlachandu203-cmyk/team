import CourseCard from '../CourseCard'
import './index.css'
const CoursePage = () => {
  return (
    <div>
      <CourseCard
        courseName="HTML & CSS Fundamentals"
        duration="6 Weeks"
        category="Web Development"
      />
      <CourseCard
        courseName="JavaScript Essentials"
        duration="8 Weeks"
        category="Web Development"
      />
    </div>
  )
}

export default CoursePage
