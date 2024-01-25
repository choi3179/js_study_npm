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

var presenter = new Presenter(names);
presenter.select();

