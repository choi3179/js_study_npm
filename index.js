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

if (argv.length < 4) {
  console.log("사용법: index.js 홍길동 임꺽정 이순신");
  process.exit(1);
}

const names = argv.slice(2).slice(0, -1);

const randomName = names[Math.floor(Math.random() * names.length)];

console.log(`발표자:${randomName}`);
