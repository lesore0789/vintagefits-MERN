import React, { useState } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/icons/star_icon.png'
import starDullIcon from '../Assets/icons/star_dull_icon.png'


export const ProductDisplay = (props) => {
  const {product} = props;
  const [selected, setSelected] = useState(product.image)

  const changeImage1 = () => setSelected(product.image)
  const changeImage2 = () => setSelected(product.image2)
  const changeImage3 = () => setSelected(product.image3)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img onClick={changeImage1} src={product.image} alt="" />
          <img onClick={changeImage2} src={product.image2} alt="" />
          <img onClick={changeImage3} src={product.image3} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={selected} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <form className="size-form">
              <label htmlFor="small">
                <input type="radio" name="size" className='small' id="small" value="small"/>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_4)">
                  <rect x="4" width="85" height="85" rx="5" fill="#FBFBFB"/>
                  <path d="M51.5455 36.5455C51.4091 35.3939 50.8561 34.5 49.8864 33.8636C48.9167 33.2273 47.7273 32.9091 46.3182 32.9091C45.2879 32.9091 44.3864 33.0758 43.6136 33.4091C42.8485 33.7424 42.25 34.2008 41.8182 34.7841C41.3939 35.3674 41.1818 36.0303 41.1818 36.7727C41.1818 37.3939 41.3295 37.928 41.625 38.375C41.928 38.8144 42.3144 39.1818 42.7841 39.4773C43.2538 39.7652 43.7462 40.0038 44.2614 40.1932C44.7765 40.375 45.25 40.5227 45.6818 40.6364L48.0455 41.2727C48.6515 41.4318 49.3258 41.6515 50.0682 41.9318C50.8182 42.2121 51.5341 42.5947 52.2159 43.0795C52.9053 43.5568 53.4735 44.1705 53.9205 44.9205C54.3674 45.6705 54.5909 46.5909 54.5909 47.6818C54.5909 48.9394 54.2614 50.0758 53.6023 51.0909C52.9508 52.1061 51.9962 52.9129 50.7386 53.5114C49.4886 54.1098 47.9697 54.4091 46.1818 54.4091C44.5152 54.4091 43.072 54.1402 41.8523 53.6023C40.6402 53.0644 39.6856 52.3144 38.9886 51.3523C38.2992 50.3902 37.9091 49.2727 37.8182 48H40.7273C40.803 48.8788 41.0985 49.6061 41.6136 50.1818C42.1364 50.75 42.7955 51.1742 43.5909 51.4545C44.3939 51.7273 45.2576 51.8636 46.1818 51.8636C47.2576 51.8636 48.2235 51.6894 49.0795 51.3409C49.9356 50.9848 50.6136 50.4924 51.1136 49.8636C51.6136 49.2273 51.8636 48.4848 51.8636 47.6364C51.8636 46.8636 51.6477 46.2348 51.2159 45.75C50.7841 45.2652 50.2159 44.8712 49.5114 44.5682C48.8068 44.2652 48.0455 44 47.2273 43.7727L44.3636 42.9545C42.5455 42.4318 41.1061 41.6856 40.0455 40.7159C38.9848 39.7462 38.4545 38.4773 38.4545 36.9091C38.4545 35.6061 38.8068 34.4697 39.5114 33.5C40.2235 32.5227 41.178 31.7652 42.375 31.2273C43.5795 30.6818 44.9242 30.4091 46.4091 30.4091C47.9091 30.4091 49.2424 30.678 50.4091 31.2159C51.5758 31.7462 52.5 32.4735 53.1818 33.3977C53.8712 34.322 54.2348 35.3712 54.2727 36.5455H51.5455Z" fill="black" fill-opacity="0.85"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_1_4" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_4"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_4" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </label>
              <label htmlFor="medium">
                <input type="radio" name="size" className='medium' id="medium" value="medium"/>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_3_2)">
                  <rect x="4" width="85" height="85" rx="5" fill="#FBFBFB"/>
                  <path d="M34.8182 30.7273H38.1818L46.0909 50.0455H46.3636L54.2727 30.7273H57.6364V54H55V36.3182H54.7727L47.5 54H44.9545L37.6818 36.3182H37.4545V54H34.8182V30.7273Z" fill="black" fill-opacity="0.85"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_3_2" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_2" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
              </label>
              <label htmlFor="large">
                <input type="radio" name="size" className='large' id="large" value="large"/>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_3_5)">
                  <rect x="4" width="85" height="85" rx="5" fill="#FBFBFB"/>
                  <path d="M39.8182 56V32.7273H42.6364V53.5H53.4545V56H39.8182Z" fill="black" fill-opacity="0.85"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_3_5" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_5"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_5" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </label>
              <label htmlFor="xlarge">
                <input type="radio" name="size" className='xlarge' id="xlarge" value="xlarge"/>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_3_8)">
                  <rect x="4" width="85" height="85" rx="5" fill="#FBFBFB"/>
                  <path d="M31.1818 30.7273L37.1818 40.4091H37.3636L43.3636 30.7273H46.6818L39.3636 42.3636L46.6818 54H43.3636L37.3636 44.5H37.1818L31.1818 54H27.8636L35.3636 42.3636L27.8636 30.7273H31.1818ZM50.3494 54V30.7273H53.1676V51.5H63.9858V54H50.3494Z" fill="black" fill-opacity="0.85"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_3_8" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_8"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_8" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </label>
              <label htmlFor="xxl">
                <input type="radio" name="size" className='xxl' id="xxl" value="xxl"/>
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_3_11)">
                  <rect x="4" width="85" height="85" rx="5" fill="#FBFBFB"/>
                  <path d="M20.1818 32.7273L26.1818 42.4091H26.3636L32.3636 32.7273H35.6818L28.3636 44.3636L35.6818 56H32.3636L26.3636 46.5H26.1818L20.1818 56H16.8636L24.3636 44.3636L16.8636 32.7273H20.1818ZM40.7131 32.7273L46.7131 42.4091H46.8949L52.8949 32.7273H56.2131L48.8949 44.3636L56.2131 56H52.8949L46.8949 46.5H46.7131L40.7131 56H37.3949L44.8949 44.3636L37.3949 32.7273H40.7131ZM59.8807 56V32.7273H62.6989V53.5H73.517V56H59.8807Z" fill="black" fill-opacity="0.85"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_3_11" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_11"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_11" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </label>
            </form>
            {/* <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div> */}
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Vintage, Thrift
        </p>
      </div>
    </div>
  )
}
