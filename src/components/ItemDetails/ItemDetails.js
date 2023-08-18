import './ItemDetails.scss'
import backLogo from '../../assets/images/arrow_back-24px.svg'
import editButton from '../../assets/images/edit-24px-white.svg'

function ItemDetails() {
    return (
        <div className='item-details'>
            <section className='item-details__top'>
                <div className='item-details__back-button'><img src={backLogo} alt='button used to go back' /></div>
                <h1 className='item-details__h1'>Television</h1>
                <div className='item-details__edit-button'><img src={editButton} alt='button used to edit one item' /></div>
            </section>
            <section className='item-details__bottom'>
                <p className='item-details__title'>ITEM DESCRIPTION:</p>
                <p className='item-details__description'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                <p className='item-details__category-title'>CATEGORY:</p>
                <p className='item-details__category-value'>Electronics</p>
                <div className='item-details__status-container'>
                    <div className='item-details__status-left'>
                        <p className='item-details__status-title'>Status</p>
                        <p className='item-details__status-value'>In Stock</p>
                    </div>
                    <div className='item-details__status-right'>
                        <p className='item-details__quantity-title'>Quantity</p>
                        <p className='item-details__quantity-value'>500</p>
                    </div>
                </div>
                <p className='item-details__warehouse-title'>WAREHOUSE:</p>
                <p className='item-details__warehouse-value'>Manhattan</p>
            </section>
        </div>
    )
}

export default ItemDetails;