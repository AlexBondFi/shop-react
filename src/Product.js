import './index.css';
const Product = (props) =>{
    const {id, title, category, price, description, image, rating} = props; // we can write it not with const, but write all props in line 1 instaed of "props" directly.
    const generateStars = (rate) => {
        const fullStar = "★";
        const emptyStar = "☆";
    
        let stars = "";
        for (let i = 0; i < 5; i++) {
            stars += i < rate ? fullStar : emptyStar;
        }
        return stars;
    };
    
    return (
        <div className="card h-100">
            <img className='card-img-top' src={image} alt={title}/>
            <div className='card-body flex-grow-1'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text'>Category: {category}</p>
                <p className='card-text'>{description}</p>
                <p className='card-text'>Price is: {price} €</p>
                <p className='card-text'>Rating: {generateStars(rating.rate)}</p>
                <p className='card-text'>👍: {rating.count}</p>
                <button className='btn btn-add'></button>
            </div>
        </div>
    );
    
}

export default Product;