import { GatsbyNode } from 'gatsby';  
import path from 'path';


export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, loaders, actions }) => {

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@fonts': path.resolve(__dirname, 'src/fonts')
            }
        }
    })
    
}