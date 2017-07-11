import {buildDOM} from 'pomace-base';

//0.5px 边线实现
export default {

  //定位
  hrsy:{
   overflow: 'hidden',
   height: '1px',
   backgroundSize: '100px 1px'
  },

  //水平线
  horizon(node, pos = 'top', color = '#cbcbcb'){
   const hr = buildDOM('<div class="pomace-border">');
   const coord = {left: 0, top: 0, bottom: 'auto', right: 'auto'};
   const {hrsy} = this;

   if(pos === 'bottom'){
     coord.top = 'auto';
     coord.bottom = 0;
   }

   hr.$$.css(coord);
   hr.$$.css(hrsy);

   if(pos === 'top'){
     hr.$$.css({backgroundImage: `-webkit-linear-gradient(${pos}, ${color} 50%,transparent 50%)`});
     hr.$$.css({backgroundImage: `-moz-linear-gradient(${pos}, ${color} 50%,transparent 50%)`});
     hr.$$.css({backgroundImage: `-o-linear-gradient(${pos}, ${color} 50%,transparent 50%)`});
     hr.$$.css({backgroundImage: `linear-gradient(to ${pos}, ${color} 50%,transparent 50%)`});
   }else if(pos === 'bottom'){
     hr.$$.css({position: 'absolute',width: '100%'});
     hr.$$.css({backgroundImage: `-webkit-linear-gradient(${pos}, transparent 50%, ${pos},${color} 50%)`});
     hr.$$.css({backgroundImage: `-moz-linear-gradient(${pos}, transparent 50%, ${pos},${color} 50%)`});
     hr.$$.css({backgroundImage: `-o-linear-gradient(${pos}, transparent 50%,${color} 50%)`});
     hr.$$.css({backgroundImage: `linear-gradient(to ${pos}, transparent 50%,${color} 50%)`});
   }

   if(node && typeof node === 'object' && node.nodeType === 1){
     if(node.$$){
       pos === 'top'? node.$$.first(hr):node.$$.last(hr);
       node.$$.css({position:'relative'});
     }else{
       node.appenChild(hr);
       node.$$.css({position:'relative'});
     }
   }

   return hr;
  }

};
