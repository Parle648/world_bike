import React from 'react';
import ProductCard from '../../../entities/ProductCard/ProductCard';
import styles from './styles/newBikes.module.scss';

import flag from '../../../imgs/italy-flag.png';
import bike from '../../../imgs/bike-img.png';

import btnArrow from '../../../imgs/slider-btn.png';

const NewBikes = () => {

    const [sliderMargin, setSliderMargin] = React.useState(0)

    function sliderMove(event: React.MouseEvent<HTMLButtonElement>) {
        const margin = document.body.clientWidth > 950 ? 430 : 330;
        if (event.currentTarget.dataset.btn === '1' && sliderMargin <= (-margin * 4)) {
            setSliderMargin(margin)
        } else if (sliderMargin === 0 && event.currentTarget.dataset.btn === '0') {
            setSliderMargin(-margin * 4)
        }
        if (event.currentTarget.dataset.btn === '1') {
            setSliderMargin(prev => prev - margin)
        } else {
            setSliderMargin(prev => prev + margin)
        }
    }

    return (
        <div className={styles.block}>
            <div className='wrapper'>
                <h2 className={styles.ttl}>Новинки</h2>

                <div className={styles.slider}>
                    <div className={styles.sliderBtns}>
                        <button className={styles.sliderBtn} data-btn='0' onClick={sliderMove}><img className={styles.arrow} src={btnArrow} alt="btnArrow" /></button>
                        <button className={styles.sliderBtn} data-btn='1' onClick={sliderMove}><img className={styles.arrow} src={btnArrow} alt="btnArrow" /></button>
                    </div>
                    <div className={styles.sliderLine} style={{marginLeft: `${sliderMargin}px`}}>
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBikes;