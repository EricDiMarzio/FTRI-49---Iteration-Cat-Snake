
import styles from './Landing.module.css';

function Landing({enter, setEnter}) {


  const images = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  ];

  function shuffleArray(array) {
    // Create a copy of the original array
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap elements at i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  const column1 = shuffleArray(images).map((el) => (
    <div key={el} className={`${styles.box} ${styles.descend}`}>
      <img src={el} className={styles.boxImage} />
    </div>
  ));

  const column2 = shuffleArray(images).map((el) => (
    <div key={el} className={`${styles.box} ${styles.ascend}`}>
      <img src={el} className={styles.boxImage} />
    </div>
  ));

  const column3 = shuffleArray(images).map((el) => (
    <div key={el} className={`${styles.box} ${styles.descend}`}>
      <img src={el} className={styles.boxImage} />
    </div>
  ));

  const column4 = shuffleArray(images).map((el) => (
    <div key={el} className={`${styles.box} ${styles.ascend}`}>
      <img src={el} className={styles.boxImage} />
    </div>
  ));

  const column5 = shuffleArray(images).map((el) => (
    <div key={el} className={`${styles.box} ${styles.descend}`}>
      <img src={el} className={styles.boxImage} />
    </div>
  ));

  return (
    <>
      <section
        className={
          enter ? `${styles.landing} ${styles.expand}` : styles.landing
        }
      >
        <button
          className={styles.enter}
          onClick={() => {
            setEnter(true);
          }}
        >
          Enter
        </button>
        <div className={styles.column}>{column1}</div>
        <div className={styles.column}>{column2}</div>
        <div className={styles.column}>{column3}</div>
        <div className={styles.column}>{column4}</div>
        <div className={styles.column}>{column5}</div>
      </section>
    </>
  );
}

export default Landing;
