export type CourseType = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
};

export type CourseList = CourseType[];

export type ICourseListProps = {
  courseList: CourseList;
  activeTag: string;
};
