import Link from "next/link";
import style from '../../css/(afterLogin)/trend.module.css';
function Trend() {
    const trend = {
        title:'김성훈',
        count:1,
    }
    return (
        <Link href={`/search?q=트렌드`} className={style.container}>
            <div className={style.count}>실시간트렌드</div>
            <div className={style.title}>{trend.title}</div>
            <div className={style.count}>{trend.count.toLocaleString()} POSTS</div>

        </Link>
    )
}
export default  Trend;