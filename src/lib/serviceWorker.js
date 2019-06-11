function setupServiceWorker() {
    if('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker registered.')
        } catch (e) {
            console.log('Service worker failed to register. - WTH!?')
        }
    }else{
        console.log('Service worker not supported! - Dude, buy a new phone.')
    }
}

export default setupServiceWorker;