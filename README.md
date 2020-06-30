# Poker With NodeJs

### Function isStraight

```javascript
exports.isStraight = (cards) => {
  const AS_MAX = 14;
  const AS_MIN = 2;
  let indexToCompare = 4;
  
  cards.sort((card1, card2) => card1 - card2);
  
  if (cards.length < 5 || cards.length > 7) {
    return false;
  }
  
  if ((cards[0] === AS_MIN) && (cards[cards.length - 1] === AS_MAX)) {
    indexToCompare = 3;
  }
  
  if (cards[indexToCompare] === (cards[0] + indexToCompare)) {
    return true;
  }
  
  cards.shift()
  return exports.isStraight(cards);
 };
```
### Execute function isStraight

```javascript
isStraight([2, 7, 8, 5, 10, 9, 11])
```

### Running project

```ssh
npm start
npm run start:dev
```
