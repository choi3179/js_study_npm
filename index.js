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

const argv = process.argv;

const names = argv.slice(2).slice(0, -1);

const randomName = names[Math.floor(Math.random() * names.length)];

console.log(`발표자: ${randomName}`);
