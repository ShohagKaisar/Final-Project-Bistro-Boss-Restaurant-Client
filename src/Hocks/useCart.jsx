import { useQuery } from "@tanstack/react-query";
import useAxiosSecure  from "./useAxiosSecure";



const useCart = () => {
  // load data by tanstack query
  const axiosSecure = useAxiosSecure();
  // Queries
  const { data: cart=[] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axiosSecure.get('/carts')
      return res.data;
    },
  })
return [cart]
};

export default useCart;