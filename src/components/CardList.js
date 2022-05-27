import Card from "./Card"
const CardList= ({robots}) => {
    // if(true){
    //     throw new Error('NOOOOOO')
    // }
    const CardArray = robots.map((user,i) => {
        return  <Card key={i} name={user.name} email={user.email} id={user.id} />
    })
    
    return (
        <div>
            {CardArray}
        </div>
    )
}
export default CardList