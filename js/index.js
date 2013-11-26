
var testDb;
var testColl;
var findCount;
var insertCount;


setTimeout(function(){startTest()}, 500);


function startTest() {
    $('#wrapper').html('Test init...');
    findCount = 0;
    insertCount = 0;
    testDb = new DbEmul('__test_fs', {});
    testDb.connect(connCbk);
}


function connCbk(err) {
    if(err != null) {
        $('#wrapper').html('Db connection error...');
    }
    else {
        testColl = testDb.collection('data');
        testInsert();
    }
}


function testFind() {
    testColl.find(null, testFindCbk);
}


function testFindCbk(err, result) {
    if(err == null) {
        findCount++;
        $('#wrapper').html(findCount+' find ok<br>'+insertCount+' insert ok');
        testInsert();
    }
    else {
        $('#wrapper').html(findCount+' find ok<br>'+insertCount+' insert ok<br>Find Error!');
    }
}


function testInsert() {
    testColl.insert([{data: 'data', num:insertCount}], {}, testInsertCbk);
}


function testInsertCbk(err, result) {
    if(err == null) {
        insertCount++;
        $('#wrapper').html(findCount+' find ok<br>'+insertCount+' insert ok');
        testFind();
    }
    else {
        $('#wrapper').html(findCount+' find ok<br>'+insertCount+' insert ok<br>Insert Error!');
    }
}



