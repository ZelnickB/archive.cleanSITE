// cleanSITE _________ Version; created by Ben Zelnick (@ZelnickB) on GitHub (information available at https://ZelnickB.github.io/cleanSITE/)
/*
INFORMATION
    In order to operate, this code should be placed in _________ of __________
    cleanSITE ________ Version will remove the element that contains the ________ advertisement
    _________ AD ELEMENT CLASSNAME: 
*/
// Universal class removal script begins below
function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// Universal element removal script ends here, _________ cleanSITE script begins below
removeElementsByClass("_______");
// Ad will be removed after script above runs.