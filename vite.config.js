export default {
    esbuild: {
        jsxInject: `import React from 'react';`,
        loaders: {
            '.js':'jsx'
        }
    }
}