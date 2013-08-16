/**
 * @author GeekTantra
 * @date 24 September 2009
 */
/*
 * This functions checks where an entered date is valid or not.
 * It also works for leap year feb 29ths.
 * @year: The Year entered in a date
 * @month: The Month entered in a date
 * @day: The Day entered in a date
 */
function isValidDate(year, month, day){
    var date = new Date(year, (month - 1), day);
    var DateYear = date.getFullYear();
    var DateMonth = date.getMonth();
    var DateDay = date.getDate();
    if (DateYear == year && DateMonth == (month - 1) && DateDay == day) 
        return true;
    else 
        return false;
}
/*
 * This function checks if there is at-least one element checked in a group of check-boxes or radio buttons.
 * @id: The ID of the check-box or radio-button group
 */
function isChecked(id){
    var ReturnVal = false;
    $("#" + id).find('input[type="radio"]').each(function(){
        if ($(this).is(":checked")) 
            ReturnVal = true;
    });
    $("#" + id).find('input[type="checkbox"]').each(function(){
        if ($(this).is(":checked")) 
            ReturnVal = true;
    });
    return ReturnVal;
}

function isPostcode(e) {
    var regex = new RegExp("^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$");
    if ($(e).val().search(regex) !== -1) 
        return true
    else return false;
}

function isEmail(e) {
    var regex = new RegExp("^([a-z0-9\._%-]+)@([a-z0-9\.-]+)\.{1}([a-z]{2,9})$", "i");
    return regex.test($(e).val());
}

function isNumeric(e) {
    var regex = new RegExp("^[0-9]+\.?[0-9]*$", "i");
    return regex.test($(e).val());
}