import { FC } from 'react';
import { useQuery } from 'react-query';

import { CourseCard } from '@/components';

import styles from './CourseList.module.scss';

export const CourseList: FC = () => {
  const { data } = useQuery({
    queryKey: ['courses'],
    queryFn: () =>
      fetch('https://logiclike.com/docs/courses.json').then((res) =>
        res.json(),
      ),
  });

  return (
    <div className={styles.courseList}>
      {data &&
        data.map((item) => (
          <CourseCard
            key={item.id}
            title={item.name}
            image={item.image}
            bgColor={item.bgColor}
          />
        ))}
    </div>
  );
};
