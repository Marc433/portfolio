(() => {
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const canvas=document.createElement('canvas');canvas.id='matrix';canvas.setAttribute('aria-hidden','true');document.body.append(canvas);
 const context=canvas.getContext('2d');if(!context)return;
 let drops=[],timer=null;
 function resize(){canvas.width=innerWidth;canvas.height=innerHeight;drops=Array(Math.ceil(innerWidth/20)).fill(1);}
 function draw(){context.fillStyle='rgba(16,19,17,.12)';context.fillRect(0,0,canvas.width,canvas.height);context.fillStyle='#00ff88';context.font='14px monospace';drops.forEach((y,x)=>{context.fillText(Math.random()>.5?'1':'0',x*20,y*20);drops[x]=y*20>canvas.height&&Math.random()>.975?0:y+1;});}
 function update(){clearInterval(timer);timer=null;if(!motion.matches&&!document.hidden)timer=setInterval(draw,80);}
 resize();addEventListener('resize',resize);document.addEventListener('visibilitychange',update);motion.addEventListener('change',update);update();
})();
