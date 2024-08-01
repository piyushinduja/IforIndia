let search1 = document.getElementById("searchTxt");
search1.addEventListener('input', function () {
    let searchedTxt = search1.value.toLowerCase();
    console.log(searchedTxt);

    var places = ['andaman and nicobar', 'andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chandigarh', 'chhattisgarh', 'daman and diu', 'delhi', 'goa', 'gujarat', 'haryana', 'himachal pradesh', 'jammu and kashmir', 'jharkhand', 'karnataka', 'kerala', 'ladakh', 'lakshadweep', 'madhya pradesh', 'maharashtra', 'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'puducherry', 'punjab', 'rajasthan', 'sikkim', 'tamil nadu', 'telangana', 'tripura', 'uttarakhand', 'uttar pradesh', 'west bengal'];

    places.forEach(function (element) {
        if (element.includes(searchedTxt)) {
            console.log(element);
            document.getElementById(element).style.display = 'block';
        }else{
            document.getElementById(element).style.display = 'none';
        }
    })
})