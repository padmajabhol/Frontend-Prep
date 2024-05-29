### 1. Toggle function arguements:

Input:
```js
let onOff = toggle("on", "off");
```

Output:
```js
onOff() //on
onOff() //off
onOff() //on
```
code:
```js
const toggle = (...list) => {
  let index = 0;
  return function(){
    if(list.length){
      console.log(list[index++]);
      if(index >= list.length){
        index = 0;
      }
    }
  }
}
```



