//Creating variables.

//Vars. for Bg.
var WaterBg , SharkBg ;
var background1_img , background2_img ;

//Vars. for Tortoise.
var tortoise, tortoiseAngry , tortoiseScared ;
var tortoise_img , angryT_img , tortoiseScared_img ;

//Vars. for Aquatic Animals
var greetShark , crab1 , crab2 , sharksGroup1 ;
var greetShark_img , crab1_img , crab2_img;

//Vars. for Texts.
var story , Story , rules , goal , myName , Title , Space , Welcome , nB , startSound  , Hello;
var story1_img , story2_img , title_img , welcome_img , rules_img , goal_img , myName_img , startSound_img ,  space_img , n_img , hello_img;
var welcomeSound , WelcomeSound ;

//Vars. for Invisible Platform.
var invisibleGround  , invisibleP1 , invisibleP2  ;

//Vars. for Sounds.
var welcome_Sound , game_Sound  ;

//Var for gameState.
var gameState = 0 ;

function preload(){
   
  //Loading Images
  //Bg Images
  background1_img = loadImage("images/Bg1.webp");
  background2_img = loadImage("images/Bg2.png");

  //Tortoise Images
  tortoise_img = loadImage("images/playT.png");
  angryT_img = loadImage("images/revenge.png");

  //Shark Images
  greetShark_img = loadImage("images/Greet.png");

  //Texts & Text's Images
  hello_img = loadImage("images/hello.png")
  title_img = loadImage("images/Title.png");
  space_img = loadImage("images/Space.png");
  n_img = loadImage("images/N.png");
  welcome_img = loadImage("images/Welcome.png");
  rules_img = loadImage("images/Rules.png");
  goal_img = loadImage("images/Goal.png");
  myName_img = loadImage("images/Creater.png");
  story1_img = loadImage("images/Story1.png");
  story2_img = loadImage("images/Story2.png");
  WelcomeSound = loadImage("images/welcomeSound.png");
  startSound_img = loadImage("images/startSound.png");
  tortoiseScared_img = loadImage("images/scaredT.png");
  crab1_img  = loadImage("images/Crab.png");
  crab2_img = loadImage("images/Crab2.png");

  //Loading Sound
  game_Sound = loadSound("sounds/Game.mp3");
  welcome_Sound = loadSound("sounds/Welcome.mp3");

}

function setup() {

  //CreatingCanvas
  createCanvas(displayWidth, displayHeight);

  //Backgrounds.
  WaterBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  WaterBg.addImage(background2_img);
  WaterBg.scale = 1.45;
  WaterBg.visible = false;

  SharkBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  SharkBg.addImage(background1_img);
  SharkBg.scale = 1.6;
  SharkBg.visible = false;

  //Tortoise.
  tortoise = createSprite(displayWidth/2, displayHeight/2 , 10,10);
  tortoise.addImage(tortoise_img);
  tortoise.scale = 0.2;
  tortoise.visible = false;

  tortoiseAngry = createSprite(displayWidth/2, displayHeight/2 , 10,10);
  tortoiseAngry.addImage(angryT_img);
  tortoiseAngry.visible = false;

  tortoiseScared = createSprite(displayWidth/2,displayHeight/1.3,displayWidth,displayHeight);
  tortoiseScared.addImage(tortoiseScared_img);
  tortoiseScared.scale = 0.2;
  tortoiseScared.visible = false

  // invisible platforms
  invisibleGround = createSprite(displayWidth/2 , 300 ,2000 , 5 );
  invisibleGround.collide(tortoise);
  invisibleGround.visible = false;

  invisibleP1 = createSprite(displayWidth/1.1 , displayHeight/1.1 , 5 , 100);
  invisibleP1.visible = true;

  invisibleP2 = createSprite( displayWidth/7 , displayHeight/1.1 , 5 , 100);
  invisibleP2.visible = true;

  //Sharks.
  greetShark = createSprite(displayWidth/2 , displayHeight/2 ,10,10)
  greetShark.addImage(greetShark_img);
  greetShark.visible = false; 

  sharksGroup1 = createGroup();
  sharksGroup1.visibleEach = false;

  crab1 = createSprite(displayWidth/1.3 , displayHeight/1.1 , 10 , 10);
  crab1.addImage(crab1_img);
  crab1.visible = false;
  crab1.scale = 0.2;
  
  crab2 = createSprite(displayWidth/2 , displayHeight/1.1 , 10 , 10);
  crab2.addImage(crab2_img);
  crab2.visible = false;
  crab2.scale = 0.2;

  //Welcoming.

  Welcome = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Welcome.addImage(welcome_img);
  Welcome.scale = 1.45;
  Welcome.visible = false;

  welcomeSound = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  welcomeSound.addImage(WelcomeSound);
  welcomeSound.scale = 0.2;
  welcomeSound.visible = false;

  startSound = createSprite(displayWidth/2,displayHeight/1.8,displayWidth,displayHeight);
  startSound.addImage(startSound_img);
  startSound.scale = 1.45;
  startSound.visible = false;

  //Hello 
  Hello = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  Hello.addImage(hello_img);
  Hello.scale = 1;
  Hello.visible = false;

  //Title
  Title = createSprite(displayWidth/2,displayHeight/15,displayWidth,displayHeight);
  Title.addImage(title_img);
  Title.scale = 1.45;
  Title.visible = true;

  //Space
  Space = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  Space.addImage(space_img);
  Space.scale = 1.45;
  Space.visible = false;

  // N button
  nB = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  nB.addImage(n_img);
  nB.scale = 1.45;
  nB.visible = false;

  //Rules
  rules = createSprite(displayWidth/2,displayHeight/3,displayWidth,displayHeight);
  rules.addImage(rules_img);
  rules.scale = 1.45;
  rules.visible = false;

  //Goal
  goal = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  goal.addImage(goal_img);
  goal.scale = 1.45;
  goal.visible = false;

  //My Name
  myName = createSprite(displayWidth/2,displayHeight/1.2,displayWidth,displayHeight);
  myName.addImage(myName_img);
  myName.scale = 0.9;
  myName.visible = false;

  //Story
  story = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  story.addImage(story1_img);
  story.scale = 1.1;
  story.visible = false;
  Story = createSprite(displayWidth/2,displayHeight/2.5,displayWidth,displayHeight);
  Story.addImage(story2_img);
  Story.scale = 0.3;
  Story.visible = false;

}

function draw() {
  background("pink")

  if(gameState === 0){

    startSound.visible = true;
    SharkBg.visible = true;
    welcomeSound.visible = true;

    if(gameState === 0 && mousePressedOver(welcomeSound)) {
      welcome_Sound.play();
      gameState = 1
    }
  }

  if(gameState === 1){
    
    SharkBg.visible = false;
    startSound.visible = false;
    Space.visible = false;
    welcomeSound.visible = false;

    tortoiseScared.visible = true;
    Welcome.visible = true;
    nB.visible = true;
    greetShark.visible = true;
    WaterBg.visible = true;
   
    if(gameState === 1 && keyDown("n")){
      gameState = 2;
    }
  }

  if(gameState === 2){

     tortoiseScared.visible = false;
     nB.visible = false;
     Welcome.visible = false;
     greetShark.visible = false;

     WaterBg.visible = true;
     story.visible = true;
     Story.visible = true;
     Space.visible = true;
     Space.y = displayHeight/1.1;
     if(gameState === 2 && keyDown("space")){
      gameState = 3;
    }
  }

  if(gameState === 3){

    Space.visible = false;
    story.visible = false;
    Story.visible = false;
    Welcome.visible = false;
    greetShark.visible = false;

    rules.visible = true;
    goal.visible = true;
    myName.visible = true;
    Hello.visible = true;
    nB.visible = true;
    
    if(gameState === 3 && keyDown("n")){
      gameState = 4;
    }
  }

  if(gameState === 4){

     rules.visible = false;
     goal.visible = false;
     myName.visible = false;
     Hello.visible = false;
     nB.visible = false;
     Space.visible = false;

     tortoise.visible = true;

     crab1.visible = true;
     crab2.visible = true;

     crab1.velocityX = -3;
     crab2.velocityX = -2;

     if(invisibleP1.isTouching(crab1)){
      crab1.velocityX = 3;
     }
     if(invisibleP1.isTouching(crab2)){
      crab2.velocityX = 2;
     }
     if(invisibleP2.isTouching(crab1)){
      crab1.velocityX = -3;
     }
     if(invisibleP2.isTouching(crab2)){
      crab2.velocityX = -2;
     }
     
     if(keyWentDown(UP_ARROW)){
       tortoise.velocityY = -3;
     }
     if(keyWentUp(UP_ARROW)){
      tortoise.velocityY = 0;
     }
     if(keyWentDown(DOWN_ARROW)){
       tortoise.velocityY = 3;
     }
     if(keyWentUp(DOWN_ARROW)){
      tortoise.velocityY = 0;
     }
     //sharksGroup1.visible = true;

    if(gameState === 4 && sharksGroup1.isTouching(tortoise)){
      gameState = 5;
  }
}
  //spawnSharks();
  drawSprites();
}

//Function for Sharks 
function spawnSharks(){
    if (gameState === 4 && frameCount % 10 === 0){
      var shark1 = createSprite(displayWidth/2,Math.round(random(330,800)),10,40);
       shark1.velocityX = -3;
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark1.addImage(crab1_img);
                 break;
         case 2: shark1.addImage(crab2_img);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       shark1.scale = 0.2;
       shark1.lifetime = 300;
      
      //add each obstacle to the group
       sharksGroup1.add(shark1);

       var shark2 = createSprite(displayWidth/2,Math.round(random(330,800)),10,40);
       shark2.velocityX = 4;

       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark2.addImage(crab1_img);
                break;
         case 2: shark2.addImage(crab2_img);
                 break;
         default: break;
       }

       //assign scale and lifetime to the obstacle           
       shark2.scale = 0.2;
       shark2.lifetime = 300;
      
       //add each obstacle to the group
       sharksGroup1.add(shark2);
   }
  }


//Story :- You have just assassinated The Queen of the Ocean very quietly.
// But, the king has been angry on us for her queen’s death and has made a huge price on your head!!
// Now, all the king’s bodyguards have been alerted & looking for you!! and want the price on your head.
//You have to save yourself from the bodyguards and assure your security.
// Let’s see how you uses your skills and escape those deadly sharks!!