   function pigLatin (sound){
   sound= sound.toLowerCase();

    if(["a", "e", "i", "o", "u"].indexOf(
     sound[0]) > -1){
    return sound = sound + "way"
     }
     return sound;
    }
    