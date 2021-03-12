module.exports = function check(str, bracketsConfig) {
     pervichka = str.length % 2;
  if (pervichka != 0) 
      return false;
verticalnae = 0
krug_ot = 0
krug_zak = 0
kvad_ot = 0
kvad_zak = 0
    for(var i = 0; i < str.length; i++){
    if (str[i] == '|'){
        verticalnae =+1;
    } else if (str[i] == '(') {
    krug_ot =+1;
          } else if (str[i] == ')') {
    krug_zak =+1;
            } else if (str[i] == '[') {
    kvad_ot =+1;
                           } else if (str[i] == ']') {
    kvad_zak =+1;
                    } else if (str[i] == '(') {
    krug_ot =+1;
                               }
                               
    if (verticalnae%2 === 0 && krug_ot === krug_zak && kvad_ot===kvad_zak){
    return true;
}
    else
        return false;
}
