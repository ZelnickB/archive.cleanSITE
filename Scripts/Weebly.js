// cleanSITE Weebly Version; created by Ben Zelnick (@ZelnickB) on GitHub (information available at https://ZelnickB.github.io/cleanSITE/)
/*
INFORMATION
    In order to operate, this code MUST BE PLACED IN THE FOOTER CODE OF THE ENTIRE WEBSITE
    cleanSITE Weebly Version will remove the element that contains the Weebly advertisement
    WEEBLY AD ELEMENT ID: "weebly-footer-signup-container"
*/
// Universal element removal script begins below
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
// Universal element removal script ends here, Weebly cleanSITE script begins below
removeElement("weebly-footer-signup-container");
// Ad will be removed after script above runs.