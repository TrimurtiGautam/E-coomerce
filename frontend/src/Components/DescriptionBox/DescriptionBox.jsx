import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a digital storefront that facilitates
                 the buying and selling of goods or services online, acting as
                  a virtual equivalent of a physical shop. These platforms, 
                  which can be a standalone online store or a presence on a large marketplace, 
                  allow customers to browse products, add them to a cart, and complete a purchase 
                  using a payment gateway. Key features often include product catalogs, 
                  shopping carts, secure payment systems, and order processing capabilities. 
            </p>
            <p>
                E-commerce websites typically display 1 to 3 lines for product titles in category
                 or search results pages. This is done to ensure the information is concise, 
                 scannable, and fits well on both desktop and mobile screens, which often 
                 truncate titles to around 45-90 characters. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;