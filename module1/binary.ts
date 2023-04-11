/* # ДЗ к лекции База#1

## Посмотреть лекции на канале AlekOS

* https://www.youtube.com/watch?v=k9wK2FThEsk

* https://www.youtube.com/watch?v=qewavPO6jcA&t=828s

    * https://www.youtube.com/watch?v=U0U8Ddx4TgE&t=292s

    * https://www.youtube.com/watch?v=BIYiuy8WWiU

    * https://www.youtube.com/watch?v=kG_ipMygRUc

    ## Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента

    ```js
const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0
```

## Расширить функцию из прошлого задания возможностью изменять значение конкретного бита

    ```js
//const bitAccessor = createBitAccessor(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.set(0, 1, 0)); //
console.log(bitAccessor.get(0, 1));    // 0
```
 */
const checkValues = (
        byteIndx: number,
        bitIndx: number,
        num?: number
    ) => {
    console.log(num);
    if (typeof num === 'number') {
        if (num || num !== 1) {
            throw new Error('')
        }
    }
    if (bitIndx > 8 || bitIndx < 0) {
        throw new Error('')
    }
}
const createBitGetter = (typedArray: Uint8Array) => {
    if(!typedArray.length) throw new Error('Array is empty')

    const getBit = (byteIndx: number, bitIndx: number): 0 | 1 => {
        checkValues(byteIndx, bitIndx)

        const byte = typedArray[byteIndx]
        const mask = 1 << bitIndx

        return (byte & mask) !== 0 ? 1 : 0
    }

    const setBit = (
        byteIndx: number,
        bitIndx: number,
        bit: number
    ) => {
        const byte = typedArray[byteIndx]
        const mask = 1 << bitIndx
        return bit === 0 ? (byte | mask) : (byte & mask)
    }
    return { getBit, setBit }
}

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
bitGetter?.getBit(50, 5);
bitGetter?.getBit(0, 2);
bitGetter?.getBit(1, 2);
