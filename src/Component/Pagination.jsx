import React, { useEffect, useState } from 'react'

function Pagination() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();

        if(data && data.products) setProducts(data.products);
    };

    const handleImage = (currePage) => {
        if (currePage !== page && currePage <= products.length/10 && currePage >= 1) return setPage(currePage)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <div>
                Product List
            </div>
            {
                products.length && <div>
                    {
                        products.slice(page * 10 - 10, page * 10).map((el, i) => {
                            return (
                                <img key={el.id} className='pagination-image' src={el.thumbnail} />
                            )
                        })
                    }
                </div>
            }
            {
                products.length && <div className=''>
                    <span onClick={() => handleImage(page - 1)}>{'<'}</span>
                    {
                        [...Array(products.length/10)].map((_, i) => {
                            return (
                                <span className="page-nuumber" onClick={() => handleImage(i+1)} key={i}>
                                    {i+1}
                                </span>
                            )
                        })
                    }
                    <span onClick={() => handleImage(page + 1)}>{'>'}</span>
                </div>
            }
        </div>
    )
}

export default Pagination