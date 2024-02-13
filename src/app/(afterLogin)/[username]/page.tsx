import style from './profile.module.css';
import Post from "../../_component/page/(afterLogin)/Post";
import BackButton from "@/app/_component/page/(afterLogin)/BackButton";
function Profile() {
    const user = {
        id: 'uiux-ksh',
        nickname: '김성훈',
        image: '/5Udwvqim.jpg'
    };

    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>{user.nickname}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user.image} alt={user.id}/>
                </div>
                <div className={style.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={style.followButton}>팔로우</button>
            </div>
            <div>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
        </main>
    )
}
export default  Profile;