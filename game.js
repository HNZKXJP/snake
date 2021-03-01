//面向对象
import Food from './food.js';
import Snake from './snake.js';
//游戏类
class Game{
    constructor(){
        this.food=new Food();
        this.snake=new Snake();
        this.map=map;
        this.timerId=null;
    }
    start(){
        //把蛇和食物
        this.food.render(this.map);
        this.snake.render(this.map);
        this.runSnake();
        this.bindKey();


    }
    //通过键盘控制
    bindKey(){
        console.log(this.snake.direction);
        document.addEventListener('keydown',(e)=>{
            console.log(e.keyCode);
            switch (e.keyCode){
                case 37:
                    this.snake.direction='left';
                    break;
                case 38:
                    this.snake.direction='top';
                    break;
                case 39:
                    this.snake.direction='right';
                    break;
                case 40:
                    this.snake.direction='bottom';
                    break;

            }
        });

    }
    runSnake(){
        this.timerId= setInterval(()=>{
            this.snake.move(this.food,this.map);
            //
              var maxX=this.map.offsetWidth/this.snake.width;
              var maxY=this.map.offsetHeight/this.snake.height;
              var headX=this.snake.body[0].x;
              var headY=this.snake.body[0].y;
              if(headX<0 || headX>=maxX ||headY<0 || headY>=maxY){
                alert('Game Over');
                clearInterval(this.timerId);
                return
              }
               this.snake.render(this.map);
        },200)
    }
}

export default Game;