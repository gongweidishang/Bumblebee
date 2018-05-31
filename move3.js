//版权 北京智能社©, 保留所有权利

var t=0;

function getStyle(obj, name)
{
	return (obj.currentStyle||getComputedStyle(obj, false))[name];
}

function startMove(obj, json)
{
	if(!obj.speed)
	{
		obj.speed={};
		
		for(var i in json)
		{
			obj.speed[i]=0;
		}
	}
	
	for(var i in json)
	{
		obj[i]=parseInt(getStyle(obj, i));
	}
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;
		
		for(var i in json)
		{
			obj.speed[i]+=(json[i]-obj[i])/5;
			obj.speed[i]*=0.7;
			
			obj[i]+=obj.speed[i];	//变量能存小数
			
			obj.style[i]=Math.round(obj[i])+'px';
			
			if(Math.round(obj[i])!=json[i] || Math.abs(obj.speed)>0.01)
			{
				bStop=false;
			}
		}
		document.title=t++;
		
		if(bStop)
		{
			clearInterval(obj.timer);
			//alert('aaa');
		}
	}, 30);
}