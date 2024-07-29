import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsContainer, HeadingContainer, Heading, BreadcrumbContainer, Description ,ProductCard} from './Products/Products.style';

 const GET_PRODUCT = gql`
  query GetProduct ($id: ID!) {
    product(id: $id ) {
        id
        name
        image
        price
        stock
        wishlist
        description
        badges
    }
  }
`;
 
const Product = () => {

    const { id } = useParams();
    console.log(id)

    const { loading, error, data } = useQuery(GET_PRODUCT, {
      
      variables: { id },
    }); 
    //console.log(data.product.name);
  
    const staticBaseURL = process.env.REACT_APP_STATIC_BASE_URL;
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="col-md-6 col-lg-4 mb-4">
            <ProductsContainer className="card">
            <div className="row">
    {/*            {data.product.id}
               {data.product.name}
               {data.product.image}
               {data.product.price}
               {data.product.stock}
               {data.product.description} */}

               <img src={`${staticBaseURL}/${data.product.image}`} className="card-img-top1" alt={data.product.name} />
               <div className="card-body">
                  <h5 className="card-title">{data.product.name}</h5>
                  <p className="card-text">{data.product.description}</p>
                  <p className="card-text">${data.product.price.toFixed(2)}</p>
               </div>
          </div>
               </ProductsContainer>
               </div>
           
      </div>
    );
  };
  
  export default Product;