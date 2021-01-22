 class Game{
     constructor(){
    
     }
     getState() {
         var ref = database.ref('gameState')
         ref.on ('value',function(data){
             gameState = data.val();
         })
     }
     upState(state){
         database.ref('/').update({
             gameState: state
         })
     }
     start(){
       if(gameState === 0){
           player = new Player()
           player.getCount()
           form = new Form()
           form.display()
       }
     }
 }