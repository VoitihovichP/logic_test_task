type Course = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
};

export type GetCoursesApiResponse = Course[];
