import style from '../../css/(afterLogin)/post.module.css';
import Link from "next/link";
import dayjs from 'dayjs';
import { faker } from "@faker-js/faker";
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from "@/app/(afterLogin)/home/_component/ActionButton";
import PostArticle from "@/app/_component/page/(afterLogin)/PostArticle";
import PostImages from "@/app/_component/page/(afterLogin)/PostImages";


dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function Post({post}) {
    const target = post;
    if(target)
    return (
        <PostArticle post={target}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}/>
                        <div className={style.postShade}/>
                    </Link>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={style.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div>
                        <PostImages post={target} />
                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </PostArticle>
    )
}