import {getRandom} from './util.js';
class Food{
    constructor({x=0,y=0,width=20,height=20,color='green'}={}){
        this.elements=[];
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;

    }
    render(map){
        this.remove();
        this.x=getRandom(0,map.offsetWidth / this.width -10)*this.width;
        this.y=getRandom(0,map.offsetHeight / this.height -10)*this.height;
        console.log(this.x,this.y);

        let div=document.createElement('div');

        map.appendChild(div);
        this.elements.push(div);

        div.style.position='absolute';
        div.style.left=this.x+'px';
        div.style.top=this.y+'px';
        div.style.width=this.width+'px';
        div.style.height=this.height+'px';
        div.style.backgroundColor=this.color;
    }
    remove(){
        for(let i=this.elements.length-1;i>=0;i--){
            this.elements[i].parentNode.removeChild(this.elements[i]);
            this.elements.splice(i,1);
        }
    }
}
export default Food;