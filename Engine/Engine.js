document.writeln('<script type="text/javascript" src="Engine/Store.js"></script>');
document.writeln('<script type="text/javascript" src="Engine/Size.js"></script>');
document.writeln('<script type="text/javascript" src="Engine/Screen.js"></script>');


document.writeln('<script type="text/javascript" src="Engine/Helpers/Internals.js"></script>');
document.writeln('<script type="text/javascript" src="Engine/Helpers/Color.js"></script>');
document.writeln('<script type="text/javascript" src="Engine/Helpers/Shapes.js"></script>');
document.writeln('<script type="text/javascript" src="Engine/Loader.js"></script>');


document.addEventListener('EngineInternalsLoaded', function (e) {


    var event = new Event('EngineStarted');
    this.dispatchEvent(event);

    console.log('Engine started');
}, false);

