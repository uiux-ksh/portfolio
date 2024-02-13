"use client"

import {useQuery} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/_lib/getPostRecommends";
import {Fragment, useEffect} from "react";
import Post from "@/app/_component/page/(afterLogin)/Post";

function PostRecommends() {
   const { data } = useQuery({queryKey:['posts', 'recommends'],queryFn:getPostRecommends});
   console.log(data);
   return  data?.map((post,index) => (
       <Post key={post.postId} post={post}/>
   ))
}
export  default PostRecommends;