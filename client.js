/** Imports of natives and of the incredible functions of ALTV */
import * as alt from 'alt';
import * as native from 'natives';

native.freezeEntityPosition(alt.Player.local.scriptID, false); 




/**
 * COMPLETE THIS
 */
function Pay(price) {
    ShowNotification('removed '+price+'€')
}

function GiveItem(item) {
    ShowNotification('added item '+item)
}

/**
 * PROPS HASH
 * 
 * candybox : 3640564381  
 * sprunk : 1114264700 
 * ecola : 992069095
 * coffee : 690372739
 * water (inside) : 3552768664
 * water (outside) : 1099892058
 * 
 */

/**
 * Configs
 */
let Config = {

    CandyBox: {

        currency: '$',
        ad: 'Place your Advertisement',

        /* dont edit pos */
        lineA: [
            { price:3, img:'pepsicola', item:'Pepsi Cola', pos:'A-1'}, 
            { price:3, img:'ecola', item:'E-Cola', pos:'A-2'},  
            { price:2, img:'cookies', item:'Oreos', pos:'A-3'}
        ],
        lineB: [
            { price:2, img:'orangotang', item:'Orang O Tang', pos:'B-1'}, 
            { price:2, img:'sprunk', item:'Sprunk Soda', pos:'B-2'}, 
            { price:1, img:'water', item:'Water Bottle', pos:'B-3'}
        ],
        lineC: [
            { price:2, img:'snack', item:'Snack Bag', pos:'C-1'},
            { price:3, img:'chips', item:'Chips Bag', pos:'C-2'},
            { price:5, img:'beer', item:'Beer Can', pos:'C-3'}
        ],
    },

    ECola: {
        currency: '€',
		price: '1',

		sodas: [
			{ img:'ecola', item:'E-Cola' }, 
			{ img:'sprunk', item:'Sprunk Soda' },  
			{ img:'orangotang', item:'Orang O Tang' }
		],
    },

    Sprunk: {
        currency: '€',
		price: '1',

		sodas: [
			{ img:'sprunk', item:'Sprunk Soda' },  
			{ img:'ecola', item:'E-Cola' }, 
			{ img:'orangotang', item:'Orang O Tang' }
		],
    },

    BeanMachine: {
        currency: '€',
		price: '1',
        item: 'Coffee Cup',
    },

    Raine: {
        currency: '€',
		price: '1',
        item: 'Rainé Bottle',
    },

}


/**
 * CandyBox
 */

let CandyBox= new alt.WebView('http://resource/menu/candybox.html');

CandyBox.on('pay', (price) => { Pay(price) })
CandyBox.on('sound', (sound, family) => { 
    native.playSoundFrontend(-1, sound, family, true); 
    native.playSoundFrontend(-1, sound, family, false); 
});
CandyBox.on('give', (item) => { GiveItem(item) })
CandyBox.on('close', () => { 

    native.freezeEntityPosition(alt.Player.local.scriptID, false); 
    CandyBox.unfocus(); 
    alt.showCursor(false); 
    native.displayRadar(true);
    alt.toggleGameControls(true);

})

alt.on('CandyBox:Open', OpenCandyBox);
alt.onServer('CandyBox:Open', OpenCandyBox);
function OpenCandyBox() { 

    CandyBox.emit('data', Config.CandyBox)
    CandyBox.emit('open'); 

    CandyBox.focus(); 
    alt.showCursor(true); 
    native.displayRadar(false);
    alt.toggleGameControls(false);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
}






/**
 * ECola
 */

let ECola = new alt.WebView('http://resource/menu/ecola.html');

ECola.on('pay', (price) => { Pay(price) })
ECola.on('sound', (sound, family) => { 
    native.playSoundFrontend(-1, sound, family, true); 
    native.playSoundFrontend(-1, sound, family, false); 
});
ECola.on('give', (item) => { GiveItem(item) })
ECola.on('close', () => { 
 
    native.freezeEntityPosition(alt.Player.local.scriptID, false); 
    ECola.unfocus(); 
    alt.showCursor(false); 
    native.displayRadar(true);
    alt.toggleGameControls(true);
 
})
 
alt.on('ECola:Open', OpenECola);
alt.onServer('ECola:Open', OpenECola);
function OpenECola() { 
 
    ECola.emit('data', Config.ECola)
    ECola.emit('open'); 
 
    ECola.focus(); 
    alt.showCursor(true); 
    native.displayRadar(false);
    alt.toggleGameControls(false);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
}







/**
 * Sprunk
 */

let Sprunk = new alt.WebView('http://resource/menu/sprunk.html');

Sprunk.on('pay', (price) => { Pay(price) })
Sprunk.on('sound', (sound, family) => { 
    native.playSoundFrontend(-1, sound, family, true); 
    native.playSoundFrontend(-1, sound, family, false); 
});
Sprunk.on('give', (item) => { GiveItem(item) })
Sprunk.on('close', () => { 
  
    native.freezeEntityPosition(alt.Player.local.scriptID, false); 
    Sprunk.unfocus(); 
    alt.showCursor(false); 
    native.displayRadar(true);
    alt.toggleGameControls(true);
  
})
  
alt.on('Sprunk:Open', OpenSprunk);
alt.onServer('Sprunk:Open', OpenSprunk);
function OpenSprunk() { 
  
    Sprunk.emit('data', Config.Sprunk)
    Sprunk.emit('open'); 
  
    Sprunk.focus(); 
    alt.showCursor(true); 
    native.displayRadar(false);
    alt.toggleGameControls(false);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
}





/**
 * BeanMachine
 */

let BeanMachine = new alt.WebView('http://resource/menu/beanmachine.html');

BeanMachine.on('pay', (price) => { Pay(price) })
BeanMachine.on('sound', (sound, family) => { 
    native.playSoundFrontend(-1, sound, family, true); 
    native.playSoundFrontend(-1, sound, family, false); 
});
BeanMachine.on('give', (item) => { GiveItem(item) })
BeanMachine.on('close', () => { 
  
    native.freezeEntityPosition(alt.Player.local.scriptID, false); 
    BeanMachine.unfocus(); 
    alt.showCursor(false); 
    native.displayRadar(true);
    alt.toggleGameControls(true);
  
})
  
alt.on('BeanMachine:Open', OpenBeanMachine);
alt.onServer('BeanMachine:Open', OpenBeanMachine);
function OpenBeanMachine() { 
  
    BeanMachine.emit('data', Config.BeanMachine)
    BeanMachine.emit('open'); 
  
    BeanMachine.focus(); 
    alt.showCursor(true); 
    native.displayRadar(false);
    alt.toggleGameControls(false);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
}



/**
 * RaineInside
 */

let RaineInside = new alt.WebView('http://resource/menu/raineinside.html');

RaineInside.on('pay', (price) => { Pay(price) })
RaineInside.on('sound', (sound, family) => { 
    native.playSoundFrontend(-1, sound, family, true); 
    native.playSoundFrontend(-1, sound, family, false); 
});
RaineInside.on('give', (item) => { GiveItem(item) })
RaineInside.on('close', () => { 
  
    native.freezeEntityPosition(alt.Player.local.scriptID, false); 
    RaineInside.unfocus(); 
    alt.showCursor(false); 
    native.displayRadar(true);
    alt.toggleGameControls(true);
  
})
  
alt.on('RaineInside:Open', OpenRaineInside);
alt.onServer('RaineInside:Open', OpenRaineInside);
function OpenRaineInside() { 
  
    RaineInside.emit('data', Config.Raine)
    RaineInside.emit('open'); 
  
    RaineInside.focus(); 
    alt.showCursor(true); 
    native.displayRadar(false);
    alt.toggleGameControls(false);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);

}


/**
 * RaineOutside
 */

 let RaineOutside = new alt.WebView('http://resource/menu/raineoutside.html');

 RaineOutside.on('pay', (price) => { Pay(price) })
 RaineOutside.on('sound', (sound, family) => { 
     native.playSoundFrontend(-1, sound, family, true); 
     native.playSoundFrontend(-1, sound, family, false); 
 });
 RaineOutside.on('give', (item) => { GiveItem(item) })
 RaineOutside.on('close', () => { 
   
     native.freezeEntityPosition(alt.Player.local.scriptID, false); 
     RaineOutside.unfocus(); 
     alt.showCursor(false); 
    native.displayRadar(true);
     alt.toggleGameControls(true);
   
 })
   
 alt.on('RaineOutside:Open', OpenRaineOutside);
 alt.onServer('RaineOutside:Open', OpenRaineOutside);
 function OpenRaineOutside() { 
   
     RaineOutside.emit('data', Config.RaineOutside)
     RaineOutside.emit('open'); 
   
     RaineOutside.focus(); 
     alt.showCursor(true); 
    native.displayRadar(false);
     alt.toggleGameControls(false);
     native.freezeEntityPosition(alt.Player.local.scriptID, true);
     
 }





function PushLongString(message, action) {
    message.match(/.{1,99}/g).forEach(textBlock => {
        action(textBlock);
    });
}


function ShowNotification(message, blink = false) {
    native.beginTextCommandThefeedPost("CELL_EMAIL_BCON");
    PushLongString(message, (textblock) => {
        native.addTextComponentSubstringPlayerName(textblock);
    });
    native.endTextCommandThefeedPostTicker(blink, false);
}