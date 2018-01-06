import { isStateTreeNode } from 'mobx-state-tree';

// PropType checker helper so you can chain .isRequired to modelOf
function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName = 'ANONYMOUS') {
    if (props[propName] == null) {
      // Prop is missing
      if (isRequired) {
        return new Error(`Required property ${propName} was not specified in ${componentName}`);
      }
      return null;
    }
    return validate(props, propName, componentName);
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function modelOfType(type) {
  return (props, propName, componentName = 'ANONYMOUS') => {
    if (!isStateTreeNode(props[propName]) || !type.is(props[propName])) {
      return new Error(`Invalid value in component ${componentName} for prop ${propName}`);
    }
    return null;
  };
}

export default function modelOf(type) {
  return createChainableTypeChecker(modelOfType(type));
}
