import { CourseList } from 'Modules/CourseList';
import { TagsPanel } from 'Modules/TagsPanel';
import { FC, useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { Loader, NoDataBanner } from '@/components';

import { getCoursesApi } from '../../api/getCoursesApi';
import { GetCoursesApiResponse } from '../../api/types/getCoursesApi.types';
import { allTag } from '../../constants/CommonTags';
import { QueryKeys } from '../../constants/queryKeys';
import { createTagsList } from '../../helpers/createTagsList';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>(allTag.value);

  const {
    data: coursesData,
    isLoading,
    isFetching,
    error,
  } = useQuery<GetCoursesApiResponse>({
    queryKey: QueryKeys.COURSES,
    queryFn: getCoursesApi,
  });

  const courses = useMemo(() => coursesData || [], [coursesData]);
  const coursesTags = useMemo(
    () => (coursesData ? [allTag, ...createTagsList(coursesData)] : [allTag]),
    [coursesData],
  );

  const handleSelectTag = useCallback((tag: string) => {
    setSelectedTag(tag);
  }, []);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (!courses.length || error) {
    return <NoDataBanner />;
  }

  return (
    <div className={styles.home}>
      <TagsPanel
        tagsList={coursesTags}
        activeTag={selectedTag}
        onSelect={handleSelectTag}
      />
      <CourseList courseList={courses} activeTag={selectedTag} />
    </div>
  );
};
