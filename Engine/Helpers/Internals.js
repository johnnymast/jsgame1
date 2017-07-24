Context = (screen) => {
    if (screen) {
        config.set('engine.internals.screen', screen);
        return true;
    }
    return config.get('engine.internals.screen');
}

Canvas = (canvas) => {
    if (canvas) {
        config.set('engine.internals.canvas', canvas);
        return true;
    }
    return config.get('engine.internals.canvas');
}

function createScreen(size) {
    var screen = new Screen(size);
    return new Promise(function(resolve, reject) {
        resolve(screen);
    });
}

setupEngine = (target, size) => {
    window.config = new Store();

    return new Promise(function(resolve, reject) {
        document.addEventListener('EngineStarted', function (e) {
            createScreen(size).then((screen) => {
                Context(screen.ctx);
                Canvas(screen.canvas);

                var parent = document.getElementById(target);
                parent.appendChild(screen.canvas);

                resolve(screen);
            });
        });
    });
}

