import SearchForm from "@/app/_component/page/(afterLogin)/SearchForm";
import style from './explore.module.css';
import Trend from "@/app/_component/page/(afterLogin)/Trend";
function Explore() {
    return(
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm />
            </div>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </main>
    )
}
export default Explore;