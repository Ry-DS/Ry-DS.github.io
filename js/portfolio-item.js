(function(){
    window.loadPortfolioItems=()=>{
        $('.portfolio-items').append(createPortfolioItem('clients',{modalTitle:'WUAT',title:'Workplace Utilization Analysis Tool'},
            'For my final development project in high school, we were required to orchestrate a piece of software for a business within a few months.' +
            'Knowing the potential this opportunity provided, I decided to aim big, and put myself into the deep-end and develop a complex \'monitor\' tracking software for the reputable company, BGIS, allowing managers to understand how their differing types of monitors are being utilised within their workplace.<br><br>' +
            'Despite these complexities which forced me to learn entirely new technologies within the span of weeks, I managed to pull it off, developing WUAT, a panel and complimentary employee client suite which tracks and reports on the monitor usage of employees within different floors and spaces of the workplace.<br><br>' +
            'I am incredibly grateful for the members of BGIS who were willing to take me in and give me a chance to prove myself, despite still being in high school. I have learnt an incredible amount about development for larger organisations which includes security concerns, agile software development and so much more. I hope WUAT continues to serve them for more years to come.',
            [button('Visit Client Page','fas fa-globe','https://bgis.com'),
                    button('Visit GitHub Page','fab fa-github','https://github.com/SimplyBallistic/Workplace-Utilization-Analysis-Tool'),
                    button('Watch Demo','fab fa-youtube','https://www.youtube.com/watch?v=A3zRdM5V-Gg&t=15s')],'img/logos/wuat.png'),
            createPortfolioItem('clients',{modalTitle:'WUAT',title:'Workplace Utilization Analysis Tool'},
                'For my final development project in high school, we were required to orchestrate a piece of software for a business within a few months.' +
                'Knowing the potential this opportunity provided, I decided to aim big, and put myself into the deep-end and develop a complex \'monitor\' tracking software for the reputable company, BGIS, allowing managers to understand how their differing types of monitors are being utilised within their workplace.<br><br>' +
                'Despite these complexities which forced me to learn entirely new technologies within the span of weeks, I managed to pull it off, developing WUAT, a panel and complimentary employee client suite which tracks and reports on the monitor usage of employees within different floors and spaces of the workplace.<br><br>' +
                'I am incredibly grateful for the members of BGIS who were willing to take me in and give me a chance to prove myself, despite still being in high school. I have learnt an incredible amount about development for larger organisations which includes security concerns, agile software development and so much more. I hope WUAT continues to serve them for more years to come.',
                [button('Visit Client Page','fas fa-globe','https://bgis.com'),
                    button('Visit GitHub Page','fab fa-github','https://github.com/SimplyBallistic/Workplace-Utilization-Analysis-Tool'),
                    button('Watch Demo','fab fa-youtube','https://www.youtube.com/watch?v=A3zRdM5V-Gg&t=15s')],'img/logos/wuat.png'));



    };



    let index=1;
    //group: string: izimodal group
    //titles: object: actual title in the modal and modalTitle
    //desc...: long html string: text to describe item
    //image: path string: image inside modal to show
    //buttons: array<button>: buttons on the bottom of modal.
    //stillImage: optional string: image user clicks on. Defaults to 'image'

    //button:
    // {icon: fa icon, }
    function createPortfolioItem(group,titles,description,buttons,image,stillImage=image){

        const ret=`<li data-groups='["${group}"]'>

                            <img class="tooltip-holder" src='${stillImage}' style="margin-top: 20%">
                            <div class="overlay" onclick="$('#popup-${index}').iziModal('open')">
                                <!-- Links -->
                                <a class="view-project" onclick="$('#popup-${index}').iziModal('open')">Learn more</a>
                            </div>
                            <!--project popup-->
                            <div class="iziModal" data-izimodal-group="portfolio" data-izimodal-title="${titles.modalTitle||titles}"
                                id='popup-${index}'>
                                <figure>

                                    <!--project popup image-->
                                    <img alt class="modal-image" src='${image}'>

                                </figure>
                                <div class='content'>

                                    <!--project popup title-->
                                    <h4>${titles.modalTitle?titles.title:titles}</h4>

                                    <!--project popup description-->
                                    <div>

                                        <p>
                                          ${description} 
                                        </p>
                                    </div>
                                    <div class="bottom-button-bar" style="grid-template-columns: ${Array(buttons.length).fill('1fr').join(' ')};">
                                        ${buttons.map(button=>{
                                            let header;
                                            if(button.href)//button includes link
                                                header=`href='${button.href}' target='_blank'`;
                                            else header=`onclick='${button.onClick}'`;
                                            return `<a ${header}><i class="${button.icon}"/> ${button.title}</a>`;
                                            
                                        }).join('\n')}
                                     

                                    </div>

                                </div>

                            </div>

                        </li>`;

            index++;
            return ret;
    }
    function button(title,icon,data,onClick){
        return {title,icon,[onClick?'onClick':'href']:data};
    }

})();
