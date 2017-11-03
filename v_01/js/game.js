

//var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '',
//							{ preload: preload, create: create, update: update, render: render });addEventListener


var game = new Phaser.Game(544, 416, Phaser.AUTO, '',
 							{ preload: preload, create: create, update: update, render: render });

var map;
var layer;


var cursors;



function preload() {
	game.load.image('tiles', 'assets/tiles.png');
	game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON)
}


function create() {
    map = game.add.tilemap('map');

    map.addTilesetImage('tiles', 'tiles');



    layer = map.createLayer('myTerrain');
    layer = map.createLayer('efe');
    layer.resizeWorld();

    

    cursors = game.input.keyboard.createCursorKeys();


   

}

function update() {
	if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
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

}