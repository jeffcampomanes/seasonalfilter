<!DOCTYPE html>
<html ng-app="myapp">

<head>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js"></script>
</head>

  <body ng-controller="filterCtrl">
    
    filter:<br>
    choose status (approved OR not approved) and choose a country to see available offers.<br><br>
    <!-- LIVE OFFERS -->
    <label ng-repeat="option in options">
          <input type="checkbox" ng-model="option.selected"/>{{option.name}}</label>

    <!-- DEAD OFFERS -->
    <label ng-repeat="option6 in options6">
        <input type="checkbox" ng-model="option6.selected"/>{{option6.name}}</label>

    <!-- US OFFERS -->
    <label ng-repeat="option2 in options2">
        <input type="checkbox" ng-model="option2.selected"/>{{option2.name}}</label>

    <!-- CA OFFERS -->
    <label ng-repeat="option3 in options3">
        <input type="checkbox" ng-model="option3.selected"/>{{option3.name}}</label>


    <!-- AUS OFFERS -->
    <label ng-repeat="option4 in options4">
        <input type="checkbox" ng-model="option4.selected"/>{{option4.name}}</label>

    <!-- UK OFFERS -->
    <label ng-repeat="option5 in options5">
        <input type="checkbox" ng-model="option5.selected"/>{{option5.name}}</label>


    
    <ul>
      <li ng-repeat="item in data | filter:itemFilter |filter:itemFilter2 | filter:itemFilter3 | filter:itemFilter4 | filter:itemFilter5 | filter:itemFilter6">[{{item.status}}] {{item.offer}}: {{item.advertiser}} -  {{item.country}}</li>
    </ul>
  

<!--     
    <ul>
      <li ng-repeat="item in data | filter:itemFilter2">{{item.name}}</li>
    </ul> -->



 <!--    
    <ul>
      <li ng-repeat="item in data | filter:itemFilter3">{{item.name}}</li>
    </ul>
   -->
  


  </body>
</html>



<script>

var app = angular.module('myapp', []);

app.controller('filterCtrl', ['$scope', function($scope) {
  $scope.data = [
   {  
      "id":"8",
      "offer":"Back to School",
      "advertiser":"Shoemall.com",
      "startdate":"08-15-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"USA"
   },
   {  
      "id":"9",
      "offer":"Back to School",
      "advertiser":"Saks 5TH Ave",
      "startdate":"2015-02-02",
      "enddate":"2017-01-03",
      "status":"approved",
      "country":"USA"
   },
   {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"Macys",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"notApproved",
      "country":"USA"
   },
   {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"notApproved",
      "country":"CA"
   },
    {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"AUS"
   },
    {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"AUS"
   },
   {  
      "id":"8",
      "offer":"Back to School",
      "advertiser":"Shoemall.com",
      "startdate":"08-15-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"USA"
   },
   {  
      "id":"9",
      "offer":"Back to School",
      "advertiser":"Saks 5TH Ave",
      "startdate":"2015-02-02",
      "enddate":"2017-01-03",
      "status":"approved",
      "country":"USA"
   },
   {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"Macys",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"notApproved",
      "country":"USA"
   },
   {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"CA"
   },
    {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"approved",
      "country":"CA"
   },
    {  
      "id":"10",
      "offer":"Rugby World Cup",
      "advertiser":"AKLSDJLSA",
      "startdate":"08-05-2015",
      "enddate":"09-20-2015",
      "status":"notApproved",
      "country":"UK"
   }

  ];
  
$scope.options = [
  { 
    name: 'approved', 
    selected: false
  }
];
  $scope.options2 = [
  { 
    name: 'USA', 
    selected: false
  }
];
  $scope.options3 = [
  { 
    name: 'CA', 
    selected: false
  }
];  
  $scope.options4 = [
  { 
    name: 'AUS', 
    selected: false
  }
];
$scope.options5 = [
  { 
    name: 'UK', 
    selected: false
  }
];
$scope.options6 = [
  { 
    name: 'notApproved', 
    selected: false
  }
];


// FILTERS LIVE OFFERS 
  $scope.itemFilter = function(item) {
    var filters = $scope.options.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched = true;

    filters.forEach(function(option) {
      matched = matched && item.status.indexOf(option.name)  >=0;

    })
    return matched;
  };


// // FILTERS DEAD OFFERS 
  $scope.itemFilter6 = function(item) {
    var filters = $scope.options6.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched6 = true;

    filters.forEach(function(option6) {
      matched6 = matched6 && item.status.indexOf(option6.name)  >=0;

    })
    return matched6;
  };


// FILTERS US OFFERS

  $scope.itemFilter2 = function(item) {
    var filters = $scope.options2.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched2 = true;

    filters.forEach(function(option2) {
      matched2 = matched2 && item.country.indexOf(option2.name)  >=0;

    })
    return matched2;
  };



// FILTERS CA OFFERS

  $scope.itemFilter3 = function(item) {
    var filters = $scope.options3.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched3 = true;

    filters.forEach(function(option3) {
      matched3 = matched3 && item.country.indexOf(option3.name)  >=0;

    })
    return matched3;
  };


// FILTERS AUS OFFERS

  $scope.itemFilter4 = function(item) {
    var filters = $scope.options4.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched4 = true;

    filters.forEach(function(option4) {
      matched4 = matched4 && item.country.indexOf(option4.name)  >=0;

    })
    return matched4;
  };

// FILTERS UK OFFERS

  $scope.itemFilter5 = function(item) {
    var filters = $scope.options5.filter(function(element, idx, array) {
      return element.selected;
    }) || [];
    
    var matched5 = true;

    filters.forEach(function(option5) {
      matched5 = matched5 && item.country.indexOf(option5.name)  >=0;

    })
    return matched5;
  };


///////// end //////////
}]);

</script>

