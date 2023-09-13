import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { CartContext } from "../context/cartContext";
const CategoryProduct = ({
    id,
    title,
    image,
    specs,
    features,
    price,
    stock,
}) => {
    const navigate = useNavigate();
    const { addproduct } = useContext(CartContext);

    return (
        <ProductInfoArticle>
            <ProductTitle>
                <Link to={`/products/${id}`}>{title}</Link>
            </ProductTitle>

            <figure>
                <ProductImageContainer>
                    <ProductImage src={`/assest/${image}`} alt={title} />
                </ProductImageContainer>
            </figure>

            <aside>
                <ProductInfo>
                    <ProductInfoHeader>Dimensions</ProductInfoHeader>
                    <label>{specs.dimensions}</label>
                </ProductInfo>

                {specs.capacity && (
                    <ProductInfo>
                        <ProductInfoHeader>Capacity</ProductInfoHeader>
                        <label>{specs.capacity}</label>
                    </ProductInfo>
                )}

                <ProductInfo>
                    <ProductInfoHeader>Features</ProductInfoHeader>
                    <ul>
                        {features?.map((f, i) => {
                            return <ProductInfoListItem key={`feature${i}`}>{f}</ProductInfoListItem>;
                        })}
                    </ul>
                </ProductInfo>
            </aside>

            <aside>
                <ProductInfoFinancePrice>
                    &pound;{price}
                </ProductInfoFinancePrice>

                <ProductInfoStock>
                    <ProductInfoStockLabel>Stock Level: {stock}</ProductInfoStockLabel>
                    <ProductInfoStockLabel>FREE Delivery</ProductInfoStockLabel>
                </ProductInfoStock>

                <ProductInfoAction>
                    <ProductInfoActionButton onClick={() => navigate(`/products/${id}`)}>
                        View Product
                    </ProductInfoActionButton>
                    <ProductInfoActionButton onClick={() => addproduct({ id, title, price })}>Add to Basket</ProductInfoActionButton>
                </ProductInfoAction>
            </aside>
        </ProductInfoArticle>
    );
};

export default CategoryProduct;

const ProductInfoArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    column-gap: 20px;
`;

const ProductTitle = styled.div`
        grid-column: 1 / span 3;
        color: green;
        font-weight: bold;
        font-size: 1.5em;
        padding-left: 10px;
    `;

const ProductImageContainer = styled.div`
    padding: 10px;
    width: 60%;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoHeader = styled.h3`
    color: #FF6F00;
    font-size: 1em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 5px;
`;

const ProductInfoListItem = styled.li`
    padding-top: 5px;
`;

const ProductInfoStock = styled.div`
    padding-left: 10px;
    margin-top: 20px;
    padding-top: 10px;
    background-color: #FFEE58;
    height: 25%;
    width: 35%;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
`;

const ProductInfoStockLabel = styled.label`
    padding-bottom: 5px;
`;

const ProductInfoAction = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductInfoActionButton = styled.button`
    width: 160px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: lightgray;
    border: solid 1px slategrey;
    font-weight: bold;
`;

const ProductInfoFinancePrice = styled.div`
    color: darkslategray;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10px;
`;
