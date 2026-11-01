(()=>{
 const site='https://zaji121.github.io/pony-friendship-map/';
 const quote=value=>'"'+String(value??'').replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';
 window.PONY_DELIVERY={
  csv:rows=>'\ufeff'+[['组编号','测评密码','赠送邀请码','测评入口','发货内容'],...rows.map(r=>[r.id,r.purchase,r.invite,site,r.message])].map(row=>row.map(quote).join(',')).join('\r\n'),
  txt:rows=>rows.map(r=>'测评密码：'+r.purchase+' | 赠送邀请码：'+r.invite+' | 测评入口：'+site+' | 两种码各可使用一次，欢迎邀请朋友一起测评。').join('\r\n')
 };
})();
