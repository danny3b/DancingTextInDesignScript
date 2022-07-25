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
}
else{
    myDialog.destroy();
}

var sel = app.selection;
if(sel.length) {
    for(a = 0; a < sel.length; a++) {
        var item = sel[a];
        switch (item.constructor.name) {
            case "TextFrame":
            case "Paragraph":
            for (var i = 0; i < item.parentStory.characters.length; i += 2) {
                item.parentStory.characters[i].baselineShift = myPointSize;
            }
            
            break;
            case "Polygon":
            for (var i = 0; i < item.textPaths[0].characters.length; i += 2) {
                item.textPaths[0].characters[i].baselineShift = myPointSize;
            }
            break;
        }

    }
}
