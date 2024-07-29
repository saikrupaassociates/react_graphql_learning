import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCard = styled(Link)`
  text-decoration: none;
  color: inherit;

  .card {
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
  }

  .card-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(11 11 11 / 19%);
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 1.8em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* export const ProductsContainer = styled.div` */

export const ProductsContainer = styled(Link)`
  .card {
    position: relative;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }

  .card-img-top {
    height: 300px;
    object-fit: cover;
  }

    .card-img-top1 {
    height: 600px;
    object-fit: cover;
  }

  .card-body {
    text-align: center;
  }

  .wishlist-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2em;
    color: #999;
    cursor: pointer;
    &.active {
        color: red;
    }
  }

  .badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #999;
    color: white;
    padding: 5px;
    font-size: 0.8em;
  }

  .btn {
    margin-top: 10px;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  flex-direction: column;
`;

export const Heading = styled.h2`
  align-item: center;
`;

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  justify-content: center;

  .breadcrumb-item {
    margin-right: 5px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    color: #000;
    &:before {
        margin-right: 5px;
    }
    &:last-child {
        font-weight: initial;
      text-decoration: none;
      pointer-events: none;
    }
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
`;
