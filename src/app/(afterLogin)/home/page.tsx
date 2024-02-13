import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "../../_component/page/(afterLogin)/Post";
import {dehydrate, QueryClient, HydrationBoundary} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/_lib/getPostRecommends";
import PostRecommends from "@/app/_component/page/(afterLogin)/PostRecommends";


async function Home() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({queryKey: ['posts', 'recommends'], queryFn: getPostRecommends})
    const dehydratedState = dehydrate(queryClient);
    return (
        <main className={style.main}>
            <HydrationBoundary>
                <Tab/>
                <PostForm/>
                <PostRecommends/>

            </HydrationBoundary>
        </main>
    )
}

export default Home;