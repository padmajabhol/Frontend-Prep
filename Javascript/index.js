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

let onOff = toggle("on", "off");

onOff() //on
onOff() //off
onOff() //on 