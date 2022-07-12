import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTwitter,
    faYoutube,
    faGithub,
    faTiktok,
    faLinkedin,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { 
    faFileLines,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    IconDefinition
} from '@fortawesome/fontawesome-common-types';

library.add(faFileLines);
library.add(faEnvelope);

library.add(faTwitter);
library.add(faYoutube);
library.add(faGithub);
library.add(faTiktok);
library.add(faLinkedin);
library.add(faDiscord);

// Integrate custom cube svg to fontawesome library
const cubePathData = 'M 234.5 5.709 C 248.4 0.738 263.6 0.738 277.5 5.709 L 469.5 74.28 C 494.1 83.38 512 107.5 512 134.6 L 512 377.4 C 512 404.5 494.1 428.6 469.5 437.7 L 277.5 506.3 C 263.6 511.3 248.4 511.3 234.5 506.3 L 42.47 437.7 C 17 428.6 0 404.5 0 377.4 L 0 134.6 C 0 107.5 17 83.38 42.47 74.28 L 234.5 5.709 Z M 82.34 128 L 256 190 L 82.34 128 Z M 32.666 391.913 L 237.386 465.86 L 238.164 226.891 L 33.445 153.723 L 32.666 391.913 Z M 276.246 466.347 L 480.965 393.179 L 480.187 154.21 L 275.467 228.157 L 276.246 466.347 Z M 466.543 116.316 L 252.758 38.947 L 42.027 116.316 L 254.795 192.668 L 466.543 116.316 Z';
const faCube: IconDefinition = {
    prefix: 'fab',
    iconName: 'cube',
    icon: [
        512, // Width
        512, // Height
        [],  // Aliases
        '',  // Unicode
        cubePathData // PathData
    ]
}
library.add(faCube);


export default FontAwesomeIcon;
