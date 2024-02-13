import style from './message.module.css';
import Room from "@/app/(afterLogin)/messages/_component/Room";
function Messages() {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>
           <Room/>
           <Room/>
           <Room/>
           <Room/>
        </main>
    )
}
export default  Messages;