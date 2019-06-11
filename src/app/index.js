import cc from "npm-ccjs-ay";

function index() {
    index.setupEnv();
    index.setupRootElement();
}


index.setupEnv = function (){
    cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
    window.addEventListener('resize', function () {
        cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
    });

};

index.setupRootElement = function () {
    let root = cc.select('#body');
    let mainContainer = cc.createElement('div', 'test')
        .addClass('main-container');
    root.appendChild(mainContainer);

    mainContainer.add('h2').content('Thank you').addClass('header');
};

export default index