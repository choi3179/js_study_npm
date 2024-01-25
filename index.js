#!/usr/bin/env node

console.log(`                                                                                
             @                                                                  
            @@@@@@@@                                                            
           @@@@@@.&@@@@@@@               .                                      
                @@@@@@@,%@@@/@@@        @@@@@@@@                                
                      @@@@@%@/#@@@@@@  @@@@@@@@@@                               
                            @@@@@@@(  @@@@@@@@@@                                
                                     @@@@@@@@@@  %                              
                                    @@@@@@@@@@  ,@@@@@@@                        
                                   @@@@@@@@@@  @@@@@@@.@ @@@@@                  
                                    @@@@@@@@        @@@ @@@@.@@@@@@@.           
                               %@@@@#  #                  @@@@@@@@ @@@@@@       
                            @@@@@@@@@@@@@                       @@@@@@@@        
                               @@@@@@@@@@@(                           @         
                               @@@@  @@@@@@                                     
                                 @@@@                                           
                                                                                
                                                                                
`);


class Presenter {
	constructor(presenters){
		this.presenters = presenters;
	}

	select(){
		const randomName = names[Math.floor(Math.random() * names.length)];
 		console.log(`선택된 발표자 : ${randomName}`); 
	}
}

const argv = process.argv;
const names = argv.slice(2);

if( names.length < 2 ) {
	console.log('두 명 이상 입력해 주시기 바랍니다.');
	process.exit();
}
var presenter = new Presenter(names);
presenter.select();

