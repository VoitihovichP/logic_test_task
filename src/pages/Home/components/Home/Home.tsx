import { CourseList } from 'Modules/CourseList';
import { TagsPanel } from 'Modules/TagsPanel';
import { FC, useMemo } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '@/components';

import { getCoursesApi } from '../../api/getCoursesApi';
import { QueryKeys } from '../../constants/queryKeys';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const {
    data: coursesData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: QueryKeys.COURSES,
    queryFn: getCoursesApi,
  });

  const courses = useMemo(() => coursesData || [], [coursesData]);

  const arr = useMemo(
    () => [
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
    ],
    [],
  );

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (!coursesData) {
    return <div>No Data</div>;
  }

  return (
    <div className={styles.home}>
      <TagsPanel tagsList={arr} />
      <CourseList courseList={courses} />
    </div>
  );
};
