// cleanSITE ______ Version; created by Ben Zelnick (@ZelnickB) on GitHub (information available at https://ZelnickB.github.io/cleanSITE/)
/*
INFORMATION
    In order to operate, this code shoukd be placed in __________
    cleanSITE _______ Version will remove the element that contains the _______ advertisement
    ______ AD ELEMENT ID: _______
*/
// Universal element removal script begins below
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
// Universal element removal script ends here, ________ cleanSITE script begins below
removeElement("________");
// Ad will be removed after script above runs.