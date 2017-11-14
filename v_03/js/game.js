

var game = new Phaser.Game( window.innerWidth /* * window.devicePixelRatio*/,
                            window.innerHeight /* * window.devicePixelRatio*/,
                            Phaser.CANVAS, '',
                            { preload: preload, create: create, update: update, render: render });  



const SCALE_RATIO = window.devicePixelRatio / 3;

const TILE_SIZE = 32;


const ZONE_L = 2/3;
const ZONE_R = 1-ZONE_L;

const ZONE_G = 1-ZONE_L;

var map;
var layer;
var cursors;

var zoneLeft;
var zoneRight; 

var zoneGame;

var tile_size; 



function preload() {
	game.load.image('tiles', 'assets/tiles.png');
    game.load.image('recre', 'assets/recreativa_v01.png');

    game.load.image('recre_g', 'assets/recre_g.png')
    game.load.image('recre_p', 'assets/recre_p.png')

	game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);  
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);


}


function create() {

    //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


    zoneLeft  = new Phaser.Rectangle( 0, 0, game.width*ZONE_L, game.height);
    zoneRight = new Phaser.Rectangle( zoneLeft.width, 0, game.width*ZONE_R, game.height);

    var game_w = zoneLeft.width*0.65; 
    var game_w_tiles = parseInt(game_w/TILE_SIZE);
    game_w = game_w_tiles*TILE_SIZE;

    var game_h = (3/4)*game_w;
    var game_h_tiles = parseInt(game_h/TILE_SIZE);
    game_h = game_h_tiles*TILE_SIZE;

    zoneGame  = new  Phaser.Rectangle( 0, 0,  game_w, game_h);
    zoneGame.x = (zoneLeft.width/2) - (zoneGame.width/2);
    zoneGame.y = zoneLeft.height*0.07;

    console.log("fil:",game_h_tiles);
    console.log("col:",game_w_tiles);

    var s = game.add.sprite(0, 0, 'recre_p');
    s.width = zoneLeft.width;s.height = zoneLeft.height;
    s.fixedToCamera = true



    
    
    map = game.add.tilemap('map');
    map.addTilesetImage('tiles', 'tiles');


    ///layer = map.createLayer('myTerrain');
    layer = map.createLayer('efe',zoneGame.width,zoneGame.height);
    layer.cameraOffset.x = zoneGame.x;
    layer.cameraOffset.y = zoneGame.y;
    layer.resizeWorld();


/*

    //
    // The player and its settings

    player = game.add.sprite((layer.cameraOffset.x+layer.width/2)-16, (layer.cameraOffset.y+layer.height/2)-32, 'dude');
    player.fixedToCamera = true;


    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    //
*/

    cursors = game.input.keyboard.createCursorKeys();
    
    

   

}



function update() {
    
    
	if (cursors.left.isDown)
    {
        game.camera.x -= 4;
        //player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
        //player.animations.play('right');
    }

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }
    
    

}

function render(){

    //game.context.fillStyle = 'rgba(255,0,0,0.6)';
    //game.context.fillRect(zoneLeft.x, zoneLeft.y, zoneLeft.width, zoneLeft.height);

    game.context.fillStyle = 'rgba(0,255,0,0.6)';
    game.context.fillRect(zoneRight.x, zoneRight.y, zoneRight.width, zoneRight.height);


    // game.context.fillStyle = 'rgba(0,0,0,0.5)';
    //game.context.fillRect(zoneGame.x, zoneGame.y, zoneGame.width, zoneGame.height);


}