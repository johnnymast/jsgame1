class KeyboardInput {

    constructor() {
        this.keycode = 0;
        this.KEY_LEFT = 37;
        this.KEY_RIGHT = 39;
        this.KEY_UP = 38;
        this.KEY_DOWN = 40;
        var self = this;

        document.addEventListener('keydown', function(event) {
            var charCode = (event.charCode) ? event.charCode : event.keyCode;
            self.keycode = charCode;
        }, false);
    }

    getKey() {
        var key = this.keycode;
        this.keycode = 0;
        return key;
    }


    capture() {
        return new Promise(function(resolve, reject) {
            console.log('inside');
            console.log(document);
        });
    }
}