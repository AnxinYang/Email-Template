function setupServiceWorker() {
    if('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker is registered.')
        } catch (e) {
            console.error('Failed to register service worker.', e)
        }
    }else{
        console.error('Service worker is not supported.')
    }
}

export default setupServiceWorker;