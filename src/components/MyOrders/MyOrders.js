const MyOrders = () => {

    let pastOrders = ( <ul className="my-pets-list">
    <li className="otherPet">
        <h3>Name: Milo</h3>
        <p>Type: dog</p>
        <p className="img"><img src="/images/dog.png" /></p>
        <a className="button" href="#">Details</a>
    </li>
    <li className="otherPet">
        <h3>Name: Tom</h3>
        <p>Type: cat</p>
        <p className="img"><img src="/images/cat1.png" /></p>
        <a className="button" href="#">Details</a>
    </li>
</ul>
)
    return (
        <section id="my-orders-page" className="my-orders">
            <h1>My Orders</h1>
            {pastOrders }
           
        
            <p className="no-pets">No pets in database!</p>
        </section>
    );
};
export default MyOrders;  