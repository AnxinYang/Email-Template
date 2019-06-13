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

    index.setupContentSection(mainContainer);
    index.setupListSection(mainContainer);
};

index.setupListSection = function (container) {
    let listContainer = container.add('section').addClass('container')
        .bind('currentTemp', function (d) {
           d ? this.addClass('list-transform'): this.removeClass('list-transform');
        });

    let listHeader = listContainer.add('div').addClass('list-header');
    listHeader.add('input').addClass('input-search').attr('placeholder', 'Search...');

    let list = listContainer.add('div').addClass('list');

    // GENERATE SOME MOCKUP;
    for (let i = 0; i < 32; i++) {
        let temp = list.add('div');
        temp.add('strong').content('Topic');
        temp.add('p').content('Something blah blah blah blah blah blah blah blah blah blah blah')
            .on('click', function () {
                cc.setValue('currentTemp', true);
            });
    }
};

index.setupContentSection = function (container) {
    let contentContainer = container.add('section').addClass('container')
        .bind('currentTemp', function (d) {

        });
    let contentHeader = contentContainer.add('div').addClass('list-header');
    contentHeader.add('input').addClass('input-title').attr('placeholder', 'Title...');
    
    let textDiv = contentHeader.add('div')
        .css({
            position: 'relative',
        });

    textDiv.add('textarea').addClass('textarea').attr('placeholder', 'Email content')
        .on('keyup', function () {
            let regex = /--.+--/g;
            let escape =/<.+>.*<\/.+>|<.+>|<\/.+>/g;
            let vars = {};
            let bgText = this.value;
            bgText = bgText.replace(/<|>/g, '~');
            // (bgText.match(escape) || []).forEach(function (str) {
            //     bgText = bgText.replace(/<|>/g, '~');
            // });
            (bgText.match(regex) || []).forEach(function (str) {
                vars[str.replace(/--/g, '')] = '';
                bgText = bgText.replace(str, `<span class="var-str">${str}</span>`)
            });
            console.log(vars);
            textBg.innerHTML = (bgText);
            cc.setValue('fields', vars);
        });
    let textBg = textDiv.add('pre').addClass('textarea-background');
    
    contentHeader.add('div', 'fields')
        .bind('fields', function (d) {
            let self = this;
            self.removeAllChildren();
            let div = self.add('table');
            cc.utils.objectforEach(d, function (data, key, obj) {
                let tr = div.add('tr').addClass('field-div');
                tr.add('td').content(key);
                tr.add('td').add('input');
            })
        })
};

export default index