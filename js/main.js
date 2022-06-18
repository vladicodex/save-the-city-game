var bomb;

function startGame() {
    bomb = new component(20, 50, "orange", 240, -50);
    area.start();
}

var area = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateArea, 100);        
    },
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.speedX = 0;
    this.speedY = 0;    
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = area.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var areaBottom = area.canvas.height - this.height;
        if (this.y >= areaBottom) {
            alert("G A M E  O V E R");
            startGame();
        }
    }
}

function updateArea() {
    area.clear();
    bomb.newPos();
    bomb.update();
}