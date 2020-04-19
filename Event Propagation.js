/**
 * There are two ways of event propagation in the HTML DOM:
 * ---> Bubbling
 * ---> Capturing
 * 
 * event propagation allows for the definition of the element order when an event occurs. 
 * if you have a <p> element inside a <div> element, which elements "click"event should be handled first?
 * 
 * In Bubbling the innermost elements event is handled first and then the outer elements event is handled
 * the <p> is handled first then followed by the <div>
 * 
 * In Capturing the outermost element's event is handled first and then the inner
 * the  <div> first then the <p> 
 */