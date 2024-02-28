import styles from './styles/bestBykes.module.scss';
import splash from '../../../imgs/splash-img.png';
import ProductCard from '../../../entities/ProductCard/ProductCard';

import flag from '../../../imgs/italy-flag.png';
import bike from '../../../imgs/bike-img.png';
 
const BestBikesSlider = () => {
    
    return (
        <section className={styles.block}>
            <img className={styles.splash} src={splash} alt="splash" />
            <div className="wrapper">
                <h2 className={styles.ttl}>Лучшие модели для зимней езды</h2>
            
                <div className={styles.slider}>
                    <div className={styles.sliderLine}>
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                        <ProductCard country={flag} soldOut={true} image={bike} title='Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021' cost='342 840' />
                        <ProductCard country={flag} soldOut={false} image={bike} title='Trek Verve 2 Disc Lithium Grey HYBD 2022' cost='45 000' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestBikesSlider;