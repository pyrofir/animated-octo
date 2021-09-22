function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var bool = true

    if (keyboard.pressed("left"))
    {
        player1.turnLeft(rotateAngle);
        bool = !bool
    }
    if (keyboard.pressed("right"))
    {
        player1.turnRight(rotateAngle);
        bool = !bool
    }
    if (keyboard.pressed("up"))
    {
        player1.accelerate(moveDistance);

        bool = !bool
    }

    if (keyboard.pressed("down"))
    {
        player1.decelerate(moveDistance);
        bool = !bool
    }

        if (bool)
        {
            for (var i = 0; i < ennemies.length; i++)
            {
                ennemies[i].accelerate(moveDistance);
                ennemies[i].move();
            }
        }
        else 
        {
            for (var i = 0; i < ennemies.length; i++)
            {
                ennemies[i].decelerate(moveDistance);
                ennemies[i].move();
            }
        }

    player1.move();
    controls.update();
}