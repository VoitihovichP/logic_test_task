type TagsList = Array<{
  id: string | number;
  title: string;
  value: string;
}>;

type Courses = {
  id: string;
  tags: string[];
};

export const createTagsList = (courses: Courses[]): TagsList => {
  const uniqueTags = new Set<string>();

  courses.forEach((course) => {
    course.tags.forEach((tag) => uniqueTags.add(tag));
  });

  return Array.from(uniqueTags).map((tag) => ({
    id: tag,
    title: tag,
    value: tag,
  }));
};
