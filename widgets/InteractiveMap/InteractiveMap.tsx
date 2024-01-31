import styles from './styles/interactiveMap.module.scss';

const InteractiveMap = () => {
    return (
        <iframe className={styles.map} title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d82345.00325540337!2d23.95343836730957!3d49.837170795155174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m0!4m4!2s49.837230%2C%2024.035886!3m2!1d49.83723!2d24.035885999999998!5e0!3m2!1suk!2sua!4v1705588534865!5m2!1suk!2sua" width="600" height="450" style={{border: '0'}} loading="lazy" ></iframe>
    );
};

export default InteractiveMap;