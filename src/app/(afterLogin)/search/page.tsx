import style from './search.module.css';
import Post from "@/app/_component/page/(afterLogin)/Post";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import SearchForm from "@/app/_component/page/(afterLogin)/SearchForm";
import BackButton from "@/app/_component/page/(afterLogin)/BackButton";
import SearchTab from "@/app/(afterLogin)/search/_component/Tab";

type Props = {
    searchParams: { q: string, f?: string, pf?: string };
}
export default function Search({ searchParams }: Props) {
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton/>
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <SearchTab/>
            </div>
            <div className={style.list}>
                 <Post/>
                 <Post/>
                 <Post/>
                 <Post/>
                {/*<SearchResult searchParams={searchParams} />*/}
            </div>
        </main>
    )
}