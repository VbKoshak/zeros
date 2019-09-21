const advanced_fact = (num) => {
  let returned = [0,0];
    for (let i = (num % 2 + 2); i <= num; i += 2){
      returned[0] += count_del(i,2);
      returned[1] += count_del(i,5);
    }
  return returned;
};

const simple_fact = (num) => {
  let returned = [0, 0];
  for (let i = 2; i <= num; i ++) {
    returned[0] += count_del(i, 2);
    returned[1] += count_del(i, 5);
  }
  return returned;
};

const count_del = (num,del) => {
  let copy = num;
  let counter = 0;
  while (copy % del == 0) {
    counter ++;
    copy = copy/del;
  }
  return counter;
};


module.exports = function zeros(expression) {
  // your solution
  let arr = expression.split('*');
  let res = 0;
  let counter_2 = 0;
  let counter_5 = 0;
  for (let singleExpr of arr){
    if (singleExpr[singleExpr.length-2] == '!')
    {
      let nums = advanced_fact(+(singleExpr.split('').splice(0, singleExpr.length - 2).join('')));
      counter_2 += nums[0];
      counter_5 += nums[1];
    } else {
      let nums = simple_fact(+(singleExpr.split('').splice(0, singleExpr.length - 1).join('')));
      counter_2 += nums[0];
      counter_5 += nums[1];
    }
  }
  res += (counter_2 < counter_5 ? counter_2 : counter_5);
  return res; 
};
