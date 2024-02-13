import style from './singlePost.module.css';
import Post from "@/app/_component/page/(afterLogin)/Post";
import BackButton from "@/app/_component/page/(afterLogin)/BackButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";

export default function SinglePost() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <BackButton/>
                <h3 className={style.headerTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm/>
            <div>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
        </div>
    )
}