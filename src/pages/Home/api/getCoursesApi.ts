import { coursesApiPaths } from './paths/coursesApiPaths';
import { GetCoursesApiResponse } from './types/getCoursesApi.types';

export const getCoursesApi = async (): Promise<GetCoursesApiResponse> => {
  try {
    const response = await fetch(coursesApiPaths.getAllCourses);
    return await response.json();
  } catch {
    throw new Error('Could not fetch courses.');
  }
};
