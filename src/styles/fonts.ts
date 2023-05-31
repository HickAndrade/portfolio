import { css } from 'styled-components';

interface NormalWeights {
    [weight: number]: string[];
}

interface FamilyProps {
    name: string;
    normal: NormalWeights;
}


import InterRegularWoff from '@fonts/Inter/Inter-Regular.woff';
import InterRegularWoff2 from '@fonts/Inter/Inter-Regular.woff2';
import InterBoldWoff from '@fonts/Inter/Inter-Bold.woff';
import InterBoldWoff2 from '@fonts/Inter/Inter-Bold.woff2';
import InterExtraBoldWoff from '@fonts/Inter/Inter-ExtraBold.woff';
import InterExtraBoldWoff2 from '@fonts/Inter/Inter-ExtraBold.woff2';

import NunitoRegularWoff from '@fonts/Nunito/Nunito-Regular.woff';
import NunitoRegularWoff2 from '@fonts/Nunito/Nunito-Regular.woff2';
import NunitoSemiBoldWoff from '@fonts/Nunito/Nunito-SemiBold.woff';
import NunitoSemiBoldWoff2 from '@fonts/Nunito/Nunito-SemiBold.woff2';
import NunitoExtraBoldWoff from '@fonts/Nunito/Nunito-ExtraBold.woff';
import NunitoExtraBoldWoff2 from '@fonts/Nunito/Nunito-ExtraBold.woff2';

const InterNormalWeights: NormalWeights = {
    400: [InterRegularWoff, InterRegularWoff2],
    700: [InterBoldWoff, InterBoldWoff2],
    800: [InterExtraBoldWoff, InterExtraBoldWoff2],
}

const NuninoNormalWeights: NormalWeights = {
    400: [NunitoRegularWoff, NunitoRegularWoff2],
    600: [NunitoSemiBoldWoff,NunitoSemiBoldWoff2],
    800: [NunitoExtraBoldWoff, NunitoExtraBoldWoff2],
}

const inter: FamilyProps = { name: 'Inter', normal: InterNormalWeights }
const nunito: FamilyProps = { name: 'Nunito', normal: NuninoNormalWeights }

const createFontFaces = (family: FamilyProps) => {
    let styles = '';

    for(const [weight, formats] of Object.entries(family['normal'])){
        const woff = formats[0];
        const woff2 = formats[1];

        styles +=`
        @font-face{
            font-family: '${family.name}';
            src: url(${woff2}) format('woff2'), url(${woff}) format('woff');
            font-weight: ${weight};
            font-style: normal;
            font-display: auto;
            
        }    
        `
    }
    return styles;
}

const InterNormal = createFontFaces(inter);
const NunitoNormal = createFontFaces(nunito);

const Fonts = css `${InterNormal + NunitoNormal}`

export default Fonts;