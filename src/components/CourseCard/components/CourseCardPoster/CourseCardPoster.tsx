import { FC } from 'react';

import { CourseCardPosterModel } from '../../models/CourseCardPosterModel';
import styles from './CourseCardPoster.module.scss';

export const CourseCardPoster: FC<CourseCardPosterModel> = ({
  image,
  bgColor,
}) => {
  return (
    <div
      className={styles.courseCardPoster__wrapper}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <img
        className={styles.courseCardPoster__image}
        src={image}
        alt="poster"
      />
    </div>
  );
};
