  // DataType : [ARRAY]
  
  
  
  let names = ['ahmed','ali','mazen','omar']
  console.log(names);
  console.log(names[0]);
  console.log(names[names.length-1]);
  
  let objects = [1,2,3,'ahmed',true,undefined,null,[1,2,3]]
  console.log(objects);
  console.log(objects[7][1]);
  
  let things = [ 1,2,3,[4,5,6,[7,8,9]] ]
  console.log(things[3][3][1]);
  
  let names1 = ['ahmed','ali','mazen','omar']
  names1[0] = 'abdelrahman'  ;
  console.log(names1)
  
  names1.push('gamal','taha')
  names1.unshift('shiheb')
  console.log(names1)
  
  names1.shift()
  console.log(names1.shift())
  console.log(names1)

  
  names1.pop()
  console.log(names1.pop())
  console.log(names1)
  
  
  // SPLICE
  
  let names2 = ['ahmed','ali','mazen','gamal']
  console.log(names2);
  names2.splice(0);
  console.log(names2);
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(0,1);
  console.log(names2);
  
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(1,1);
  console.log(names2);
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(1,2);
  console.log(names2);
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(0,1,'mona','shiheb');
  console.log(names2);
  
  
  
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(0,0,'mona','shiheb');
  console.log(names2);
  
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  names2.splice(1,0,'mona','shiheb');
  console.log(names2);
  
  
  
  // SLICE
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  console.log(names2.slice(0,3));
  console.log(names2);
  
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2);
  console.log(names2.slice(-3,-1));
  console.log(names2);

  
  
  
  
  // SEARCH
  
  
  names2 = ['ahmed','ali','mazen','gamal'];
  console.log(names2.indexOf('ahmed'));
  console.log(names2.indexOf('ahmed',1));
  
  
  names2 = ['ahmed','ali','mazen','gamal','shiheb','ahmed'];
  console.log(names2.indexOf('ahmed'));
  console.log(names2.indexOf('ahmed', 1));
  
  console.log(names2.lastIndexOf('ahmed'));
  console.log(names2.lastIndexOf('ahmed', 3));
  console.log(names2.lastIndexOf('ahmed', -1));
  
  console.log(names2.includes('ahmed'));
  console.log(names2.includes('mazen', 3));
  
  
  
  
