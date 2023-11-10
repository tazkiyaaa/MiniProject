import React from 'react'
import '../ShopPage/ShopPage.scss'
import SHOP_ITEM_DATA from '../ShopData/ShopData'
import ShopPagePreview from './ShopPagePreview'
import { Footer } from '../../../components/Footer/Footer'


export class ShopPage extends React.Component {
    state = {
        collection: SHOP_ITEM_DATA
    }

    render() {
        const { collection } = this.state
        return (
            <>
            <div className="shop_page">
            {
                collection.map(({ id, ...otherShopPageProps }) => (
                <ShopPagePreview 
                key={id}
                {...otherShopPageProps}
                />
            ))
            }
            </div>
            <div>    
        <Footer />  
            </div> 
            </>
        )
    }
   
}