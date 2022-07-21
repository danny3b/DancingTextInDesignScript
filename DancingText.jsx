
var myDialog = app.dialogs.add({name:"Enter baseline shift",canCancel:true});
with(myDialog){
    with(dialogColumns.add()){
        var myPointSizeField = measurementEditboxes.add({editValue:1.5, editUnits:MeasurementUnits.points});
    }
}
var myResult = myDialog.show();
if(myResult == true){
    var myPointSize = myPointSizeField.editValue;
    myDialog.destroy();
    myMakeDocument(myPointSize);
}
else{
    myDialog.destroy();
}

var sel = app.selection;
if(sel.length) {
    for(a = 0; a < sel.length; a++) {
        var frame = sel[a];
        if(frame.constructor.name == 'TextFrame') {
            for (var i = 0; i < frame.parentStory.characters.length; i += 2) {
                frame.parentStory.characters[i].baselineShift = 1.5;
            }
        }
    }
}
