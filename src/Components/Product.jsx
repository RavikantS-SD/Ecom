import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getProduct} from '../Redux/Actioncreators/ProductActionCreators'
import ProductContainer from './Partials/ProductsContainer'

export default function Product() {
    let {id} = useParams()
    let [qty, setQty] = useState(1)
    let [product, setProduct] = useState({pic:[]})
    let [relatedProducts, SetRelatedProducts] = useState([])

    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)

    useEffect(()=>{
        (()=>{
            dispatch(getProduct())
            if(ProductStateData.length){
                let item = ProductStateData.find(x=>x.id===id)
                setProduct(item)
                SetRelatedProducts(ProductStateData.filter((x)=>x.maincategory===item.maincategory))
            }
        })()
    }, [ProductStateData.length])

  return (
    <>
    <div className="container my-3">
        <div className="row">
            <div className="col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        {
                            product.pic?.slice(1).map((item, index)=>{
                                return <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1} aria-label={`Slide ${index+2}`}></button>
                            })
                        }
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={product.pic[0]} height={650} width="100%" class="d-block w-100" alt="..."/>
                        </div>
                        {
                            product.pic?.slice(1).map((item, index)=>{
                                return <div key={index} class="carousel-item">
                                <img src={item} height={650} width="100%" class="d-block w-100" alt="..."/>
                            </div>
                            })
                        }
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col-md-6">
                <h3 className='bg-primary text-center text-light p-2'>{product.name}</h3>
                <div className="table-responsive">
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>Maincategory</th>
                                <td>{product.maincategory}</td>
                            </tr>
                            <tr>
                                <th>Subcategory</th>
                                <td>{product.subcategory}</td>
                            </tr>
                            <tr>
                                <th>Brand</th>
                                <td>{product.brand}</td>
                            </tr>
                            <tr>
                                <th>Color/Size</th>
                                <td>{product.color}/{product.size}</td>
                            </tr>
                            <tr>
                                <th>Stock</th>
                            <td>{product.stock?`Yes/${product.quantity} Left in Stock`:"No"}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td><del className='text-danger'>&#8377;{product.basePrice}</del> &#8377;{product.finalPrice} <sup>{product.discount}% Off</sup></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className='d-flex'>
                                        <div className='d-flex'>
                                            <button className='btn btn-primary' onClick={()=>qty>1?setQty(qty-1):""}><i className='fa fa-minus'></i></button>
                                            <p className='mx-3 pt-1 fs-5'>{qty}</p>
                                            <button className='btn btn-primary' onClick={()=>qty<product.quantity?setQty(qty+1):""}><i className='fa fa-plus'></i></button>
                                        </div>
                                        <div className=' ms-3 btn-group w-100'>
                                            <button className='btn btn-primary'><i className='fa fa-shopping-cart'></i>Add To Cart</button>
                                            <button className='btn btn-success'><i className='fa fa-heart'></i>Add To WishList</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>Desciption</th>
                                <td>
                                    <div dangerouslySetInnerHTML={{__html:product.description}} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <ProductContainer title="Releted Products" data={relatedProducts.slice(0,20)} />
    </>
  )
}
