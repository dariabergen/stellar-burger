import { useSelector } from '../../services/store';
import styles from './constructor-page.module.css';
import { BurgerIngredients, BurgerConstructor } from '../../components';
import { FC } from 'react';
import { getIngredientsLoadingState } from '../../services/slices/Ingredients';
import { Preloader } from '../../components/ui';

export const ConstructorPage: FC = () => {
  const loading = useSelector(getIngredientsLoadingState);
  const isIngredientsLoading = loading;

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
