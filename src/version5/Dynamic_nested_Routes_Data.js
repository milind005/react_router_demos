import React, { useMemo } from 'react'
import { BrowserRouter, Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'




const Data = [
    {
        id: 1,
        name: "NIKE Liteforce Blue Sneakers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
        status: "Available",
    },
    {
        id: 2,
        name: "Stylised Flip Flops and Slippers",
        description:
            "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
        status: "Out of Stock",
    },
    {
        id: 3,
        name: "ADIDAS Adispree Running Shoes",
        description:
            "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
        status: "Available",
    },
    {
        id: 4,
        name: "ADIDAS Mid Sneakers",
        description:
            "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
        status: "Out of Stock",
    },
];







const Dynamic_nested_Routes_Data = () => {

    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>

                { /* Route components are rendered if the path prop matches the current URL */}
                <Route exact path="/"><Home /></Route>
                <Route path="/category"><Category /></Route>
                <Route path="/products"><Products /></Route>

            </div>
        </BrowserRouter>
    );

}

export default Dynamic_nested_Routes_Data


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);


const Category = () => {
    const { url, path } = useRouteMatch();
    return (<div>
        <h1>Category</h1>
        <ul>
            <li>
                <Link to={`${url}/shoes`}>shoes</Link>
            </li>
            <li>
                <Link to={`${url}/Boots`}>Boots</Link>
            </li>
            <li>
                <Link to={`${url}/footwear`}>footwear</Link>
            </li>

        </ul>
        <Route path={`${path}/:name`}>
            <Item />
        </Route>
    </div>
    );
}

const Item = () => {
    const { name } = useParams()
    return (
        <div>
            <h3>{name}</h3>
        </div >
    )
}


const Products = () => {
    const productData = [...Data]
    const { url } = useRouteMatch();


    let linkList = useMemo(() => productData.map((product) => {
        return (
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
        )
    }), [])



    return (
        < div >
            < div >
                <div>
                    <h2>Products</h2>
                    <ul>{linkList}</ul>
                </div >
            </div >

            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
            <Route exact path={url}>
                <p>Please select a product.</p>
            </Route>
        </div >
    );
}


const Product = ({ data }) => {
    const { productId } = useParams()


    let product = data.find((p) => p.id === Number(productId))
    let productData
    if (product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        )
    }
    else {
        productData = <h2> Sorry. Product doesn't exist </h2>;
    }

    return (
        <div>
            <div>{productData}</div>
        </div>
    )
}