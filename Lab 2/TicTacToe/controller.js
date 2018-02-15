var tttController = function($scope) {

  var xDic={}
  var oDic={}



    $scope.board = [
      [ { value: '-' }, { value: '-' }, { value: '-' } ],
      [ { value: '-' }, { value: '-' }, { value: '-' } ],
      [ { value: '-' }, { value: '-' }, { value: '-' } ]
    ];
  
    $scope.reset = function() {
      // TODO: set each cell.value = '-'
      
      $scope.currentPlayer = 'X';
      $scope.winner = false;
      $scope.cat = false;
      $scope.board = [
        [ { value: '-' }, { value: '-' }, { value: '-' } ],
        [ { value: '-' }, { value: '-' }, { value: '-' } ],
        [ { value: '-' }, { value: '-' }, { value: '-' } ]
      ];
    };
    
    $scope.reset();
    
    $scope.isTaken = function(cell) {
      return cell.value !== '-';
    };
    
     function transpose(a) {
      return Object.keys(a[0]).map(function (c) {
          return a.map(function (r) {
              return r[c];
          });
      });
  }
    var checkForMatch = function(cell1, cell2, cell3) {
      return cell1.value === cell2.value && 
             cell1.value === cell3.value &&
             cell1.value !== '-';
    };
    
    var checkForEndOfGame = function() {
      // TODO: check for a rowMatch, columnMatch, or diagonalMatch
      

      debugger;

      
     $scope.board.forEach(row=>{
      
  
        if(row[0].value==row[1].value && row[1].value==row[2].value && (row[0].value=="X" || row[0].value=="O")){
          $scope.winner=row[1].value+" is the winner"
          $scope.winner = true;
        $scope.cat=false  
        }
     })

     let temp=$scope.board
    temp= transpose(temp)

     temp.forEach(row=>{    

      if(row[0].value==row[1].value && row[1].value==row[2].value && (row[0].value=="X" || row[0].value=="O")){
        $scope.winner=row[1].value+" is the winner"
        alert($scope.winner)   
        $scope.winner = true;
        $scope.cat=false 
      }
   })

     if($scope.board[0][0].value==$scope.board[1][1].value && $scope.board[1][1].value==$scope.board[2][2].value && (row[0].value=="X" || row[0].value=="O")){
      $scope.winner=$scope.board[0][0].value+" is the winner"
      alert($scope.winner)   
      $scope.winner = true;
      $scope.cat=false  
     }else if($scope.board[0][2].value==$scope.board[1][1].value && $scope.board[1][1].value==$scope.board[2][0].value && (row[0].value=="X" || row[0].value=="O")){
      $scope.winner=$scope.board[0][2].value+" is the winner"
      alert($scope.winner)   
      $scope.winner = true;
      $scope.cat=false
     }
     
      
     
      
      return $scope.winner || $scope.cat;
    };
    
    $scope.move = function(cell) {
      cell.value = $scope.currentPlayer;
      if (checkForEndOfGame() === false) {
        $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';
      }
    };
    
  };


  
   