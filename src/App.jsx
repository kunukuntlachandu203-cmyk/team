import CoursePage from './components/CoursePage'

import './App.css'

const App = () => (
  <div className="catalog-app-container">
    <div className="catalog-content-container">
      <h1 className="catalog-heading">Course Catalog</h1>
      <p className="catalog-description">
        Browse our wide range of courses across different categories. Find the
        perfect course to enhance your skills and advance your career.
      </p>
      <CoursePage />
    </div>
  </div>
)

export default App
