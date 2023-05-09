const MealsList = () => {
    const meals = ['Meal-1', 'Meal-2', 'Meal-3'];
    return (
        <div>
            <h1>Meals List using Context API</h1>
            {
                meals.map((meal, index) => (
                    <h2 key={index}>{meal}</h2>
                ))
            }
        </div>
    );
}

export default MealsList;
