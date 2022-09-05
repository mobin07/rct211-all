function time(time) {
    let h=0;
    let m=0;
    let s=0;
   if(time>=3600000){
     h=Math.floor(time/3600000);
    time=time-h*3600000
   }
   if(time>=60000){
    m=Math.floor(time/60000);
    time=time-m*60000
   }
   s=Math.floor(time/1000)
  
if(h!=0 && m==0 && s==0){
    return h+" hours"
}else if(h==0 && m!=0 && s==0){
    return m+" minutes"
}else if(h==0 && m==0 && s!=0){
    return s+" seconds"
}else if(h!=0 && m!=0 && s==0){
    return h+" hours "+m+" minutes"
}else if(h!=0 && m==0 && s!=0){
    return h+" hours "+s+" seconds"
}
else if(h==0 && m!==0 && s!=0){
    return m+" minutes "+s+" seconds"
}
else if(h==0 && m==0 && s!=0){
    return s+" seconds"
}else if(h!=0 && m!=0 && s!=0){
    return h+" hours "+m+" minutes "+s+" seconds"
}
  }
  
  module.exports = time;
  