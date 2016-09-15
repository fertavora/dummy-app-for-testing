/**
 * Created by tavete on 15/09/16.
 */
app.controller('ParkedCarsController', function ParkedCarsController($scope){
    var date = new Date()
    var date1 = new Date()
    var date2 = new Date()
    var date3 = new Date()
    var date4 = new Date()

    date1.setHours(date.getHours()-3)
    date2.setHours(date.getHours()-1)
    date3.setHours(date.getHours()-2)
    date4.setHours(date.getHours()-4)

    $scope.cars = [
        {
            marca: "Chevrolet",
            patente: "KYP937",
            ingreso: date1
        },
        {
            marca: "Peugeot",
            patente: "JKU987",
            ingreso: date2
        },
        {
            marca: "Renault",
            patente: "KIU129",
            ingreso: date3
        },
        {
            marca: "Ford",
            patente: "TWE983",
            ingreso: date4
        }
    ]


});