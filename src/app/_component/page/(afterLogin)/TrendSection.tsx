"use client"
import  style from '../../css/(afterLogin)/trendSection.module.css'
import Trend from "@/app/_component/page/(afterLogin)/Trend";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";
function TrendSection() {
    const { data: session } = useSession();
    const pathname = usePathname();
    if(pathname === '/explore') return null;
    if(session?.user) {
        return (
            <div className={style.trendBg}>
                <div className={style.trend}>
                    <h3>나를 위한 트렌드</h3>
                    <Trend/>
                    <Trend/>
                    <Trend/>
                    <Trend/>
                </div>
            </div>
        )
    }

    return (
        <div className={style.trendBg}>
            <div className={style.noTrend}>
                트렌드를 가져올 수 없습니다.
            </div>
        </div>
    )
}
export default TrendSection;