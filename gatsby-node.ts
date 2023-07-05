import { GatsbyNode } from 'gatsby';  
import path from 'path';


export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, loaders, actions }) => {
    
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
          module: {
            rules: [
              {
                test: /scrollreveal/,
                use: loaders.null(),
              }
            ],
          },
        });
      }
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@icons': path.resolve(__dirname, 'src/components/icons')
            }
        }
  })

}