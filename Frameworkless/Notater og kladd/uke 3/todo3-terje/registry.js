const registry = {}

function renderRoot(rootElement, state) {
  const updatedRootElement = rootElement.cloneNode(true);
  const childComponents = updatedRootElement.querySelectorAll('[data-component]')
  for (let childElement of childComponents) {
    const componentName = childElement.dataset.component;
    const componentRenderFunction = registry[componentName];
    const updatedChildElement = componentRenderFunction(childElement, state);
    childElement.replaceWith(updatedChildElement)
  }
  return updatedRootElement;
}

function add(name, component) {
  registry[name] = component;
}

export { add, renderRoot }