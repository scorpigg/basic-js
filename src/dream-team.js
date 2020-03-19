module.exports = function createDreamTeam(members) {
  let teamName = '';
  if(!Array.isArray(members)){
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) == 'string'){
      teamName += members[i].trim().charAt(0).toUpperCase();
    }
  }
  teamName = teamName.split('').sort().join('');
  return teamName;
};