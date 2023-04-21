import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { UserAPI } from '../../services/api/API';
import { setData } from '../../redux/user/userSlice';


function useAxiosInterceptor() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          UserAPI.refreshToken().then( data  => dispatch(setData(data.data)))
          
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [dispatch]);
}

export default useAxiosInterceptor;