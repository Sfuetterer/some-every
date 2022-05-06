const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(usersArray, username) {
    return usersArray.find(function(value){
        return value.username === username
      });
}

function removeUser(usersArray, username) {    
    let foundIndex = usersArray.findIndex(function(value){
    return value.username === username;
    })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}

