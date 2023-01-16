// ARRAY OPERATIONS

type ArrayOperations = number | string

const head = (arrayParameter: Array<ArrayOperations>): ArrayOperations=> {
    const [firstElement] = arrayParameter;
    return firstElement;
}

const tail = (arrayParameter: Array<ArrayOperations>): Array<ArrayOperations>  => {
    const [_, ...remainder] = arrayParameter;
    return remainder;
};


const init = (arrayParameter: Array<ArrayOperations>): Array<ArrayOperations>  => {
    const allEmemetsUntilLast = [...arrayParameter];
    allEmemetsUntilLast.pop();
    return allEmemetsUntilLast;
};

const last = (arrayParameter: Array<ArrayOperations>): ArrayOperations => {
    const [ lastElement ] = arrayParameter.slice(-1);
    return lastElement;
};

const testArray = Array.from({length: 10}, () => Math.floor(Math.random()*10))
console.log("********** ARRAY OPREATIONS ***********");
console.log(`test array: ${testArray}`);
console.log(`head: ${head(testArray)}`);
console.log(`tail: ${tail(testArray)}`);
console.log(`init: ${init(testArray)}`);
console.log(`last: ${last(testArray)}`);
console.log(`test array: ${testArray}`);
console.log("********** ******* ***********");

// ARRAY CONCAT

const concat = (
    a: Array<ArrayOperations>,
    b: Array<ArrayOperations>):
    Array<ArrayOperations> => 
    {
        return [...a, ...b];
    };

const testArrayConcat1 = Array.from({length: 10}, () => Math.floor(Math.random()*10))
const testArrayConcat2 = Array.from({length: 10}, () => Math.floor(Math.random()*10))
console.log("********** ARRAY CONCAT ***********");
console.log(`test array 1: ${testArrayConcat1}`);
console.log(`test array 2: ${testArrayConcat2}`);
console.log(`concat: ${concat(testArrayConcat1, testArrayConcat2)}`);
console.log(`test array 1: ${testArrayConcat1}`);
console.log(`test array 2: ${testArrayConcat2}`);
console.log("********** ******* ***********");


// CLONE MERGE

interface SourceData {
    name: string;
    surname?: string;
    country?: string;
    age?: number;
    married?: boolean;
};

const a: SourceData = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: SourceData = { name: "Luisa", age: 31, married: true };

// CLONE

function clone(source: SourceData): SourceData {
    return Object.assign({}, source);
}

console.log("********** ARRAY CLONE ***********");
console.log(`clone: ${JSON.stringify(clone(a))}`);
console.log(`original: ${JSON.stringify(a)}`);
console.log("********** ******* ***********");

// MERGE

function merge(source: SourceData, target: SourceData) {
    return {
        ...target,
        ...source
    };
}

console.log("********** ARRAY MERGE ***********");
console.log(merge(a,b));
console.log(`original a: ${JSON.stringify(a)}`);
console.log(`original b: ${JSON.stringify(b)}`);
console.log("********** ******* ***********");

// READ BOOKS

interface BookProperties {
    title: string;
    isRead: boolean;
};
const deleteSpacesAndCaseTransform = (value: string): string => value.toLowerCase().replace(/\s/g, "")

function isBookRead(books: Array<BookProperties>, titleToSearch: string): string {
    return (books.find(book => 
                deleteSpacesAndCaseTransform(book.title) === 
                deleteSpacesAndCaseTransform(titleToSearch)
            ) as BookProperties).isRead ? 'read' : 'not read';
}

const books:  Array<BookProperties> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Harry Potter y la  piedrA filosofal"));

// SLOT MACHINE

class SlotMachine {
    coinCounter: number;
    wheelOne: boolean;
    wheelTwo: boolean;
    wheelThree: boolean;

    constructor() {
        this.coinCounter = 0;
    }

    public play(): void {
        this.coinCounter++;
        this.wheelOne = this.randomWheelDecide();
        this.wheelTwo = this.randomWheelDecide();
        this.wheelThree = this.randomWheelDecide();
        this.isAWinner();
    }

    private isAWinner(): void {
        const winner = this.wheelOne && this.wheelTwo && this.wheelTwo;
        winner ?
        console.log(`"Congratulations!!!. You won ${this.coinCounter} coins!!";`)
        : console.log('"Good luck next time!!".');
        this.coinCounter = winner ? 0 : this.coinCounter;
    }

    private randomWheelDecide(): boolean {
        return Math.random() < 0.5 ? true : false;
    }
}

const newGame = new SlotMachine();
newGame.play();
newGame.play();
newGame.play();
newGame.play();
newGame.play();
newGame.play();
newGame.play();
newGame.play();
