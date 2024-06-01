import { FC, memo } from 'react';

import { CourseCardPoster } from './components/CourseCardPoster/CourseCardPoster';
import styles from './CourseCard.module.scss';
import { CourseCardModel } from './models/CourseCardModel';

export const CourseCard: FC<CourseCardModel> = memo(
  ({ title, image, bgColor }) => {
    return (
      <div className={styles.courseCard}>
        <CourseCardPoster bgColor={bgColor} image={image} />
        <div className={styles.courseCard__description}>
          <p>{title}</p>
        </div>
      </div>
    );
  },
);

CourseCard.displayName = 'CourseCard';
