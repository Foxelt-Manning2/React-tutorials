
//     sort function in  the () you can create another bracket in which you state your criteria for comparing
// the examples below are only for ascending
//    Characters.sort( (a,b) =>a.name.localeCompare(b.name));
//    Characters.sort((a,b)=> a.age - b.age);

// for the filter function = it creates an array for the criteria specified in its brackets
// const OldCharacters = Characters.filter(Character => Character.age <50);

import PropTypes from 'prop-types'

function List(props){
const category =props.category;
const itemList = props.items;

const listItems = itemList.map(item => <li key={item.id}>
                                         {item.name} : {item.age}</li>);
    return(<>
    <h1 className="list-category">{category}</h1>
    <ol className="list-items">{listItems}</ol>
    </>)
}

List.defaultProps={
    category:"category",
    items:[]
}
List.PropTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string ,
        age:PropTypes.number
    }))
}
export default List;