import './Welcome.scss'
const Welcome = () => {
    return (
        <div className='welcome'>
            <div className="content">
                <h1>Welcome to Our Recipe Wonderland</h1>
                <p>Welcome to Our Recipe Wonderland! Dive into the delightful world of culinary creativity and gastronomic adventures. Here, you'll uncover a treasure trove of delectable recipes, cooking tips, and food inspiration. Whether you're a seasoned chef or a novice in the kitchen, our website is your culinary sanctuary.</p>

                <p>Explore the vast array of dishes, from the classics to the avant-garde, and let your taste buds embark on a mouthwatering journey. Thank you for choosing us as your go-to recipe source.</p>

                <p>Let's embark on a flavorful expedition together and savor the joys of cooking!</p>

                <div className="buttons">
                    <button type="button">Browse Recepies</button>
                    <button className="shop__btn">Search Recepies</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome