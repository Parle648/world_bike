import styles from './styles/companiesSlider.module.scss';
import secondCompany from '../../imgs/second-company.png'
import thirdCompany from '../../imgs/third-company.png'
import fourCompany from '../../imgs/four-company.png'
import fifthCompany from '../../imgs/five-company.png'
import sixthCompany from '../../imgs/sixth-company.png'

const CompaniesSlider = () => {
    return (
        <div className={styles.sliderBlock}>
            <div className={styles.sliderLine}>
                <img src={secondCompany} alt="secondCompany" />
                <img src={thirdCompany} alt="thirdCompany" />
                <img src={fourCompany} alt="fourCompany" />
                <img src={fifthCompany} alt="fifthCompany" />
                <img src={sixthCompany} alt="sixthCompany" />
                <img src={secondCompany} alt="secondCompany" />
                <img src={thirdCompany} alt="thirdCompany" />
                <img src={fourCompany} alt="fourCompany" />
                <img src={fifthCompany} alt="fifthCompany" />
                <img src={sixthCompany} alt="sixthCompany" />
            </div>
        </div> 
    );
};

export default CompaniesSlider;