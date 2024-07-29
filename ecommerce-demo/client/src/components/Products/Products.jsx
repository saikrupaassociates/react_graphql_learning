import React from 'react';
import { useQuery, gql,useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductsContainer, HeadingContainer, Heading, BreadcrumbContainer, Description ,ProductCard} from './Products.style';
//import Product from '../Product';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categoryId: ID!) {
    category(id: $categoryId) {
      name
      description
    }
    productsByCategory(categoryId: $categoryId) {
      id
      name
      description
      price
      category {
      id
      }
      image
      badges
      wishlist
    }
  }
`;
const UPDATE_WISHLIST_STATUS =gql`
  mutation UpdateWishlistStatus($id:ID!,$wishlist:Boolean!){
    updateWishlistStatus(id:$id,wishlist:$wishlist){
       id
       wishlist
    }
  }
`;



const Products = () => {
  const { categoryId } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { categoryId },
  });
  const [updateWishlistStatus] = useMutation(UPDATE_WISHLIST_STATUS);


  const handleWishlistToggle = async (productId,currentStatus,event) => {

    try {
      event.stopPropagation();
      event.preventDefault();
        await updateWishlistStatus ({
            variables: {id: productId, wishlist : !currentStatus},
            refetchQueries: [{query: GET_PRODUCTS_BY_CATEGORY,variables: {categoryId}}],
  
    });
    }
    catch(error){
      console.log(error);
    }
  
  }


  const staticBaseURL = process.env.REACT_APP_STATIC_BASE_URL;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <BreadcrumbContainer>
        <Link to="/" className="breadcrumb-item">Home</Link>
        <Link to="/shop" className="breadcrumb-item">Shop</Link>
        <span className="breadcrumb-item">{data.category.name}</span>
      </BreadcrumbContainer>
      <HeadingContainer>
        <Heading>{data.category.name}</Heading>
        <Description>{data.category.description}</Description>
      </HeadingContainer>
      <div className="row">
        
        {data.productsByCategory.map(product => (
          
          <div key={product.id} className="col-md-6 col-lg-3 mb-4">
             
             <ProductsContainer to={`/shop/${categoryId}/${product.id}`} className="card"> 

              <div className="card">
                {product.badges && product.badges.split(',').map(badge => (
                  <span key={badge} className="badge">{badge}</span>
                  
                ))}
                <FontAwesomeIcon icon={faHeart}
                className={`wishlist-icon ${product.wishlist ? 'active' :''}`}
                onClick={(event)=> handleWishlistToggle(product.id,product.wishlist,event)}
                />
               
                <img src={`${staticBaseURL}/${product.image}`} className="card-img-top" alt={product.name} />
                
                <div className="card-body">

                {/* <PLPContainer to={`/shop/${categoryId}/${product.id}`} className="card">  */}
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                {/* </PLPContainer> */}
                  
                  <button className="btn btn-dark">
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </button>
                </div>
              </div>
            </ProductsContainer>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;