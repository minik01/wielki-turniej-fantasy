import {Race} from "./card.data";
import {Board} from "../board/board.model";

export enum CardType {
    ELF,
    DWARF,
    MAGE,
    UNDEAD,
    IMMORTAL,
    DRAGON,
    BEAST,
    ELEMENTAL,
    FIRE,
    MACHINE
}

class AttackValue {
    public readonly modifications: Map<string, number> = new Map();

    constructor(public readonly baseValue: number | null = null) {
    }

    public addBoost(name: string, value: number) {
        if (this.baseValue !== null) {
            this.modifications.set(name, value);
        }
    }

    public getTotal(): number {
        if (this.baseValue !== null) {
            return 0;
        } else {
            return Array.from(this.modifications.values())
                .reduce((acc, cur) => acc + cur, Number(this.baseValue))
        }
    }
}

export class CardModel {
    public melee: AttackValue;
    public ranged: AttackValue;
    public magic: AttackValue;

    constructor(
        public id: string,
        public race: Race,
        public readonly level: number,
        public readonly name: string,
        public readonly board: Board,
        public readonly baseMelee: number | null = 0,
        public readonly baseRanged: number | null = 0,
        public readonly baseMagic: number | null = 0,
        public readonly type: CardType[] = [],
        public readonly allowRotate: boolean = true,
        public readonly description: string = '',
        public readonly specialAction?: any,
        public readonly actionTarget?: CardModel) {
        if (board.raw.length !== board.raw[0].length) {
            console.error(name + ': THE ARRAY SHOULD BE A SQUARE')
        }
        this.melee = new AttackValue(baseMelee);
        this.ranged = new AttackValue(baseRanged);
        this.magic = new AttackValue(baseMagic);
    }

    public getBaseMelee(): string {
        if (this.baseMelee === null) {
            return '-';
        } else {
            return '' + this.baseMelee;
        }
    }

    public getBaseRanged(): string {
        if (this.baseRanged === null) {
            return '-';
        } else {
            return '' + this.baseRanged;
        }
    }

    public getBaseMagic(): string {
        if (this.baseMagic === null) {
            return '-';
        } else {
            return '' + this.baseMagic;
        }
    }
}
