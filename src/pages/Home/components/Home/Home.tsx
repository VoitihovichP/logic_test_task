import { TagsPanel } from 'Modules/TagsPanel';
import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { CourseCard } from '@/components';

import styles from './Home.module.scss';

export const Home: FC = () => {
  const arr = [
    {
      id: 1,
      value: 'Все темы',
    },
    {
      id: 2,
      value: 'Логика и мышление',
    },
    {
      id: 3,
      value: 'Загадки',
    },
  ];

  const { data } = useQuery({
    queryKey: ['courses'],
    queryFn: () =>
      fetch('https://logiclike.com/docs/courses.json').then((res) =>
        res.json(),
      ),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.home}>
      <TagsPanel tagsList={arr} />
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
