function joeGetElementsByClassName(className) {
 let elements = [];
 function checkChildren(element){
   var length = element.children.length;
   if(element.classList.contains(className)){
     elements.push(element);
   }
   for(var i = 0; i < length; i++){
       checkChildren(element.children[i])
     };
   };
   checkChildren(document.body)
   return elements;
 };
