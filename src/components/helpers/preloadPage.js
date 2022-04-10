import { lazy } from 'react';

const preloadPage = componentName => {
  return lazy(() =>
    import(`../view/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

export default preloadPage;

// Hook for lazy loader, if the Component export is not default
