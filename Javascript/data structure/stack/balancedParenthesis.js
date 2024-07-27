function Stack(){
    var items = []
    var top = 0

  this.push = function(element){
     items[top++] = element
   }

   this.pop = function(){
     return items[--top];
   }

   this.peek = function(){
     return items[top - 1];
   }

   this.isEmpty = function(){
     return top === 0;
   } 
}

let checkValidParenthesis = (str) => {
  let stack = new Stack();

  for (i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    }

    if (str[i] == "}" || str[i] == ")" || str[i] == "]") {
      if (stack.isEmpty()) {
        return false;
      }

      let temp = stack.pop();
      if (temp == "{" && str[i] != "}") {
        return false;
      } else if (temp == "[" && str[i] != "]") {
        return false;
      } else if (temp == "(" && str[i] != ")") {
        return false;
      }
    }
  }

  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

console.log(checkValidParenthesis('[{}]'));
console.log(checkValidParenthesis('[{}{}{}{]'));

