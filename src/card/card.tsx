import {CardModel} from "./card.model";
import {BoardDrawer} from "../board/board-drawer";

export function Card(props: { card: CardModel }) {
    const card = props.card;
    return <div style={{border: '1px black solid'}}>
        {card.name}
        <div>{card.getBaseMelee()}  </div>
        <div>{card.getBaseRanged()}  </div>
        <div>{card.getBaseMagic()}  </div>
        <div draggable
             className={'draggable'}

             onDragStart={event => {
                 // event.preventDefault();
                 let cardId = card.id;
                 console.log(cardId)
                 event.dataTransfer.setData('card', cardId);
             }}
            // onDragEnd={(ev) => {
            //     ev.preventDefault();
            //     console.log(ev)
            // }}
            // onDrop={(ev) => {
            //     ev.preventDefault();
            //     console.log(ev)
            // }}

        >

            <BoardDrawer board={card.board} unitColor={card.race}/>
        </div>


        {/*return (*/}
        {/*<div className="container-drag"><h2 className="header">DRAG & DROP DEMO</h2>*/}
        {/*    <div className="wip" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {*/}
        {/*        this.onDrop(e, "wip")*/}
        {/*    }}><span className="task-header">WIP</span> {tasks.wip}                     </div>*/}
        {/*    <div className="droppable" onDragOver={(e) => this.onDragOver(e)}*/}
        {/*         onDrop={(e) => this.onDrop(e, "complete")}><span*/}
        {/*        className="task-header">COMPLETED</span> {tasks.complete}                     </div>*/}
        {/*</div>*/}
        {/*);*/}

    </div>
}
