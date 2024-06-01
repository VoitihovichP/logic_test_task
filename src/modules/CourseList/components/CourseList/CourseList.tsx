import { FC, memo, useMemo } from 'react';

import { CourseCard } from '@/components';

import { ICourseListProps } from '../../models/CourseList.model';
import styles from './CourseList.module.scss';

export const CourseList: FC<ICourseListProps> = memo(
  ({ courseList, activeTag }) => {
    const currentCourses = useMemo(() => {
      if (activeTag === 'all') {
        return courseList;
      }
      return courseList.filter((item) => item.tags.includes(activeTag));
    }, [courseList, activeTag]);

    return (
      <div className={styles.courseList}>
        {currentCourses.map((item) => (
          <CourseCard
            key={item.id}
            title={item.name}
            image={item.image}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    );
  },
);

CourseList.displayName = 'CourseList';
