"use client";

import getDataForClient from "@/data/getDataForClient";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";

const useAxiosQuery = (urlPath) => {
 
     const fetchData = useCallback(async () => {
            const res = await getDataForClient(urlPath);
            return res?.data ?? [];
        }, [urlPath]);

  return useQuery({
    queryKey: ['axiosQuery', urlPath],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!urlPath, // only run if urlPath is provided
    keepPreviousData: true,
  })
}

export default useAxiosQuery
