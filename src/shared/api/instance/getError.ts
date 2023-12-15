import { type AxiosInstance } from "axios";

export const getErrorInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      let responseError = error.response?.data?.error;

      if (!responseError) {
        responseError = {
          message: "An error has occurred",
        };
      }

      return await Promise.reject(responseError);
    },
  );
};
