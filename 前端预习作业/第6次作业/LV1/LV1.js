const checkboxs = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');

buttons[0].onclick = function () {
    checkboxs[0].checked = true;
    checkboxs[1].checked = true;
    checkboxs[2].checked = true;
    checkboxs[3].checked = true;
}
buttons[1].onclick = function () {
    checkboxs[0].checked = false;
    checkboxs[1].checked = false;
    checkboxs[2].checked = false;
    checkboxs[3].checked = false;
}
buttons[2].onclick = function () {
    checkboxs[0].checked = !checkboxs[0].checked;
    checkboxs[1].checked = !checkboxs[1].checked;
    checkboxs[2].checked = !checkboxs[2].checked;
    checkboxs[3].checked = !checkboxs[3].checked;
}