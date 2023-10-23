import '../scss/ErrorPage.scss'
const ErrorPage = () => {
    return (
        <div className='error_page__container'>
            <div className="page__not__found">
                <h1>Page Not Found</h1>
                <p>The Page you are looking for might been removed</p>
                <p>had its name changed or is temporarilly unavailable</p>
                <button>Go to Home Page</button>
            </div>
        </div>
    )
}

export default ErrorPage
