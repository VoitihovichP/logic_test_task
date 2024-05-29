import { CourseList } from 'Modules/CourseList';
import { TagsPanel } from 'Modules/TagsPanel';
import { FC } from 'react';

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

  return (
    <div className={styles.home}>
      <TagsPanel tagsList={arr} />
      <CourseList />
    </div>
  );
};
