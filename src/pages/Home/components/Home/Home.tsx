import { CourseList } from 'Modules/CourseList';
import { TagsPanel } from 'Modules/TagsPanel';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { getCoursesApi } from '../../api/getCoursesApi';
import { QueryKeys } from '../../constants/queryKeys';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const { data: coursesData, isLoading } = useQuery({
    queryKey: QueryKeys.COURSES,
    queryFn: getCoursesApi,
    cacheTime: 0,
  });

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

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!coursesData) {
    return <div>No Data</div>;
  }

  return (
    <div className={styles.home}>
      <TagsPanel tagsList={arr} />
      <CourseList courseList={coursesData} />
    </div>
  );
};
