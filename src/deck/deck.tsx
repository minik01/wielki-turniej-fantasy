import {CardModel} from "../card/card.model";
import {Card} from "../card/card";

export function Deck(props: { cards: Map<string, CardModel> }) {
    return <div className={'deck'}>
        {Array.from(props.cards.entries()).map(card =>
            <Card key={card[0]} card={card[1]}/>
        )}
    </div>
}
