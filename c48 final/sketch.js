var bg, player,chest,enemy, 
gameState="intro";
score=0;
var bgimg, playerimg, chest_img, enemyimg;
zArray=[];

function preload(){
     chest_img=loadImage("images/chest2.png");
     chest_open_img=loadImage("images/chest2open.png")
     player_img=loadImage("images/player.gif")
     heart_img=loadImage("images/heart.png")   
     zombie_img=loadImage("images/walking zombie.gif")   
     daybg= loadImage("images/playbg.jpg");
     bg1img= loadImage("images/loading screen.jpg")   
}
function setup()
{
    createCanvas(1500,700);
    player = createSprite(700,600,100,100);
    //player.addImage(player_img);
}
function draw()
{
    background(daybg);
    if(gameState==="intro")
    {
        background(bg1img);
        push()
       textSize(32);
       fill("purple")
       strokeWeight(3);
       stroke("purple")
       text("ZOMBIE SHOOTER",600,50);
       pop()
       textSize(25);
       fill("blue");
       strokeWeight(5);
       stroke("black")
       text("It is survival game , play and survive  \nA Doctor created a VIRUS and spread it into the  air \na person named jack was unaffected of the Virus \nNow its your job to help jack by finding a vacine for the virus \nyou will find the vacine at 10,000 points!! \n 1 zombie = 10 POINTS , controls usearrowkey  ",250,250); 

       textSize(30);
       fill("red");
       text("Press space to start the game!!", 500,500);        

     if(keyDown === 32 && gameState==="intro")
     {
       gameState="play"
     }


    }
    if(gameState==="play")
    {
        background(daybg) 
        drawSprites();  
        fill("blue")
        text("score :" + score,1100,100);
        
        createZombies();
        if(life===3)
        {
            lives1.display();
            lives2.display();
            lives3.display();  
        }
        if(life==2)
        {
            lives1.display();
            lives2.display();
        }
        if(life ===1)
        {
            lives1.display();
        }        
        if(life===0)
        {
            gameState= "over";
        }
        chest1.display();   
        //wall2.display();
        //wall3.display();
        
      //  createZombies();
       
        
    }
    if(gameState=== "over")
    {
        
    }

    drawSprites();
}
function createZombies() {
    var z= createSprites(100,100,20,20);
}