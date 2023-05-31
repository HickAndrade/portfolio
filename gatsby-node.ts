import { GatsbyNode } from 'gatsby';  
import path from 'path';


export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, loaders, actions }) => {

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