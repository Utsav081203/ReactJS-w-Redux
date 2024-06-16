function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContainer.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(domElement);

    return;
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
};
// This is custom react
// The element we return in function in react is perceived in this format
// React forms tree with element returned

const mainContainer = document.getElementById('root');

// method to render this element into the root in DOM

customRender(reactElement, mainContainer);