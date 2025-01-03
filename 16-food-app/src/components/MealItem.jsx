

export default function MealItem({ meal, onOrder }) {
    return (
        <article className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt={`${meal.name} Image`} />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">${meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
                <button className="button" onClick={() => onOrder(meal.id)}>Add To Cart</button>
            </div>
        </article>
    );
}
