import { Link } from 'react-router'
function footer() {
  return (
    <>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} | API Hub |{' '}
          <Link to='https://dat3cph.github.io/material/'>3rd semester</Link> |{' '}
          <Link to='https://www.cphbusiness.dk/'>Cphbusiness</Link>
        </p>
      </footer>
    </>
  )
}

export default footer
