import { FC, memo } from 'react';

import { CourseCard } from '@/components';

import { ICourseListProps } from '../../models/CourseList.model';
import styles from './CourseList.module.scss';

export const CourseList: FC<ICourseListProps> = memo(({ courseList }) => {
  return (
    <div className={styles.courseList}>
      {courseList.map((item) => (
        <CourseCard
          key={item.id}
          title={item.name}
          image={item.image}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
});

CourseList.displayName = 'CourseList';
