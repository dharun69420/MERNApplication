function List(){
    return (
        <ol>
        <li>Fruits
            <ul><li>Apple</li><li>Mango</li><li>Orange</li></ul>
        </li>
        <li>Vegetables
            <ul style={{listStyleType:'lower-roman'}}><li>Carrot</li><li>Brinjal</li><li>Cabbage</li></ul>
        </li>
        <li>Grocery
            <ul style={{listStyleType:'upper-roman'}}><li>Chilli Powder</li><li>Turmeric</li><li>Salt</li></ul>
        </li>
        </ol>
    );
}
export default List;